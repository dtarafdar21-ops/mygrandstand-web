import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const pageSource = readFileSync(resolve(root, "app/page.tsx"), "utf8");
const lockupSource = readFileSync(resolve(root, "components/BrandLockup.tsx"), "utf8");
const configSource = readFileSync(resolve(root, "next.config.ts"), "utf8");

const checks = [
  [
    pageSource.includes('import { BrandLockup } from "../components/BrandLockup";'),
    "homepage imports the dedicated brand lockup component",
  ],
  [
    pageSource.includes("<BrandLockup />"),
    "homepage renders the shared brand lockup component",
  ],
  [
    pageSource.includes("Open MyGrandStand Football"),
    "homepage CTA text is preserved",
  ],
  [
    !pageSource.includes("MGS") &&
      !pageSource.includes("MYGRANDSTAND") &&
      !pageSource.includes('rounded-full border border-emerald-400/40 bg-emerald-400/10'),
    "homepage no longer contains the old text-based brand lockup",
  ],
  [
    lockupSource.includes('src="/branding/mygrandstand-umbrella-lockup.png"') &&
      lockupSource.includes('alt="MyGrandStand — My Sports. My Way."'),
    "brand lockup points at the approved umbrella artwork filename",
  ],
  [
    configSource.includes('output: "export"') && configSource.includes("images:") && configSource.includes("unoptimized: true"),
    "static export image compatibility is enabled",
  ],
];

const failed = checks.filter(([pass]) => !pass);

if (failed.length > 0) {
  throw new Error(
    `Hero assertions failed: ${failed.map(([, label]) => label).join(", ")}`,
  );
}

if (!existsSync(resolve(root, "public/branding/mygrandstand-umbrella-lockup.png"))) {
  console.warn("Missing public/branding/mygrandstand-umbrella-lockup.png");
}

console.log("Hero source assertions passed.");
