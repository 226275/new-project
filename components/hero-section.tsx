"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Upload } from "lucide-react"
import { SignInModal } from "./sign-in-modal"
import { UploadModal } from "./upload-modal"

export function HeroSection() {
  const [showSignIn, setShowSignIn] = useState(false)
  const [showUpload, setShowUpload] = useState(false)
  const [pendingAction, setPendingAction] = useState<"upload" | "diagnosis" | null>(null)

  const handleUploadClick = () => {
    setShowUpload(true)
  }

  const handleTryDiagnosis = () => {
    setPendingAction("diagnosis")
    setShowSignIn(true)
  }

  const handleUploadComplete = () => {
    setShowUpload(false)
    setPendingAction("upload")
    setShowSignIn(true)
  }

  return (
    <>
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              <span>First AI-First Vet Platform in Rural India</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance mb-6">
              AI-Powered Instant Veterinary Diagnosis
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
              Upload symptoms. Get instant AI-driven health insights for your pets and livestock. Save time, money, and
              animal lives with early detection.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base px-8 bg-transparent"
                onClick={handleUploadClick}
              >
                <Upload className="w-4 h-4 mr-2" />
                Upload
              </Button>
              <Button size="lg" className="w-full sm:w-auto text-base px-8" onClick={handleTryDiagnosis}>
                Try AI Diagnosis
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-12">
            {[
              { stat: "120+", label: "Animals Diagnosed" },
              { stat: "95%", label: "Diagnosis Accuracy" },
              { stat: "< 1 min", label: "Diagnosis Time" },
              { stat: "500+", label: "Rural Communities" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-foreground">{item.stat}</div>
                <div className="text-sm text-muted-foreground mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SignInModal open={showSignIn} onOpenChange={setShowSignIn} pendingAction={pendingAction} />
      <UploadModal open={showUpload} onOpenChange={setShowUpload} onUploadComplete={handleUploadComplete} />
    </>
  )
}
