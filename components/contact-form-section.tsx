'use client'

import { Mail, Check, Clock } from 'lucide-react'
import { useState } from 'react'
import FadeIn from '@/components/fade-in'
import type { SiteContent, Locale } from '@/lib/i18n'

interface ContactFormSectionProps {
  content: SiteContent['contactForm']
  locale?: Locale
}

const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT

const inputClass =
  'w-full px-4 py-2 rounded-lg border border-border bg-background hover:border-foreground/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200 disabled:opacity-50'

export default function ContactFormSection({ content, locale = 'zh' }: ContactFormSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
    website: '', // honeypot — must stay empty
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.contact.trim() || !formData.message.trim()) {
      setStatus('error')
      setErrorMessage(content.requiredFields)
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    if (formData.website) {
      // Honeypot tripped — silently succeed.
      setStatus('success')
      setFormData({ name: '', contact: '', message: '', website: '' })
      setTimeout(() => setStatus('idle'), 5000)
      return
    }

    if (!ENDPOINT) {
      setStatus('error')
      setErrorMessage(content.submitError)
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    setStatus('submitting')
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        // text/plain keeps it a CORS "simple request" — no preflight to Apps Script.
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          name: formData.name,
          contact: formData.contact,
          message: formData.message,
          locale,
        }),
      })

      if (!response.ok) throw new Error('Request failed')

      setStatus('success')
      setFormData({ name: '', contact: '', message: '', website: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setStatus('error')
      setErrorMessage(content.submitError)
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <section className="py-20 px-4 md:px-8 border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column — the invitation */}
          <FadeIn>
            <div className="lg:sticky lg:top-24">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">{content.heading}</h2>
              </div>

              <p className="text-foreground/60 leading-relaxed mb-8">{content.description}</p>

              <ul className="space-y-3 mb-8">
                {content.reasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{reason}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2 text-sm text-foreground/50">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>{content.responseTime}</span>
              </div>
            </div>
          </FadeIn>

          {/* Right column — the form */}
          <FadeIn delay={80}>
            <form onSubmit={handleSubmit} className="space-y-6 relative" noValidate>
              {/* Honeypot — hidden from users, visible to dumb bots */}
              <div className="absolute left-[-9999px] top-auto w-px h-px overflow-hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  {content.nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={content.namePlaceholder}
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  maxLength={100}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-foreground mb-2">
                  {content.contactLabel}
                </label>
                <input
                  type="text"
                  id="contact"
                  name="contact"
                  placeholder={content.contactPlaceholder}
                  value={formData.contact}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  maxLength={200}
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  {content.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder={content.messagePlaceholder}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                  rows={6}
                  maxLength={2000}
                  className={`${inputClass} resize-y`}
                />
              </div>

              {status === 'success' && (
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-700 text-sm">
                  {content.submitSuccess}
                </div>
              )}
              {status === 'error' && (
                <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/30 text-destructive text-sm">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3 px-6 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98] transition-all duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
              >
                {status === 'submitting' ? content.submitting : content.submitButton}
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
