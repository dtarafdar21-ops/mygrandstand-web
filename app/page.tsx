import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[100svh] bg-[var(--background)] text-[var(--foreground)]">
      <section className="mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col items-center justify-center px-6 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-12 lg:px-10">
        <div className="flex w-full max-w-3xl flex-col items-center text-center sm:items-start sm:text-left">
          <div className="mb-8 flex items-center gap-3 self-center sm:self-start">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-sm font-semibold tracking-[0.3em] text-emerald-300">
              MGS
            </div>
            <div className="flex flex-col">
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-emerald-300/90">
                MyGrandStand
              </span>
              <span className="text-sm font-medium tracking-[0.3em] text-slate-400">
                MYGRANDSTAND
              </span>
            </div>
          </div>

          <p className="mb-4 text-[clamp(1rem,1.8vw,1.2rem)] font-medium uppercase tracking-[0.32em] text-emerald-300/90 sm:mb-5">
            My Sports. My Way.
          </p>

          <h1 className="max-w-[10ch] text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-white sm:max-w-[12ch] lg:max-w-[13ch]">
            Every Fan Deserves Their Own Grandstand.
          </h1>

          <p className="mt-6 max-w-2xl text-[clamp(1rem,2vw,1.2rem)] leading-8 text-slate-300 sm:mt-8">
            A new generation of sports companion apps designed around the fan—not the sport.
          </p>

          <Link
            href="https://football.mygrandstand.cc"
            className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full border border-emerald-400/50 bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-colors duration-200 hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111f] sm:min-h-12 sm:px-7 sm:py-4 sm:text-base"
          >
            Open MyGrandStand Football
          </Link>
        </div>
      </section>
    </main>
  );
}
