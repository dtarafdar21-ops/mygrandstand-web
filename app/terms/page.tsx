"use client";

import { useEffect } from "react";
import { getSafeCorporateReturnPath } from "../../lib/legalNavigation";

/**
 * Keep the corporate site's legal entry point on Footivo's canonical Terms.
 * The substantive document is maintained once in the Footivo app.
 */
export default function TermsOfUse() {
  useEffect(() => {
    const returnTo = getSafeCorporateReturnPath(new URLSearchParams(window.location.search).get("returnTo"));
    window.location.replace(`https://football.mygrandstand.cc/terms?corporate=1&returnTo=${encodeURIComponent(returnTo)}`);
  }, []);

  return null;
}
