import { Task, TaskStatus } from "@/lib/types";
import TaskCard from "./TaskCard";

const statusConfig: Record<TaskStatus, { label: string; dotColor: string; bgAccent: string }> = {
  todo: {
    label: "To Do",
    dotColor: "bg-neutral-400",
    bgAccent: "bg-neutral-400/10",
  },
  "in-progress": {
    label: "In Progress",
    dotColor: "bg-amber-400",
    bgAccent: "bg-amber-400/10",
  },
  done: {
    label: "Done",
    dotColor: "bg-emerald-400",
    bgAccent: "bg-emerald-400/10",
  },
};

export default function TaskColumn({
  status,
  tasks,
}: {
  status: TaskStatus;
  tasks: Task[];
}) {
  const config = statusConfig[status];

  return (
    <div className="flex flex-col min-w-[320px] flex-1">
      {/* Column Header */}
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex items-center gap-2.5">
          <div className={`w-2.5 h-2.5 rounded-full ${config.dotColor}`} />
          <h2 className="text-sm font-semibold text-neutral-200">{config.label}</h2>
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${config.bgAccent} text-neutral-300`}>
            {tasks.length}
          </span>
        </div>
        <button className="p-1 rounded-md text-neutral-500 hover:text-neutral-300 hover:bg-neutral-800 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-3">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}

        {/* Empty state */}
        {tasks.length === 0 && (
          <div className="border-2 border-dashed border-neutral-800 rounded-xl p-6 text-center">
            <p className="text-xs text-neutral-600">No tasks yet</p>
          </div>
        )}
      </div>
    </div>
  );
}
