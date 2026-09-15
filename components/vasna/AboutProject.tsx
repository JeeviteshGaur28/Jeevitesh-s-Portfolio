import { SplitRow } from "./SplitRow";

const bricolageSemibold = { fontVariationSettings: '"opsz" 14, "wdth" 100' } as const;

function DetailRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <>
      <p className="font-lato text-[12px] font-bold tracking-[0.72px] text-[#b85536]">{label}</p>
      <p className="font-lato text-[16px] leading-[1.4] text-[#2e2117]">{children}</p>
    </>
  );
}

function ProjectFacts() {
  return (
    <div className="flex w-[439px] shrink-0 flex-col gap-[35px]">
      <p className="font-bricolage text-[16px] font-semibold tracking-[1.28px] text-[#b85536]" style={bricolageSemibold}>
        THE PROJECT
      </p>
      <div className="grid grid-cols-[91px_320px] gap-x-[28px] gap-y-[26px]">
        <DetailRow label="ROLE">Research | Insights | Game Mechanics | Illustrations</DetailRow>
        <DetailRow label="TIMELINE">3 weeks, including 1 week of on-field research</DetailRow>
        <DetailRow label="TOOLS">Figma, Adobe Illustrator</DetailRow>
        <DetailRow label="OBJECTIVE">
          Understanding the business and power relationships between shopkeepers and street vendors at Vasna
          Market.
        </DetailRow>
        <DetailRow label="OUTCOME">
          Hop &amp; Shop in Vasna — a board game that turns those dynamics into something playable.
        </DetailRow>
      </div>
    </div>
  );
}

function AmcBadge() {
  return (
    <div className="flex w-fit items-center gap-[12px] rounded-[100px] bg-[rgba(201,154,91,0.11)] py-[6px] pl-[6px] pr-[18px]">
      <img src="/images/vasna/amc-seal.png" alt="" className="h-[34px] w-[34px] rounded-full object-cover" />
      <p className="whitespace-nowrap font-lato text-[13px] font-bold text-[rgba(46,33,23,0.75)]">
        Commissioned by Ahmedabad Municipal Corporation
      </p>
    </div>
  );
}

function AboutCopy() {
  return (
    <div className="flex w-[508px] shrink-0 flex-col gap-[32px]">
      <p className="font-bricolage text-[28px] font-semibold text-[#2e2117]" style={bricolageSemibold}>
        About the project
      </p>
      <div className="flex flex-col gap-[22px] font-lato text-[16px] leading-[1.55] text-[#2e2117]">
        <p>
          A three-week project built on one week of on-field ethnographic research at Vasna Market, in the old
          city of Ahmedabad, understanding the business relationships between the people who run it.
        </p>
        <p>
          Commissioned by the Ahmedabad Municipal Corporation, the study looked at what actually keeps a
          market that&apos;s run for over 60 years working: not its formal structure, but the trust and power
          dynamics between shopkeepers and vendors. We turned those insights into a playable board game.
        </p>
      </div>
      <AmcBadge />
    </div>
  );
}

export function AboutProject() {
  return (
    <section className="bg-[#f3f0eb]">
      <SplitRow className="pb-[140px] pt-[175px]" left={<ProjectFacts />} right={<AboutCopy />} />
    </section>
  );
}
