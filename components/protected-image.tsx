'use client'

import Image from 'next/image'

type Variant = 'hero' | 'avatar'

interface ProtectedImageProps {
  /** 'hero' is the large portrait; 'avatar' is the compact mobile version. */
  variant?: Variant
}

const variants: Record<Variant, { frame: string; marks: number; markClass: string }> = {
  hero: {
    frame: 'w-64 md:w-80 rounded-3xl border-4',
    marks: 6,
    markClass: 'text-xs',
  },
  avatar: {
    // Square crop keeps the face readable at 80px instead of a sliver of portrait.
    frame: 'w-20 rounded-2xl border-2',
    marks: 3,
    markClass: 'text-[6px]',
  },
}

export default function ProtectedImage({ variant = 'hero' }: ProtectedImageProps) {
  const prevent = (e: React.SyntheticEvent) => e.preventDefault()
  const { frame, marks, markClass } = variants[variant]
  const aspect = variant === 'avatar' ? 'aspect-square' : 'aspect-[1684/2528]'

  return (
    <div
      className={`relative ${frame} ${aspect} overflow-hidden border-white shadow-2xl bg-muted select-none`}
      onContextMenu={prevent}
      onDragStart={prevent}
    >
      <Image
        src="/profile.jpg"
        alt="李科邑"
        width={1684}
        height={2528}
        className={`w-full h-full pointer-events-none ${
          variant === 'avatar' ? 'object-cover object-top' : 'object-cover'
        }`}
        priority
        unoptimized
        draggable={false}
      />

      {/* Transparent interaction blocker */}
      <div className="absolute inset-0" />

      {/* Diagonal watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        {[...Array(marks)].map((_, i) => (
          <span
            key={i}
            className={`absolute text-white/20 font-medium select-none whitespace-nowrap rotate-[-35deg] ${markClass}`}
            style={{
              top: `${10 + i * (variant === 'avatar' ? 30 : 18)}%`,
              left: '-10%',
              right: '-10%',
              textAlign: 'center',
            }}
          >
            © 李科邑 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; © 李科邑
          </span>
        ))}
      </div>
    </div>
  )
}
