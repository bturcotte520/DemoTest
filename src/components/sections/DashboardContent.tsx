"use client";

import { useState, useCallback } from "react";
import TaskBoard from "@/components/sections/TaskBoard";
import { useTheme } from "@/components/providers/ThemeProvider";
import { Task, TaskStatus } from "@/lib/types";

export default function DashboardContent({
  project,
}: {
  project: { name: string; description: string; tasks: Task[] };
}) {
  const [tasks, setTasks] = useState<Task[]>(project.tasks);
  const { theme, toggleTheme } = useTheme();

  const totalTasks = tasks.length;
  const doneTasks = tasks.filter((t) => t.status === "done").length;
  const inProgressTasks = tasks.filter((t) => t.status === "in-progress").length;
  const todoTasks = totalTasks - doneTasks - inProgressTasks;
  const progressPercent = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0;

  const handleMoveTask = useCallback((taskId: string, newStatus: TaskStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task,
      ),
    );
  }, []);

  // Theme-aware classes
  const headerBg = theme === "dark" ? "bg-neutral-950/80" : "bg-white/80";
  const borderColor = theme === "dark" ? "border-neutral-800" : "border-neutral-200";
  const searchBg = theme === "dark" ? "bg-neutral-900" : "bg-neutral-50";
  const searchBorder = theme === "dark" ? "border-neutral-800" : "border-neutral-200";
  const searchText = theme === "dark" ? "text-neutral-300" : "text-neutral-700";
  const titleColor = theme === "dark" ? "text-white" : "text-neutral-900";
  const subtitleColor = theme === "dark" ? "text-neutral-500" : "text-neutral-500";
  const progressTextColor = theme === "dark" ? "text-neutral-300" : "text-neutral-700";
  const smallTextColor = theme === "dark" ? "text-neutral-500" : "text-neutral-500";
  const statDotColor = theme === "dark" ? "text-neutral-400" : "text-neutral-600";
  const statNumColor = theme === "dark" ? "text-neutral-200" : "text-neutral-800";
  const dividerColor = theme === "dark" ? "bg-neutral-800" : "bg-neutral-200";

  return (
    <main className="flex-1 flex flex-col min-w-0">
      {/* Top Bar */}
      <header className={`border-b ${borderColor} px-8 py-4 flex items-center justify-between ${headerBg} backdrop-blur-sm sticky top-0 z-10`}>
        <div>
          <h1 className={`text-xl font-bold ${titleColor}`}>{project.name}</h1>
          <p className={`text-sm ${subtitleColor} mt-0.5`}>{project.description}</p>
        </div>
        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="relative">
            <svg className={`w-4 h-4 ${subtitleColor} absolute left-3 top-1/2 -translate-y-1/2`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input
              type="text"
              placeholder="Search tasks..."
              className={`${searchBg} ${searchBorder} rounded-lg pl-9 pr-4 py-2 text-sm ${searchText} placeholder:text-neutral-500 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/25 w-64 transition-colors`}
            />
          </div>
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg ${searchBg} ${searchBorder} border hover:bg-violet-600/10 hover:border-violet-500/30 transition-colors`}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Add Task Button */}
          <button className="bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Add Task
          </button>
        </div>
      </header>

      {/* Stats Bar */}
      <div className={`px-8 py-5 border-b ${borderColor} border-opacity-50`}>
        <div className="flex items-center gap-8">
          {/* Progress */}
          <div className="flex items-center gap-4">
            <div className="relative w-10 h-10">
              <svg className="w-10 h-10 -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="15" fill="none" stroke="currentColor" strokeWidth="3" className={theme === "dark" ? "text-neutral-800" : "text-neutral-200"} />
                <circle
                  cx="18"
                  cy="18"
                  r="15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeDasharray={`${progressPercent} ${100 - progressPercent}`}
                  strokeLinecap="round"
                  className="text-violet-500 transition-all duration-500"
                />
              </svg>
              <span className={`absolute inset-0 flex items-center justify-center text-[10px] font-bold ${progressTextColor}`}>
                {progressPercent}%
              </span>
            </div>
            <div>
              <p className={`text-sm font-medium ${progressTextColor}`}>Progress</p>
              <p className={`text-xs ${smallTextColor}`}>{doneTasks} of {totalTasks} tasks done</p>
            </div>
          </div>

          <div className={`w-px h-8 ${dividerColor}`} />

          {/* Stat Cards */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2.5">
              <div className={`w-2 h-2 rounded-full ${theme === "dark" ? "bg-neutral-400" : "bg-neutral-500"}`} />
              <span className={`text-sm ${statDotColor}`}>
                <span className={`font-semibold ${statNumColor}`}>{todoTasks}</span> To Do
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-amber-400" />
              <span className={`text-sm ${statDotColor}`}>
                <span className={`font-semibold ${statNumColor}`}>{inProgressTasks}</span> In Progress
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className={`text-sm ${statDotColor}`}>
                <span className={`font-semibold ${statNumColor}`}>{doneTasks}</span> Done
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Task Board */}
      <div className="flex-1 p-8">
        <TaskBoard tasks={tasks} onMoveTask={handleMoveTask} />
      </div>
    </main>
  );
}
