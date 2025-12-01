"use client"

import { VideoPlayer, type VideoPlayerRef } from "@/registry/default/ui/video-player"
import { useRef } from "react"

export default function VideoPlayerTimestampDemo() {
  const playerRef = useRef<VideoPlayerRef>(null)

  const timestamps = [
    { label: "Intro", time: 0 },
    { label: "Bunny Wakes Up", time: 35 },
    { label: "Butterfly", time: 60 },
    { label: "Attack", time: 180 },
    { label: "Revenge", time: 300 },
    { label: "Credits", time: 580 },
  ]

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      <VideoPlayer
        ref={playerRef}
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
        title="Big Buck Bunny"
        chapters={timestamps.map(t => ({ title: t.label, startTime: t.time, endTime: 0 }))}
      />

      <div className="grid gap-4 p-4 border rounded-lg bg-card">
        <div className="space-y-1">
          <h3 className="font-semibold">Timestamps</h3>
          <p className="text-sm text-muted-foreground">
            Click on a timestamp to jump to that part of the video.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {timestamps.map((ts) => (
            <button
              key={ts.label}
              onClick={() => playerRef.current?.seek(ts.time)}
              className="px-3 py-1.5 text-sm font-medium rounded-md bg-secondary hover:bg-secondary/80 transition-colors flex items-center gap-2"
            >
              <span className="text-primary">{formatTime(ts.time)}</span>
              <span>{ts.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function formatTime(time: number) {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  return `${minutes}:${seconds.toString().padStart(2, "0")}`
}
