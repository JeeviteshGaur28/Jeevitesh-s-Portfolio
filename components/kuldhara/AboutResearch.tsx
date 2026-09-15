export function AboutResearch() {
  return (
    <div className="mx-auto flex max-w-[1440px] flex-col gap-[130px] px-[149px] py-[80px]">
      <div className="flex items-start gap-[80px]">
        <div className="flex w-[405px] shrink-0 flex-col items-end justify-center text-right">
          <p
            className="w-full font-fraunces text-[40px] font-semibold italic leading-[42px] text-[#5c4632]"
            style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
          >
            About Project
          </p>
        </div>
        <p className="max-w-[652px] font-lato text-[18px] leading-[26px] text-[#3a2c21]">
          A single-player VR experience for Meta Quest 3, set at the heritage site, told through Munshi,
          the village record-keeper. One night, on his usual rounds, he checks the well and finds it dry. A
          rope, tracked by a rotary encoder wired to Arduino, controls the bucket in real time — so the
          discovery happens in your hands, not on a screen.
        </p>
      </div>

      <div className="flex items-start gap-[80px]">
        <div className="flex w-[405px] shrink-0 flex-col items-end gap-[14px] text-right">
          <p
            className="font-fraunces text-[40px] font-semibold italic leading-[42px] text-[#5c4632]"
            style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
          >
            The Research
          </p>
          <p className="font-lato text-[20px] uppercase text-black">Desk Research</p>
        </div>
        <div className="max-w-[652px] font-lato text-[18px] leading-[26px] text-[#3a2c21]">
          <ul className="list-disc space-y-0 pl-[27px]">
            <li>
              800 people counted in 1815 — ten years before the &quot;overnight&quot; exodus. Only 37
              remained by 1890.
            </li>
            <li>Most wells had dried by 1815, collapsing the farming economy taxes still demanded from.</li>
            <li>A 2017 geological survey found earthquake damage in the ruins, not a single dramatic exit.</li>
            <li>
              Salim Singh, the &quot;curse&quot; ruler, is documented holding families hostage — people
              were already trying to leave, slowly.
            </li>
          </ul>
          <p className="mt-[6px]">The water left first. The people followed, over decades.</p>
        </div>
      </div>

      <div className="flex items-start gap-[80px]">
        <div className="flex w-[405px] shrink-0 flex-col items-end gap-[14px] text-right">
          <p
            className="font-fraunces text-[40px] font-semibold italic leading-[42px] text-[#5c4632]"
            style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
          >
            Why Munshi ?
          </p>
          <p className="font-lato text-[20px] uppercase text-black">Player Decision</p>
        </div>
        <p className="max-w-[652px] font-lato text-[18px] leading-[26px] text-[#3a2c21]">
          A munshi kept the village&apos;s records - water levels, harvests for the ruler. The only person
          who is equally close to diwan and the villagers . His ledger is the only place decline is visible
          before it&apos;s a crisis. The profession is gone. This project recreates one night of his work.
        </p>
      </div>
    </div>
  );
}
