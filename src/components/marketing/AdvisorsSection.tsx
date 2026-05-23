import Image from "next/image";
import type { Advisor } from "@/data/team";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

function AdvisorCard({ advisor }: { advisor: Advisor }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="relative size-28 overflow-hidden rounded-full shadow-md ring-2 ring-white sm:size-32">
        <Image
          src={advisor.imageSrc}
          alt={advisor.name}
          fill
          sizes="(max-width: 640px) 112px, 128px"
          className="object-cover"
        />
      </div>
      <div className="mt-4 px-1">
        <div className="flex items-start justify-center gap-2">
          <h3 className="font-display text-sm font-bold leading-snug text-rhino-700">
            {advisor.name}
            <span className="mx-1.5 text-neutral-300">|</span>
            <span className="font-medium text-denim-600">{advisor.role}</span>
          </h3>
          {advisor.linkedIn && (
            <a
              href={advisor.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${advisor.name} on LinkedIn`}
              className="mt-0.5 shrink-0 text-neutral-400 transition-colors hover:text-denim-600"
            >
              <LinkedInIcon className="size-3.5" />
            </a>
          )}
        </div>
        {advisor.funFact && (
          <p className="mt-2 text-xs italic leading-relaxed text-neutral-500">
            &ldquo;{advisor.funFact}&rdquo;
          </p>
        )}
      </div>
    </div>
  );
}

export function AdvisorsSection({ advisors }: { advisors: Advisor[] }) {
  return (
    <section className="border-t border-neutral-100 bg-neutral-50 py-20 md:py-28">
      <div className="mx-auto max-w-(--container-max) px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-denim-600">
            Advisors
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-rhino-700 md:text-4xl">
            The people in our corner.
          </h2>
          <p className="mt-4 text-base text-neutral-500">
            Former leaders and mentors who continue to advise, connect, and open doors for the community.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {advisors.map((a) => (
            <AdvisorCard key={a.name} advisor={a} />
          ))}
        </div>
      </div>
    </section>
  );
}
