import Link from "next/link";

export default function LegacyWhyMyGrandStandPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-6 text-center text-slate-200">
      <meta httpEquiv="refresh" content="0;url=/footivo" />
      <p>This page has moved to <Link className="text-emerald-300 underline" href="/footivo">Why Footivo?</Link>.</p>
    </main>
  );
}
