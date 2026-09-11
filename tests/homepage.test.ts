import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("homepage CTA opens Why Footivo and footer uses company legal wording", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const footer = await readFile(new URL("../components/SiteFooter.tsx", import.meta.url), "utf8");

  assert.match(page, /href="\/why-footivo"/);
  assert.doesNotMatch(page, /href="https:\/\/football\.mygrandstand\.cc"/);
  assert.match(page, /Explore Footivo/);
  assert.doesNotMatch(page, /MyGrandStand Football/);
  assert.match(page, /text-base font-semibold[\s\S]*sm:text-lg/);
  assert.doesNotMatch(page, /football\.png/);
  assert.doesNotMatch(page, /<InformationNav \/>/);
  assert.doesNotMatch(page, /aria-label="More"/);
  assert.match(page, /<SiteFooter returnTo="\/" \/>/);

  assert.match(footer, /MYGRANDSTAND PTE\. LTD\./);
  assert.match(footer, /mailto:support@mygrandstand\.cc/);
  assert.match(footer, /support@mygrandstand\.cc/);
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
  const page = await readFile(new URL("../app/why-footivo/page.tsx", import.meta.url), "utf8");

  assert.match(page, /Why Footivo\?/);
  assert.match(page, /A personal football companion for every fan/);
  assert.match(page, /No clickbait/);
  assert.match(page, /No intrusive ads/);
  assert.match(page, /No betting or gambling promotions/);
  assert.match(page, /No unnecessary noise/);
  assert.match(page, /Just football, clearly organised/);
  assert.doesNotMatch(page, /InformationNav/);
  assert.doesNotMatch(page, /aria-label="More"/);
  assert.doesNotMatch(page, /one-month free trial|expensive subscription/);

  assert.doesNotMatch(page, /Independent by design/);
  assert.doesNotMatch(page, /remaining independent, listening to our users/);
  assert.match(page, /One simple price/);
  assert.match(page, /US\$ 0\.99 per year/);
  assert.match(page, /Includes a 30-day free trial\./);
  assert.match(page, /One simple price[\s\S]*US\$ 0\.99 per year[\s\S]*Includes a 30-day free trial\.[\s\S]*Ready to explore Footivo\?/);
  assert.match(page, /Predict the Margin and Pick Your Heroes/);
  assert.match(page, /Video highlights, where available/);
  assert.match(page, /Personalised favourite teams and competitions/);
  assert.match(page, /label="App Store"/);
  assert.match(page, /label="Google Play"/);
  assert.doesNotMatch(page, /apps\.apple\.com|play\.google\.com|href="#"/);

  assert.match(page, /Thank you for exploring Footivo\./);
  assert.match(page, /Footivo exists to help football fans enjoy the game/);
  assert.match(page, /Because every fan deserves their own grandstand\./);
  assert.match(page, /<SiteFooter returnTo="\/why-footivo" \/>/);
});

test("legacy product route remains a compatibility redirect page", async () => {
  const page = await readFile(new URL("../app/why-mygrandstand/page.tsx", import.meta.url), "utf8");
  assert.match(page, /httpEquiv="refresh" content="0;url=\/why-footivo"/);
  assert.match(page, /href="\/why-footivo"/);
  assert.doesNotMatch(page, /Why MyGrandStand|MyGrandStand Football/);
});

test("About Us page renders the website information content and footer", async () => {
  const page = await readFile(new URL("../app/about/page.tsx", import.meta.url), "utf8");

  assert.match(page, /export default function AboutPage/);
  assert.match(page, /About Us/);
  assert.match(page, /Our Story/);
  assert.match(page, /MyGrandStand began with a simple question\./);
  assert.match(page, /One day, a daughter asked her father:/);
  assert.match(page, /“When is the next World Cup match, and who is playing\?”/);
  assert.match(page, /Our Purpose/);
  assert.match(page, /To build the simplest and most enjoyable football companion—one that respects your time, stays focused on the game and puts football first\./);
  assert.match(page, /Share your thoughts/);
  assert.match(page, /Have an idea, suggestion or feedback about MyGrandStand\?/);
  assert.match(page, /We’d love to hear from you as we continue improving the experience for football fans everywhere\./);
  assert.match(page, /href="mailto:support@mygrandstand\.cc"[\s\S]*support@mygrandstand\.cc/);
  assert.match(page, /© 2026 MYGRANDSTAND PTE\. LTD\./);
  assert.match(page, /All rights reserved\./);
  assert.match(page, /My Football\. My Way\./);
  assert.doesNotMatch(page, /InformationNav/);
  assert.doesNotMatch(page, /aria-label="More"/);
});
