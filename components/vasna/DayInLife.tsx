import { SplitRow } from "./SplitRow";

const bricolageOptical = { fontVariationSettings: '"opsz" 14, "wdth" 100' } as const;

const SCHEDULE = [
  { time: "7:00 – 8:00 AM", description: "Vendors arrive and set up their stalls before the market opens." },
  {
    time: "8:00 – 10:00 AM",
    description: "Morning footfall picks up, locals buy daily essentials on their way out.",
  },
  { time: "10:00 AM – 1:00 PM", description: "Market slows down through midday heat; vendors rest or restock." },
  { time: "1:00 – 4:00 PM", description: "Lunch hour lull continues — a quieter stretch for the whole market." },
  { time: "4:00 – 6:00 PM", description: "Footfall rises again as people return from work and school." },
  { time: "6:00 – 8:30 PM", description: "Peak evening rush — the busiest window of the entire day." },
  { time: "8:30 – 9:00 PM", description: "Vendors begin packing up and closing for the night." },
];

function TimelineEntry({ time, description }: { time: string; description: string }) {
  return (
    <div className="relative pl-[45px]">
      <span className="absolute left-0 top-[5px] h-[12px] w-[12px] rounded-full bg-[#c76647]" />
      <p className="font-lato text-[16px] font-bold text-[#251d18]">{time}</p>
      <p className="mt-[6px] max-w-[430px] font-lato text-[15px] leading-[1.4] text-[#251d18]/70">{description}</p>
    </div>
  );
}

function Timeline() {
  return (
    <div className="relative flex flex-col gap-[34px]">
      <div className="absolute bottom-[6px] left-[5px] top-[6px] w-[2px] bg-[rgba(37,29,24,0.15)]" />
      {SCHEDULE.map((entry) => (
        <TimelineEntry key={entry.time} {...entry} />
      ))}
    </div>
  );
}

export function DayInLife() {
  return (
    <section className="bg-[#f3f0eb] py-[90px]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-[8px] px-[149px] text-center">
        <p
          className="font-bricolage text-[14px] font-semibold uppercase tracking-[2px] text-[#c76647]"
          style={bricolageOptical}
        >
          A day in the market
        </p>
        <p className="font-bricolage text-[26px] font-medium leading-[1.1] text-[#251d18]" style={bricolageOptical}>
          From 7 AM to 9 PM, the market has a rhythm.
        </p>
      </div>

      <SplitRow
        className="mt-[70px]"
        left={
          <div className="h-[590px] w-[443px] shadow-[0px_14px_34px_8px_rgba(0,0,0,0.19)]">
            <img
              src="/images/vasna/day-in-life.png"
              alt="A vendor at his stall under a red awning at Vasna Market"
              className="h-full w-full object-cover"
            />
          </div>
        }
        right={<Timeline />}
      />
    </section>
  );
}
