import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("homepage CTA opens Why Footivo and footer uses company legal wording", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const footer = await readFile(new URL("../components/SiteFooter.tsx", import.meta.url), "utf8");

  assert.match(page, /href="\/footivo"/);
  assert.doesNotMatch(page, /href="https:\/\/football\.mygrandstand\.cc"/);
  assert.match(page, /Explore Footivo/);
  assert.doesNotMatch(page, /MyGrandStand Football/);
  assert.match(page, /text-base font-semibold[\s\S]*sm:text-lg/);
  assert.doesNotMatch(page, /football\.png/);
  assert.doesNotMatch(page, /<InformationNav \/>/);
  assert.doesNotMatch(page, /aria-label="More"/);
  assert.match(page, /<SiteFooter returnTo="\/" \/>/);

  assert.match(footer, /MYGRANDSTAND PTE\. LTD\./);
  assert.match(footer, /href="\/support"/);
  assert.match(footer, /Support\s*</);
  assert.doesNotMatch(footer, /support@(?:mygrandstand|footivo)\.net/);
  assert.match(footer, /href=\{getCorporateLegalHref\("privacy", returnTo\)\}/);
  assert.match(footer, /href=\{getCorporateLegalHref\("terms", returnTo\)\}/);
  assert.doesNotMatch(footer, /football\.mygrandstand\.cc/);
  assert.doesNotMatch(footer, /href="\/why-mygrandstand"/);
  assert.match(footer, /© 2026 MyGrandStand Pte\. Ltd\. All rights reserved\./);
  assert.doesNotMatch(footer, /Contact Us/);
  assert.doesNotMatch(footer, /mygrandstandapp@gmail\.com/);
  assert.doesNotMatch(footer, /MY SPORTS\. MY WAY\./);
});

test("legal routes identify the operator and support contact consistently", async () => {
  const privacy = await readFile(new URL("../app/privacy/page.tsx", import.meta.url), "utf8");
  const terms = await readFile(new URL("../app/terms/page.tsx", import.meta.url), "utf8");

  assert.match(privacy, /<LegalDocument kind="privacy" \/>/);
  assert.match(privacy, /canonical policy/);
  assert.match(terms, /<LegalDocument kind="terms" \/>/);
  const legalDocument = await readFile(new URL("../components/LegalDocument.tsx", import.meta.url), "utf8");
  assert.match(legalDocument, /d=\"m15 18-6-6 6-6\"/);
  assert.match(legalDocument, /getSafeCorporateReturnPath/);
  assert.match(legalDocument, /href=\{returnTo\}/);
  assert.doesNotMatch(legalDocument, /football\.mygrandstand\.cc/);
  const privacyContent = await readFile(new URL("../lib/privacyPolicy.ts", import.meta.url), "utf8");
  assert.match(privacyContent, /privacy@mygrandstand\.cc/);
  assert.match(legalDocument, /Email: <a href=\{`mailto:\$\{PRIVACY_POLICY_CONTACT_EMAIL\}`\}/);
  assert.match(terms, /canonical Terms/);
});

test("Why Footivo page follows the approved Explore Footivo content", async () => {
  const page = await readFile(new URL("../app/footivo/page.tsx", import.meta.url), "utf8");

  assert.match(page, /Why Footivo\?/);
  assert.match(page, /Welcome to Footivo/);
  assert.match(page, /No Noise\. All Football\./);
  assert.match(page, /Our Promise/);
  assert.match(page, /Live scores and match updates/);
  assert.match(page, /Fixtures and results/);
  assert.match(page, /League tables and standings/);
  assert.match(page, /Football news with concise AI summaries/);
  assert.match(page, /Team, player and manager profiles/);
  assert.match(page, /Match statistics, lineups and insights/);
  assert.match(page, /Match videos and highlights/);
  assert.match(page, /Create and join Game Rooms with friends/);
  assert.match(page, /Personalise your favourite teams and competitions/);
  assert.match(page, /Our Commitment/);
  assert.match(page, /No in-app advertisements/);
  assert.match(page, /No clickbait/);
  assert.match(page, /No betting or gambling promotions/);
  assert.match(page, /No unnecessary noise/);
  assert.match(page, /No intrusive pop-ups/);
  assert.match(page, /Just football, clearly organised/);
  assert.match(page, /One simple price/);
  assert.match(page, /US\$ 0\.99 per year/);
  assert.match(page, /Local currency pricing may vary by country or region\./);
  assert.match(page, /Includes a 1-month free trial\./);
  assert.match(page, /Your subscription begins only after the free trial ends\./);
  assert.match(page, /label="App Store"/);
  assert.match(page, /label="Google Play"/);
  assert.doesNotMatch(page, /apps\.apple\.com|play\.google\.com|href="#"/);

  assert.match(page, /Thank you for exploring Footivo\./);
  assert.match(page, /Footivo exists to help football fans enjoy the game/);
  assert.match(page, /Because every fan deserves their own grandstand\./);
  assert.match(page, /<SiteFooter returnTo="\/footivo" \/>/);
});

test("legacy product route remains a compatibility redirect page", async () => {
  const page = await readFile(new URL("../app/why-mygrandstand/page.tsx", import.meta.url), "utf8");
  assert.match(page, /httpEquiv="refresh" content="0;url=\/footivo"/);
  assert.match(page, /href="\/footivo"/);
  assert.doesNotMatch(page, /Why MyGrandStand|MyGrandStand Football/);
});

test("About Us page renders the current Footivo information with the corporate footer", async () => {
  const page = await readFile(new URL("../app/about/page.tsx", import.meta.url), "utf8");

  assert.match(page, /export default function AboutPage/);
  assert.match(page, /About Us/);
  assert.match(page, /Our Story/);
  assert.match(page, /Footivo began with a simple question\./);
  assert.match(page, /One day, a daughter asked her father:/);
  assert.match(page, /“When is the next World Cup match, and who is playing\?”/);
  assert.match(page, /Our Purpose/);
  assert.match(page, /To build the simplest and most enjoyable football companion—one that respects your time, stays focused on the game and puts football first\./);
  assert.match(page, /Share your thoughts/);
  assert.match(page, /Have an idea, suggestion or feedback about Footivo\?/);
  assert.match(page, /We’d love to hear from you as we continue improving the app for football fans everywhere\./);
  assert.match(page, /href="mailto:hello@footivo\.net"[\s\S]*hello@footivo\.net/);
  assert.match(page, /<SiteFooter returnTo="\/about" \/>/);
  assert.doesNotMatch(page, /support@mygrandstand\.cc|MyGrandStand began|My Football\. My Way\./);
  assert.doesNotMatch(page, /InformationNav/);
  assert.doesNotMatch(page, /aria-label="More"/);
});

test("Why Footivo keeps the approved pricing copy together", async () => {
  const page = await readFile(new URL("../app/footivo/page.tsx", import.meta.url), "utf8");
  assert.match(page, /US\$ 0\.99 per year[\s\S]*Local currency pricing may vary by country or region\.[\s\S]*Includes a 1-month free trial\.[\s\S]*Your subscription begins only after the free trial ends\./);
});
