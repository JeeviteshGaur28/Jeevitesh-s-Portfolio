export function LimitationsScaleChallenges() {
  return (
    <div className="relative mx-auto max-w-[1440px] px-[149px] py-[80px]">
      <div className="flex flex-col gap-[130px]">
        <div className="flex gap-[88px]">
          <p
            className="w-[392px] shrink-0 text-right font-fraunces text-[40px] font-semibold italic text-[#5c4632]"
            style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
          >
            Limitations
          </p>
          <div className="max-w-[652px] font-lato text-[18px] leading-[26px] text-[#3a2c21]">
            <p>This is a proof of concept, not a finished experience.</p>
            <p>
              Right now, the player doesn&apos;t know why an empty well matters. The experience ends at
              discovery — nothing follows. The rope works, but without the story around it, it feels
              mechanical rather than heavy.
            </p>
          </div>
        </div>

        <div className="flex gap-[88px]">
          <p
            className="w-[392px] shrink-0 text-right font-fraunces text-[40px] font-semibold italic text-[#5c4632]"
            style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
          >
            Scale Acknowledgement
          </p>
          <p className="max-w-[652px] font-lato text-[18px] leading-[26px] text-[#3a2c21]">
            This is one interaction from a longer experience — a test of whether physical labor can make
            historical collapse felt, not just understood. Can pulling a rope change how you understand a
            village disappearing?
          </p>
        </div>

        <div className="flex gap-[88px]">
          <div className="flex w-[392px] shrink-0 flex-col items-end gap-[14px] text-right">
            <p className="font-lato text-[20px] uppercase text-black">Technical</p>
            <p
              className="font-fraunces text-[40px] font-semibold italic text-[#5c4632]"
              style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
            >
              Challenges
            </p>
          </div>
          <div className="max-w-[652px] font-lato text-[18px] leading-[26px] text-[#3a2c21]">
            <p>
              Limited visual reference for 18th-century Rajasthani architecture — most assets needed
              cross-checking across multiple sources.
            </p>
            <p>
              The rope kept breaking on export — curve modifiers, armatures, shape keys all failed in
              Blender. Solved by generating it procedurally in Unity instead.
            </p>
            <p>
              Matching the rotary encoder&apos;s pulse count to real rope distance took several rounds of
              calibration, so the pull in your hands matches the pull in VR.
            </p>
            <p>
              Managing Blender files, Unity scenes, and Arduino sketches without version control — kept
              everything consistent by hand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
