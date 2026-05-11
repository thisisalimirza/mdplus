"use client";

import { useState, type FormEvent } from "react";

type NewsletterSignupProps = {
  variant?: "light" | "dark";
};

/**
 * Newsletter signup form. Currently a placeholder — captures the email
 * client-side and shows a friendly "we'll add you when we launch"
 * message. Wire to Beehiiv / Ghost / ConvertKit by replacing the
 * onSubmit handler with a fetch to your provider's API endpoint.
 */
export function NewsletterSignup({ variant = "light" }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    // TODO: replace with real provider call (Beehiiv / Ghost / ConvertKit).
    // For now: just acknowledge locally so the page feels alive.
    setSubmitted(true);
  };

  const isDark = variant === "dark";

  if (submitted) {
    return (
      <div
        role="status"
        className={`rounded-lg border p-4 text-sm ${
          isDark
            ? "border-yellow-400/40 bg-white/5 text-yellow-100"
            : "border-yellow-300 bg-yellow-50 text-rhino-700"
        }`}
      >
        <p className="font-semibold">Got it. We&apos;ll add you.</p>
        <p className="mt-1 opacity-80">
          The first issue ships once we finalize launch. We&apos;ll send it to{" "}
          <span className="font-mono">{email}</span> the moment it&apos;s ready.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 sm:flex-row"
      aria-label="Subscribe to the MDplus newsletter"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        autoComplete="email"
        placeholder="you@hospital.org"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={
          isDark
            ? "flex-1 rounded-md border border-white/20 bg-white/5 px-4 py-3 text-base text-white placeholder:text-rhino-200 focus:border-yellow-500 focus:bg-white/10"
            : "flex-1 rounded-md border border-neutral-300 bg-neutral-0 px-4 py-3 text-base text-rhino-700 placeholder:text-neutral-400 focus:border-denim-500"
        }
      />
      <button
        type="submit"
        className={
          isDark
            ? "inline-flex items-center justify-center rounded-md bg-yellow-500 px-5 py-3 text-base font-semibold text-rhino-900 shadow-sm transition-colors hover:bg-yellow-400"
            : "inline-flex items-center justify-center rounded-md bg-denim-500 px-5 py-3 text-base font-semibold text-white shadow-sm transition-colors hover:bg-denim-600"
        }
      >
        Subscribe
      </button>
    </form>
  );
}
