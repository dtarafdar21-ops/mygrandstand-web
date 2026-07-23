import Link from "next/link";
import { SiteFooter } from "../../components/SiteFooter";

const linkClass =
  "font-medium text-emerald-400 transition-colors hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111f]";

const sectionClass = "space-y-4";
const headingClass = "text-xl font-semibold text-white sm:text-2xl";
const paragraphClass = "text-base leading-8 text-slate-300";

export default function PrivacyPolicy() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <section className="mx-auto w-full max-w-3xl px-6 py-12 sm:px-8 sm:py-16">
        <Link href="/" className={linkClass}>
          MyGrandStand
        </Link>

        <header className="mt-8 border-b border-slate-800 pb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
            MYGRANDSTAND PTE. LTD.
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-base leading-8 text-slate-300">
            MyGrandStand
            <br />
            Last Updated: 23 July 2026
          </p>
        </header>

        <div className="mt-10 space-y-10">
          <section className={sectionClass}>
            <h2 className={headingClass}>Our Approach</h2>
            <p className={paragraphClass}>
              MyGrandStand provides football information and interactive
              features using third-party services. We are committed to
              collecting and processing only the information necessary to
              operate, improve and protect the Services.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Information We Process</h2>
            <p className={paragraphClass}>
              MyGrandStand does not currently require you to create an account
              or provide your name, email address or phone number to use the
              Services.
            </p>
            <p className={paragraphClass}>
              The Services may process limited technical information required
              for normal operation, such as your IP address, browser or app
              version, device type, operating system, requested pages,
              timestamps, diagnostic information and similar technical data
              generated during use.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Local Preferences</h2>
            <p className={paragraphClass}>
              The Services may store basic preferences locally on your device,
              such as selected competitions, interface preferences or other
              settings that improve your experience.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Game Rooms</h2>
            <p className={paragraphClass}>
              If you participate in Game Rooms, you may choose a screen name
              that is visible to other participants in that room. Screen names
              are used solely to support gameplay and community interaction and
              are not required to identify your real identity.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Match Notifications</h2>
            <p className={paragraphClass}>
              If you choose to follow a match and enable notifications,
              MyGrandStand stores the browser or device push subscription
              together with the reminder information needed to deliver optional
              match notifications.
            </p>
            <p className={paragraphClass}>
              Push subscriptions are used only to deliver notifications you have
              requested and are not used for advertising.
            </p>
            <p className={paragraphClass}>
              You may disable notifications at any time through your browser or
              device settings.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>AI-generated Content</h2>
            <p className={paragraphClass}>
              Certain features, including Match Pulse, may use artificial
              intelligence to generate summaries, insights or other
              football-related content. AI-generated content is intended to
              enhance your experience and is not used to create personal profiles
              about you.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Third-party Services</h2>
            <p className={paragraphClass}>
              MyGrandStand relies on independent third-party service providers
              to support features such as sports data, videos, notifications,
              hosting and voluntary financial support.
            </p>
            <p className={paragraphClass}>
              These providers may process limited technical information
              necessary to deliver their services and operate under their own
              privacy policies and terms.
            </p>
            <p className={paragraphClass}>
              MyGrandStand does not sell your personal information.
            </p>
            <p className={paragraphClass}>
              Voluntary financial support is processed by an independent payment
              platform and its payment partners. MyGrandStand does not receive
              or store your payment card details.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Your Choices</h2>
            <p className={paragraphClass}>You may:</p>
            <ul className="list-disc space-y-3 pl-6 text-base leading-8 text-slate-300">
              <li>
                disable notifications through your browser or device settings;
              </li>
              <li>discontinue using the Services whenever you choose.</li>
            </ul>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Security</h2>
            <p className={paragraphClass}>
              MyGrandStand takes reasonable technical and organisational
              measures to protect information processed through the Services.
              However, no method of electronic transmission or storage can be
              guaranteed to be completely secure.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Changes to this Policy</h2>
            <p className={paragraphClass}>
              This Privacy Policy may be updated from time to time as
              MyGrandStand evolves or introduces new features. The latest
              version will always be published with the updated date shown
              above.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Contact</h2>
            <p className={paragraphClass}>
              If you have any questions about this Privacy Policy, please
              contact:
            </p>
            <p className={paragraphClass}>
              MYGRANDSTAND PTE. LTD.
              <br />
              Email:{" "}
              <a href="mailto:support@mygrandstand.cc" className={linkClass}>
                support@mygrandstand.cc
              </a>
            </p>
          </section>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
