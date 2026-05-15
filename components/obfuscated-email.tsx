'use client'

import { ReactNode } from 'react'

interface ObfuscatedEmailProps {
  className?: string
  children?: ReactNode
}

export default function ObfuscatedEmail({ className, children }: ObfuscatedEmailProps) {
  const parts = ['koilee', 'works', 'gmail', 'com']
  const email = `${parts[0]}.${parts[1]}@${parts[2]}.${parts[3]}`
  return (
    <a href={`mailto:${email}`} className={className}>
      {children ?? email}
    </a>
  )
}
