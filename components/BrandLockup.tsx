export function BrandLockup() {
  return (
    <div className="mb-6 w-full max-w-[340px] sm:max-w-[420px] md:mb-8 md:max-w-[500px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/branding/mygrandstand-umbrella-lockup.png"
        alt="MyGrandStand — My Sports. My Way."
        className="block h-auto w-full max-w-full object-contain"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
    </div>
  );
}
