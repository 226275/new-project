"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Upload, AlertCircle, CheckCircle, ChevronRight } from "lucide-react"

export function DemoSection() {
  const [demoStep, setDemoStep] = useState(0)

  const demoSteps = [
    { label: "Upload", active: demoStep >= 0 },
    { label: "Analyzing", active: demoStep >= 1 },
    { label: "Results", active: demoStep >= 2 },
  ]

  return (
    <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">See It In Action</h2>
          <p className="text-lg text-muted-foreground">
            Experience how FndlyCare AI diagnoses animal health conditions.
          </p>
        </div>

        <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg">
          {/* Dashboard Header */}
          <div className="bg-muted/50 px-6 py-4 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">FC</span>
              </div>
              <span className="font-semibold text-foreground">AI Diagnosis</span>
            </div>
            <div className="flex items-center gap-2">
              {demoSteps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      step.active ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {step.label}
                  </div>
                  {index < demoSteps.length - 1 && <ChevronRight className="w-4 h-4 text-muted-foreground mx-1" />}
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6 lg:p-10">
            <div className="grid lg:grid-cols-2 gap-10">
              {/* Upload Section */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Upload Symptoms</h3>
                <div
                  className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                    demoStep >= 1 ? "border-primary bg-primary/5" : "border-border"
                  }`}
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Upload className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground mb-2">
                    {demoStep >= 1 ? "Image uploaded successfully" : "Drag & drop or click to upload"}
                  </p>
                  <p className="text-xs text-muted-foreground">Supports: Images, Videos, Text descriptions</p>
                </div>

                <div className="mt-6">
                  <h4 className="text-sm font-medium text-foreground mb-3">Sample Input</h4>
                  <div className="bg-muted/50 rounded-lg p-4 text-sm text-muted-foreground">
                    "My 3-year-old Labrador has been lethargic for 2 days, loss of appetite, and shows mild swelling
                    around the abdomen area."
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">AI Diagnosis Output</h3>
                <div className={`rounded-xl border border-border p-6 ${demoStep >= 2 ? "opacity-100" : "opacity-50"}`}>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-medium text-foreground">Risk Assessment</span>
                    <span className="px-3 py-1 rounded-full bg-chart-4/20 text-chart-4 text-xs font-medium">
                      Medium Risk
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <AlertCircle className="w-4 h-4 text-chart-4" />
                        <span className="text-sm font-medium text-foreground">Preliminary Diagnosis</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Possible gastric issues or early-stage bloat. Requires attention within 24-48 hours.
                      </p>
                    </div>

                    <div className="border-t border-border pt-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">Recommendations</span>
                      </div>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Monitor food and water intake closely</li>
                        <li>• Keep the dog calm and avoid exercise</li>
                        <li>• Schedule vet visit within 24 hours</li>
                        <li>• If symptoms worsen, seek emergency care</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <Button
                    variant={demoStep === 0 ? "default" : "outline"}
                    size="sm"
                    onClick={() => setDemoStep(1)}
                    disabled={demoStep >= 1}
                  >
                    Upload Sample
                  </Button>
                  <Button
                    variant={demoStep === 1 ? "default" : "outline"}
                    size="sm"
                    onClick={() => setDemoStep(2)}
                    disabled={demoStep < 1 || demoStep >= 2}
                  >
                    Run AI Analysis
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => setDemoStep(0)} disabled={demoStep === 0}>
                    Reset
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
