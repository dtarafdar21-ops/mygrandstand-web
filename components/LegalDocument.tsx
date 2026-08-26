"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { getSafeCorporateReturnPath } from "../lib/legalNavigation";
import { PRIVACY_POLICY_BRAND, PRIVACY_POLICY_CONTACT_EMAIL, PRIVACY_POLICY_LAST_UPDATED, PRIVACY_POLICY_OPERATOR, PRIVACY_POLICY_SECTIONS } from "../lib/privacyPolicy";
import { TERMS_BRAND, TERMS_LAST_UPDATED, TERMS_LEGAL_EMAIL, TERMS_OPERATOR, TERMS_PRIVACY_EMAIL, TERMS_SECTIONS } from "../lib/termsOfUse";
import { SiteFooter } from "./SiteFooter";

type LegalDocumentKind = "privacy" | "terms";

const linkClass = "font-medium text-emerald-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111f]";
const paragraphClass = "whitespace-pre-line text-base leading-8 text-slate-300";

export default function LegalDocument({ kind }: { kind: LegalDocumentKind }) {
  const searchParams = useSearchParams();
  const returnTo = getSafeCorporateReturnPath(searchParams.get("returnTo"));
  const isPrivacy = kind === "privacy";
  const sections = isPrivacy ? PRIVACY_POLICY_SECTIONS : TERMS_SECTIONS;
  const title = isPrivacy ? "Privacy Policy" : "Terms of Use";
  const brand = isPrivacy ? PRIVACY_POLICY_BRAND : TERMS_BRAND;
  const operator = isPrivacy ? PRIVACY_POLICY_OPERATOR : TERMS_OPERATOR;
  const updated = isPrivacy ? PRIVACY_POLICY_LAST_UPDATED : TERMS_LAST_UPDATED;
  const privacyHref = `/privacy?returnTo=${encodeURIComponent(returnTo)}`;

  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <article className="mx-auto flex w-full max-w-3xl flex-col px-6 py-8 sm:px-8 sm:py-12">
        <Link href={returnTo} aria-label="Back to originating corporate page" className="inline-flex min-h-11 w-fit items-center gap-2 text-emerald-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300">
          <span aria-hidden="true" className="h-2.5 w-2.5 -rotate-45 border-b-2 border-l-2 border-current" />
          <span>Back</span>
        </Link>

        <header className="mt-6 border-b border-slate-800 pb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">{operator}</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{title}</h1>
          <p className="mt-4 text-base leading-8 text-slate-300">
            {brand}
            <br />
            Last Updated: {updated}
          </p>
        </header>

        <div className="mt-10 space-y-10">
          {sections.map((section, sectionIndex) => (
            <section key={section.heading} className="space-y-4">
              <h2 className="text-xl font-semibold text-white sm:text-2xl">{sectionIndex + 1}. {section.heading}</h2>
              {section.blocks.map((block, blockIndex) => {
                if (block.type === "list") {
                  return <ul key={`${section.heading}-${blockIndex}`} className="list-disc space-y-3 pl-6 text-base leading-8 text-slate-300">{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
                }
                if (!isPrivacy && section.heading === "Privacy" && blockIndex === 0) {
                  return <p key={`${section.heading}-${blockIndex}`} className={paragraphClass}>Use of Footivo is also governed by the <Link href={privacyHref} className={linkClass}>Footivo Privacy Policy</Link>, which explains how information is collected, used and protected in connection with the Services.</p>;
                }
                const email = isPrivacy && section.heading === "Contact Us" ? PRIVACY_POLICY_CONTACT_EMAIL : !isPrivacy && section.heading === "Contact Us" ? null : null;
                if (email && block.text.includes(email)) {
                  return <p key={`${section.heading}-${blockIndex}`} className={paragraphClass}>{block.text.split(email)[0]}<a href={`mailto:${email}`} className={linkClass}>{email}</a></p>;
                }
                if (!isPrivacy && section.heading === "Contact Us") {
                  return <p key={`${section.heading}-${blockIndex}`} className={paragraphClass}>{block.text.split("\n").map((line, index) => <span key={line}>{index > 0 && <br />}{line.includes(TERMS_LEGAL_EMAIL) ? <>{line.split(TERMS_LEGAL_EMAIL)[0]}<a href={`mailto:${TERMS_LEGAL_EMAIL}`} className={linkClass}>{TERMS_LEGAL_EMAIL}</a></> : line.includes(TERMS_PRIVACY_EMAIL) ? <>{line.split(TERMS_PRIVACY_EMAIL)[0]}<a href={`mailto:${TERMS_PRIVACY_EMAIL}`} className={linkClass}>{TERMS_PRIVACY_EMAIL}</a></> : line}</span>)}</p>;
                }
                return <p key={`${section.heading}-${blockIndex}`} className={paragraphClass}>{block.text}</p>;
              })}
            </section>
          ))}
        </div>
      </article>
      <SiteFooter returnTo={returnTo} />
    </main>
  );
}
