import Link from "next/link";
import { BrandLockup } from "../components/BrandLockup";

export default function Home() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <section className="mx-auto flex w-full max-w-6xl flex-col px-6 pt-6 pb-10 sm:px-8 sm:pt-8 sm:pb-12 md:pt-10 md:pb-12 lg:px-10">
        <div className="flex w-full max-w-3xl flex-col items-start text-left">
          <BrandLockup />

          <h1 className="max-w-[10ch] font-semibold leading-[0.95] tracking-[-0.03em] text-white [font-family:ui-rounded,SF_Pro_Rounded,system-ui,-apple-system,BlinkMacSystemFont,Segoe_UI,sans-serif] text-[clamp(2.5rem,6vw,5rem)] sm:max-w-[12ch] lg:max-w-[13ch]">
            Every Fan Deserves Their Own Grandstand.
          </h1>

          <p className="mt-6 max-w-2xl text-[clamp(1rem,2vw,1.2rem)] leading-8 text-slate-300 sm:mt-8">
            A new generation of sports companion apps designed around the fan.
          </p>

          <Link
            href="https://football.mygrandstand.cc"
            className="mt-8 inline-flex min-h-11 items-center justify-center gap-2.5 rounded-full border border-emerald-400/50 bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-colors duration-200 hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111f] sm:min-h-12 sm:px-7 sm:py-4 sm:text-base"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/icons/football.png"
              alt=""
              aria-hidden="true"
              className="h-5 w-5 shrink-0 object-contain"
            />
            Open MyGrandStand Football
          </Link>
        </div>
      </section>
    </main>
  );
}
