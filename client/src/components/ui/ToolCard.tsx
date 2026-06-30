import { useState, useEffect } from "react";
import { ArrowUpRight, Heart, Bookmark } from "lucide-react";
import { Tool } from "@/lib/toolsData";
import { cn } from "@/lib/utils";

interface ToolCardProps {
  tool: Tool;
  className?: string;
}

export function ToolCard({ tool, className }: ToolCardProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  // Load initial state from localStorage
  useEffect(() => {
    try {
      const savedIds = JSON.parse(localStorage.getItem("my_stack_saves") || "[]");
      setIsSaved(savedIds.includes(tool.id));
      
      const likedIds = JSON.parse(localStorage.getItem("my_stack_likes") || "[]");
      setIsLiked(likedIds.includes(tool.id));
    } catch (e) {
      console.error(e);
    }
  }, [tool.id]);

  const toggleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    try {
      const savedIds = JSON.parse(localStorage.getItem("my_stack_saves") || "[]");
      if (isSaved) {
        const newIds = savedIds.filter((id: string) => id !== tool.id);
        localStorage.setItem("my_stack_saves", JSON.stringify(newIds));
        setIsSaved(false);
      } else {
        savedIds.push(tool.id);
        localStorage.setItem("my_stack_saves", JSON.stringify(savedIds));
        setIsSaved(true);
      }
      window.dispatchEvent(new Event("stack-change"));
    } catch (e) {
      console.error(e);
    }
  };

  const toggleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    try {
      const likedIds = JSON.parse(localStorage.getItem("my_stack_likes") || "[]");
      if (isLiked) {
        const newIds = likedIds.filter((id: string) => id !== tool.id);
        localStorage.setItem("my_stack_likes", JSON.stringify(newIds));
        setIsLiked(false);
      } else {
        likedIds.push(tool.id);
        localStorage.setItem("my_stack_likes", JSON.stringify(likedIds));
        setIsLiked(true);
      }
      window.dispatchEvent(new Event("stack-change"));
    } catch (e) {
      console.error(e);
    }
  };

  let hostname = "";
  try {
    hostname = new URL(tool.url).hostname.replace('www.', '');
  } catch (e) {
    hostname = tool.url;
  }

  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex flex-col h-full min-h-[260px] rounded-[24px] p-[1px] overflow-hidden",
        "transition-all duration-500 ease-out",
        "hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(232,112,42,0.15)]",
        className
      )}
    >
      {/* Animated Gradient Border */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 group-hover:from-[#e8702a]/60 group-hover:via-white/10 group-hover:to-[#e8702a]/30 transition-all duration-700 opacity-60 group-hover:opacity-100" />
      
      {/* Inner Card */}
      <div className="relative flex flex-col h-full bg-[#0d0d0d]/95 backdrop-blur-xl rounded-[23px] p-6 sm:p-7 transition-colors duration-500">
        
        {/* Top bar: Icon & Actions */}
        <div className="flex items-start justify-between mb-6 gap-4">
          <div className="flex items-center gap-4 min-w-0">
            <div className="relative flex shrink-0 w-12 h-12 rounded-[14px] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 items-center justify-center shadow-inner group-hover:scale-105 group-hover:border-[#e8702a]/40 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-[#e8702a]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {tool.icon ? (
                <span className="relative z-10 text-2xl drop-shadow-md">{tool.icon}</span>
              ) : (
                <span className="relative z-10 text-white/90 font-bold text-xl uppercase tracking-wider drop-shadow-md">
                  {tool.name.charAt(0)}
                </span>
              )}
            </div>
            <div className="flex flex-col truncate">
              <h3 className="font-semibold text-white/90 group-hover:text-white text-[18px] tracking-tight truncate transition-colors">
                {tool.name}
              </h3>
              <span className="text-[13px] text-white/40 truncate mt-0.5">
                {hostname}
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Like Button */}
            <button
              onClick={toggleLike}
              className={cn(
                "p-1.5 rounded-full transition-all duration-300 shrink-0",
                isLiked 
                  ? "text-rose-400 bg-rose-500/15 border border-rose-500/30" 
                  : "text-white/40 bg-white/5 border border-white/10 hover:text-white hover:bg-white/10"
              )}
              title={isLiked ? "Unlike" : "Like"}
            >
              <Heart className={cn("w-4 h-4 transition-transform", isLiked && "fill-current scale-110")} />
            </button>
            
            {/* Private Save Button */}
            <button
              onClick={toggleSave}
              className={cn(
                "p-1.5 rounded-full transition-all duration-300 shrink-0",
                isSaved 
                  ? "text-[#e8702a] bg-[#e8702a]/15 border border-[#e8702a]/30" 
                  : "text-white/40 bg-white/5 border border-white/10 hover:text-white hover:bg-white/10"
              )}
              title={isSaved ? "Remove from My Stack" : "Save to My Stack"}
            >
              <Bookmark className={cn("w-4 h-4 transition-transform", isSaved && "fill-current")} />
            </button>
            
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 opacity-0 -translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-white group-hover:bg-white/15 group-hover:border-white/30">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-white/50 group-hover:text-white/70 text-[15px] leading-relaxed mb-8 flex-grow transition-colors duration-300">
          {tool.description}
        </p>

        {/* Tags */}
        {tool.tags && tool.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {tool.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className={cn(
                  "inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase transition-colors duration-300 border border-transparent",
                  tag === "Free" ? "bg-emerald-500/10 text-emerald-400" :
                  tag === "OSS" ? "bg-blue-500/10 text-blue-400" :
                  tag === "Paid" ? "bg-amber-500/10 text-amber-400" :
                  tag === "Free tier" ? "bg-cyan-500/10 text-cyan-400" :
                  "bg-white/5 text-white/50 group-hover:text-white/70"
                )}
              >
                {tag}
              </span>
            ))}
            {tool.tags.length > 3 && (
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 text-white/50 text-[11px] font-medium tracking-wide border border-transparent">
                +{tool.tags.length - 3}
              </span>
            )}
          </div>
        )}
      </div>
    </a>
  );
}
