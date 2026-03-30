'use client'

import { ReactNode } from 'react'

interface ObfuscatedEmailProps {
  className?: string
  children?: ReactNode
}

export default function ObfuscatedEmail({ className, children }: ObfuscatedEmailProps) {
  const parts = ['lik75990', 'gmail', 'com']
  const email = `${parts[0]}@${parts[1]}.${parts[2]}`
  return (
    <a href={`mailto:${email}`} className={className}>
      {children ?? email}
    </a>
  )
}
