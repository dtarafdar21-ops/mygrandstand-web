"use client";

import { useEffect } from "react";
import { getSafeCorporateReturnPath } from "../../lib/legalNavigation";

/**
 * Keep the corporate site's legal entry point on Footivo's canonical policy.
 * The policy is maintained once in the Footivo app so public surfaces cannot
 * drift in wording, date, operator identity or contact details.
 */
export default function PrivacyPolicy() {
  useEffect(() => {
    const returnTo = getSafeCorporateReturnPath(new URLSearchParams(window.location.search).get("returnTo"));
    window.location.replace(`https://football.mygrandstand.cc/privacy?corporate=1&returnTo=${encodeURIComponent(returnTo)}`);
  }, []);

  return null;
}
