import { SplitRow } from "./SplitRow";

const bricolageOptical = { fontVariationSettings: '"opsz" 14, "wdth" 100' } as const;

function TextBlock() {
  return (
    <div className="flex flex-col gap-[40px]">
      <div className="flex flex-col gap-[8px]">
        <p
          className="font-bricolage text-[14px] font-semibold uppercase tracking-[2px] text-[#c76647]"
          style={bricolageOptical}
        >
          Mapping the power
        </p>
        <p className="font-bricolage text-[26px] font-medium leading-[1.12] text-[#251d18]" style={bricolageOptical}>
          Not everyone in the market holds the same power.
        </p>
      </div>

      <div className="flex flex-col gap-[8px]">
        <p
          className="font-bricolage text-[12px] font-semibold uppercase tracking-[1.5px] text-[#251d18]"
          style={bricolageOptical}
        >
          Key insight
        </p>
        <p className="max-w-[460px] font-lato text-[16px] leading-[1.42] text-[#251d18]">
          Shopkeepers and AMC hold the most power. Residents and transporters hold the least. Vendors sit
          closer to power than their legal status suggests.
        </p>
      </div>

      <p className="max-w-[400px] font-lato text-[12px] font-bold uppercase tracking-[1px] text-[#c76647]">
        From our stakeholder mapping session — darker rings, more influence
      </p>
    </div>
  );
}

export function PowerMatrix() {
  return (
    <section className="bg-[#f3f0eb]">
      <SplitRow
        className="items-center py-[80px]"
        left={<TextBlock />}
        right={
          <div className="h-[435px] w-[519px] overflow-hidden rounded-[18px] shadow-[0px_14px_34px_0px_rgba(0,0,0,0.16)]">
            <img
              src="/images/vasna/stakeholder-map.png"
              alt="Stakeholder power map: nested rings showing shopkeepers and AMC at the highest-influence center, out to residents and transporters at the lowest-influence edge"
              className="h-full w-full object-cover"
            />
          </div>
        }
      />
    </section>
  );
}
