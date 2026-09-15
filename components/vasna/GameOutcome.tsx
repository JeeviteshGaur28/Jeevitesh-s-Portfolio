import { SplitRow } from "./SplitRow";

const bricolageOptical = { fontVariationSettings: '"opsz" 14, "wdth" 100' } as const;
const frauncesOptical = { fontVariationSettings: '"SOFT" 0, "WONK" 1' } as const;

const STATS = ["3 Roles", "1 Triangular Board", "Endless Power Plays"];

function TextBlock() {
  return (
    <div className="flex flex-col gap-[32px]">
      <div className="flex flex-col gap-[16px]">
        <p
          className="font-bricolage text-[14px] font-semibold uppercase tracking-[1.12px] text-[#b85536]"
          style={bricolageOptical}
        >
          The creative outcome
        </p>
        <h2
          className="font-fraunces text-[64px] font-black leading-[1.04] text-[#2e2117]"
          style={frauncesOptical}
        >
          The board
          <br />
          becomes
          <br />
          the market
        </h2>
      </div>

      <p className="max-w-[480px] font-lato text-[18px] leading-[1.5] tracking-[0.18px] text-black">
        The board game aims to give a real experience of the Vasana Market, conceptualized on the theme of
        power dynamics. The game is designed in a way, that gives us a view of how the market is functioning
        and the hindrances that affect the market flow.
      </p>

      <div className="flex flex-wrap items-center gap-[10px]">
        {STATS.map((stat, i) => (
          <div key={stat} className="flex items-center gap-[10px]">
            {i > 0 && <span className="text-[#b85536]">·</span>}
            <p
              className="whitespace-nowrap font-bricolage text-[12px] font-medium uppercase tracking-[0.48px] text-[#b85536]"
              style={bricolageOptical}
            >
              {stat}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// The triangle isn't a soft glow tucked neatly behind the board - in the
// Figma source it's a separate, larger shape whose own container sits
// offset up and to the right of the board's container (left +225px,
// top -92px relative to the board box), so most of it pokes out above
// the board into the empty cream space, only its bottom corner tucking
// behind the board's own top-right corner.
function BoardPhoto() {
  return (
    <div className="relative h-[707px] w-[677px]">
      <img
        src="/images/vasna/outcome-polygon.svg"
        alt=""
        className="absolute -rotate-[12.34deg]"
        style={{ left: 225, top: -92, width: 407 }}
      />
      <img
        src="/images/vasna/board-photo.png"
        alt="The finished Hop & Shop board game, laid out with its triangular board and character cards"
        className="absolute left-1/2 top-1/2 w-[642px] -translate-x-1/2 -translate-y-1/2 -rotate-3 drop-shadow-[0px_20px_40px_rgba(26,18,10,0.3)]"
      />
    </div>
  );
}

// The cream here (#f6eedd) is a touch warmer than the #f3f0eb used by the
// sections before/after it - Figma bridges the two with a soft gradient
// band at each edge (own assets: Rectangle130 top, Rectangle131 bottom)
// rather than a hard cut. Reproduced as one background gradient instead
// of two image layers - same visual result, no extra assets.
export function GameOutcome() {
  return (
    <section
      style={{
        background:
          "linear-gradient(to bottom, #f3f0eb 0px, #f6eedd 140px, #f6eedd calc(100% - 140px), #f3f0eb 100%)",
      }}
    >
      <SplitRow className="items-center py-[110px]" left={<TextBlock />} right={<BoardPhoto />} />
    </section>
  );
}
