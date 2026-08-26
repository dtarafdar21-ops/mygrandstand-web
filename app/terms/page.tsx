import { redirect } from "next/navigation";

/**
 * Keep the corporate site's legal entry point on Footivo's canonical Terms.
 * The substantive document is maintained once in the Footivo app.
 */
export default function TermsOfUse() {
  redirect("https://football.mygrandstand.cc/terms");
}
