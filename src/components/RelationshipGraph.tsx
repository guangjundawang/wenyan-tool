import { ClassicalWord } from "@/data/classicalWords";

interface RelationshipGraphProps {
  words: ClassicalWord[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

type RelatedNode = ClassicalWord & {
  relationLabel: string;
  relationType: "source" | "grade";
};

export function RelationshipGraph({
  words,
  selectedId,
  onSelect,
}: RelationshipGraphProps) {
  if (!words.length) return null;

  const centerX = 400;
  const centerY = 300;
  const radius = 180;
  const MAX_RELATED = 6; // 最多显示 6 个相关词，避免图过密

  const centerWord =
    (selectedId ? words.find((w) => w.id === selectedId) : null) ?? words[0];

  // 找到同课文
  const findSharedSource = (a: ClassicalWord, b: ClassicalWord): string | null => {
    for (const ma of a.meanings) {
      for (const mb of b.meanings) {
        if (ma.source && ma.source === mb.source) {
          return ma.source;
        }
      }
    }
    return null;
  };

  // 找到同年级
  const findSharedGrade = (a: ClassicalWord, b: ClassicalWord): string | null => {
    for (const ma of a.meanings) {
      for (const mb of b.meanings) {
        if (ma.grade && ma.grade === mb.grade) {
          return ma.grade;
        }
      }
    }
    return null;
  };

  // 只保留和中心词有关系的词，并给出关系标签
  const relatedCandidates: RelatedNode[] = words
    .filter((w) => w.id !== centerWord.id)
    .map((word) => {
      const sharedSource = findSharedSource(centerWord, word);
      if (sharedSource) {
        return {
          ...word,
          relationLabel: `课文：${sharedSource}`,
          relationType: "source" as const,
        };
      }

      const sharedGrade = findSharedGrade(centerWord, word);
      if (sharedGrade) {
        return {
          ...word,
          relationLabel: `年级：${sharedGrade}`,
          relationType: "grade" as const,
        };
      }

      return null;
    })
    .filter((item): item is RelatedNode => item !== null);

  // 优先显示“同课文”，再显示“同年级”
  const prioritized = [
    ...relatedCandidates.filter((w) => w.relationType === "source"),
    ...relatedCandidates.filter((w) => w.relationType === "grade"),
  ];

  // 限制数量，避免画面过载
  const relatedWords = prioritized.slice(0, MAX_RELATED);

  const angleStep = relatedWords.length ? (Math.PI * 2) / relatedWords.length : 0;

  const centerNode = {
    ...centerWord,
    x: centerX,
    y: centerY,
    isCenter: true as const,
  };

  const otherNodes = relatedWords.map((w, index) => {
    const angle = angleStep * index - Math.PI / 2;
    return {
      ...w,
      x: centerX + Math.cos(angle) * radius,
      y: centerY + Math.sin(angle) * radius,
      isCenter: false as const,
    };
  });

  const nodes = [centerNode, ...otherNodes];

  return (
    <div className="flex-1 h-full flex items-center justify-center">
      <svg viewBox="0 0 800 600" className="w-full max-w-[800px] max-h-full">
        {/* 中心词到相关词的连接线和关系标签 */}
        {otherNodes.map((node) => {
          const x1 = centerNode.x;
          const y1 = centerNode.y;
          const x2 = node.x;
          const y2 = node.y;

          const midX = (x1 + x2) / 2;
          const midY = (y1 + y2) / 2;

          // 让标签稍微偏离连线中心一点，避免压线
          const offsetX = x2 > x1 ? 12 : -12;
          const offsetY = y2 > y1 ? 10 : -10;

          return (
            <g key={`edge-${centerNode.id}-${node.id}`}>
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                className={`${
                  node.relationType === "source"
                    ? "stroke-sky-400/70"
                    : "stroke-emerald-400/70"
                }`}
                strokeWidth={2}
              />
              <foreignObject
                x={midX - 62 + offsetX}
                y={midY - 14 + offsetY}
                width={124}
                height={32}
                className="pointer-events-none"
              >
                <div className="flex items-center justify-center text-[11px] leading-tight text-muted-foreground">
                  <span
                    className={`px-2 py-0.5 rounded-full border shadow-sm bg-background/90 ${
                      node.relationType === "source"
                        ? "border-sky-300/70"
                        : "border-emerald-300/70"
                    }`}
                  >
                    {node.relationLabel}
                  </span>
                </div>
              </foreignObject>
            </g>
          );
        })}

        {/* 词节点 */}
        {nodes.map((w) => {
          const isSelected = selectedId === w.id;
          const isCenter = w.id === centerWord.id;

          return (
            <g
              key={w.id}
              onClick={() => onSelect(w.id)}
              className="cursor-pointer"
            >
              <circle
                cx={w.x}
                cy={w.y}
                r={isCenter ? 44 : 36}
                className={`transition-colors duration-100 ${
                  isCenter
                    ? "fill-primary/90 stroke-primary"
                    : isSelected
                    ? "fill-primary stroke-primary"
                    : "fill-card stroke-border hover:stroke-primary/50"
                }`}
                strokeWidth={1.5}
              />
              <text
                x={w.x}
                y={w.y}
                textAnchor="middle"
                dominantBaseline="central"
                className={`font-serif-cn text-xl pointer-events-none ${
                  isCenter ? "fill-primary-foreground" : isSelected ? "fill-primary-foreground" : "fill-foreground"
                }`}
              >
                {w.character}
              </text>
              {w.pinyin ? (
                <text
                  x={w.x}
                  y={w.y + (isCenter ? 56 : 50)}
                  textAnchor="middle"
                  className="fill-muted-foreground text-xs pointer-events-none"
                >
                  {w.pinyin}
                </text>
              ) : null}
            </g>
          );
        })}

        {/* 如果还有更多相关词没显示，给一个提示 */}
        {prioritized.length > MAX_RELATED && (
          <text
            x={400}
            y={560}
            textAnchor="middle"
            className="fill-muted-foreground text-xs"
          >
            仅展示最关键的 {MAX_RELATED} 个相关词，更多关系未展开
          </text>
        )}
      </svg>
    </div>
  );
}