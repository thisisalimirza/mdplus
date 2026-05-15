"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, ArrowRight } from "lucide-react";

export default function UnlockPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/course-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push("/ai-course");
        router.refresh();
      } else {
        setError("Incorrect password. Try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center bg-rhino-900 px-6">
      <div className="w-full max-w-sm">
        {/* Logo mark */}
        <div className="mb-8 flex justify-center">
          <span className="inline-flex size-14 items-center justify-center rounded-xl bg-yellow-500 text-rhino-900">
            <Lock className="size-6" aria-hidden />
          </span>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur-sm">
          <h1 className="font-display text-xl font-bold text-white">
            Private preview
          </h1>
          <p className="mt-2 text-sm text-rhino-200">
            This page is currently invite-only. Enter the access code to
            continue.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label
                htmlFor="password"
                className="sr-only"
              >
                Access code
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                placeholder="Access code"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-lg border border-white/15 bg-white/8 px-4 py-3 text-sm text-white placeholder:text-rhino-400 focus:border-denim-400 focus:outline-none focus:ring-2 focus:ring-denim-400/30"
              />
            </div>

            {error && (
              <p className="text-sm font-medium text-red-400">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading || !password}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-yellow-500 px-5 py-3 text-sm font-semibold text-rhino-900 transition-colors hover:bg-yellow-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Checking…" : "Enter"}
              {!loading && <ArrowRight className="size-4" aria-hidden />}
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-rhino-500">
          MDplus · Private Preview
        </p>
      </div>
    </div>
  );
}
