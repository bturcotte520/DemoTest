import Sidebar from "@/components/layout/Sidebar";
import DashboardContent from "@/components/sections/DashboardContent";
import { sampleProject } from "@/lib/data";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-neutral-950">
      <Sidebar />
      <DashboardContent project={sampleProject} />
    </div>
  );
}
