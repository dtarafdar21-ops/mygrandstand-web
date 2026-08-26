import { Suspense } from "react";
import LegalDocument from "../../components/LegalDocument";

/**
 * Keep the corporate site's legal entry point on Footivo's canonical Terms.
 * The substantive document is maintained once in the Footivo app.
 */
export default function TermsOfUse() {
  return <Suspense fallback={null}><LegalDocument kind="terms" /></Suspense>;
}
