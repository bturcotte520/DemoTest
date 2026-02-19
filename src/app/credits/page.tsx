"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import Sidebar from "@/components/layout/Sidebar";
import Image from "next/image";

const QR_URL =
  "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://kilo.codes/devWeek";
const LINK_URL = "https://kilo.codes/devWeek";

export default function CreditsPage() {
  const { theme } = useTheme();

  const bgColor = theme === "dark" ? "bg-neutral-950" : "bg-neutral-100";
  const cardBg = theme === "dark" ? "bg-neutral-900" : "bg-white";
  const borderColor = theme === "dark" ? "border-neutral-800" : "border-neutral-200";
  const textPrimary = theme === "dark" ? "text-white" : "text-neutral-900";
  const textMuted = theme === "dark" ? "text-neutral-400" : "text-neutral-500";

  return (
    <div className={`flex min-h-screen ${bgColor}`}>
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center p-8">
        <div
          className={`${cardBg} border ${borderColor} rounded-2xl p-10 flex flex-col items-center gap-6 max-w-sm w-full shadow-lg`}
        >
          {/* Heading */}
          <div className="text-center space-y-1">
            <h1 className={`text-2xl font-bold ${textPrimary}`}>Credits</h1>
            <p className={`text-sm ${textMuted}`}>
              Scan the QR code or click the link below
            </p>
          </div>

          {/* QR Code */}
          <a
            href={LINK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl overflow-hidden ring-2 ring-violet-600/40 hover:ring-violet-500 transition-all duration-200 hover:scale-105"
            aria-label="Open kilo.codes/devWeek"
          >
            <Image
              src={QR_URL}
              alt="QR code linking to kilo.codes/devWeek"
              width={240}
              height={240}
              unoptimized
              priority
            />
          </a>

          {/* URL label */}
          <a
            href={LINK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors break-all text-center"
          >
            {LINK_URL}
          </a>

          {/* Divider */}
          <div className={`w-full border-t ${borderColor}`} />

          {/* Built-with note */}
          <p className={`text-xs ${textMuted} text-center`}>
            Built with{" "}
            <span className="text-violet-400 font-medium">Taskflow</span> &amp;{" "}
            <span className="text-violet-400 font-medium">Kilo Code</span>
          </p>
        </div>
      </main>
    </div>
  );
}
