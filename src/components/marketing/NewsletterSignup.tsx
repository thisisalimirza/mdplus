"use client";

import { useId, useState, type FormEvent } from "react";

type NewsletterSignupProps = {
  variant?: "light" | "dark";
  compact?: boolean;
};

export function NewsletterSignup({ variant = "light", compact = false }: NewsletterSignupProps) {
  const emailInputId = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const isDark = variant === "dark";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data?.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Couldn't reach the server. Check your connection and try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        role="status"
        className={`rounded-lg border p-4 text-sm ${
          isDark
            ? "border-yellow-400/40 bg-white/5 text-yellow-100"
            : "border-yellow-300 bg-yellow-50 text-rhino-700"
        }`}
      >
        <p className="font-semibold">You&apos;re in.</p>
        <p className="mt-1 opacity-80">
          First issue lands at{" "}
          <span className="font-mono">{email}</span>. No spam, unsubscribe any time.
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
      <label htmlFor={emailInputId} className="sr-only">
        Email address
      </label>
      <input
        id={emailInputId}
        type="email"
        required
        autoComplete="email"
        placeholder="you@hospital.org"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === "loading"}
        className={
          isDark
            ? `flex-1 rounded-md border border-white/20 bg-white/5 text-white placeholder:text-rhino-200 focus:border-yellow-500 focus:bg-white/10 disabled:opacity-50 ${compact ? "px-3 py-1.5 text-xs" : "px-4 py-3 text-base"}`
            : `flex-1 rounded-md border border-neutral-300 bg-neutral-0 text-rhino-700 placeholder:text-neutral-400 focus:border-denim-500 disabled:opacity-50 ${compact ? "px-3 py-1.5 text-xs" : "px-4 py-3 text-base"}`
        }
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className={
          isDark
            ? `inline-flex items-center justify-center rounded-md bg-yellow-500 font-semibold text-rhino-900 shadow-sm transition-colors hover:bg-yellow-400 disabled:opacity-60 ${compact ? "px-3 py-1.5 text-xs" : "px-5 py-3 text-base"}`
            : `inline-flex items-center justify-center rounded-md bg-denim-500 font-semibold text-white shadow-sm transition-colors hover:bg-denim-600 disabled:opacity-60 ${compact ? "px-3 py-1.5 text-xs" : "px-5 py-3 text-base"}`
        }
      >
        {status === "loading" ? "Subscribing…" : "Subscribe"}
      </button>
      {status === "error" && (
        <p className={`text-xs ${isDark ? "text-red-300" : "text-red-600"}`} role="alert">
          {errorMsg}
        </p>
      )}
    </form>
  );
}
