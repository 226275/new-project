"use client"

import type React from "react"

import { useState, useCallback } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Upload,
  ArrowLeft,
  Globe,
  CheckCircle,
  AlertCircle,
  Clock,
  Shield,
  Loader2,
  ImageIcon,
  Video,
  X,
  ArrowRight,
} from "lucide-react"

const LANGUAGES = [
  { code: "te", name: "Telugu", native: "తెలుగు" },
  { code: "hi", name: "Hindi", native: "हिन्दी" },
  { code: "en", name: "English", native: "English" },
  { code: "ur", name: "Urdu", native: "اردو" },
  { code: "bn", name: "Bengali", native: "বাংলা" },
  { code: "gu", name: "Gujarati", native: "ગુજરાતી" },
  { code: "mr", name: "Marathi", native: "मराठी" },
  { code: "ml", name: "Malayalam", native: "മലയാളം" },
  { code: "or", name: "Odia", native: "ଓଡ଼ିଆ" },
]

export default function DiagnosisPage() {
  const [step, setStep] = useState<"language" | "upload" | "result">("language")
  const [language, setLanguage] = useState("")
  const [files, setFiles] = useState<File[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [diagnosisResult, setDiagnosisResult] = useState<{
    risk: string
    diagnosis: string
    recommendations: string[]
  } | null>(null)

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const droppedFiles = Array.from(e.dataTransfer.files)
    setFiles((prev) => [...prev, ...droppedFiles])
  }, [])

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files)
      setFiles((prev) => [...prev, ...selectedFiles])
    }
  }

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index))
  }

  const selectLanguage = (langCode: string) => {
    setLanguage(langCode)
    setStep("upload")
  }

  const runDiagnosis = async () => {
    if (files.length === 0) return

    setIsAnalyzing(true)

    // Simulate AI analysis
    await new Promise((resolve) => setTimeout(resolve, 2500))

    setDiagnosisResult({
      risk: "Medium",
      diagnosis:
        "Based on the analysis, the animal shows signs of possible skin infection or dermatitis. The affected area appears to have inflammation that requires attention within 24-48 hours.",
      recommendations: [
        "Keep the affected area clean and dry",
        "Avoid scratching or further irritation",
        "Apply prescribed topical treatment if available",
        "Monitor for any worsening symptoms",
        "Schedule a veterinary consultation within 48 hours",
      ],
    })

    setIsAnalyzing(false)
    setStep("result")
  }

  const resetDiagnosis = () => {
    setFiles([])
    setDiagnosisResult(null)
    setStep("language")
    setLanguage("")
  }

  const getFileIcon = (file: File) => {
    if (file.type.startsWith("image/")) return <ImageIcon className="w-4 h-4 text-primary" />
    return <Video className="w-4 h-4 text-primary" />
  }

  const selectedLang = LANGUAGES.find((l) => l.code === language)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">FC</span>
                </div>
                <span className="font-semibold text-lg text-foreground">FndlyCare</span>
              </Link>
              <span className="text-muted-foreground">|</span>
              <span className="text-sm font-medium text-foreground">AI Diagnosis</span>
            </div>

            {/* Show selected language if chosen */}
            {selectedLang && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Globe className="w-4 h-4" />
                <span>{selectedLang.name}</span>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back link */}
        <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="w-4 h-4 mr-1" />
          Back to home
        </Link>

        {/* Trust Indicators */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-card rounded-xl border border-border p-4 text-center">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
              <CheckCircle className="w-5 h-5 text-primary" />
            </div>
            <div className="text-xl font-bold text-foreground">120+</div>
            <div className="text-xs text-muted-foreground">Cases Diagnosed</div>
          </div>
          <div className="bg-card rounded-xl border border-border p-4 text-center">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div className="text-xl font-bold text-foreground">95%</div>
            <div className="text-xs text-muted-foreground">Accuracy Rate</div>
          </div>
          <div className="bg-card rounded-xl border border-border p-4 text-center">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div className="text-xl font-bold text-foreground">{"< 1 min"}</div>
            <div className="text-xs text-muted-foreground">Diagnosis Time</div>
          </div>
        </div>

        {step === "language" && (
          <div className="bg-card rounded-2xl border border-border p-8 max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Select Your Language</h2>
              <p className="text-muted-foreground">Choose your preferred language for the diagnosis report</p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => selectLanguage(lang.code)}
                  className="flex flex-col items-center gap-1 p-4 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all text-center group"
                >
                  <span className="text-lg font-medium text-foreground group-hover:text-primary">{lang.native}</span>
                  <span className="text-xs text-muted-foreground">{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Upload */}
        {step === "upload" && (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Upload Section */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-foreground">Upload Animal Health Data</h2>
                <button
                  onClick={() => setStep("language")}
                  className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1"
                >
                  <Globe className="w-4 h-4" />
                  Change Language
                </button>
              </div>

              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer ${
                  isDragging ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                }`}
              >
                <input
                  type="file"
                  id="diagnosis-upload"
                  className="hidden"
                  multiple
                  accept="image/*,video/*"
                  onChange={handleFileSelect}
                />
                <label htmlFor="diagnosis-upload" className="cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Upload className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-foreground font-medium mb-1">Drag & drop or click to upload</p>
                  <p className="text-sm text-muted-foreground">Upload images or videos of the affected area</p>
                </label>
              </div>

              {files.length > 0 && (
                <div className="mt-4 space-y-2">
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between bg-muted/50 rounded-lg px-3 py-2">
                      <div className="flex items-center gap-2">
                        {getFileIcon(file)}
                        <span className="text-sm text-foreground truncate max-w-[200px]">{file.name}</span>
                        <CheckCircle className="w-3 h-3 text-primary" />
                      </div>
                      <button onClick={() => removeFile(index)} className="text-muted-foreground hover:text-foreground">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6">
                <Button className="w-full" onClick={runDiagnosis} disabled={files.length === 0 || isAnalyzing}>
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      Run AI Diagnosis
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Preview Section */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">Preview</h2>

              {files.length === 0 && !isAnalyzing && (
                <div className="h-64 flex items-center justify-center text-center">
                  <div>
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                      <ImageIcon className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground">Upload files to see preview</p>
                  </div>
                </div>
              )}

              {files.length > 0 && !isAnalyzing && (
                <div className="grid grid-cols-2 gap-3">
                  {files.slice(0, 4).map((file, index) => (
                    <div key={index} className="aspect-square rounded-lg bg-muted overflow-hidden">
                      {file.type.startsWith("image/") ? (
                        <img
                          src={URL.createObjectURL(file) || "/placeholder.svg"}
                          alt={`Preview ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Video className="w-8 h-8 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {isAnalyzing && (
                <div className="h-64 flex items-center justify-center text-center">
                  <div>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Loader2 className="w-8 h-8 text-primary animate-spin" />
                    </div>
                    <p className="text-foreground font-medium">Analyzing your upload...</p>
                    <p className="text-sm text-muted-foreground mt-1">This usually takes less than 1 minute</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Step 3: Results */}
        {step === "result" && diagnosisResult && (
          <div className="bg-card rounded-2xl border border-border p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">Diagnosis Results</h2>
              <span className="text-sm text-muted-foreground flex items-center gap-1">
                <Globe className="w-4 h-4" />
                {selectedLang?.name}
              </span>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">Risk Assessment</span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    diagnosisResult.risk === "Low"
                      ? "bg-green-100 text-green-700"
                      : diagnosisResult.risk === "Medium"
                        ? "bg-amber-100 text-amber-700"
                        : "bg-red-100 text-red-700"
                  }`}
                >
                  {diagnosisResult.risk} Risk
                </span>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="w-4 h-4 text-amber-500" />
                  <span className="text-sm font-medium text-foreground">Preliminary Diagnosis</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{diagnosisResult.diagnosis}</p>
              </div>

              <div className="border-t border-border pt-4">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Recommendations</span>
                </div>
                <ul className="space-y-2">
                  {diagnosisResult.recommendations.map((rec, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-muted/50 rounded-lg p-4">
                <p className="text-xs text-muted-foreground">
                  <strong>Disclaimer:</strong> This AI diagnosis is for informational purposes only and should not
                  replace professional veterinary care. Please consult a qualified veterinarian for proper diagnosis and
                  treatment.
                </p>
              </div>

              <Button onClick={resetDiagnosis} variant="outline" className="w-full bg-transparent">
                Start New Diagnosis
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
