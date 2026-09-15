"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./AudioPlayer.module.css";

// Drop the actual track here: public/audio/song-for-work.mp3 (~63s, per spec).
const AUDIO_SRC = "/audio/song-for-work.mp3";

// Not specified in Figma - a slow ambient spin, adjust by feel.
const SPIN_SECONDS = 4;

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

// The orange record-label overlay that sits centered on each disc, pulled
// directly from the Figma asset ("Group 321").
function DiscLabel() {
  return (
    <svg
      viewBox="0 0 24.7634 24.7634"
      className="pointer-events-none absolute left-1/2 top-1/2 h-[24.763px] w-[24.763px] -translate-x-1/2 -translate-y-1/2"
    >
      <circle cx="12.3817" cy="12.3817" r="12.3817" fill="#E75326" />
      <circle cx="11.9566" cy="11.9526" r="0.853728" fill="white" />
      <path
        d="M23.0498 12.3799C23.0498 18.2749 18.2709 23.0538 12.3759 23.0538C6.4809 23.0538 1.70204 18.2749 1.70204 12.3799C1.70204 6.48486 6.4809 1.706 12.3759 1.706C18.2709 1.706 23.0498 6.48486 23.0498 12.3799ZM1.83642 12.3799C1.83642 18.2007 6.55511 22.9194 12.3759 22.9194C18.1967 22.9194 22.9154 18.2007 22.9154 12.3799C22.9154 6.55907 18.1967 1.84037 12.3759 1.84037C6.55511 1.84037 1.83642 6.55907 1.83642 12.3799Z"
        fill="#D9D9D9"
      />
      <path
        d="M15.3728 11.9514C15.3728 13.8377 13.8436 15.3668 11.9573 15.3668C10.071 15.3668 8.54186 13.8377 8.54186 11.9514C8.54186 10.0651 10.071 8.53592 11.9573 8.53592C13.8436 8.53592 15.3728 10.0651 15.3728 11.9514ZM8.64502 11.9514C8.64502 13.7807 10.128 15.2637 11.9573 15.2637C13.7866 15.2637 15.2696 13.7807 15.2696 11.9514C15.2696 10.1221 13.7866 8.63909 11.9573 8.63909C10.128 8.63909 8.64502 10.1221 8.64502 11.9514Z"
        fill="#D9D9D9"
      />
    </svg>
  );
}

// Base vinyl texture + orange label overlay, spinning together as one
// assembly. Both discs use identical animation params so they stay in
// sync automatically.
//
// The rotation is on a plain INNER div with no border-radius/overflow of
// its own - the circular clip (border-radius + overflow-hidden + border)
// lives on a separate, never-rotating OUTER div. Applying border-radius +
// overflow-hidden to the SAME element that's being rotated is what was
// causing the visible seams/blank slivers: some browsers recompute the
// clip path's polygon approximation of the circle mid-rotation, and it
// doesn't align perfectly at every angle. A static circular "window"
// with freely-rotating content underneath doesn't have that problem -
// the window never moves, so there's nothing to misalign.
function Disc({ playing }: { playing: boolean }) {
  return (
    <div className="relative h-[74px] w-[74px] shrink-0 overflow-hidden rounded-full border-[1.2px] border-[#373535] shadow-[0px_0px_0px_1px_#62615e]">
      <div
        className={`absolute inset-0 ${styles.disc}`}
        style={{
          animation: `${styles.discSpin} ${SPIN_SECONDS}s linear infinite`,
          animationPlayState: playing ? "running" : "paused",
          willChange: "transform",
        }}
      >
        <img
          src="/images/hero/vinyl-disc.png"
          alt=""
          className="pointer-events-none absolute -left-px -top-px h-[76px] w-[76px] max-w-none object-cover"
        />
        <DiscLabel />
      </div>
    </div>
  );
}

// The play triangle is the real Figma asset (a circle with the triangle
// carved out via a compound path, so it reads as a cutout). No pause
// variant exists anywhere in that Figma file - confirmed via a design
// system search - so the pause glyph below is hand-built using the exact
// same technique (same circle, same #E75326, same cutout construction,
// just evenodd instead of relying on winding direction) rather than a
// different style. Swap this in if a real pause frame gets added to Figma.
function PlayPauseIcon({ playing }: { playing: boolean }) {
  return (
    <svg viewBox="0 0 32 32" className="h-full w-full">
      <g filter="url(#audio-pp-inner-shadow)">
        {playing ? (
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14 0C6.272 0 0 6.272 0 14C0 21.728 6.272 28 14 28C21.728 28 28 21.728 28 14C28 6.272 21.728 0 14 0ZM9 8H12V20H9V8ZM16 8H19V20H16V8Z"
            fill="#E75326"
          />
        ) : (
          <path
            d="M14 0C6.272 0 0 6.272 0 14C0 21.728 6.272 28 14 28C21.728 28 28 21.728 28 14C28 6.272 21.728 0 14 0ZM10.5 20.3V7.7L20.3 14L10.5 20.3Z"
            fill="#E75326"
          />
        )}
      </g>
      <defs>
        <filter
          id="audio-pp-inner-shadow"
          x="0"
          y="0"
          width="28"
          height="29.5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.5" />
          <feGaussianBlur stdDeviation="1.525" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.31 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
        </filter>
      </defs>
    </svg>
  );
}

// Knob diameter 18.004px, center-dot diameter 5.479px - true center offset
// on both axes, replacing Figma's decorative (and visibly off-center)
// placement per explicit request.
const KNOB_SIZE = 18.004;
const DOT_SIZE = 5.479;
const DOT_OFFSET = (KNOB_SIZE - DOT_SIZE) / 2;

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Some MP3 encodings (VBR without a proper header) report
    // duration as Infinity until the browser seeks near the end - a
    // known browser quirk, not specific to this player. Without this,
    // the total-time label gets stuck at "0:00" even while the elapsed
    // time is clearly counting up.
    const resolveDuration = () => {
      if (!Number.isFinite(audio.duration)) {
        const onTimeUpdateOnce = () => {
          audio.removeEventListener("timeupdate", onTimeUpdateOnce);
          setDuration(audio.duration);
          audio.currentTime = 0;
        };
        audio.addEventListener("timeupdate", onTimeUpdateOnce);
        audio.currentTime = 1e10;
      } else {
        setDuration(audio.duration);
      }
    };

    const handleTimeUpdate = () => {
      if (!dragging) setCurrentTime(audio.currentTime);
    };
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
      audio.currentTime = 0;
    };

    audio.addEventListener("loadedmetadata", resolveDuration);
    audio.addEventListener("durationchange", resolveDuration);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);
    return () => {
      audio.removeEventListener("loadedmetadata", resolveDuration);
      audio.removeEventListener("durationchange", resolveDuration);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      void audio.play();
      setIsPlaying(true);
    }
  };

  const seekToFraction = (fraction: number) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const time = Math.min(1, Math.max(0, fraction)) * duration;
    audio.currentTime = time;
    setCurrentTime(time);
  };

  const computeFraction = (clientX: number) => {
    const track = trackRef.current;
    if (!track) return 0;
    const rect = track.getBoundingClientRect();
    if (rect.width === 0) return 0;
    return Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
  };

  // Drag is driven by WINDOW-level listeners (attached only while
  // `dragging` is true), not element-level pointer capture - a more
  // conservative, widely-tested pattern for custom sliders. This is what
  // fixes both "click does nothing" and "can't drag": the previous
  // pointer-capture approach depended on the browser correctly
  // redirecting move/up events to the element that captured them, which
  // is exactly the kind of thing that silently breaks across browsers.
  // Listening on window instead means every move/up is caught no matter
  // where the cursor ends up.
  useEffect(() => {
    if (!dragging) return;

    const handleMove = (e: PointerEvent) => seekToFraction(computeFraction(e.clientX));
    const handleUp = () => setDragging(false);

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dragging, duration]);

  const handleTrackPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setDragging(true);
    seekToFraction(computeFraction(e.clientX));
  };

  const progress = duration > 0 ? currentTime / duration : 0;
  const progressPct = Math.min(100, Math.max(0, progress * 100));

  return (
    <div className="relative flex h-[98px] w-[315px] shrink-0 items-center justify-between rounded-[999px] bg-[#c3c4c8] px-[11px] shadow-[0px_5.5px_2.4px_0px_rgba(0,0,0,0.25)]">
      <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_2.5px_3.65px_0px_#f5f1ee,inset_-1px_-5px_1.15px_0px_#b8b7b2]" />

      <audio ref={audioRef} src={AUDIO_SRC} preload="metadata" />

      <Disc playing={isPlaying} />

      <div className="relative z-[1] flex flex-col items-center gap-[6px]">
        <p className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[-0.1px] text-[#18191B]">
          Go to song for work
        </p>

        <div className="relative h-[9px] w-[120px]">
          <div
            ref={trackRef}
            className="absolute inset-0 cursor-pointer touch-none rounded-full bg-[#737373] shadow-[0px_1.5px_0.5px_0px_#ededed]"
            onPointerDown={handleTrackPointerDown}
          >
            {/* Blue progress fill - grows with real playback, per audio.currentTime/duration */}
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-[#6095f9]"
              style={{ width: `${progressPct}%` }}
            />
            <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_-0.5px_1.5px_0px_rgba(0,0,0,0.2),inset_1.5px_1.5px_1.7px_0px_rgba(0,0,0,0.5)]" />
          </div>
          <div
            className="pointer-events-none absolute top-1/2 size-[18.004px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[0.4px] border-[#e4e5e5] shadow-[1px_2px_2px_0px_rgba(0,0,0,0.25)]"
            style={{
              left: `${progressPct}%`,
              backgroundImage: "radial-gradient(circle at 35% 30%, rgb(246,244,245), rgb(202,204,201))",
            }}
          >
            <span
              className="absolute rounded-full shadow-[0px_0.5px_0.95px_0px_rgba(0,0,0,0.51)]"
              style={{
                left: DOT_OFFSET,
                top: DOT_OFFSET,
                width: DOT_SIZE,
                height: DOT_SIZE,
                backgroundImage: "linear-gradient(150deg, rgb(254,91,42) 21.218%, rgb(157,55,24) 67.05%)",
              }}
            />
          </div>
        </div>

        <div className="flex w-[120px] justify-between font-mono text-[10px] tracking-[-0.05px] text-[#070707]">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>

        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause" : "Play"}
          className="mt-[2px] h-[32px] w-[32px] shrink-0"
        >
          <PlayPauseIcon playing={isPlaying} />
        </button>
      </div>

      <Disc playing={isPlaying} />
    </div>
  );
}
