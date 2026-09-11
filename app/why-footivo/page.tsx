import { BrandLockup } from "../../components/BrandLockup";
import { SiteFooter } from "../../components/SiteFooter";

const principles = [
  "No clickbait",
  "No intrusive ads",
  "No betting or gambling promotions",
  "No unnecessary noise",
  "Just football, clearly organised",
];

const features = [
  "Live match information",
  "Detailed match statistics, lineups and insights",
  "Competition standings and top scorers",
  "Team and player information",
  "Match previews and reviews",
  "Match Pulse",
  "Video highlights, where available",
  "Interactive Game Rooms: Predict the Margin and Pick Your Heroes",
  "Personalised favourite teams and competitions",
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
          <p className="mt-6 text-[clamp(1.1rem,2.2vw,1.35rem)] font-semibold leading-8 text-emerald-300 sm:mt-8">A personal football companion for every fan</p>
        </header>

        <div className="mt-10 space-y-12 text-slate-300">
          <section className="space-y-5">
            <p className="text-base leading-7 text-slate-200">Football belongs to everyone.</p>
            <p className="text-base leading-7">Some fans live for the match. Others enjoy following player performances, studying statistics, exploring competitions or sharing the experience with friends.</p>
            <p className="text-base leading-7">Footivo is built around the way each fan enjoys the game: focused football information, thoughtful insights and engaging features in one place.</p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-white">Our mission</h2>
            <p className="text-base leading-7">To give every football fan a personal companion that informs, engages and enhances every matchday.</p>
            <p className="text-base leading-7">Footivo is designed around clear principles:</p>
            <ul className="list-disc space-y-2 pl-5 text-base leading-7">{principles.map((principle) => <li key={principle}>{principle}</li>)}</ul>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-white">Built around the way fans enjoy football</h2>
            <p className="text-base leading-7">Every Footivo feature has one goal: to help you enjoy football your way.</p>
            <ul className="list-disc space-y-2 pl-5 text-base leading-7">{features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
            <p className="text-base leading-7">Whether you are following your favourite club, a major international tournament or a league on the other side of the world, Footivo brings the information and experiences that matter together in one place.</p>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-white">Built for every fan</h2>
            <p className="text-base leading-7">Footivo aims to give meaningful coverage to clubs, competitions and supporters across the football world, including most major competitions and leagues.</p>
            <p className="text-base leading-7">We want fans to feel that the football they care about matters here.</p>
          </section>

          <section className="space-y-4 border-y border-slate-800 py-8">
            <h2 className="text-2xl font-semibold text-white">One simple price</h2>
            <p className="text-2xl font-semibold leading-tight text-emerald-300">US$ 0.99 per year</p>
            <p className="text-base italic leading-7 text-slate-300">Includes a 30-day free trial.</p>
            <p className="text-base italic leading-7 text-slate-300">Subscription begins only after your 30-day free trial ends.</p>
            <p className="text-base italic leading-7 text-slate-300">Local currency pricing may vary by country or region.</p>
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
