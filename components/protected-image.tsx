'use client'

import Image from 'next/image'

export default function ProtectedImage() {
  const prevent = (e: React.SyntheticEvent) => e.preventDefault()

  return (
    <div
      className="relative w-64 md:w-80 aspect-[1684/2528] rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-muted select-none"
      onContextMenu={prevent}
      onDragStart={prevent}
    >
      <Image
        src="/profile.jpg"
        alt="李科邑"
        width={1684}
        height={2528}
        className="w-full h-full object-cover pointer-events-none"
        priority
        unoptimized
        draggable={false}
      />

      {/* Transparent interaction blocker */}
      <div className="absolute inset-0" />

      {/* Diagonal watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="absolute text-white/20 text-xs font-medium select-none whitespace-nowrap rotate-[-35deg]"
            style={{ top: `${10 + i * 18}%`, left: '-10%', right: '-10%', textAlign: 'center' }}
          >
            © 李科邑 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; © 李科邑
          </span>
        ))}
      </div>
    </div>
  )
}
