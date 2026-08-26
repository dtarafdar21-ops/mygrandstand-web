const FOOTIVO_ORIGIN = "https://football.mygrandstand.cc";

export function getSafeCorporateReturnPath(value: string | null | undefined) {
  if (!value) return "/";

  try {
    const decoded = decodeURIComponent(value);
    if (!decoded.startsWith("/") || decoded.startsWith("//") || decoded.includes("\\")) return "/";
    const pathname = decoded.split("?", 1)[0].split("#", 1)[0];
    return ["/", "/about", "/why-mygrandstand"].includes(pathname) ? decoded : "/";
  } catch {
    return "/";
  }
}

export function getCorporateLegalHref(documentPath: "privacy" | "terms", returnTo: string | null | undefined) {
  const safePath = getSafeCorporateReturnPath(returnTo);
  return `${FOOTIVO_ORIGIN}/${documentPath}?corporate=1&returnTo=${encodeURIComponent(safePath)}`;
}
