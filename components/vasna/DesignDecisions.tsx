import { SplitRow } from "./SplitRow";

const bricolageOptical = { fontVariationSettings: '"opsz" 14, "wdth" 100' } as const;
const frauncesOptical = { fontVariationSettings: '"SOFT" 0, "WONK" 1' } as const;

function HeaderBlock() {
  return (
    <div className="flex flex-col gap-[10px]">
      <p className="font-lato text-[12px] font-bold uppercase tracking-[1.2px] text-[#b85536]">
        What we chose, and why?
      </p>
      <p className="font-bricolage text-[26px] font-semibold text-[#0a0a0a]" style={bricolageOptical}>
        Design Decisions
      </p>
    </div>
  );
}

function WhyBoardGame() {
  return (
    <div className="flex max-w-[535px] flex-col gap-[15px]">
      <p className="font-bricolage text-[20px] text-[#0a0a0a]" style={bricolageOptical}>
        Why only a Board Game?
      </p>
      <p className="font-lato text-[16px] leading-[1.5] tracking-[0.16px] text-black">
        The board game aims to give a real experience of the Vasana Market, conceptualized on the theme of
        power dynamics. The game is designed in a way, that gives us a view of how the market is functioning
        and the hindrances that affect the market flow.
      </p>
    </div>
  );
}

type Point = { number: string; text: string };

const BOARD_VISUAL: Point[] = [
  { number: "01", text: "Triangular shape → mirrors the real Temple–Home–AMC triangle at the junction." },
  {
    number: "02",
    text: "Center illustration → the chowk, where every festival in Vasna is celebrated - the market's cultural core.",
  },
  {
    number: "03",
    text: "Hand-drawn, frame-by-frame illustrations → keeps the design raw, true to the market itself.",
  },
];

const MECHANICS: Point[] = [
  {
    number: "01",
    text: "Customer-command rule → shopkeepers and vendors, not customers, hold the power to redirect.",
  },
  {
    number: "02",
    text: "Spiral cards → external forces (weather, festivals, politics) vendors can't plan around.",
  },
  { number: "03", text: "Task cards → the daily grind of actually making a sale." },
];

function PointColumn({ title, points, align }: { title: string; points: Point[]; align: "left" | "right" }) {
  const isRight = align === "right";
  return (
    <div className={`flex flex-col ${isRight ? "items-end" : "items-start"}`}>
      <p
        className={`font-lato text-[13px] font-bold uppercase tracking-[0.78px] text-[#b85536] ${isRight ? "text-right" : ""}`}
      >
        {title}
      </p>
      <div className="mt-[24px] flex w-full flex-col">
        {points.map((point, i) => (
          <div
            key={point.number}
            className={`flex items-start gap-[16px] py-[28px] ${i > 0 ? "border-t border-[rgba(37,29,24,0.1)]" : ""} ${isRight ? "flex-row-reverse" : ""}`}
          >
            <p
              className="shrink-0 font-fraunces text-[22px] font-semibold text-[rgba(184,85,54,0.55)]"
              style={frauncesOptical}
            >
              {point.number}
            </p>
            <p
              className={`font-lato text-[16px] leading-[1.48] text-[rgba(46,33,23,0.85)] ${isRight ? "text-right" : ""}`}
            >
              {point.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DesignDecisions() {
  return (
    <section className="bg-[#f3f0eb] py-[90px]">
      <SplitRow className="pb-[70px]" left={<HeaderBlock />} right={<WhyBoardGame />} />
      <SplitRow
        left={<PointColumn title="Board & Visual" points={BOARD_VISUAL} align="right" />}
        right={<PointColumn title="Mechanics" points={MECHANICS} align="left" />}
      />
      <div className="mx-auto mt-[50px] max-w-[1440px] px-[149px]">
        <div className="h-px w-full bg-[rgba(37,29,24,0.1)]" />
      </div>
    </section>
  );
}
