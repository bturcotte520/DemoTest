import { Task, TaskStatus } from "@/lib/types";
import TaskColumn from "@/components/ui/TaskColumn";

const columns: TaskStatus[] = ["todo", "in-progress", "done"];

export default function TaskBoard({ tasks }: { tasks: Task[] }) {
  const tasksByStatus = columns.reduce(
    (acc, status) => {
      acc[status] = tasks.filter((t) => t.status === status);
      return acc;
    },
    {} as Record<TaskStatus, Task[]>,
  );

  return (
    <div className="flex gap-6 overflow-x-auto pb-4">
      {columns.map((status) => (
        <TaskColumn key={status} status={status} tasks={tasksByStatus[status]} />
      ))}
    </div>
  );
}
