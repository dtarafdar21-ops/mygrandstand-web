import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("homepage CTA opens Why MyGrandStand and footer uses company legal wording", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const footer = await readFile(new URL("../components/SiteFooter.tsx", import.meta.url), "utf8");

  assert.match(page, /href="\/why-mygrandstand"/);
  assert.doesNotMatch(page, /href="https:\/\/football\.mygrandstand\.cc"/);
  assert.match(page, /MyGrandStand Football/);
  assert.doesNotMatch(page, /Open MyGrandStand Football/);
  assert.match(page, /text-base font-semibold[\s\S]*sm:text-lg/);
  assert.match(page, /className="h-6 w-6 shrink-0 object-contain"/);
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
  assert.match(legalDocument, /border-b-2 border-l-2 border-current/);
  assert.match(legalDocument, /getSafeCorporateReturnPath/);
  assert.match(legalDocument, /href=\{returnTo\}/);
  assert.doesNotMatch(legalDocument, /football\.mygrandstand\.cc/);
  assert.match(terms, /canonical Terms/);
});

test("Why MyGrandStand page follows the approved PDF content updates", async () => {
  const page = await readFile(new URL("../app/why-mygrandstand/page.tsx", import.meta.url), "utf8");

  assert.match(page, /Why MyGrandStand/);
  assert.match(page, /A personal football companion for every fan/);
  assert.match(page, /No clickbait/);
  assert.match(page, /No intrusive ads/);
  assert.match(page, /No betting promotions/);
  assert.match(page, /No account registration or collection of personal information/);
  assert.match(page, /Focused on football only/);
  assert.doesNotMatch(page, /InformationNav/);
  assert.doesNotMatch(page, /aria-label="More"/);
  assert.doesNotMatch(page, /one-month free trial|expensive subscription/);

  assert.doesNotMatch(page, /Independent by design/);
  assert.doesNotMatch(page, /remaining independent, listening to our users/);
  assert.match(page, /One simple price/);
  assert.match(page, /US\$ 0\.99 per year/);
  assert.match(page, /Includes a 30-day free trial\./);
  assert.match(page, /One simple price[\s\S]*US\$ 0\.99 per year[\s\S]*Includes a 30-day free trial\.[\s\S]*Ready to try MyGrandStand Football\?/);
  assert.doesNotMatch(page, /One simple price[\s\S]*No clickbait[\s\S]*Ready to try MyGrandStand Football\?/);
  assert.doesNotMatch(page, /One simple price[\s\S]*No intrusive ads[\s\S]*Ready to try MyGrandStand Football\?/);
  assert.doesNotMatch(page, /One simple price[\s\S]*No betting promotions[\s\S]*Ready to try MyGrandStand Football\?/);
  assert.match(page, /Ready to try MyGrandStand Football\?/);
  assert.match(page, /Click one of the buttons below to download it from the App Store or Google Play\./);
  assert.match(page, /const gameRoomFeatures = \[[\s\S]*"Predict the Margin"[\s\S]*"Pick Your MGStars"[\s\S]*\]/);
  assert.match(page, /<li>\s*Interactive Game Rooms\s*<ul className="mt-2 list-disc space-y-2 pl-5">[\s\S]*gameRoomFeatures\.map/);
  assert.match(page, /featuresAfterGameRooms[\s\S]*Video highlights, where available/);
  assert.match(page, /label="App Store"/);
  assert.match(page, /label="Google Play"/);
  assert.doesNotMatch(page, /apps\.apple\.com|play\.google\.com|href="#"/);

  assert.match(page, /Thank you for being part of the MyGrandStand journey\./);
  assert.match(page, /We hope MyGrandStand becomes your trusted companion for every match, every competition and every football season\./);
  assert.match(page, /Because every fan deserves their own grandstand\./);
  assert.match(page, /<SiteFooter returnTo="\/why-mygrandstand" \/>/);
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
