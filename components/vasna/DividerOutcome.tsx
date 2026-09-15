const frauncesOptical = { fontVariationSettings: '"SOFT" 0, "WONK" 1' } as const;

// Pure geometry (a rule + a hanging dot column), so it's recreated as plain
// CSS rather than the two exported SVGs - crisper at any size and matches
// how the rest of the site already builds its own dividers (see Kuldhara's
// Ornaments.tsx). Dot spacing (38px center-to-center, 6px dots) and color
// (#9D4738) are taken directly from the Figma asset's own geometry.
export function DividerOutcome() {
  return (
    <section className="bg-[#f3f0eb] pb-[70px] pt-[70px]">
      <div className="mx-auto max-w-[1440px] px-[149px]">
        <div className="h-px w-full bg-[rgba(37,29,24,0.15)]" />
      </div>

      <div className="mx-auto mt-[36px] flex w-[6px] flex-col items-center gap-[32px]">
        {Array.from({ length: 7 }).map((_, i) => (
          <span key={i} className="h-[6px] w-[6px] shrink-0 rounded-full bg-[#9D4738]" />
        ))}
      </div>

      <p className="mt-[24px] text-center font-fraunces text-[20px] italic text-black" style={frauncesOptical}>
        the outcome
      </p>
    </section>
  );
}
