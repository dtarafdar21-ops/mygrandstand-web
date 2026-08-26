import assert from "node:assert/strict";
import test from "node:test";

import { getCorporateLegalHref, getSafeCorporateReturnPath } from "../lib/legalNavigation.ts";

test("corporate legal navigation preserves safe internal origins", () => {
  assert.equal(getSafeCorporateReturnPath("/about"), "/about");
  assert.equal(getSafeCorporateReturnPath("https://evil.test"), "/");
  assert.equal(getSafeCorporateReturnPath("//evil.test"), "/");
  assert.equal(getSafeCorporateReturnPath("/not-a-corporate-page"), "/");
  assert.equal(
    getCorporateLegalHref("privacy", "/why-mygrandstand"),
    "https://football.mygrandstand.cc/privacy?corporate=1&returnTo=%2Fwhy-mygrandstand"
  );
});
