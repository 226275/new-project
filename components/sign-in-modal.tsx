"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Phone, MessageCircle, ArrowRight, Loader2 } from "lucide-react"

interface SignInModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  pendingAction: "upload" | "diagnosis" | null
}

export function SignInModal({ open, onOpenChange, pendingAction }: SignInModalProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [otpSent, setOtpSent] = useState(false)
  const [activeTab, setActiveTab] = useState("email")

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate sign in
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsLoading(false)
    onOpenChange(false)
    router.push("/diagnosis")
  }

  const handleSendOTP = async () => {
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 800))
    setIsLoading(false)
    setOtpSent(true)
  }

  const resetState = () => {
    setOtpSent(false)
    setIsLoading(false)
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        onOpenChange(open)
        if (!open) resetState()
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Sign in to continue</DialogTitle>
        </DialogHeader>

        <Tabs
          value={activeTab}
          onValueChange={(v) => {
            setActiveTab(v)
            resetState()
          }}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="email" className="text-xs sm:text-sm">
              <Mail className="w-4 h-4 mr-1 sm:mr-2" />
              Email
            </TabsTrigger>
            <TabsTrigger value="whatsapp" className="text-xs sm:text-sm">
              <MessageCircle className="w-4 h-4 mr-1 sm:mr-2" />
              WhatsApp
            </TabsTrigger>
            <TabsTrigger value="mobile" className="text-xs sm:text-sm">
              <Phone className="w-4 h-4 mr-1 sm:mr-2" />
              Mobile
            </TabsTrigger>
          </TabsList>

          <TabsContent value="email" className="mt-6">
            <form onSubmit={handleSignIn} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input id="email" type="email" placeholder="you@example.com" required />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                Continue with Email
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="whatsapp" className="mt-6">
            <form onSubmit={handleSignIn} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp number</Label>
                <div className="flex gap-2">
                  <Input className="w-20" defaultValue="+91" disabled />
                  <Input id="whatsapp" type="tel" placeholder="9876543210" required />
                </div>
              </div>
              {!otpSent ? (
                <Button type="button" className="w-full" onClick={handleSendOTP} disabled={isLoading}>
                  {isLoading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                  Send OTP via WhatsApp
                  <MessageCircle className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp-otp">Enter OTP</Label>
                    <Input id="whatsapp-otp" type="text" placeholder="Enter 6-digit OTP" maxLength={6} required />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                    Verify & Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </>
              )}
            </form>
          </TabsContent>

          <TabsContent value="mobile" className="mt-6">
            <form onSubmit={handleSignIn} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile number</Label>
                <div className="flex gap-2">
                  <Input className="w-20" defaultValue="+91" disabled />
                  <Input id="mobile" type="tel" placeholder="9876543210" required />
                </div>
              </div>
              {!otpSent ? (
                <Button type="button" className="w-full" onClick={handleSendOTP} disabled={isLoading}>
                  {isLoading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                  Send OTP via SMS
                  <Phone className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="mobile-otp">Enter OTP</Label>
                    <Input id="mobile-otp" type="text" placeholder="Enter 6-digit OTP" maxLength={6} required />
                  </div>
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                    Verify & Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </>
              )}
            </form>
          </TabsContent>
        </Tabs>

        <p className="text-xs text-center text-muted-foreground mt-4">
          By signing in, you agree to our Terms of Service and Privacy Policy
        </p>
      </DialogContent>
    </Dialog>
  )
}
