import Link from "next/link";
import { SiteFooter } from "../../components/SiteFooter";

const linkClass =
  "font-medium text-emerald-400 transition-colors hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07111f]";

const sectionClass = "space-y-4";
const headingClass = "text-xl font-semibold text-white sm:text-2xl";
const paragraphClass = "text-base leading-8 text-slate-300";
const listClass = "list-disc space-y-3 pl-6 text-base leading-8 text-slate-300";

export default function TermsOfUse() {
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
            Terms of Use
          </h1>
          <p className="mt-4 text-base leading-8 text-slate-300">
            MyGrandStand
            <br />
            Last Updated: 23 July 2026
          </p>
        </header>

        <div className="mt-10 space-y-10">
          <section className={sectionClass}>
            <h2 className={headingClass}>Using MyGrandStand</h2>
            <p className={paragraphClass}>Welcome to MyGrandStand.</p>
            <p className={paragraphClass}>
              MyGrandStand is a football information and fan engagement platform
              designed to help supporters follow, understand and enjoy the game
              through timely information, thoughtful insights and interactive
              features.
            </p>
            <p className={paragraphClass}>
              By accessing or using the Services, you agree to be bound by these
              Terms of Use. If these Terms are not accepted, the Services should
              not be accessed or used.
            </p>
            <p className={paragraphClass}>
              These Terms apply to all visitors and users of the Services.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Definitions</h2>
            <p className={paragraphClass}>
              For the purposes of these Terms of Use:
            </p>
            <p className={paragraphClass}>
              “MyGrandStand” means the MyGrandStand website, mobile applications
              and any other official digital services operated under the
              MyGrandStand brand.
            </p>
            <p className={paragraphClass}>
              "Services" means all products, features, functionality and content
              made available by MyGrandStand from time to time, including,
              without limitation:
            </p>
            <ul className={listClass}>
              <li>Match Centre</li>
              <li>Competition pages</li>
              <li>Match Details</li>
              <li>Match Pulse</li>
              <li>Match Previews</li>
              <li>Match Reviews</li>
              <li>Head-to-Head</li>
              <li>Lineup Information</li>
              <li>Team and player information</li>
              <li>Match statistics</li>
              <li>Match videos</li>
              <li>Predictions</li>
              <li>Odds</li>
              <li>Game Rooms</li>
              <li>Community features</li>
              <li>Optional push notifications</li>
              <li>AI-generated features</li>
              <li>Support MGS</li>
              <li>
                Any future products, features, enhancements or services
                introduced by MyGrandStand.
              </li>
            </ul>
            <p className={paragraphClass}>
              "Content" means all text, graphics, software, designs, user
              interface elements, statistics, fixtures, scores, images, videos,
              editorial material and other information made available through the
              Services.
            </p>
            <p className={paragraphClass}>
              "Third-Party Data Providers" means independent organisations that
              provide football-related data, statistics, fixtures, standings,
              videos, images or other content used by the Services.
            </p>
            <p className={paragraphClass}>
              "Match Pulse" means MyGrandStand's visual representation of
              changing match dynamics derived from available football data and
              proprietary analytical processing. Match Pulse is provided solely
              as an informational feature and must not be interpreted as a
              prediction, guarantee or recommendation.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Acceptable Use</h2>
            <p className={paragraphClass}>
              The Services must be used lawfully and respectfully.
            </p>
            <p className={paragraphClass}>Users must not:</p>
            <ul className={listClass}>
              <li>misuse, interfere with or disrupt the Services;</li>
              <li>
                attempt unauthorised access to any part of the Services or
                supporting infrastructure;
              </li>
              <li>
                scrape, harvest or copy data in a manner that places
                unreasonable load on the Services;
              </li>
              <li>
                reverse engineer, decompile or otherwise attempt to extract
                source code except where permitted by applicable law;
              </li>
              <li>
                upload, transmit or distribute unlawful, abusive, defamatory,
                threatening, discriminatory, misleading or harmful content;
              </li>
              <li>impersonate another person or organisation;</li>
              <li>interfere with another user's enjoyment of the Services; or</li>
              <li>
                use the Services in any manner that violates applicable laws or
                regulations.
              </li>
            </ul>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Community Standards</h2>
            <p className={paragraphClass}>
              Game Rooms and future community features are intended to provide an
              enjoyable and respectful experience for football fans.
            </p>
            <p className={paragraphClass}>
              Users must not post or share content that is:
            </p>
            <ul className={listClass}>
              <li>unlawful;</li>
              <li>abusive;</li>
              <li>defamatory;</li>
              <li>threatening;</li>
              <li>discriminatory;</li>
              <li>misleading;</li>
              <li>obscene;</li>
              <li>intended to harass others; or</li>
              <li>
                infringing the intellectual property or other rights of any
                person.
              </li>
            </ul>
            <p className={paragraphClass}>
              MyGrandStand reserves the right to remove content, suspend
              features or restrict access where there is a reasonable belief that
              these standards or these Terms have been violated.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Important Information</h2>
            <p className={paragraphClass}>
              The Services are provided for football information and
              entertainment.
            </p>
            <p className={paragraphClass}>
              Fixtures, kick-off times, scores, statistics, standings, lineups,
              videos, Match Pulse, AI-generated content, predictions, odds and
              other information may originate from Third-Party Data Providers and
              may occasionally be delayed, unavailable, incomplete or inaccurate.
            </p>
            <p className={paragraphClass}>
              Football matches are dynamic events. Information may change without
              notice and may occasionally differ from official competition
              records.
            </p>
            <p className={paragraphClass}>
              Where information is important or time-sensitive, verification
              through the relevant competition organiser, club or official
              broadcaster is recommended.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>AI-Generated Content</h2>
            <p className={paragraphClass}>
              Certain features of the Services use artificial intelligence to
              generate football-related summaries, insights and other content.
            </p>
            <p className={paragraphClass}>
              AI-generated content is intended to complement available football
              information and may occasionally contain inaccuracies, omissions or
              outdated information.
            </p>
            <p className={paragraphClass}>
              AI-generated content should be regarded as supplementary
              information and should not be relied upon as an authoritative
              source or as professional, legal, financial, betting or investment
              advice.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>No Betting or Gambling Advice</h2>
            <p className={paragraphClass}>
              MyGrandStand is an information and entertainment platform.
            </p>
            <p className={paragraphClass}>
              Any odds, probabilities, predictions, Match Pulse content,
              AI-generated insights, statistics or other information made
              available through the Services are provided solely for
              informational and entertainment purposes.
            </p>
            <p className={paragraphClass}>
              Nothing within the Services constitutes betting, gambling,
              financial or investment advice, nor should any content be
              interpreted as encouraging, recommending or discouraging any wager
              or financial decision.
            </p>
            <p className={paragraphClass}>
              Participation in betting or gambling activities is entirely the
              responsibility of the individual user and must comply with the laws
              applicable in the relevant jurisdiction.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Service Availability</h2>
            <p className={paragraphClass}>
              MyGrandStand aims to provide a reliable and enjoyable service.
            </p>
            <p className={paragraphClass}>
              However, uninterrupted availability cannot be guaranteed.
            </p>
            <p className={paragraphClass}>
              The Services, live data, notifications and third-party content may
              occasionally be delayed, interrupted, unavailable or temporarily
              withdrawn due to:
            </p>
            <ul className={listClass}>
              <li>scheduled maintenance;</li>
              <li>emergency maintenance;</li>
              <li>software upgrades;</li>
              <li>failures affecting Third-Party Data Providers;</li>
              <li>failures affecting cloud hosting providers;</li>
              <li>internet or telecommunications issues;</li>
              <li>content delivery network (CDN) disruptions;</li>
              <li>failures of notification providers; or</li>
              <li>
                circumstances beyond the reasonable control of MyGrandStand.
              </li>
            </ul>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Third-Party Services</h2>
            <p className={paragraphClass}>
              Certain features of the Services depend upon independent
              third-party providers, including football data providers, cloud
              hosting providers, notification services, artificial intelligence
              services and content delivery providers.
            </p>
            <p className={paragraphClass}>
              MyGrandStand is not responsible for the availability, accuracy,
              completeness or continued operation of third-party services and
              accepts no liability for interruptions, delays or inaccuracies
              resulting from those services.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Optional Push Notifications</h2>
            <p className={paragraphClass}>Push notifications are optional.</p>
            <p className={paragraphClass}>
              Delivery of notifications depends upon browser vendors, mobile
              operating systems, device manufacturers and third-party
              notification services.
            </p>
            <p className={paragraphClass}>
              MyGrandStand cannot guarantee that notifications will always be
              delivered accurately or on time.
            </p>
            <p className={paragraphClass}>
              Users are responsible for enabling and managing notification
              permissions on their own devices.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Intellectual Property</h2>
            <p className={paragraphClass}>
              Unless otherwise stated, the software, design, user interface,
              branding, original graphics, original written content and other
              original materials created for MyGrandStand are owned by or
              licensed to MyGrandStand and are protected by applicable
              intellectual property laws.
            </p>
            <p className={paragraphClass}>
              No part of the Services may be copied, reproduced, distributed,
              modified, republished or commercially exploited without prior
              written permission except where permitted by applicable law.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>
              Team and Competition Names, Crests and Logos
            </h2>
            <p className={paragraphClass}>
              Team names, competition names, crests, logos, trademarks,
              photographs and other third-party intellectual property displayed
              through the Services remain the property of their respective
              owners.
            </p>
            <p className={paragraphClass}>
              Such material is displayed solely for identification,
              informational and descriptive purposes in connection with
              football-related content.
            </p>
            <p className={paragraphClass}>
              Nothing in the Services shall be interpreted as implying
              sponsorship, endorsement or affiliation between MyGrandStand and
              any club, league, competition, governing body or other rights
              holder unless expressly stated.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Disclaimer of Warranties</h2>
            <p className={paragraphClass}>
              To the fullest extent permitted by applicable law, the Services are
              provided on an "as available" and "as is" basis.
            </p>
            <p className={paragraphClass}>
              MyGrandStand makes no representation or warranty that:
            </p>
            <ul className={listClass}>
              <li>the Services will always be available;</li>
              <li>information will always be complete, accurate or current;</li>
              <li>errors will not occur;</li>
              <li>the Services will operate without interruption; or</li>
              <li>the Services will be free from technical issues.</li>
            </ul>
            <p className={paragraphClass}>
              Use of the Services is entirely at the user's own risk.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Limitation of Liability</h2>
            <p className={paragraphClass}>
              To the fullest extent permitted by applicable law, MyGrandStand
              shall not be liable for any indirect, incidental, consequential,
              exemplary or special damages arising from or relating to:
            </p>
            <ul className={listClass}>
              <li>use of or inability to use the Services;</li>
              <li>reliance upon information provided through the Services;</li>
              <li>inaccuracies or delays in third-party data;</li>
              <li>interruptions to the Services;</li>
              <li>failures of notifications;</li>
              <li>loss of data;</li>
              <li>loss of profits;</li>
              <li>betting or gambling decisions;</li>
              <li>financial decisions; or</li>
              <li>any other consequential loss arising from use of the Services.</li>
            </ul>
            <p className={paragraphClass}>
              Nothing in these Terms excludes or limits liability where such
              exclusion or limitation is prohibited by applicable law.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Indemnity</h2>
            <p className={paragraphClass}>
              Users agree to indemnify and hold harmless MyGrandStand, its
              owner, service providers and suppliers from any claims,
              liabilities, damages, losses, costs or expenses (including
              reasonable legal costs) arising from:
            </p>
            <ul className={listClass}>
              <li>use of the Services;</li>
              <li>breach of these Terms;</li>
              <li>violation of applicable law;</li>
              <li>content submitted through the Services;</li>
              <li>infringement of the rights of another person; or</li>
              <li>
                decisions made in reliance upon information, statistics,
                predictions, Match Pulse, AI-generated content, odds or other
                content provided through the Services.
              </li>
            </ul>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Changes to the Services</h2>
            <p className={paragraphClass}>MyGrandStand continuously evolves.</p>
            <p className={paragraphClass}>
              Features, functionality, user interfaces, data sources and Services
              may be added, modified, replaced, suspended or discontinued from
              time to time without prior notice.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Changes to these Terms</h2>
            <p className={paragraphClass}>
              These Terms of Use may be updated from time to time.
            </p>
            <p className={paragraphClass}>
              The latest version will always be published through the Services.
            </p>
            <p className={paragraphClass}>
              Continued use of the Services after revised Terms become effective
              constitutes acceptance of those revised Terms.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Privacy</h2>
            <p className={paragraphClass}>
              Use of the Services is also governed by the MyGrandStand Privacy
              Policy, which explains how information is processed, used and
              protected.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Governing Law</h2>
            <p className={paragraphClass}>
              These Terms of Use shall be governed by and construed in
              accordance with the laws of the Republic of Singapore, without
              regard to its conflict of law principles.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Severability</h2>
            <p className={paragraphClass}>
              If any provision of these Terms of Use is found to be invalid,
              illegal or unenforceable by a court or other authority of competent
              jurisdiction, that provision shall be deemed modified to the
              minimum extent necessary to make it enforceable or, if modification
              is not possible, severed from these Terms. The remaining provisions
              shall remain in full force and effect.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Entire Agreement</h2>
            <p className={paragraphClass}>
              These Terms of Use, together with the MyGrandStand Privacy Policy,
              constitute the entire agreement governing access to and use of the
              Services and supersede any prior statements, representations or
              understandings relating to the Services.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={headingClass}>Contact</h2>
            <p className={paragraphClass}>
              Questions regarding these Terms of Use or the Services may be
              directed to:
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

          <section className={sectionClass}>
            <h2 className={headingClass}>Thank You</h2>
            <p className={paragraphClass}>Thank you for using MyGrandStand.</p>
            <p className={paragraphClass}>
              MyGrandStand exists to help football fans enjoy the game through
              timely information, thoughtful insights, engaging features and a
              vibrant community. Every match, every improvement and every new
              feature is driven by a passion for making football more enjoyable
              for supporters around the world. Thank you for being part of the
              journey.
            </p>
          </section>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
