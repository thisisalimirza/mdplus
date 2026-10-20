"use client";

import { useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import {
  BUDGET_RANGES,
  EVENTS,
  HEARD_ABOUT,
  HONEYPOT_FIELD,
  INTEREST_TYPES,
  TIMELINES,
} from "@/lib/partner-interest";

type Option = { readonly value: string; readonly label: string };
type Errors = Record<string, string>;

const inputClass =
  "mt-2 block w-full rounded-md border border-neutral-300 bg-neutral-0 px-4 py-3 text-base text-rhino-700 placeholder:text-neutral-400 focus:border-denim-500 focus:outline-none focus:ring-2 focus:ring-denim-500/20 aria-[invalid=true]:border-red-500 disabled:opacity-50";
const labelClass = "block text-sm font-semibold text-rhino-700";

function Required() {
  return (
    <>
      <span aria-hidden className="text-red-600"> *</span>
      <span className="sr-only"> (required)</span>
    </>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-1.5 text-sm text-red-600">
      {message}
    </p>
  );
}

function TextField(props: {
  name: string;
  label: string;
  required?: boolean;
  type?: string;
  autoComplete?: string;
  placeholder?: string;
  error?: string;
}) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {props.label}
        {props.required && <Required />}
      </label>
      <input
        id={id}
        name={props.name}
        type={props.type ?? "text"}
        required={props.required}
        autoComplete={props.autoComplete}
        placeholder={props.placeholder}
        aria-invalid={Boolean(props.error)}
        aria-describedby={props.error ? `${id}-error` : undefined}
        className={inputClass}
      />
      <FieldError id={`${id}-error`} message={props.error} />
    </div>
  );
}

function SelectField(props: { name: string; label: string; options: readonly Option[]; hint?: ReactNode }) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {props.label}
      </label>
      <select id={id} name={props.name} defaultValue="" className={inputClass}>
        <option value="">Choose one (optional)</option>
        {props.options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function CheckboxGroup(props: {
  name: string;
  legend: string;
  hint: string;
  options: readonly Option[];
  error?: string;
}) {
  const id = useId();
  return (
    <fieldset aria-describedby={`${id}-hint${props.error ? ` ${id}-error` : ""}`}>
      <legend className={labelClass}>
        {props.legend}
        <Required />
      </legend>
      <p id={`${id}-hint`} className="mt-1 text-sm text-neutral-500">
        {props.hint}
      </p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {props.options.map((o) => (
          <label
            key={o.value}
            className="flex cursor-pointer items-center gap-3 rounded-md border border-neutral-200 px-4 py-3 text-sm text-rhino-700 transition-colors hover:border-denim-400 has-[:checked]:border-denim-500 has-[:checked]:bg-denim-50"
          >
            <input
              type="checkbox"
              name={props.name}
              value={o.value}
              className="size-4 accent-denim-500"
            />
            {o.label}
          </label>
        ))}
      </div>
      <FieldError id={`${id}-error`} message={props.error} />
    </fieldset>
  );
}

export function PartnerInterestForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading") return;
    const fd = new FormData(e.currentTarget);
    const payload: Record<string, unknown> = Object.fromEntries(fd.entries());
    payload.interestTypes = fd.getAll("interestTypes");
    payload.events = fd.getAll("events");

    setStatus("loading");
    setErrorMsg("");
    setErrors({});

    try {
      const res = await fetch("/api/partner-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setSubmittedName(String(payload.name ?? "").split(" ")[0]);
        setStatus("success");
        requestAnimationFrame(() => statusRef.current?.focus());
        return;
      }
      const data = await res.json().catch(() => ({}));
      setErrors(data?.fields ?? {});
      setErrorMsg(data?.error ?? "Something went wrong. Please try again.");
      setStatus("error");
    } catch {
      setErrorMsg("Couldn't reach the server. Check your connection and try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        className="flex flex-col items-start gap-4 rounded-xl border border-yellow-300 bg-yellow-50 p-6 outline-none md:p-8"
      >
        <CheckCircle className="size-8 text-yellow-600" aria-hidden />
        <h3 className="font-display text-2xl font-bold text-rhino-700">
          Thanks{submittedName ? `, ${submittedName}` : ""}! We&apos;ve got it.
        </h3>
        <p className="text-neutral-600">
          Your note is with the MDplus executive team. Someone will reach out,
          usually within a week, and we&apos;ll keep you in mind as new events
          and opportunities come up throughout the year.
        </p>
        <a
          href="/partners"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-denim-600 hover:text-denim-700"
        >
          Back to For Partners
          <ArrowRight className="size-4" aria-hidden />
        </a>
      </div>
    );
  }

  const disabled = status === "loading";

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate aria-label="Partner interest form" className="space-y-8">
      {/* Honeypot: hidden from people and assistive tech; bots fill it in. */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Fax number
          <input type="text" name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <fieldset disabled={disabled} className="space-y-8">
        <div className="grid gap-6 sm:grid-cols-2">
          <TextField name="name" label="Your name" required autoComplete="name" error={errors.name} />
          <TextField name="email" label="Work email" type="email" required autoComplete="email" placeholder="you@company.com" error={errors.email} />
          <TextField name="organization" label="Company / organization" required autoComplete="organization" error={errors.organization} />
          <TextField name="role" label="Role / title" required autoComplete="organization-title" error={errors.role} />
          <TextField name="website" label="Website" type="url" autoComplete="url" placeholder="company.com" />
          <TextField name="phone" label="Phone" type="tel" autoComplete="tel" />
        </div>

        <CheckboxGroup
          name="interestTypes"
          legend="How would you like to work with us?"
          hint="Select all that apply."
          options={INTEREST_TYPES}
          error={errors.interestTypes}
        />

        <CheckboxGroup
          name="events"
          legend="Which events or programs?"
          hint="Select all that apply. Choose General / Year-round if it isn't tied to one event."
          options={EVENTS}
          error={errors.events}
        />

        <div className="grid gap-6 sm:grid-cols-2">
          <SelectField name="budget" label="Budget range" options={BUDGET_RANGES} />
          <SelectField name="timeline" label="Timeline" options={TIMELINES} />
        </div>

        <MessageField error={errors.message} />

        <SelectField name="heardAbout" label="How did you hear about MDplus?" options={HEARD_ABOUT} />
      </fieldset>

      {status === "error" && (
        <p role="alert" className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={disabled}
        className="inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-rhino-700 px-6 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-rhino-600 disabled:opacity-60 sm:w-auto"
      >
        {disabled ? "Sending…" : "Send to the MDplus team"}
        {!disabled && <ArrowRight className="size-4" aria-hidden />}
      </button>
    </form>
  );
}

function MessageField({ error }: { error?: string }) {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        What do you have in mind?
        <Required />
      </label>
      <textarea
        id={id}
        name="message"
        rows={5}
        required
        placeholder="A sentence or two is plenty: goals, audience, ideas, constraints."
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={inputClass}
      />
      <FieldError id={`${id}-error`} message={error} />
    </div>
  );
}
