import { useState } from 'react';
import Reveal from './Reveal';
import Button from './Button';
import TextReveal from './TextReveal';
import { cn } from '@/utils/cn';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: Record<string, FormDataEntryValue>) => {
    const newErrors: Record<string, string> = {};

    const name = (data.name as string).trim();
    if (!name || name.length < 2) {
      newErrors.name = 'Please enter your name (minimum 2 characters).';
    }

    const email = (data.email as string).trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    const message = (data.message as string).trim();
    if (!message || message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters.';
    }

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const newErrors = validate(data);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStatus('loading');

    // Simulate API call
    const formEl = e.currentTarget;
    setTimeout(() => {
      setStatus('success');
      formEl.reset();
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const inputBase =
    'w-full bg-transparent border-b pb-3 font-body text-sm text-obsidian focus:outline-none transition-colors duration-300 rounded-none';
  const inputOk = 'border-obsidian/15 focus:border-obsidian';
  const inputErr = 'border-terracotta';

  return (
    <section
      id="contact"
      aria-label="Contact"
      className="py-24 md:py-32 lg:py-40 bg-bone px-mobile md:px-tablet lg:px-desktop-lg"
    >
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <TextReveal
            text="Inquiries."
            delay={0.1}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-obsidian tracking-tighter"
          />
          <Reveal delay={0.3} type="fade-up">
            <p className="font-body text-[10px] md:text-xs text-obsidian/50 uppercase tracking-[0.2em] mt-6">
              Schedule a consultation or ask a question.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.3} type="fade-up">
          {status === 'success' ? (
            <div
              className="bg-sand/50 border border-obsidian/5 p-12 md:p-16 text-center"
              role="alert"
            >
              <h3 className="font-display text-3xl text-obsidian mb-4">
                Thank you.
              </h3>
              <p className="font-body text-xs text-obsidian/60 uppercase tracking-[0.2em]">
                Your message has been received. We will be in touch shortly.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-10"
              noValidate
              aria-label="Contact form"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Name */}
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="block font-body text-[10px] uppercase tracking-[0.2em] text-obsidian/70 mb-3"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={cn(inputBase, errors.name ? inputErr : inputOk)}
                  />
                  {errors.name && (
                    <p
                      id="name-error"
                      role="alert"
                      className="mt-2 text-[10px] text-terracotta uppercase tracking-wider"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="block font-body text-[10px] uppercase tracking-[0.2em] text-obsidian/70 mb-3"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={cn(inputBase, errors.email ? inputErr : inputOk)}
                  />
                  {errors.email && (
                    <p
                      id="email-error"
                      role="alert"
                      className="mt-2 text-[10px] text-terracotta uppercase tracking-wider"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block font-body text-[10px] uppercase tracking-[0.2em] text-obsidian/70 mb-3"
                  >
                    Phone Number{' '}
                    <span className="text-obsidian/30">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    autoComplete="tel"
                    className={cn(inputBase, inputOk)}
                  />
                </div>

                {/* Inquiry Type */}
                <div>
                  <label
                    htmlFor="inquiry"
                    className="block font-body text-[10px] uppercase tracking-[0.2em] text-obsidian/70 mb-3"
                  >
                    Inquiry Type
                  </label>
                  <select
                    id="inquiry"
                    name="inquiry"
                    className={cn(inputBase, inputOk, 'appearance-none cursor-pointer')}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="bespoke">Bespoke Clothing</option>
                    <option value="wholesale">Wholesale</option>
                    <option value="collab">Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <label
                  htmlFor="message"
                  className="block font-body text-[10px] uppercase tracking-[0.2em] text-obsidian/70 mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? 'message-error' : undefined
                  }
                  className={cn(
                    inputBase,
                    'resize-none',
                    errors.message ? inputErr : inputOk
                  )}
                />
                {errors.message && (
                  <p
                    id="message-error"
                    role="alert"
                    className="mt-2 text-[10px] text-terracotta uppercase tracking-wider"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="pt-4 flex justify-start md:justify-end">
                <Button
                  type="submit"
                  variant="primary"
                  disabled={status === 'loading'}
                  className="w-full md:w-auto"
                >
                  {status === 'loading' ? 'Sending…' : 'Send Message'}
                </Button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
