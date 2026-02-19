"use client";

import { useState, useCallback } from "react";
import { Task, TaskStatus } from "@/lib/types";
import TaskColumn from "@/components/ui/TaskColumn";

const columns: TaskStatus[] = ["todo", "in-progress", "done"];

export default function TaskBoard({
  initialTasks,
  onTasksChange,
}: {
  initialTasks: Task[];
  onTasksChange?: (tasks: Task[]) => void;
}) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleMoveTask = useCallback(
    (taskId: string, newStatus: TaskStatus) => {
      setTasks((prev) => {
        const updated = prev.map((task) =>
          task.id === taskId ? { ...task, status: newStatus } : task,
        );
        onTasksChange?.(updated);
        return updated;
      });
    },
    [onTasksChange],
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
          onDrop={handleMoveTask}
        />
      ))}
    </div>
  );
}
