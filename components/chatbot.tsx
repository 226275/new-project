"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send } from "lucide-react"

interface Message {
  id: number
  text: string
  isBot: boolean
}

// Friendly dog character SVG component with animations
function DogCharacter({ isTyping }: { isTyping: boolean }) {
  return (
    <div className="relative w-16 h-16">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Dog face */}
        <circle cx="50" cy="50" r="40" fill="#D4A574" />
        {/* Ears */}
        <ellipse cx="20" cy="30" rx="12" ry="18" fill="#B8956E" />
        <ellipse cx="80" cy="30" rx="12" ry="18" fill="#B8956E" />
        {/* Inner ears */}
        <ellipse cx="20" cy="32" rx="6" ry="10" fill="#E8C9A8" />
        <ellipse cx="80" cy="32" rx="6" ry="10" fill="#E8C9A8" />
        {/* Snout */}
        <ellipse cx="50" cy="60" rx="20" ry="15" fill="#E8C9A8" />
        {/* Nose */}
        <ellipse cx="50" cy="55" rx="8" ry="6" fill="#3D3D3D" />
        {/* Eyes with blink animation */}
        <g className="animate-pulse">
          <ellipse
            cx="35"
            cy="42"
            rx="6"
            ry={isTyping ? 2 : 7}
            fill="#3D3D3D"
            className="transition-all duration-200"
          />
          <ellipse
            cx="65"
            cy="42"
            rx="6"
            ry={isTyping ? 2 : 7}
            fill="#3D3D3D"
            className="transition-all duration-200"
          />
          {/* Eye shine */}
          {!isTyping && (
            <>
              <circle cx="37" cy="40" r="2" fill="white" />
              <circle cx="67" cy="40" r="2" fill="white" />
            </>
          )}
        </g>
        {/* Mouth */}
        <path d="M 42 65 Q 50 72 58 65" stroke="#3D3D3D" strokeWidth="2" fill="none" />
        {/* Tongue when happy */}
        <ellipse cx="50" cy="70" rx="5" ry="4" fill="#E57373" />
      </svg>
      {/* Animated tail */}
      <div className="absolute -right-2 top-1/2 origin-left animate-[wag_0.5s_ease-in-out_infinite]">
        <svg width="20" height="30" viewBox="0 0 20 30">
          <path d="M 2 15 Q 10 5 18 10 Q 12 15 18 20 Q 10 25 2 15" fill="#D4A574" />
        </svg>
      </div>
    </div>
  )
}

// Response logic based on user input
function getBotResponse(userMessage: string): string {
  const message = userMessage.toLowerCase()

  // Services
  if (message.includes("service") || message.includes("what do you") || message.includes("what can")) {
    return "FndlyCare provides AI-powered preliminary health diagnosis for pets and animals. You can upload images or videos of your pet or animal, and our AI analyzes the condition quickly to guide you on next steps."
  }

  // AI Diagnosis
  if (message.includes("diagnosis") && (message.includes("how") || message.includes("work"))) {
    return "You simply upload a photo or video of your pet or animal. Our AI analyzes visible symptoms and provides a preliminary health insight in less than one minute. This helps you understand the condition early and decide the next steps."
  }

  // Upload
  if (
    message.includes("upload") ||
    message.includes("file") ||
    message.includes("want diagnosis") ||
    message.includes("start diagnosis")
  ) {
    return "Click on the 'Upload' button and select an image or video of your pet or animal. Once uploaded, select your preferred language and start the AI diagnosis."
  }

  // Signup
  if (
    message.includes("sign up") ||
    message.includes("signup") ||
    message.includes("register") ||
    message.includes("account") ||
    message.includes("login")
  ) {
    return "Yes, a simple sign-up is required to access AI diagnosis. You can sign up using your email or mobile number for quick and easy access."
  }

  // Contact
  if (
    message.includes("contact") ||
    message.includes("support") ||
    message.includes("help") ||
    message.includes("email") ||
    message.includes("reach")
  ) {
    return "You can contact us at support@fndlycare.com. Please send us your query, and our executive will reach out to you soon."
  }

  // Thanks / Bye
  if (message.includes("thank") || message.includes("bye") || message.includes("goodbye")) {
    return "Thank you for contacting FndlyCare. We're always here to support you and your animals. 🐾"
  }

  // Greetings
  if (message.includes("hi") || message.includes("hello") || message.includes("hey")) {
    return "Hello! How can I help you today? I can assist with AI diagnosis, file uploads, sign-up guidance, or any questions about FndlyCare services."
  }

  // Price / Cost
  if (message.includes("price") || message.includes("cost") || message.includes("free") || message.includes("pay")) {
    return "Our AI diagnosis service is designed to be accessible. For specific pricing details, please contact us at support@fndlycare.com and our team will assist you."
  }

  // Language
  if (message.includes("language") || message.includes("telugu") || message.includes("hindi")) {
    return "FndlyCare supports multiple languages including Telugu, Hindi, English, Urdu, Bengali, Gujarati, Marathi, and Malayalam. You can select your preferred language before starting the diagnosis."
  }

  // Default response
  return "I'm here to help! You can ask me about:\n• Our AI diagnosis service\n• How to upload files\n• Sign-up process\n• Contact support\n\nWhat would you like to know?"
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your FndlyCare assistant 🐾\nI'm here to help you with pet and animal health support, AI diagnosis, and general queries.\nHow can I help you today?",
      isBot: true,
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputValue),
        isBot: true,
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend()
    }
  }

  return (
    <>
      {/* Custom animation styles */}
      <style jsx global>{`
        @keyframes wag {
          0%, 100% { transform: rotate(-15deg); }
          50% { transform: rotate(15deg); }
        }
      `}</style>

      {/* Chat button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-primary-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl ${isOpen ? "hidden" : ""}`}
      >
        <MessageCircle className="h-5 w-5" />
        <span className="font-medium">Chat with us</span>
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex h-[500px] w-[380px] flex-col overflow-hidden rounded-2xl border bg-background shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between bg-primary p-4 text-primary-foreground">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-white/20 p-1">
                <DogCharacter isTyping={isTyping} />
              </div>
              <div>
                <h3 className="font-semibold">FndlyCare Assistant</h3>
                <p className="text-xs opacity-90">Always here to help</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="rounded-full p-1 transition-colors hover:bg-white/20">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.isBot
                      ? "bg-muted text-foreground rounded-tl-none"
                      : "bg-primary text-primary-foreground rounded-tr-none"
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-2xl rounded-tl-none px-4 py-2">
                  <div className="flex gap-1">
                    <span
                      className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <span
                      className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <span
                      className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t p-4">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button onClick={handleSend} size="icon" disabled={!inputValue.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
