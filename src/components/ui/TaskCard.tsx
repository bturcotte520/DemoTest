"use client";

import { Task } from "@/lib/types";
import { DragEvent } from "react";
import { useTheme } from "@/components/providers/ThemeProvider";

const priorityConfig = {
  high: { label: "High", className: "bg-red-500/15 text-red-400" },
  medium: { label: "Medium", className: "bg-amber-500/15 text-amber-400" },
  low: { label: "Low", className: "bg-emerald-500/15 text-emerald-400" },
};

const tagColors = [
  "bg-violet-500/15 text-violet-400",
  "bg-sky-500/15 text-sky-400",
  "bg-pink-500/15 text-pink-400",
  "bg-teal-500/15 text-teal-400",
  "bg-orange-500/15 text-orange-400",
];

function getTagColor(tag: string) {
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    hash = tag.charCodeAt(i) + ((hash << 5) - hash);
  }
  return tagColors[Math.abs(hash) % tagColors.length];
}

const avatarColors = [
  "from-violet-500 to-fuchsia-500",
  "from-sky-500 to-cyan-500",
  "from-amber-500 to-orange-500",
  "from-emerald-500 to-teal-500",
  "from-pink-500 to-rose-500",
];

function getAvatarColor(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return avatarColors[Math.abs(hash) % avatarColors.length];
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function TaskCard({ task }: { task: Task }) {
  const { theme } = useTheme();
  const priority = priorityConfig[task.priority];

  // Theme-aware classes
  const cardBg = theme === "dark" ? "bg-neutral-800/50" : "bg-white";
  const cardBorder = theme === "dark" ? "border-neutral-700/50" : "border-neutral-200";
  const cardHoverBorder = theme === "dark" ? "hover:border-neutral-600/50" : "hover:border-violet-300";
  const cardHoverBg = theme === "dark" ? "hover:shadow-black/20" : "hover:shadow-gray-200/50";
  const titleColor = theme === "dark" ? "text-neutral-100" : "text-neutral-800";
  const titleHover = theme === "dark" ? "group-hover:text-white" : "group-hover:text-violet-600";
  const descColor = theme === "dark" ? "text-neutral-400" : "text-neutral-500";
  const assigneeColor = theme === "dark" ? "text-neutral-500" : "text-neutral-500";
  const idColor = theme === "dark" ? "text-neutral-600" : "text-neutral-400";
  const emptyBorder = theme === "dark" ? "border-neutral-600" : "border-neutral-300";
  const emptyIcon = theme === "dark" ? "text-neutral-600" : "text-neutral-400";

  function handleDragStart(e: DragEvent<HTMLDivElement>) {
    e.dataTransfer.setData("text/plain", task.id);
    e.dataTransfer.effectAllowed = "move";
    // Add a slight delay so the drag image captures before opacity change
    const target = e.currentTarget;
    requestAnimationFrame(() => {
      target.style.opacity = "0.4";
    });
  }

  function handleDragEnd(e: DragEvent<HTMLDivElement>) {
    e.currentTarget.style.opacity = "1";
  }

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className={`${cardBg} border ${cardBorder} ${cardHoverBorder} rounded-xl p-4 hover:border-violet-500/30 transition-all hover:shadow-lg ${cardHoverBg} group cursor-grab active:cursor-grabbing`}
    >
      {/* Priority & Tags */}
      <div className="flex items-center gap-2 flex-wrap mb-3">
        <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${priority.className}`}>
          {priority.label}
        </span>
        {task.tags?.map((tag) => (
          <span
            key={tag}
            className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${getTagColor(tag)}`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 className={`text-sm font-semibold ${titleColor} mb-1 ${titleHover} transition-colors`}>
        {task.title}
      </h3>

      {/* Description */}
      {task.description && (
        <p className={`text-xs ${descColor} mb-3 line-clamp-2 leading-relaxed`}>
          {task.description}
        </p>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between mt-2">
        {task.assignee ? (
          <div className="flex items-center gap-2">
            <div
              className={`w-6 h-6 rounded-full bg-gradient-to-br ${getAvatarColor(task.assignee)} flex items-center justify-center text-white text-[10px] font-bold`}
            >
              {getInitials(task.assignee)}
            </div>
            <span className={`text-xs ${assigneeColor}`}>{task.assignee}</span>
          </div>
        ) : (
          <div className={`w-6 h-6 rounded-full border-2 border-dashed ${emptyBorder} flex items-center justify-center`}>
            <svg className={`w-3 h-3 ${emptyIcon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </div>
        )}
        <span className={`text-[11px] ${idColor}`}>#{task.id}</span>
      </div>
    </div>
  );
}
