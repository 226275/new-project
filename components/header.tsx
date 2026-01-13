"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { SignInModal } from "@/components/sign-in-modal"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showSignIn, setShowSignIn] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">FC</span>
              </div>
              <span className="font-semibold text-lg text-foreground">FndlyCare</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/#how-it-works"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                How It Works
              </Link>
              <Link href="/#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Features
              </Link>
              <Link
                href="/#use-cases"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Use Cases
              </Link>
              <Link href="/research" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Research
              </Link>
              <Link href="/#demo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Demo
              </Link>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={() => setShowSignIn(true)}>
                Sign In
              </Button>
              <Button size="sm" onClick={() => setShowSignIn(true)}>
                Sign Up
              </Button>
            </div>

            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <nav className="flex flex-col gap-4">
                <Link
                  href="/#how-it-works"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  How It Works
                </Link>
                <Link
                  href="/#features"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </Link>
                <Link
                  href="/#use-cases"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Use Cases
                </Link>
                <Link
                  href="/research"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Research
                </Link>
                <Link href="/#demo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Demo
                </Link>
                <div className="flex flex-col gap-2 pt-4 border-t border-border">
                  <Button variant="ghost" size="sm" className="justify-start" onClick={() => setShowSignIn(true)}>
                    Sign In
                  </Button>
                  <Button size="sm" onClick={() => setShowSignIn(true)}>
                    Sign Up
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <SignInModal open={showSignIn} onOpenChange={setShowSignIn} pendingAction={null} />
    </>
  )
}
