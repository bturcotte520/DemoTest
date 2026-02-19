"use client";

import { useCallback } from "react";
import { Task, TaskStatus } from "@/lib/types";
import TaskColumn from "@/components/ui/TaskColumn";

const columns: TaskStatus[] = ["todo", "in-progress", "done"];

export default function TaskBoard({
  tasks,
  onMoveTask,
}: {
  tasks: Task[];
  onMoveTask: (taskId: string, newStatus: TaskStatus) => void;
}) {
  const handleDrop = useCallback(
    (taskId: string, newStatus: TaskStatus) => {
      onMoveTask(taskId, newStatus);
    },
    [onMoveTask],
  );

  const tasksByStatus = columns.reduce(
    (acc, status) => {
      acc[status] = tasks.filter((t) => t.status === status);
      return acc;
    },
    {} as Record<TaskStatus, Task[]>,
  );

  return (
    <div className="flex gap-4 overflow-x-auto pb-4 -mx-3">
      {columns.map((status) => (
        <TaskColumn
          key={status}
          status={status}
          tasks={tasksByStatus[status]}
          onDrop={handleDrop}
        />
      ))}
    </div>
  );
}
