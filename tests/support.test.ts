import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("public Footivo support page is platform-neutral and uses the support mailbox", async () => {
  const page = await readFile(new URL("../app/support/page.tsx", import.meta.url), "utf8");
  const footer = await readFile(new URL("../components/SiteFooter.tsx", import.meta.url), "utf8");

  assert.match(page, /Footivo Support/);
  assert.match(page, /App Store or Google Play/);
  assert.match(page, /app store account used to subscribe/);
  assert.match(page, /mailto:support@footivo\.net/);
  assert.match(page, /support@footivo\.net/);
  assert.doesNotMatch(page, /support@mygrandstand\.cc/);
  assert.match(footer, /href="\/support"/);
  assert.match(footer, /Support\s*</);
  assert.doesNotMatch(footer, /mailto:support@(?:mygrandstand|footivo)\.net/);
  assert.doesNotMatch(footer, /support@(?:mygrandstand|footivo)\.net/);
});
