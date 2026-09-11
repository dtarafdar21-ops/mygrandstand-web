import { BrandLockup } from "../../components/BrandLockup";
import { SiteFooter } from "../../components/SiteFooter";

const includedFeatures = [
  "⚽ Live scores and match updates",
  "📅 Fixtures and results",
  "🏆 League tables and standings",
  "📰 Football news with concise AI summaries",
  "👥 Team, player and manager profiles",
  "📊 Match statistics, lineups and insights",
  "🎥 Match videos and highlights",
  "🎮 Create and join Game Rooms with friends",
  "⚙️ Personalise your favourite teams and competitions",
];

const commitments = [
  "🚫 No in-app advertisements",
  "🚫 No clickbait",
  "🚫 No betting or gambling promotions",
  "🚫 No unnecessary noise",
  "🚫 No intrusive pop-ups",
  "⚽ Just football, clearly organised",
];

function StoreBadge({ label, eyebrow }: { label: string; eyebrow: string }) {
  return (
    <div role="img" aria-label={label} className="flex min-h-14 w-full items-center justify-center rounded-xl border border-slate-700 bg-slate-950 px-5 py-3 text-left shadow-sm sm:w-auto sm:min-w-52">
      <span>
        <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-slate-400">{eyebrow}</span>
        <span className="mt-0.5 block text-base font-semibold text-white">{label}</span>
      </span>
    </div>
  );
}

export const metadata = {
  title: "Why Footivo? | MyGrandStand",
  description: "Explore Footivo, the personal football companion for every fan.",
};

export default function WhyFootivoPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <article className="mx-auto flex w-full max-w-4xl flex-col px-6 pb-10 pt-6 sm:px-8 sm:pb-12 sm:pt-8 md:pb-12 md:pt-10 lg:px-10">
        <BrandLockup />
        <header className="max-w-3xl">
          <h1 className="font-semibold leading-tight tracking-[-0.03em] text-white [font-family:ui-rounded,SF_Pro_Rounded,system-ui,-apple-system,BlinkMacSystemFont,Segoe_UI,sans-serif] text-[clamp(2rem,4vw,3.5rem)]">Why Footivo?</h1>
          <p className="mt-6 text-[clamp(1.1rem,2.2vw,1.35rem)] font-semibold leading-8 text-emerald-300 sm:mt-8">Welcome to Footivo</p>
          <p className="mt-3 text-[clamp(1.1rem,2.2vw,1.35rem)] font-semibold leading-8 text-emerald-300">No Noise. All Football.</p>
        </header>

        <div className="mt-10 space-y-12 text-slate-300">
          <section className="space-y-5">
            <p className="text-base leading-7">The full Footivo app gives you everything you need to follow football in one place.</p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-white">Our Promise</h2>
            <ul className="space-y-2 text-base leading-7">{includedFeatures.map((feature) => <li key={feature}>{feature}</li>)}</ul>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-white">Our Commitment</h2>
            <ul className="space-y-2 text-base leading-7">{commitments.map((commitment) => <li key={commitment}>{commitment}</li>)}</ul>
          </section>

          <section className="space-y-4 border-y border-slate-800 py-8">
            <h2 className="text-2xl font-semibold text-white">One simple price</h2>
            <p className="text-2xl font-semibold leading-tight text-emerald-300">US$ 0.99 per year</p>
            <p className="text-base italic leading-7 text-slate-300">Local currency pricing may vary by country or region.</p>
            <p className="text-base italic leading-7 text-slate-300">Includes a 1-month free trial.</p>
            <p className="text-base italic leading-7 text-slate-300">Your subscription begins only after the free trial ends.</p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-white">Ready to explore Footivo?</h2>
            <p className="text-base leading-7">Footivo is available through the App Store and Google Play.</p>
            <div className="flex flex-col gap-3 sm:flex-row"><StoreBadge eyebrow="Download on the" label="App Store" /><StoreBadge eyebrow="Get it on" label="Google Play" /></div>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-white">Thank you</h2>
            <p className="text-base leading-7">Thank you for exploring Footivo.</p>
            <p className="text-base leading-7">Footivo exists to help football fans enjoy the game through timely information, thoughtful insights and engaging features.</p>
            <p className="pt-4 text-center text-lg font-semibold leading-7 text-emerald-300">Because every fan deserves their own grandstand.</p>
          </section>
        </div>
      </article>
      <SiteFooter returnTo="/why-footivo" />
    </main>
  );
}
