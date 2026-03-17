import { ClassicalWord } from "@/data/classicalWords";

interface WordCenterProps {
  word: ClassicalWord | null;
}

export function WordCenter({ word }: WordCenterProps) {
  if (!word) {
    return (
      <div className="flex-1 flex items-center justify-center h-full">
        <p className="text-muted-foreground text-sm">选择左侧词语开始学习</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center h-full gap-4">
      <span className="font-serif-cn text-[120px] leading-none text-foreground select-none">
        {word.character}
      </span>
      <span className="text-lg text-muted-foreground">{word.pinyin}</span>
      <div className="flex gap-6 text-sm text-muted-foreground mt-2">
        <span>部首：<span className="font-serif-cn text-foreground">{word.radical}</span></span>
        <span>笔画：<span className="text-foreground">{word.strokeCount}</span></span>
      </div>
    </div>
  );
}
