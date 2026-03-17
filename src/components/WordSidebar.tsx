import { useState } from "react";
import { Search } from "lucide-react";
import { ClassicalWord } from "@/data/classicalWords";

interface WordSidebarProps {
  words: ClassicalWord[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export function WordSidebar({ words, selectedId, onSelect }: WordSidebarProps) {
  const [search, setSearch] = useState("");

  const filtered = words.filter(
    (w) =>
      w.character.includes(search) ||
      w.pinyin.includes(search.toLowerCase())
  );

  return (
    <div className="w-[280px] border-r border-border flex flex-col h-full bg-card">
      <div className="p-3 border-b border-border">
        <div className="relative">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="搜索词语..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-8 pr-3 py-2 text-sm border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto scrollbar-thin">
        {filtered.map((word) => (
          <button
            key={word.id}
            onClick={() => onSelect(word.id)}
            className={`w-full text-left px-4 py-3 border-b border-border transition-colors duration-100 flex items-center gap-3 ${
              selectedId === word.id
                ? "bg-primary/5 border-l-2 border-l-primary"
                : "hover:bg-secondary"
            }`}
          >
            <span className="font-serif-cn text-xl">{word.character}</span>
            <span className="text-sm text-muted-foreground">{word.pinyin}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
