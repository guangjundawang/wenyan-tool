import { lessons, Lesson } from "@/data/lessons";
import { classicalWords } from "@/data/classicalWords";

interface LessonReaderProps {
  visible: boolean;
  lessonTitle: string | null;
  grade: string | null;
  highlightText: string | null;
  onClose: () => void;
  onKeywordSelect: (wordKey: string) => void; // 既支持 id，也支持汉字
}

function getLesson(lessonTitle: string | null, grade: string | null): Lesson | null {
  if (!lessonTitle) return null;
  const byTitle = lessons.find((l) => l.title === lessonTitle && (!grade || l.grade === grade));
  if (byTitle) return byTitle;
  return lessons.find((l) => l.title === lessonTitle) ?? null;
}

function highlightSentence(fullText: string, target: string | null) {
  if (!target || !fullText.includes(target)) {
    return (
      <p className="text-sm leading-relaxed font-serif-cn text-foreground whitespace-pre-wrap">
        {fullText}
      </p>
    );
  }
  const parts = fullText.split(target);
  const nodes: React.ReactNode[] = [];
  parts.forEach((part, index) => {
    nodes.push(part);
    if (index < parts.length - 1) {
      nodes.push(
        <span
          key={index}
          className="relative inline-flex items-stretch"
        >
          <span className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-6 rounded-full bg-primary/80" />
          <span className="relative z-10 px-1 rounded bg-amber-200/90 text-foreground font-semibold">
            {target}
          </span>
        </span>
      );
    }
  });
  return nodes;
}

export function LessonReader({
  visible,
  lessonTitle,
  grade,
  highlightText,
  onClose,
  onKeywordSelect,
}: LessonReaderProps) {
  if (!visible) return null;

  const lesson = getLesson(lessonTitle, grade);

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-background/90 backdrop-blur-sm">
      <div className="w-[840px] max-h-[90vh] bg-card border border-border rounded-xl shadow-xl flex flex-col overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between px-5 py-3 border-b border-border bg-muted/40">
          <div className="space-y-0.5">
            <div className="flex items-baseline gap-2">
              <h3 className="text-base font-semibold text-foreground">
                {lesson ? lesson.title : lessonTitle ?? "课文"}
              </h3>
              {lesson && (
                <span className="text-xs px-1.5 py-0.5 rounded bg-secondary text-muted-foreground">
                  {lesson.grade}
                </span>
              )}
            </div>
            {highlightText && (
              <p className="text-[11px] text-muted-foreground">
                当前例句定位：
                <span className="font-serif-cn text-foreground">「{highlightText}」</span>
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="text-xs px-2 py-1 rounded-md border border-border text-muted-foreground hover:bg-accent hover:text-foreground"
          >
            关闭
          </button>
        </header>

        {/* Body */}
        <div className="flex-1 flex min-h-0">
          {/* Text */}
          <div className="flex-1 px-5 py-4 overflow-y-auto scrollbar-thin">
            {lesson ? (
              highlightSentence(lesson.fullText, highlightText)
            ) : (
              <p className="text-xs text-muted-foreground">
                暂无该课文的完整内容。
              </p>
            )}
          </div>

          {/* Sidebar: key words */}
          {lesson && (
            <aside className="w-48 border-l border-border px-4 py-4 bg-muted/30 flex flex-col gap-3">
              <div>
                <h4 className="text-[11px] font-medium text-muted-foreground tracking-wide mb-1.5">
                  Key Words · 重点实词
                </h4>
                {lesson.keyWords.length ? (
                  <div className="flex flex-wrap gap-1.5">
                    {lesson.keyWords.map((keyWord) => {
                      const word =
                        classicalWords.find((w) => w.character === keyWord) ??
                        classicalWords.find((w) => w.id === keyWord);
                      if (!word) {
                        return (
                          <span
                            key={keyWord}
                            className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                          >
                            {keyWord}
                          </span>
                        );
                      }
                      return (
                        <button
                          key={word.id}
                          onClick={() => onKeywordSelect(word.id)}
                          className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground hover:bg-primary/80 hover:text-primary-foreground"
                        >
                          {word.character}
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-[11px] text-muted-foreground">
                    暂无配置重点实词。
                  </p>
                )}
              </div>
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}

