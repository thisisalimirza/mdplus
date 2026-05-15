"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Waitlist logic to be wired up before launch
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-yellow-400/30 bg-yellow-500/10 px-6 py-4">
        <CheckCircle className="size-5 shrink-0 text-yellow-400" aria-hidden />
        <p className="text-sm font-medium text-yellow-200">
          You&apos;re on the list. We&apos;ll reach out to{" "}
          <span className="font-semibold">{email}</span> when early access
          opens.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
      <label htmlFor="waitlist-email" className="sr-only">
        Email address
      </label>
      <input
        id="waitlist-email"
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 rounded-lg border border-white/15 bg-white/8 px-4 py-3 text-sm text-white placeholder:text-rhino-400 focus:border-denim-400 focus:outline-none focus:ring-2 focus:ring-denim-400/30"
      />
      <button
        type="submit"
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-yellow-500 px-6 py-3 text-sm font-semibold text-rhino-900 transition-colors hover:bg-yellow-400"
      >
        Join the waitlist
        <ArrowRight className="size-4" aria-hidden />
      </button>
    </form>
  );
}
