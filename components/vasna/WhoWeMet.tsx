import { SplitRow } from "./SplitRow";

const bricolageOptical = { fontVariationSettings: '"opsz" 14, "wdth" 100' } as const;
const frauncesOptical = { fontVariationSettings: '"SOFT" 0, "WONK" 1' } as const;

function SectionHeading() {
  return (
    <SplitRow
      left={
        <div className="flex flex-col gap-[8px]">
          <p
            className="font-bricolage text-[14px] font-semibold uppercase tracking-[1.12px] text-[#b85536]"
            style={bricolageOptical}
          >
            Who We Met?
          </p>
          <p className="font-bricolage text-[26px] font-bold leading-[1.15] text-[#2e2117]" style={bricolageOptical}>
            Three People,
            <br />
            Three kinds of power
          </p>
        </div>
      }
      right={
        <p className="max-w-[460px] font-bricolage text-[16px] leading-[1.5] text-[#2e2117]" style={bricolageOptical}>
          Every trip to Vasna Market plays out between the same three roles - the vendor working without a
          license, the shopkeeper holding the storefront, and the customer deciding where the money goes.
        </p>
      }
    />
  );
}

function PersonaCard({
  topColor,
  roleColor,
  age,
  name,
  role,
  tag,
  quote,
}: {
  topColor: string;
  roleColor: string;
  age: number;
  name: string;
  role: string;
  tag: string;
  quote: string;
}) {
  return (
    <div className="h-[335px] w-[340px] shrink-0 overflow-hidden rounded-[18px] bg-white shadow-[0px_10px_24px_0px_rgba(0,0,0,0.1)]">
      <div className="flex h-[94px] items-end gap-[6px] px-[19px] pb-[10px]" style={{ backgroundColor: topColor }}>
        <p className="font-lato text-[75px] font-bold italic leading-none text-white opacity-90">{age}</p>
        <p
          className="pb-[12px] font-bricolage text-[12px] font-semibold tracking-[1.5px] text-white"
          style={bricolageOptical}
        >
          YEARS OLD
        </p>
      </div>

      <div className="px-[24px] pt-[24px]">
        <p className="font-fraunces text-[28px] text-[#251d18]" style={frauncesOptical}>
          {name}
        </p>
        <p className="mt-[3px] font-bricolage text-[15px] font-medium" style={{ ...bricolageOptical, color: roleColor }}>
          {role}
        </p>
      </div>

      <div className="mx-[24px] my-[20px] h-px bg-[rgba(37,29,24,0.12)]" />

      <div className="flex flex-col gap-[12px] px-[24px]">
        <p
          className="font-bricolage text-[12px] font-semibold uppercase tracking-[1.2px] text-[rgba(37,29,24,0.5)]"
          style={bricolageOptical}
        >
          {tag}
        </p>
        <p className="font-lato text-[20px] italic leading-[1.38] text-[#251d18]">{quote}</p>
      </div>
    </div>
  );
}

export function WhoWeMet() {
  return (
    <section className="bg-[#f3f0eb] py-[90px]">
      <SectionHeading />
      <div className="mx-auto mt-[90px] flex max-w-[1440px] justify-center gap-[70px] px-[149px]">
        <PersonaCard
          topColor="#a05137"
          roleColor="#a05137"
          age={60}
          name="Devesh Bhai"
          role="Local Vendor"
          tag="NO FIXED SPOT"
          quote="“Kal yahan tha, aaj wahan hoon - jagah rozana badalti hai.”"
        />
        <PersonaCard
          topColor="#193c3c"
          roleColor="#193c3c"
          age={35}
          name="Dinesh Bhai"
          role="Shopkeeper"
          tag="HOLDS THE STOREFRONT"
          quote="“Yeh dukaan meri hai, par gali sabki hai.”"
        />
        <PersonaCard
          topColor="#b89158"
          roleColor="#b89158"
          age={40}
          name="Suhel Bhai"
          role="Seasonal Vendor"
          tag="COMES FOR THE SEASON"
          quote="“Season mein aata hoon, baaki mahine kahin aur.”"
        />
      </div>
    </section>
  );
}
