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
  const textSecondary = theme === "dark" ? "text-neutral-400" : "text-neutral-600";
  const qrBg = theme === "dark" ? "#ffffff" : "#ffffff";
  const qrFg = theme === "dark" ? "#0a0a0a" : "#0a0a0a";
  const badgeBg = theme === "dark" ? "bg-violet-600/15 text-violet-400" : "bg-violet-100 text-violet-700";

  return (
    <div className={`flex min-h-screen ${bgColor}`}>
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center p-8">
        <div className={`w-full max-w-md ${cardBg} border ${borderColor} rounded-2xl p-8 shadow-xl flex flex-col items-center gap-6`}>
          {/* Header */}
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="w-12 h-12 rounded-xl bg-violet-600 flex items-center justify-center mb-1">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h1 className={`text-2xl font-bold ${textPrimary}`}>Credits</h1>
            <p className={`text-sm ${textSecondary}`}>
              Built with Kilo Code — scan to learn more
            </p>
          </div>

          {/* QR Code */}
          <div className={`p-4 rounded-xl border ${borderColor} bg-white shadow-sm`}>
            <QRCode
              value={CREDITS_URL}
              size={200}
              bgColor={qrBg}
              fgColor={qrFg}
              level="M"
              style={{ display: "block" }}
            />
          </div>

          {/* Badge */}
          <span className={`text-xs font-medium px-3 py-1 rounded-full ${badgeBg}`}>
            kilo.codes/devWeek
          </span>

          {/* Link */}
          <a
            href={CREDITS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-violet-500 hover:text-violet-400 transition-colors font-medium"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
            Open link
          </a>

          {/* Divider */}
          <div className={`w-full border-t ${borderColor}`} />

          {/* Footer note */}
          <p className={`text-xs text-center ${textSecondary} leading-relaxed`}>
            This app was built using{" "}
            <span className="text-violet-500 font-medium">Kilo Code</span>, an AI-powered
            coding assistant. Scan the QR code or click the link above to find out more.
          </p>
        </div>
      </main>
    </div>
  );
}
