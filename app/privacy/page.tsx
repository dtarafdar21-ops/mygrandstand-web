import { redirect } from "next/navigation";

/**
 * Keep the corporate site's legal entry point on Footivo's canonical policy.
 * The policy is maintained once in the Footivo app so public surfaces cannot
 * drift in wording, date, operator identity or contact details.
 */
export default function PrivacyPolicy() {
  redirect("https://football.mygrandstand.cc/privacy");
}
