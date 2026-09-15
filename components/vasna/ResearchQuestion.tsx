const bricolageOptical = { fontVariationSettings: '"opsz" 14, "wdth" 100' } as const;

// Same page background as the card itself (per Figma) - the card reads as
// "raised" purely from its own drop shadow, no color contrast needed.
export function ResearchQuestion() {
  return (
    <section className="bg-[#f3f0eb] px-[149px] pb-[90px] pt-[24px]">
      <div className="mx-auto flex max-w-[1142px] flex-col items-center rounded-[22px] bg-[#f3f0eb] px-[100px] py-[45px] shadow-[0px_10px_12px_0px_rgba(0,0,0,0.1)]">
        <div className="flex max-w-[1000px] flex-col gap-[25px]">
          <p
            className="font-bricolage text-[16px] font-semibold uppercase tracking-[1.28px] text-[#b85536]"
            style={bricolageOptical}
          >
            Research Question
          </p>
          <p className="font-bricolage text-[20px] leading-[1.28] text-[#2e2117]" style={bricolageOptical}>
            In what ways do the intra- and inter-business dynamics and power relationships among shopkeepers
            and street vendors affect the functioning of Vasna Market?
          </p>
        </div>
      </div>
    </section>
  );
}
