import Link from "next/link";

const bricolageOptical = { fontVariationSettings: '"opsz" 14, "wdth" 100' } as const;

// The real "Contact Area" node (877:220) comes back empty from Figma - a
// component instance the API doesn't expand, same issue noted in
// vasna/ContactArea.tsx. This is the same site-wide footer content/social
// links the landing page and vasna case study both use, restyled here for
// Kuldhara's brown ground (the empty node's own fill: bg-[#5c4632]).
export function ContactArea() {
  return (
    <footer className="bg-[#5c4632] px-[64px] py-[36px]">
      <div className="mx-auto flex max-w-[1313px] flex-col gap-[35px]">
        <div className="flex flex-wrap justify-between gap-[40px]">
          <div className="flex flex-col items-start gap-[27px]">
            <div className="flex items-center justify-center rounded-[98px] bg-[#eff0f1] px-[28px] py-[16px] shadow-[10px_10px_20px_0px_rgba(24,25,27,0.5),-13px_-10px_20px_0px_rgba(255,255,255,0.1)]">
              <p className="whitespace-nowrap font-mono text-[20px] font-bold tracking-[-0.1px] text-[#18191b]">
                PORTFOLIO
              </p>
            </div>
            <div>
              <p
                className="whitespace-nowrap font-bricolage text-[64px] font-medium tracking-[-0.1px] text-[#fff9f0]"
                style={bricolageOptical}
              >
                Jeevitesh Gaur
              </p>
              <p
                className="mt-[8px] font-bricolage text-[14px] leading-[24px] tracking-[0.32px] text-[#fff9f0]"
                style={bricolageOptical}
              >
                Interaction Designer | Product Designer
              </p>
            </div>
          </div>

          <div className="flex w-[443px] flex-col items-start gap-[7px]">
            <p className="font-bricolage text-[13px] leading-[24px] tracking-[0.32px] text-[#fff9f0]" style={bricolageOptical}>
              Currently based in Ahmedabad, India&apos;s Heritage City.
              <br />
              Always happy to connect !
            </p>

            <div className="flex flex-col items-start gap-[10px] pt-[10px]">
              <p className="font-bricolage text-[13px] font-bold text-[#fff9f0]" style={bricolageOptical}>
                Pages
              </p>
              <Link href="/" className="font-outfit text-[13px] text-[#fff9f0]">
                Home
              </Link>
              <Link href="/#featured-projects" className="font-outfit text-[13px] text-[#fff9f0]">
                My Work
              </Link>
              <Link href="/#about" className="font-outfit text-[13px] text-[#fff9f0]">
                About
              </Link>
            </div>

            <div className="pt-[10px]">
              <a href="mailto:jeeviteshgaur28@gmail.com" className="flex items-center gap-[6px]">
                <span className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[8.4px] bg-[#eff0f1] shadow-[2.5px_2.5px_5.9px_0px_rgba(24,25,27,0.49),-2px_-2px_5.9px_0px_rgba(255,255,255,0.56)]">
                  <img src="/images/footer/mail-icon.svg" alt="" className="h-[14.4px] w-[16px]" />
                </span>
                <span className="whitespace-nowrap font-outfit text-[12px] tracking-[0.32px] text-[#fff9f0]">
                  jeeviteshgaur28@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-[16px]">
          <p className="whitespace-nowrap font-outfit text-[14px] tracking-[0.24px] text-[#fff9f0]">
            © Jeevitesh Gaur@2026
          </p>
          <p className="whitespace-nowrap font-outfit text-[14px] font-light tracking-[-0.1px] text-[#fff9f0]">
            Designed through iterations, late nights and caffeine
          </p>
        </div>
      </div>
    </footer>
  );
}
