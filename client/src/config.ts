// config.ts
export const config = {
  projectName: "Smart Curriculum & Attendance App",
  teamName: "Institutional Engineering",
  hackathonName: "Edition 2026",
  demoUrl: "https://hacktober-fest-nine.vercel.app",
  apiBaseUrl: (import.meta as any).env?.VITE_API_URL || "/api"
} as const;
