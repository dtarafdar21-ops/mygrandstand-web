import { SiteFooter } from "../../components/SiteFooter";

export const metadata = {
  title: "Footivo Support | MyGrandStand",
  description: "Get help with Footivo and contact the Footivo support team.",
};

export default function SupportPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <article className="mx-auto flex w-full max-w-4xl flex-col px-6 pb-10 pt-6 sm:px-8 sm:pb-12 sm:pt-8 md:pb-12 md:pt-10 lg:px-10">
        <header className="max-w-3xl">
          <h1 className="font-semibold leading-tight tracking-[-0.03em] text-white [font-family:ui-rounded,SF_Pro_Rounded,system-ui,-apple-system,BlinkMacSystemFont,Segoe_UI,sans-serif] text-[clamp(2rem,4vw,3.5rem)]">Footivo Support</h1>
          <p className="mt-6 text-[clamp(1.1rem,2.2vw,1.35rem)] font-semibold leading-8 text-emerald-300 sm:mt-8">Need help?</p>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-300">If you have a question, need help using Footivo or encounter a problem, please contact us.</p>
          <a
            href="mailto:support@footivo.net"
            className="mt-4 inline-block text-base font-semibold text-emerald-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111f]"
          >
            support@footivo.net
          </a>
        </header>

        <div className="mt-10 space-y-12 text-slate-300">
          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-white">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">How do I download or update Footivo?</h3>
                <p className="text-base leading-7">Download or update Footivo from the App Store or Google Play.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">How do I manage my subscription?</h3>
                <p className="text-base leading-7">Your Footivo subscription is managed through the app store account used to subscribe. You can view, renew or cancel it from your device&apos;s subscription settings.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">What happens after the free trial?</h3>
                <p className="text-base leading-7">New members receive a one-month free trial. At the end of the trial, the annual membership begins automatically unless it is cancelled beforehand.</p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white">Is the annual membership refundable?</h3>
                <p className="text-base leading-7">Once an annual subscription payment has been charged, it is non-refundable for the current billing year, even if the subscription is cancelled before the end of the billing period.</p>
              </div>
            </div>
          </section>

          <section className="space-y-5">
            <h2 className="text-2xl font-semibold text-white">How You Can Help Today</h2>
            <p className="text-base leading-7">The biggest way you can support Footivo right now isn&apos;t by spending money. It&apos;s helping other football fans discover the app.</p>
            <ul className="space-y-2 text-base leading-7">
              <li>Share Footivo with your friends and football communities.</li>
              <li>Leave a rating and review on the App Store or Google Play.</li>
              <li>Tell us what you love and what we can improve.</li>
            </ul>
            <p className="text-base leading-7">Every recommendation helps Footivo reach more football fans.</p>
          </section>

          <section className="space-y-5 border-t border-slate-800 pt-8">
            <h2 className="text-2xl font-semibold text-white">Still need help?</h2>
            <p className="text-base leading-7">Please email us and include as much detail as possible about the issue, including your device type and the steps that led to it.</p>
            <a
              href="mailto:support@footivo.net"
              className="inline-block text-base font-semibold text-emerald-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111f]"
            >
              Contact support@footivo.net
            </a>
          </section>
        </div>
      </article>
      <SiteFooter returnTo="/support" />
    </main>
  );
}
