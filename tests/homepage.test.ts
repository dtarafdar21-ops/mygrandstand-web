import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("homepage CTA opens the live app and footer uses company legal wording", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const footer = await readFile(new URL("../components/SiteFooter.tsx", import.meta.url), "utf8");

  assert.match(page, /href="https:\/\/mgs-77l7\.onrender\.com"/);
  assert.match(page, /Open MyGrandStand Football/);
  assert.match(page, /className="h-6 w-6 shrink-0 object-contain"/);
  assert.match(page, /<SiteFooter \/>/);

  assert.match(footer, /MYGRANDSTAND PTE\. LTD\./);
  assert.match(footer, /mailto:support@mygrandstand\.cc/);
  assert.match(footer, /support@mygrandstand\.cc/);
  assert.match(footer, /href="\/privacy"/);
  assert.match(footer, /Privacy Policy/);
  assert.match(footer, /href="\/terms"/);
  assert.match(footer, /Terms of Use/);
  assert.match(footer, /© 2026 MyGrandStand Pte\. Ltd\. All rights reserved\./);
  assert.doesNotMatch(footer, /Contact Us/);
  assert.doesNotMatch(footer, /mygrandstandapp@gmail\.com/);
  assert.doesNotMatch(footer, /MY SPORTS\. MY WAY\./);
});

test("legal routes identify the operator and support contact consistently", async () => {
  const privacy = await readFile(new URL("../app/privacy/page.tsx", import.meta.url), "utf8");
  const terms = await readFile(new URL("../app/terms/page.tsx", import.meta.url), "utf8");

  for (const source of [privacy, terms]) {
    assert.match(source, /MYGRANDSTAND PTE\. LTD\./);
    assert.match(source, /mailto:support@mygrandstand\.cc/);
    assert.match(source, /support@mygrandstand\.cc/);
    assert.doesNotMatch(source, /mygrandstandapp@gmail\.com/);
    assert.doesNotMatch(source, /Highlightly|RapidAPI|OpenAI|Google|Firebase|Stripe|Vercel|Render/);
  }

  assert.match(privacy, /Last Updated: 23 July 2026/);
  assert.match(privacy, /Information We Process/);
  assert.match(privacy, /AI-generated Content/);
  assert.match(privacy, /MyGrandStand does not sell your personal information/);

  assert.match(terms, /MyGrandStand/);
  assert.match(terms, /Last Updated: 23 July 2026/);
  assert.match(terms, /No Betting or Gambling Advice/);
  assert.match(terms, /Governing Law/);
  assert.match(terms, /Thank you for using MyGrandStand/);
});
