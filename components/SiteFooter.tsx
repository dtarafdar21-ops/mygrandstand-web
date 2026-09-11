import Link from "next/link";
import { getCorporateLegalHref } from "../lib/legalNavigation";

const footerLinkClass =
  "transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111f]";

export function SiteFooter({ returnTo = "/" }: { returnTo?: string }) {
  return (
    <footer className="mx-auto w-full max-w-6xl px-6 pb-10 pt-4 sm:px-8 sm:pb-12 lg:px-10">
      <div className="border-t border-slate-800 pt-6 text-center text-sm text-slate-400">
        <p className="font-semibold tracking-[0.18em] text-slate-300">
          MYGRANDSTAND PTE. LTD.
        </p>

        <nav
          aria-label="Footer"
          className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1"
        >
          <Link href="/" className={footerLinkClass}>
            Home
          </Link>
          <span aria-hidden="true">•</span>
          <Link href="/about" className={footerLinkClass}>
            About Us
          </Link>
          <span aria-hidden="true">•</span>
          <Link href="/support" className={footerLinkClass}>
            Support
          </Link>
          <span aria-hidden="true">•</span>
          <Link href={getCorporateLegalHref("privacy", returnTo)} className={footerLinkClass}>
            Privacy Policy
          </Link>
          <span aria-hidden="true">•</span>
          <Link href={getCorporateLegalHref("terms", returnTo)} className={footerLinkClass}>
            Terms of Use
          </Link>
        </nav>

        <p className="mt-4 font-medium text-slate-300">
          © 2026 MyGrandStand Pte. Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
