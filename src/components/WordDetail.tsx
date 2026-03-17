import { ClassicalWord } from "@/data/classicalWords";

interface WordDetailProps {
  word: ClassicalWord | null;
  activeMeaningIndex?: number | null;
  activeExampleIndex?: number | null;
  focusType?: "meaning" | "example" | null;
}

export function WordDetail({
  word,
  activeMeaningIndex = null,
  activeExampleIndex = null,
  focusType = null,
}: WordDetailProps) {
  if (!word) {
    return (
      <div className="w-[320px] border-l border-border h-full flex items-center justify-center bg-card">
        <p className="text-muted-foreground text-sm">暂无选中词语</p>
      </div>
    );
  }

  const activeMeaning =
    activeMeaningIndex != null && activeMeaningIndex >= 0 && activeMeaningIndex < word.meanings.length
      ? word.meanings[activeMeaningIndex]
      : null;

  return (
    <div className="w-[320px] border-l border-border h-full overflow-y-auto scrollbar-thin bg-card">
      <div className="p-5 space-y-6">
        {activeMeaning && (
          <section>
            <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
              Focus · 当前聚焦
            </h3>
            {/* 只选中义项：展示义项 + 该义项下的所有例句列表 */}
            {focusType === "meaning" && (
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-xs px-1.5 py-0.5 rounded bg-secondary text-muted-foreground">
                    {activeMeaning.partOfSpeech ?? "—"}
                  </span>
                  <span className="font-medium text-foreground">{activeMeaning.definition}</span>
                </div>
                <div className="space-y-2 border-l border-border/60 pl-3">
                  <div
                    className="rounded-md bg-secondary/40 px-2 py-1.5"
                  >
                    <p className="font-serif-cn text-foreground">
                      「{activeMeaning.example}」
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      —— {activeMeaning.source} · {activeMeaning.grade}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 选中例句：突出当前例句及出处 */}
            {focusType === "example" && activeExampleIndex != null && (
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-xs px-1.5 py-0.5 rounded bg-secondary text-muted-foreground">
                    {activeMeaning.partOfSpeech ?? "—"}
                  </span>
                  <span className="font-medium text-foreground">{activeMeaning.definition}</span>
                </div>
                <div className="space-y-1.5 border-l-2 border-primary pl-3">
                  <p className="font-serif-cn text-base text-foreground">
                    「{activeMeaning.example}」
                  </p>
                  <p className="text-xs text-muted-foreground">
                    译文：
                    <span className="text-foreground">
                      {activeMeaning.sentenceTranslation || "（暂无译文）"}
                    </span>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    出处：{activeMeaning.source}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    年级：{activeMeaning.grade}
                  </p>
                </div>
              </div>
            )}
          </section>
        )}

        {/* Etymology */}
        <section>
          <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
            Etymology · 字源
          </h3>
          <p className="text-sm leading-relaxed text-foreground">{word.etymology}</p>
        </section>

        {/* Meanings */}
        <section>
          <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
            Common Meanings · 常见义项
          </h3>
          <div className="space-y-4">
            {word.meanings.map((m, i) => {
              const isMeaningActive = activeMeaningIndex === i;
              const isExampleActive =
                focusType === "example" &&
                isMeaningActive &&
                activeExampleIndex != null;

              return (
                <div
                  key={i}
                  className={`space-y-1 rounded-md px-2 py-1 transition-colors ${
                    isMeaningActive ? "bg-secondary/60 border border-primary/60" : "border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-1.5 py-0.5 rounded bg-secondary text-muted-foreground">
                      {m.partOfSpeech ?? "—"}
                    </span>
                    <span className="text-sm font-medium text-foreground">{m.definition}</span>
                  </div>
                  <div
                    className={`mt-0.5 rounded px-1.5 py-0.5 ${
                      isExampleActive ? "bg-primary/20 text-primary-foreground" : ""
                    }`}
                  >
                    <p className="text-sm font-serif-cn text-foreground">
                      「{m.example}」
                    </p>
                    <p className="text-xs text-muted-foreground">
                      —— {m.source}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Related Words */}
        <section>
          <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
            Related · 相关词语
          </h3>
          <div className="flex flex-wrap gap-2">
            {(word.relatedWords ?? []).map((rw) => (
              <span
                key={rw}
                className="text-sm px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
              >
                {rw}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
