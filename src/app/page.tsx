import Sidebar from "@/components/layout/Sidebar";
import TaskBoard from "@/components/sections/TaskBoard";
import { sampleProject } from "@/lib/data";

export default function Home() {
  const project = sampleProject;
  const totalTasks = project.tasks.length;
  const doneTasks = project.tasks.filter((t) => t.status === "done").length;
  const inProgressTasks = project.tasks.filter((t) => t.status === "in-progress").length;
  const progressPercent = Math.round((doneTasks / totalTasks) * 100);

  return (
    <div className="flex min-h-screen bg-neutral-950">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="border-b border-neutral-800 px-8 py-4 flex items-center justify-between bg-neutral-950/80 backdrop-blur-sm sticky top-0 z-10">
          <div>
            <h1 className="text-xl font-bold text-white">{project.name}</h1>
            <p className="text-sm text-neutral-500 mt-0.5">{project.description}</p>
          </div>
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative">
              <svg className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <input
                type="text"
                placeholder="Search tasks..."
                className="bg-neutral-900 border border-neutral-800 rounded-lg pl-9 pr-4 py-2 text-sm text-neutral-300 placeholder:text-neutral-600 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/25 w-64 transition-colors"
              />
            </div>
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
        <div className="px-8 py-5 border-b border-neutral-800/50">
          <div className="flex items-center gap-8">
            {/* Progress */}
            <div className="flex items-center gap-4">
              <div className="relative w-10 h-10">
                <svg className="w-10 h-10 -rotate-90" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="15" fill="none" stroke="currentColor" strokeWidth="3" className="text-neutral-800" />
                  <circle
                    cx="18"
                    cy="18"
                    r="15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray={`${progressPercent} ${100 - progressPercent}`}
                    strokeLinecap="round"
                    className="text-violet-500"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-neutral-300">
                  {progressPercent}%
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-300">Progress</p>
                <p className="text-xs text-neutral-500">{doneTasks} of {totalTasks} tasks done</p>
              </div>
            </div>

            <div className="w-px h-8 bg-neutral-800" />

            {/* Stat Cards */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-neutral-400" />
                <span className="text-sm text-neutral-400">
                  <span className="font-semibold text-neutral-200">{totalTasks - doneTasks - inProgressTasks}</span> To Do
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-sm text-neutral-400">
                  <span className="font-semibold text-neutral-200">{inProgressTasks}</span> In Progress
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-sm text-neutral-400">
                  <span className="font-semibold text-neutral-200">{doneTasks}</span> Done
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Task Board */}
        <div className="flex-1 p-8">
          <TaskBoard tasks={project.tasks} />
        </div>
      </main>
    </div>
  );
}
