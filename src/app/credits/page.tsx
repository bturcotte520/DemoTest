"use client";

import { QRCodeSVG } from "qrcode.react";
import { useTheme } from "@/components/providers/ThemeProvider";
import Sidebar from "@/components/layout/Sidebar";
import Link from "next/link";

const CREDITS_URL = "https://kilo.codes/devWeek";

export default function CreditsPage() {
  const { theme, toggleTheme } = useTheme();

  const bgColor = theme === "dark" ? "bg-neutral-950" : "bg-neutral-100";
  const headerBg = theme === "dark" ? "bg-neutral-950/80" : "bg-white/80";
  const borderColor = theme === "dark" ? "border-neutral-800" : "border-neutral-200";
  const titleColor = theme === "dark" ? "text-white" : "text-neutral-900";
  const subtitleColor = theme === "dark" ? "text-neutral-500" : "text-neutral-500";
  const cardBg = theme === "dark" ? "bg-neutral-900" : "bg-white";
  const cardBorder = theme === "dark" ? "border-neutral-800" : "border-neutral-200";
  const labelColor = theme === "dark" ? "text-neutral-300" : "text-neutral-700";
  const urlColor = theme === "dark" ? "text-violet-400" : "text-violet-600";
  const searchBg = theme === "dark" ? "bg-neutral-900" : "bg-neutral-50";
  const searchBorder = theme === "dark" ? "border-neutral-800" : "border-neutral-200";
  const qrBg = theme === "dark" ? "#ffffff" : "#ffffff";
  const qrFg = theme === "dark" ? "#0a0a0a" : "#0a0a0a";

  return (
    <div className={`flex min-h-screen ${bgColor}`}>
      <Sidebar />

      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header
          className={`border-b ${borderColor} px-8 py-4 flex items-center justify-between ${headerBg} backdrop-blur-sm sticky top-0 z-10`}
        >
          <div>
            <h1 className={`text-xl font-bold ${titleColor}`}>Credits</h1>
            <p className={`text-sm ${subtitleColor} mt-0.5`}>
              Built with Kilo Code
            </p>
          </div>
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${searchBg} ${searchBorder} border hover:bg-violet-600/10 hover:border-violet-500/30 transition-colors`}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <svg
                  className="w-5 h-5 text-amber-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-violet-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>
          </div>
        </header>

        {/* Credits Content */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div
            className={`${cardBg} border ${cardBorder} rounded-2xl p-10 flex flex-col items-center gap-6 shadow-lg max-w-sm w-full`}
          >
            {/* Kilo Code logo mark */}
            <div className="w-12 h-12 rounded-xl bg-violet-600 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            </div>

            <div className="text-center">
              <h2 className={`text-lg font-bold ${titleColor}`}>
                Built with Kilo Code
              </h2>
              <p className={`text-sm ${subtitleColor} mt-1`}>
                Scan the QR code to learn more
              </p>
            </div>

            {/* QR Code */}
            <div className="p-4 rounded-xl bg-white shadow-sm">
              <QRCodeSVG
                value={CREDITS_URL}
                size={256}
                bgColor={qrBg}
                fgColor={qrFg}
                level="M"
                includeMargin={false}
              />
            </div>

            {/* Caption */}
            <div className="text-center space-y-1">
              <p className={`text-sm font-medium ${labelColor}`}>
                Scan to visit
              </p>
              <Link
                href={CREDITS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-semibold ${urlColor} hover:underline break-all`}
              >
                {CREDITS_URL}
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
