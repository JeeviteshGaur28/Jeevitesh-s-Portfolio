import { DotColumn } from "./Ornaments";

export function OverviewSection() {
  return (
    <div className="relative mx-auto max-w-[1440px] px-[149px] pb-[100px] pt-[100px]">
      <div className="absolute left-[14px] top-[80px] hidden lg:block">
        <DotColumn />
      </div>

      <div className="flex gap-[80px]">
        <div className="flex w-[350px] shrink-0 flex-col items-end gap-[24px] text-right">
          <p
            className="font-fraunces text-[40px] leading-[42px]"
            style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
          >
            <span className="italic text-[#5c4632]/60">The Village Of</span>{" "}
            <span className="font-bold italic text-[#5c4632]">Kuldhara</span>
          </p>

          <div className="relative h-[341px] w-[260px]">
            <div className="absolute left-[16px] top-[10px] h-[309px] w-[216px] rotate-[-3.41deg] rounded-sm border-2 border-white bg-[#d9be93]" />
            <div className="absolute left-[25px] top-[20px] h-[290px] w-[195px] rotate-[-3.38deg] rounded-sm border border-white bg-[#d9be93]" />
            <div className="absolute left-[26px] top-[21px] h-[299px] w-[208px] overflow-hidden border border-[#d9be93] bg-white">
              <img
                alt="Kuldhara survey map"
                className="h-full w-full object-cover"
                src="/images/kuldhara-map.png"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[20px] pt-[6px]">
          <p className="font-lato text-[20px] leading-[42px] text-[#5c4632]">OVERVIEW</p>
          <p className="max-w-[671px] font-lato text-[18px] leading-[26px] text-[#3a2c21]">
            A multisensory VR experience for Meta Quest 3. Kuldhara, a Rajasthan village Rajasthan Tourism
            and the ASI sell as haunted - five thousand people said to vanish overnight in 1825 - but the
            records don&apos;t agree. I built one evening of the village record-keeper&apos;s job, one
            scene from a larger narrative, modelled in Blender, assembled in Unity, and experienced
            hands-on.
          </p>

          <div className="mt-[110px] flex max-w-[650px] flex-col gap-[20px]">
            <p
              className="font-fraunces text-[40px] leading-[42px]"
              style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
            >
              <span className="italic text-[#5c4632]/60">The</span>{" "}
              <span className="font-bold italic text-[#5c4632]">Brief</span>
            </p>
            <p className="font-lato text-[18px] leading-[26px] text-[#3a2c21]">
              Document a space or practice that survives mainly in communal memory, not conventional VR.
              Move away from entertainment, toward preservation and speculation. The studio kept asking one
              question: whose narratives get represented in virtual worlds, and whose get left out.
            </p>
            <p className="font-lato text-[18px] italic leading-[26px] text-[#3a2c21]">
              I already had a site where that question had an answer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
