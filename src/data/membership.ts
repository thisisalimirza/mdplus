/**
 * Premium membership pricing + benefits. Single source of truth — edit
 * here and both the homepage and /membership pick it up.
 *
 * Recommended structure (Ali — react if you want to change):
 *   • $99/year for residents/physicians  ← below the $100 psychological line
 *   • $39/year for verified med students  ← captures the price-sensitive cohort
 *   • $79/year locked in for life for the first 100 paying members
 *
 * Why annual-only: simplifies billing, locks commitment, smoother revenue
 * curve than monthly churn for a small org.
 */

export const PREMIUM_PRICE = {
  /** Headline price. Show this as the default. */
  standard: { amount: 99, cadence: "year", label: "per year" },
  /** Discounted student rate; show as a secondary line. */
  student: { amount: 39, cadence: "year", label: "per year, med students" },
  /** Founding-member promo — lifetime lock-in for the first 100 sign-ups. */
  founding: {
    amount: 79,
    cadence: "year",
    label: "for life (first 100 members)",
    cap: 100,
  },
} as const;

export const PREMIUM_INCLUDES = [
  {
    title: "All Skills Library courses, free.",
    body: "Every paid course on skills.mdplus.community is included. No more buying them à la carte.",
  },
  {
    title: "Priority Catalyst admission.",
    body: "Premium members go to the front of the queue for our flagship cohort program.",
  },
  {
    title: "Members-only AMAs and events.",
    body: "Recurring sessions with operators, founders, and investors. Closed to free members.",
  },
  {
    title: "Premium badge in Slack.",
    body: "Visible signal that you're invested in the community. Looks nice. Helps with credibility.",
  },
  {
    title: "Vote on what we build next.",
    body: "Premium members get a say in program direction, partner choices, and content priorities.",
  },
  {
    title: "Free entry to future programs.",
    body: "Datathons, competitions, and special workshops, all included.",
  },
] as const;

export const FREE_INCLUDES = [
  "MDplus Slack community (5,000+ members)",
  "All sub-community channels",
  "Newsletter",
  "Articles and podcast",
  "Free Skills Library resources",
  "Member directory",
  "Regional meetups",
] as const;

export const FAQ = [
  {
    q: "Can I just buy individual courses without subscribing?",
    a: "Yes. Every course on skills.mdplus.community has its own price and you can buy them one by one. Premium just bundles everything for one annual fee, usually cheaper if you'd take more than one course a year.",
  },
  {
    q: "How do I get the med-student rate?",
    a: "Sign up with your school .edu email or upload a current student ID. We verify manually within 1 business day and apply the discount.",
  },
  {
    q: "Is the Slack community really free forever?",
    a: "Yes, and that's not changing. Premium is for paid programs and content. The community itself is and will remain free.",
  },
  {
    q: "Can I cancel?",
    a: "Yes, anytime. Annual plans don't auto-renew unless you opt in.",
  },
  {
    q: "We're a 501(c)3. Is this tax-deductible?",
    a: "Donations are tax-deductible. Premium membership is a paid subscription for goods and services, so it's not deductible the same way. Talk to your accountant for your specific situation.",
  },
] as const;
