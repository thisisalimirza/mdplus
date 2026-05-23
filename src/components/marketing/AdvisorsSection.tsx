import Image from "next/image";
import type { Advisor } from "@/data/team";

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
        <h3 className="font-display text-sm font-bold leading-snug text-rhino-700">
          {advisor.name}
          <span className="mx-1.5 text-neutral-300">|</span>
          <span className="font-medium text-denim-600">{advisor.role}</span>
        </h3>
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
            The people who helped build this.
          </h2>
          <p className="mt-4 text-base text-neutral-500">
            Alumni and mentors who advised, led, and shaped MDplus over the years.
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
