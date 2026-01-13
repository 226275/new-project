"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"

interface MediaItem {
  type: "image" | "video"
  src: string
  caption: string
}

const mediaItems: MediaItem[] = [
  {
    type: "image",
    src: "/farmer-with-cattle-in-rural-indian-village.jpeg",
    caption: "Field research with farmers",
  },
  {
    type: "video",
    src: "/veterinary-health-check-livestock-rural-india.mp4",
    caption: "Village-level animal health study",
  },
  {
    type: "image",
    src: "/indian-farmer-showing-goats-rural.jpeg",
    caption: "On-ground data collection",
  },
  {
    type: "image",
    src: "/rural-indian-village-with-buffaloes-and-farmers.jpeg",
    caption: "Community engagement session",
  },
  {
    type: "image",
    src: "/farmer-feeding-cows-rural-indian-farm.jpeg",
    caption: "Understanding livestock care practices",
  },
  // {
  //   type: "image",
  //   src: "/veterinary-research-team-rural-india-village.jpg",
  //   caption: "Research team in the field",
  // },
  {
    type: "image",
    src: "/indian-farmer-with-sheep-flock-village.jpeg",
    caption: "Documenting animal health patterns",
  },
  {
    type: "image",
    src: "/rural-india-dairy-farm-milk-collection.jpeg",
    caption: "Dairy farm visit",
  },
]

export function ResearchMediaGallery() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const animate = () => {
      if (!isPaused && !isDragging && scrollContainer) {
        scrollPosition += scrollSpeed

        // Reset scroll position when reaching the end of duplicated content
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0
        }

        scrollContainer.scrollLeft = scrollPosition
      }
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [isPaused, isDragging])

  // Touch/Mouse drag handlers for mobile swipe
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0))
    setScrollLeft(scrollRef.current?.scrollLeft || 0)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0))
    setScrollLeft(scrollRef.current?.scrollLeft || 0)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const x = e.touches[0].pageX - (scrollRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 2
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  // Duplicate items for seamless infinite scroll
  const duplicatedItems = [...mediaItems, ...mediaItems]

  return (
    <div
      ref={scrollRef}
      className="flex gap-4 overflow-x-hidden cursor-grab active:cursor-grabbing select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false)
        setIsDragging(false)
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="flex gap-4 pl-4">
        {duplicatedItems.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-[300px] sm:w-[350px] md:w-[400px] group">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-muted">
              {item.type === "image" ? (
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.caption}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 300px, (max-width: 768px) 350px, 400px"
                />
              ) : (
                <video src={item.src} muted loop playsInline autoPlay className="w-full h-full object-cover" />
              )}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-white text-sm font-medium">{item.caption}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
