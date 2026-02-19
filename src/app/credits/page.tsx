"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import Sidebar from "@/components/layout/Sidebar";
import QRCode from "react-qr-code";

const CREDITS_URL = "https://kilo.codes/devWeek";

export default function CreditsPage() {
  const { theme } = useTheme();

  const bgColor = theme === "dark" ? "bg-neutral-950" : "bg-neutral-100";
  const cardBg = theme === "dark" ? "bg-neutral-900" : "bg-white";
  const borderColor = theme === "dark" ? "border-neutral-800" : "border-neutral-200";
  const textPrimary = theme === "dark" ? "text-white" : "text-neutral-900";
  const textMuted = theme === "dark" ? "text-neutral-400" : "text-neutral-500";
  const qrBg = theme === "dark" ? "#ffffff" : "#ffffff";
  const qrFg = theme === "dark" ? "#0a0a0a" : "#0a0a0a";

  return (
    <div className={`flex min-h-screen ${bgColor}`}>
      <Sidebar />

      <main className="flex-1 flex items-center justify-center p-8">
        <div className={`${cardBg} border ${borderColor} rounded-2xl p-10 flex flex-col items-center gap-8 max-w-md w-full shadow-xl`}>
          {/* Icon */}
          <div className="w-14 h-14 rounded-2xl bg-violet-600 flex items-center justify-center shadow-lg shadow-violet-600/30">
            <svg
              className="w-7 h-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.8}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>

          {/* Heading */}
          <div className="text-center space-y-2">
            <h1 className={`text-2xl font-bold ${textPrimary}`}>Claim your credits</h1>
            <p className={`text-sm ${textMuted} leading-relaxed`}>
              Scan the QR code below to visit{" "}
              <span className="text-violet-400 font-medium">kilo.codes/devWeek</span>{" "}
              and claim your developer week credits.
            </p>
          </div>

          {/* QR Code */}
          <div className="p-4 rounded-xl bg-white shadow-md">
            <QRCode
              value={CREDITS_URL}
              size={200}
              bgColor={qrBg}
              fgColor={qrFg}
              level="M"
            />
          </div>

          {/* URL label */}
          <a
            href={CREDITS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xs ${textMuted} hover:text-violet-400 transition-colors underline underline-offset-4`}
          >
            {CREDITS_URL}
          </a>
        </div>
      </main>
    </div>
  );
}
