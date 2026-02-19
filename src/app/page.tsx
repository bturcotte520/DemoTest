"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import Sidebar from "@/components/layout/Sidebar";
import DashboardContent from "@/components/sections/DashboardContent";
import { sampleProject } from "@/lib/data";

export default function Home() {
  const { theme } = useTheme();
  
  // Theme-aware background
  const bgColor = theme === "dark" ? "bg-neutral-950" : "bg-neutral-100";

  return (
    <div className={`flex min-h-screen ${bgColor}`}>
      <Sidebar />
      <DashboardContent project={sampleProject} />
    </div>
  );
}
