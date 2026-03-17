import { ClassicalWord } from "@/data/classicalWords";
import { useState } from "react";

interface GraphNode {
  id: string;
  label: string;
  type: "word" | "meaning" | "example" | "lesson" | "grade";
  x: number;
  y: number;
}

interface GraphEdge {
  from: string;
  to: string;
}

const NODE_COLORS: Record<GraphNode["type"], string> = {
  word: "var(--node-word)",
  meaning: "var(--node-meaning)",
  example: "var(--node-example)",
  lesson: "var(--node-lesson)",
  grade: "var(--node-grade)",
};

const NODE_LABELS: Record<GraphNode["type"], string> = {
  word: "词",
  meaning: "义项",
  example: "例句",
  lesson: "课文",
  grade: "年级",
};

function buildGraph(word: ClassicalWord): { nodes: GraphNode[]; edges: GraphEdge[] } {
  const nodes: GraphNode[] = [];
  const edges: GraphEdge[] = [];

  const wordId = `word-${word.id}`;
  nodes.push({ id: wordId, label: word.character, type: "word", x: 0, y: 0 });

  const meaningCount = word.meanings.length;

  word.meanings.forEach((m, i) => {
    const meaningId = `meaning-${i}`;
    const exampleId = `example-${i}`;
    const lessonId = `lesson-${i}`;
    const gradeId = `grade-${i}`;

    nodes.push({ id: meaningId, label: m.definition, type: "meaning", x: 0, y: 0 });
    nodes.push({ id: exampleId, label: m.example, type: "example", x: 0, y: 0 });
    nodes.push({ id: lessonId, label: m.source, type: "lesson", x: 0, y: 0 });
    nodes.push({ id: gradeId, label: m.grade, type: "grade", x: 0, y: 0 });

    edges.push({ from: wordId, to: meaningId });
    edges.push({ from: meaningId, to: exampleId });
    edges.push({ from: exampleId, to: lessonId });
    edges.push({ from: lessonId, to: gradeId });
  });

  // 布局：以中心实词为圆心的径向学习图，每个义项是一条清晰分支
  const cx = 500;
  const cy = 350;
  const centerNode = nodes.find((n) => n.id === wordId);
  if (centerNode) {
    centerNode.x = cx;
    centerNode.y = cy;
  }

  const branchCount = Math.max(meaningCount, 1);
  const angleStep = (Math.PI * 2) / branchCount;
  const startAngle = -Math.PI / 2;

  // 各层半径：义项 → 例句 → 课文 → 年级
  const tiers = [150, 260, 360, 440];

  word.meanings.forEach((_, i) => {
    const angle = startAngle + i * angleStep;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);

    const meaningNode = nodes.find((n) => n.id === `meaning-${i}`);
    const exampleNode = nodes.find((n) => n.id === `example-${i}`);
    const lessonNode = nodes.find((n) => n.id === `lesson-${i}`);
    const gradeNode = nodes.find((n) => n.id === `grade-${i}`);

    if (meaningNode) {
      meaningNode.x = cx + cos * tiers[0];
      meaningNode.y = cy + sin * tiers[0];
    }
    if (exampleNode) {
      exampleNode.x = cx + cos * tiers[1];
      exampleNode.y = cy + sin * tiers[1];
    }
    if (lessonNode) {
      lessonNode.x = cx + cos * tiers[2];
      lessonNode.y = cy + sin * tiers[2];
    }
    if (gradeNode) {
      gradeNode.x = cx + cos * tiers[3];
      gradeNode.y = cy + sin * tiers[3];
    }
  });

  return { nodes, edges };
}

function truncate(text: string, max: number) {
  return text.length > max ? text.slice(0, max) + "…" : text;
}

interface LearningGraphProps {
  word: ClassicalWord | null;
  onMeaningSelect?: (payload: {
    meaningIndex: number;
    meaning: ClassicalWord["meanings"][number];
  }) => void;
  onExampleSelect?: (payload: {
    meaningIndex: number;
    exampleIndex: number;
    meaning: ClassicalWord["meanings"][number];
    exampleText: string;
  }) => void;
  onLessonSelect?: (payload: {
    source: string;
    grade: string;
    exampleText: string;
  }) => void;
}

export function LearningGraph({
  word,
  onMeaningSelect,
  onExampleSelect,
  onLessonSelect,
}: LearningGraphProps) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  if (!word) {
    return (
      <div className="flex-1 flex items-center justify-center h-full">
        <p className="text-muted-foreground text-sm">选择左侧词语开始学习</p>
      </div>
    );
  }

  const { nodes, edges } = buildGraph(word);

  const handleNodeClick = (node: GraphNode) => {
    const parseIndex = (id: string) => {
      const parts = id.split("-");
      const idx = Number(parts[1]);
      return Number.isFinite(idx) ? idx : -1;
    };

    if (node.type === "meaning") {
      const idx = parseIndex(node.id);
      if (idx >= 0 && word.meanings[idx]) {
        onMeaningSelect?.({
          meaningIndex: idx,
          meaning: word.meanings[idx],
        });
      }
      return;
    }

    if (node.type === "example") {
      const idx = parseIndex(node.id);
      if (idx >= 0 && word.meanings[idx]) {
        onExampleSelect?.({
          meaningIndex: idx,
          exampleIndex: 0,
          meaning: word.meanings[idx],
          exampleText: word.meanings[idx].example,
        });
      }
      return;
    }

    if (node.type === "lesson") {
      const idx = parseIndex(node.id);
      if (idx >= 0 && word.meanings[idx]) {
        const m = word.meanings[idx];
        onLessonSelect?.({ source: m.source, grade: m.grade, exampleText: m.example });
      }
    }
  };

  const getNodeRadius = (type: GraphNode["type"]) => {
    switch (type) {
      case "word":
        return 42;
      case "meaning":
        return 32;
      case "example":
        return 28;
      case "lesson":
        return 26;
      case "grade":
        return 24;
    }
  };

  const getFontSize = (type: GraphNode["type"]) => {
    switch (type) {
      case "word":
        return "20px";
      case "meaning":
        return "13px";
      case "example":
        return "11px";
      case "lesson":
        return "11px";
      case "grade":
        return "11px";
    }
  };

  const getMaxChars = (type: GraphNode["type"]) => {
    switch (type) {
      case "word":
        return 4;
      case "meaning":
        return 8;
      case "example":
        return 14;
      case "lesson":
        return 10;
      case "grade":
        return 6;
    }
  };

  return (
    <div className="flex-1 h-full flex flex-col">
      {/* Legend */}
      <div className="flex items-center gap-4 px-6 py-3 border-b border-border shrink-0">
        {(["word", "meaning", "example", "lesson", "grade"] as const).map(type => (
          <div key={type} className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span
              className="w-3 h-3 rounded-full inline-block"
              style={{ backgroundColor: `hsl(${NODE_COLORS[type]})` }}
            />
            {NODE_LABELS[type]}
          </div>
        ))}
      </div>

      <div className="flex-1 flex items-center justify-center min-h-0">
        <svg viewBox="0 0 1000 700" className="w-full max-w-[1000px] max-h-full">
          {/* Edges */}
          {edges.map((e, i) => {
            const from = nodes.find(n => n.id === e.from);
            const to = nodes.find(n => n.id === e.to);
            if (!from || !to) return null;
            return (
              <line
                key={i}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="hsl(var(--border))"
                strokeWidth={1.5}
              />
            );
          })}

          {/* Nodes */}
          {nodes.map(node => {
            const r = getNodeRadius(node.type);
            const isHovered = hoveredNode === node.id;
            const colorHsl = NODE_COLORS[node.type];
            return (
              <g
                key={node.id}
                onClick={() => handleNodeClick(node)}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className="cursor-pointer"
              >
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isHovered ? r + 3 : r}
                  fill={`hsl(${colorHsl})`}
                  opacity={isHovered ? 1 : 0.88}
                  className="transition-all duration-150"
                />
                <text
                  x={node.x}
                  y={node.y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="white"
                  fontSize={getFontSize(node.type)}
                  className={node.type === "word" ? "font-serif-cn font-semibold" : ""}
                  style={{ pointerEvents: "none" }}
                >
                  {truncate(node.label, getMaxChars(node.type))}
                </text>
                {/* Tooltip on hover */}
                {isHovered && node.label.length > getMaxChars(node.type) && (
                  <g>
                    <rect
                      x={node.x - node.label.length * 5.5}
                      y={node.y - r - 28}
                      width={node.label.length * 11 + 12}
                      height={22}
                      rx={4}
                      fill="hsl(var(--foreground))"
                      opacity={0.9}
                    />
                    <text
                      x={node.x}
                      y={node.y - r - 17}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fill="hsl(var(--background))"
                      fontSize="11px"
                      style={{ pointerEvents: "none" }}
                    >
                      {node.label}
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}