import Link from "next/link";
import { BrandLockup } from "../../components/BrandLockup";

const legalLinkClass =
  "transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111f]";

export default function AboutPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <article className="mx-auto flex w-full max-w-4xl flex-col px-6 pt-6 pb-10 sm:px-8 sm:pt-8 sm:pb-12 md:pt-10 md:pb-12 lg:px-10">
        <BrandLockup />

        <header className="max-w-3xl">
          <h1 className="font-semibold leading-tight tracking-[-0.03em] text-white [font-family:ui-rounded,SF_Pro_Rounded,system-ui,-apple-system,BlinkMacSystemFont,Segoe_UI,sans-serif] text-[clamp(2rem,4vw,3.5rem)]">
            About Us
          </h1>
        </header>

        <div className="mt-10 space-y-12 text-slate-300">
          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-white">Our Story</h2>
            <p className="text-base leading-7">
              MyGrandStand began with a simple question.
            </p>
            <p className="text-base leading-7">
              One day, a daughter asked her father:
            </p>
            <p className="text-base leading-7 text-slate-200">
              “When is the next World Cup match, and who is playing?”
            </p>
            <p className="text-base leading-7">
              That simple question inspired a different kind of football app—one that focuses on what matters, removes unnecessary clutter and lets every fan enjoy the game their own way.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-white">Our Purpose</h2>
            <p className="text-base leading-7">
              To build the simplest and most enjoyable football companion—one that respects your time, stays focused on the game and puts football first.
            </p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-white">Share your thoughts</h2>
            <p className="text-base leading-7">
              Have an idea, suggestion or feedback about MyGrandStand?
            </p>
            <p className="text-base leading-7">
              We’d love to hear from you as we continue improving the experience for football fans everywhere.
            </p>
            <a
              href="mailto:support@mygrandstand.cc"
              className="inline-flex text-base font-semibold text-emerald-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111f]"
            >
              support@mygrandstand.cc
            </a>
          </section>

          <footer className="border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
            <p className="font-semibold text-slate-200">
              © 2026 MYGRANDSTAND PTE. LTD.
            </p>
            <p className="mt-3">All rights reserved.</p>
            <nav
              aria-label="Legal"
              className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1"
            >
              <Link href="/" className={legalLinkClass}>
                Home
              </Link>
              <span aria-hidden="true">•</span>
              <Link href="/about" className={legalLinkClass}>
                About Us
              </Link>
              <span aria-hidden="true">•</span>
              <Link href="/privacy" className={legalLinkClass}>
                Privacy Policy
              </Link>
              <span aria-hidden="true">•</span>
              <Link href="/terms" className={legalLinkClass}>
                Terms of Use
              </Link>
            </nav>
            <p className="mt-5 text-lg font-semibold text-emerald-300">
              My Football. My Way.
            </p>
          </footer>
        </div>
      </article>
    </main>
  );
}
