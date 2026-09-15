import Link from "next/link";

const bricolageOptical = { fontVariationSettings: '"opsz" 14, "wdth" 100' } as const;

// Missed on the first pass: get_design_context returned this frame as
// empty, but get_metadata revealed real content underneath (a component
// instance the first call didn't expand) - the same footer content/social
// links the landing page's own footer uses, restyled here for the dark
// teal ground.
export function ContactArea() {
  return (
    <footer className="bg-[#1d3c3c] px-[64px] py-[36px]">
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
                className="whitespace-nowrap font-bricolage text-[64px] font-medium tracking-[-0.1px] text-[#eff0f1]"
                style={bricolageOptical}
              >
                Jeevitesh Gaur
              </p>
              <p
                className="mt-[8px] font-bricolage text-[14px] leading-[24px] tracking-[0.32px] text-[#eff0f1]"
                style={bricolageOptical}
              >
                Interaction Designer | Product Designer
              </p>
            </div>
          </div>

          <div className="flex w-[443px] flex-col items-start gap-[7px]">
            <p className="font-bricolage text-[13px] leading-[24px] tracking-[0.32px] text-[#eff0f1]" style={bricolageOptical}>
              Currently based in Ahmedabad, India&apos;s Heritage City.
              <br />
              Always happy to connect !
            </p>

            <div className="flex flex-col items-start gap-[10px] pt-[10px]">
              <p className="font-bricolage text-[13px] font-bold text-[#eff0f1]" style={bricolageOptical}>
                Pages
              </p>
              <Link href="/" className="font-outfit text-[13px] text-[#eff0f1]">
                Home
              </Link>
              <Link href="/#featured-projects" className="font-outfit text-[13px] text-[#eff0f1]">
                My Work
              </Link>
              <Link href="/#about" className="font-outfit text-[13px] text-[#eff0f1]">
                About
              </Link>
            </div>

            <div className="pt-[10px]">
              <a href="mailto:jeeviteshgaur28@gmail.com" className="flex items-center gap-[6px]">
                <span className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[8.4px] bg-[#eff0f1] shadow-[2.5px_2.5px_5.9px_0px_rgba(24,25,27,0.49),-2px_-2px_5.9px_0px_rgba(255,255,255,0.56)]">
                  <img src="/images/footer/mail-icon.svg" alt="" className="h-[14.4px] w-[16px]" />
                </span>
                <span className="whitespace-nowrap font-outfit text-[12px] tracking-[0.32px] text-[#eff0f1]">
                  jeeviteshgaur28@gmail.com
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-[16px]">
          <p className="whitespace-nowrap font-outfit text-[14px] tracking-[0.24px] text-[#eff0f1]">
            © Jeevitesh Gaur@2026
          </p>
          <p className="whitespace-nowrap font-outfit text-[14px] font-light tracking-[-0.1px] text-[#eff0f1]">
            Designed through iterations, late nights and caffeine
          </p>
        </div>
      </div>
    </footer>
  );
}
