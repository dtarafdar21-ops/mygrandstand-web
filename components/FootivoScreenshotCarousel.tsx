"use client";

import Image from "next/image";
import { useState, type TouchEvent } from "react";

const screenshots = [
  ["/footivo/screenshots/Footivo_AppStore_Screenshot_01_Match_Centre_1242x2688.png", "Footivo Match Centre"],
  ["/footivo/screenshots/Footivo_AppStore_Screenshot_02_Match_Stats_1242x2688.png", "Footivo match statistics"],
  ["/footivo/screenshots/Footivo_AppStore_Screenshot_03_Match_Events_1242x2688_FIXED.png", "Footivo match events"],
  ["/footivo/screenshots/Footivo_AppStore_Screenshot_04_Lineups_1242x2688.png", "Footivo match lineups"],
  ["/footivo/screenshots/Footivo_AppStore_Screenshot_05_Match_Heroes_1242x2688_FINAL.png", "Footivo Match Heroes"],
  ["/footivo/screenshots/Footivo_AppStore_Screenshot_06_News_1242x2688.png", "Footivo football news"],
  ["/footivo/screenshots/Footivo_AppStore_Screenshot_07_Team_Page_1242x2688.png", "Footivo team page"],
  ["/footivo/screenshots/Footivo_AppStore_Screenshot_08_Game_Main_1242x2688.png", "Footivo Game Rooms"],
  ["/footivo/screenshots/Footivo_AppStore_Screenshot_09_Game_Room_1242x2688.png", "Footivo Game Room"],
  ["/footivo/screenshots/Footivo_AppStore_Screenshot_10_Quiz_1242x2688.png", "Footivo quiz"],
] as const;

type Props = { variant?: "default" | "compact" };

export function FootivoScreenshotCarousel({ variant = "default" }: Props) {
  const [active, setActive] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 40;

  const previous = () => setActive((current) => (current - 1 + screenshots.length) % screenshots.length);
  const next = () => setActive((current) => (current + 1) % screenshots.length);
  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null);
    setTouchStart(event.targetTouches[0]?.clientX ?? null);
  };
  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => setTouchEnd(event.targetTouches[0]?.clientX ?? null);
  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    if (Math.abs(distance) < minSwipeDistance) return;
    if (distance > 0) next();
    else previous();
  };

  return (
    <section
      aria-label="Explore Footivo screenshots"
      className={`mt-12 overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/45 px-3 py-8 shadow-[0_20px_70px_rgba(2,6,23,0.28)] sm:px-6 sm:py-10 ${variant === "compact" ? "sm:py-8" : ""}`}
    >
      <div className="-mx-3 max-w-3xl text-left sm:-mx-6">
        <h2 className="text-2xl font-semibold leading-8 text-white">Explore Footivo</h2>
        <p className="mt-2 max-w-2xl text-base leading-7 text-slate-300">
          See Match Centre, match details, Game Rooms, news, videos and quizzes in action.
        </p>
      </div>

      <div className="relative mx-auto mt-8 max-w-6xl touch-pan-y" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
        <div
          className="flex items-center gap-[var(--carousel-gap)] transition-transform duration-500 ease-out will-change-transform sm:[--carousel-gap:1.5rem]"
          style={{
            transform: `translateX(calc(50% - (${active + 0.5} * var(--carousel-slide-width)) - ${active} * var(--carousel-gap)))`,
            ["--carousel-slide-width" as string]: "min(74vw, 310px)",
            ["--carousel-gap" as string]: "1rem",
          }}
        >
          {screenshots.map(([src, alt], index) => (
            <div
              key={src}
              className={`relative shrink-0 overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900 shadow-xl transition-[opacity,transform] duration-500 sm:rounded-3xl ${index === active ? "scale-100 opacity-100" : "scale-[0.94] opacity-55"}`}
              style={{ width: "var(--carousel-slide-width)" }}
              aria-hidden={index !== active}
            >
              <Image src={src} alt={alt} width={1242} height={2688} sizes="(max-width: 640px) 74vw, 310px" priority={index === 0} loading={index === 0 ? "eager" : "lazy"} className="block h-auto w-full" />
            </div>
          ))}
        </div>

        <button type="button" onClick={previous} aria-label="Show previous Footivo screenshot" className="absolute left-1 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-600 bg-slate-950/90 text-2xl text-white shadow-lg transition hover:border-emerald-300 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 sm:left-4"><span aria-hidden="true">‹</span></button>
        <button type="button" onClick={next} aria-label="Show next Footivo screenshot" className="absolute right-1 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-600 bg-slate-950/90 text-2xl text-white shadow-lg transition hover:border-emerald-300 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 sm:right-4"><span aria-hidden="true">›</span></button>
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-2" aria-label="Choose a screenshot">
        {screenshots.map(([src, alt], index) => (
          <button key={src} type="button" onClick={() => setActive(index)} aria-label={`Show screenshot ${index + 1}: ${alt}`} aria-current={index === active ? "true" : undefined} className={`h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${index === active ? "w-7 bg-emerald-300" : "w-2.5 bg-slate-600 hover:bg-slate-400"}`} />
        ))}
      </div>
    </section>
  );
}
