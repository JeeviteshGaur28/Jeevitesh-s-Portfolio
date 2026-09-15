import { SplitRow } from "./SplitRow";

const bricolageOptical = { fontVariationSettings: '"opsz" 14, "wdth" 100' } as const;
const frauncesOptical = { fontVariationSettings: '"SOFT" 0, "WONK" 1' } as const;

export function ResearchProcess() {
  return (
    <section className="bg-[#f3f0eb]">
      <SplitRow
        className="py-[80px]"
        left={
          <div className="flex flex-col gap-[8px]">
            <p className="font-fraunces text-[32px] font-semibold text-[#2e2117]" style={frauncesOptical}>
              Research Process
            </p>
            <p
              className="font-bricolage text-[14px] font-semibold uppercase tracking-[1.12px] text-[#b85536]"
              style={bricolageOptical}
            >
              One week on the ground
            </p>
          </div>
        }
        right={
          <p className="max-w-[520px] pt-[6px] font-lato text-[16px] leading-[1.55] text-[#2e2117]">
            Contextual interviews&nbsp;&nbsp;→&nbsp;&nbsp;Stakeholder mapping&nbsp;&nbsp;→&nbsp;&nbsp;Power-interest
            grid&nbsp;&nbsp;→&nbsp;&nbsp;A day in the life&nbsp;&nbsp;→&nbsp;&nbsp;Closed card sorting
          </p>
        }
      />
    </section>
  );
}
