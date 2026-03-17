import { useState } from "react";
import { classicalWords } from "@/data/classicalWords";
import { lessons } from "@/data/lessons";
import { LessonReader } from "@/components/LessonReader";
import { WordSidebar } from "@/components/WordSidebar";
import { WordDetail } from "@/components/WordDetail";
import { RelationshipGraph } from "@/components/RelationshipGraph";
import { LearningGraph } from "@/components/LearningGraph";

type View = "learning" | "graph";
type FocusType = "meaning" | "example" | null;

const Index = () => {
  const [view, setView] = useState<View>("learning");
  const [selectedId, setSelectedId] = useState<string | null>(
    classicalWords[0]?.id ?? null
  );
  const [activeMeaningIndex, setActiveMeaningIndex] = useState<number | null>(null);
  const [activeExampleIndex, setActiveExampleIndex] = useState<number | null>(null);
  const [focusType, setFocusType] = useState<FocusType>(null);
  const [lessonViewerOpen, setLessonViewerOpen] = useState(false);
  const [lessonTitle, setLessonTitle] = useState<string | null>(null);
  const [lessonGrade, setLessonGrade] = useState<string | null>(null);
  const [lessonHighlight, setLessonHighlight] = useState<string | null>(null);

  const selectedWord = classicalWords.find((w) => w.id === selectedId) ?? null;

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* Top nav */}
      <header className="h-12 border-b border-border flex items-center px-6 bg-card shrink-0">
        <nav className="flex gap-6">
          <button
            onClick={() => setView("learning")}
            className={`text-sm font-medium pb-3 pt-3 border-b-2 transition-colors duration-100 ${
              view === "learning"
                ? "border-primary text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            实词学习
          </button>
          <button
            onClick={() => setView("graph")}
            className={`text-sm font-medium pb-3 pt-3 border-b-2 transition-colors duration-100 ${
              view === "graph"
                ? "border-primary text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            词语关系图
          </button>
        </nav>
      </header>

      {/* Three-column body */}
      <div className="flex flex-1 min-h-0">
        <WordSidebar
          words={classicalWords}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />

        {view === "learning" ? (
          <LearningGraph
            word={selectedWord}
            onMeaningSelect={({ meaningIndex }) => {
              setActiveMeaningIndex(meaningIndex);
              setActiveExampleIndex(null);
              setFocusType("meaning");
            }}
            onExampleSelect={({ meaningIndex, exampleIndex }) => {
              setActiveMeaningIndex(meaningIndex);
              setActiveExampleIndex(exampleIndex);
              setFocusType("example");
            }}
            onLessonSelect={({ source, grade, exampleText }) => {
              setLessonTitle(source);
              setLessonGrade(grade);
              setLessonHighlight(exampleText);
              setLessonViewerOpen(true);
            }}
          />
        ) : (
          <RelationshipGraph
            words={classicalWords}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
        )}

        <WordDetail
          word={selectedWord}
          activeMeaningIndex={activeMeaningIndex}
          activeExampleIndex={activeExampleIndex}
          focusType={focusType}
        />

        <LessonReader
          visible={lessonViewerOpen}
          lessonTitle={lessonTitle}
          grade={lessonGrade}
          highlightText={lessonHighlight}
          onClose={() => setLessonViewerOpen(false)}
          onKeywordSelect={(wordId) => {
            const target =
              classicalWords.find((w) => w.id === wordId) ??
              classicalWords.find((w) => w.character === wordId);
            if (target) {
              setSelectedId(target.id);
              setView("learning");
              setLessonViewerOpen(false);
            }
          }}
        />
      </div>
    </div>
  );
};

export default Index;
