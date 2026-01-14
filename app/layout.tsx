import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const _inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "FndlyCare | AI-Powered Veterinary Diagnosis",
  description:
    "Instant AI-driven health insights for your pets and livestock. Upload symptoms, get instant diagnosis, risk scores, and actionable care recommendations.",
  keywords:
    "AI veterinary diagnosis, pet symptom checker, livestock disease AI, online vet AI, rural animal healthcare",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/apple-icon_imresizer.jpg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/apple-icon_imresizer.jpg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/apple-icon1.png",
        type: "image/png+xml",
      },
    ],
    apple: "/apple-icon1.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {/* Global Header */}
        <Header />

        {/* Page Content */}
        <main>{children}</main>

        {/* Global Footer */}
        <Footer />

        {/* Analytics */}
        <Analytics />
      </body>
    </html>
  )
}
