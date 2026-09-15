const bricolageOptical = { fontVariationSettings: '"opsz" 14, "wdth" 100' } as const;
const frauncesOptical = { fontVariationSettings: '"SOFT" 0, "WONK" 1' } as const;

// Rebuilt on absolute coordinates matching the Figma source exactly (same
// approach as Hero.tsx) - the earlier flex/grid version approximated the
// layout but didn't reproduce the beige card's real position, size, and
// the precise text/button placement inside it, which read as misaligned.
export function FinalBoard() {
  return (
    <section className="relative h-[920px] w-full overflow-hidden bg-[#1d3c3c]">
      <div className="absolute -left-[108px] -top-[81px] h-[280px] w-[320px] rotate-12">
        <img src="/images/vasna/final-board-polygon.svg" alt="" className="h-full w-full" />
      </div>

      <p
        className="absolute left-[120px] top-[80px] font-bricolage text-[14px] font-semibold uppercase tracking-[2px] text-[#d9a237]"
        style={bricolageOptical}
      >
        The finished game
      </p>

      <h2
        className="absolute left-[120px] top-[130px] w-[600px] font-fraunces text-[52px] font-black leading-[1.08] text-[#f6f0e5]"
        style={frauncesOptical}
      >
        Hop &amp; Shop,
        <br />
        ready to play.
      </h2>

      <p
        className="absolute left-[120px] top-[300px] w-[440px] font-bricolage text-[16px] leading-[1.5] text-[#f6f0e5]/75"
        style={bricolageOptical}
      >
        Every card, colour, and rule traces back to a week spent watching Vasna Market actually work.
      </p>

      <div className="absolute left-[603px] top-[120px] flex h-[737px] w-[796px] items-center justify-center">
        <img
          src="/images/vasna/final-board-photo.png"
          alt="The finished Hop & Shop board, fully laid out and ready to play"
          className="max-h-full max-w-full object-contain drop-shadow-[0px_24px_50px_rgba(0,0,0,0.6)]"
        />
      </div>

      <div className="absolute -left-[3px] top-[551px] h-[199px] w-[588px] rounded-br-[152px] rounded-tr-[152px] bg-[#f6eedd]" />

      <p
        className="absolute right-[1028px] top-[628px] w-[297px] text-right font-bricolage text-[20px] font-light leading-[1.1] text-[#1d3c3c]"
        style={bricolageOptical}
      >
        Click to Download print and play version of the game
      </p>

      <button
        type="button"
        aria-label="Download print and play version"
        className="absolute left-[437px] top-[623px] flex h-[55px] w-[55px] items-center justify-center"
      >
        <img src="/images/vasna/download-btn-bg.svg" alt="" className="absolute inset-0 h-full w-full" />
        <img
          src="/images/vasna/download-btn-arrow.svg"
          alt=""
          className="relative h-[15px] w-[15px] rotate-90"
        />
      </button>
    </section>
  );
}
