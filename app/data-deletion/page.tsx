import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "../../components/SiteFooter";

export const metadata: Metadata = {
  title: "Request deletion of your Footivo data | MyGrandStand",
  description: "Learn how to request deletion of data associated with your use of Footivo.",
  robots: {
    index: true,
    follow: true,
  },
};

const linkClass =
  "font-medium text-emerald-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111f]";
const paragraphClass = "text-base leading-8 text-slate-300";

export default function DataDeletionRequest() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <article className="mx-auto flex w-full max-w-3xl flex-col px-6 py-8 sm:px-8 sm:py-12">
        <Link
          href="/"
          aria-label="Back to MyGrandStand home"
          className={`${linkClass} inline-flex min-h-11 w-fit items-center gap-2`}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-2">
            <path d="m15 18-6-6 6-6" />
          </svg>
          <span>Back</span>
        </Link>

        <header className="mt-6 border-b border-slate-800 pb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
            MyGrandStand Pte. Ltd.
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Request deletion of your Footivo data
          </h1>
          <p className="mt-4 text-base leading-8 text-slate-300">
            Footivo is operated by MyGrandStand Pte. Ltd.
          </p>
        </header>

        <div className="mt-10 space-y-10">
          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white sm:text-2xl">How to submit a request</h2>
            <p className={paragraphClass}>
              To request deletion of data associated with your use of Footivo, email{" "}
              <a href="mailto:privacy@mygrandstand.cc" className={linkClass}>
                privacy@mygrandstand.cc
              </a>
              .
            </p>
            <p className={paragraphClass}>
              Please provide sufficient information for us to identify the relevant data, such as
              your screen name, Game Room name, device or installation details, or other relevant
              details. Do not send passwords or payment card information.
            </p>
            <p className={paragraphClass}>
              We may ask for additional information where reasonably necessary to verify and process
              the request.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white sm:text-2xl">Data that may be deleted</h2>
            <p className={paragraphClass}>
              Where applicable, we will delete user-associated data such as Game Room participation
              data, screen names, predictions, device or installation identifiers,
              notification-related identifiers, and other relevant data associated with your use of
              Footivo.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-white sm:text-2xl">Data that may be retained</h2>
            <p className={paragraphClass}>
              Some information may need to be retained where reasonably necessary for legal,
              regulatory, security, fraud-prevention, billing or accounting, dispute-resolution, or
              other legitimate purposes.
            </p>
            <p className={paragraphClass}>
              Technical logs and similar operational records may also be retained for a limited
              period before deletion or aggregation. Information will be retained only for as long
              as reasonably necessary for the applicable purpose and legal obligations.
            </p>
          </section>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
