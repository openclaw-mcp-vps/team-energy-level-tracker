import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Team Energy Tracker — Track team energy and burnout signals',
  description: 'Daily check-ins to track team energy levels, workload satisfaction, and early burnout indicators with manager dashboards.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="afc0caae-bc43-44a5-98ad-c7058748abff"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
