"use client";

import Link from "next/link";

// General Sans isn't available - Outfit substitutes for it throughout the
// site (see Hero/FeaturedProjects), so it's used here too for the same
// text role.
const OPSZ = { fontVariationSettings: '"opsz" 14, "wdth" 100' } as const;
const NEOMORPHIC_SHADOW =
  "shadow-[10px_10px_20px_0px_rgba(24,25,27,0.18),-10px_-10px_20px_0px_rgba(255,255,255,0.95)] dark:shadow-[5px_5px_10px_0px_rgba(0,0,0,0.7),-5px_-5px_10px_0px_rgba(82,87,94,0.55)]";

function SectionHeading({ children, gap = "10px" }: { children: string; gap?: string }) {
  return (
    <div className="flex items-end" style={{ gap }}>
      <h2
        className="whitespace-nowrap font-bricolage text-[52px] leading-[52.275px] tracking-[-1.792px] text-[#0C0C0C] dark:text-[#EFF0F1]"
        style={OPSZ}
      >
        {children}
      </h2>
      <span className="mb-[9px] h-[8px] w-[8px] shrink-0 bg-[#FE5B2A] opacity-80" />
    </div>
  );
}

function NeomorphicPill({ children }: { children: React.ReactNode }) {
  return (
    <div className={`flex shrink-0 items-center justify-center whitespace-nowrap rounded-[98px] bg-[#EFF0F1] px-[28px] py-[16px] dark:bg-[#18191B] ${NEOMORPHIC_SHADOW}`}>
      {children}
    </div>
  );
}

// Same orange-pill CTA recipe as FeaturedProjects' ReadPill - reused
// verbatim (bg, drop shadow, inset highlight/shadow, arrow) since Figma
// draws "Full Story" and "Resume" with the exact same component.
function CtaPill({ label, href, external }: { label: string; href: string; external?: boolean }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="relative flex items-center gap-[8px] rounded-[98px] bg-[#FE5B2A] px-[28px] py-[15px] drop-shadow-[0px_20px_13.75px_rgba(26,18,10,0.3)]"
    >
      <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_-5px_4px_0px_rgba(255,255,255,0.31),inset_0px_8px_6.3px_0px_rgba(0,0,0,0.25)]" />
      <p className="relative whitespace-nowrap font-mono text-[20px] font-extrabold tracking-[-0.1px] text-[#EFF0F1]">{label}</p>
      <img src="/images/projects/cta-arrow.svg" alt="" className="relative h-[12px] w-[12px] rotate-180" />
    </a>
  );
}

function TestimonialsHeadingRow() {
  return (
    <div className="border-b-[0.8px] border-l-[0.8px] border-r-[0.8px] border-[#c3c4c8] pb-[40px] pl-[27px] pt-[105px]">
      <SectionHeading>Testimonials</SectionHeading>
    </div>
  );
}

const FILTER_PILLS = ["What people say", "Feedback", "Opinions"];

function FilterPillsRow() {
  return (
    <div className="flex items-center gap-[43px] border-b-[0.8px] border-l-[0.8px] border-r-[0.8px] border-[#c3c4c8] pb-[49px] pl-[27px] pt-[46px]">
      {FILTER_PILLS.map((label) => (
        <NeomorphicPill key={label}>
          <p className="font-bricolage text-[15px] font-medium text-[#18191B] dark:text-[#EFF0F1]" style={OPSZ}>
            {label}
          </p>
        </NeomorphicPill>
      ))}
    </div>
  );
}

// Carousel-peek arrangement, static for now (no drag/click per this pass).
// Positions and z-order pulled directly from Figma: outer cards sit behind
// their same-side inner card, and the sharp center card sits above both.
const SIDE_CARDS = [
  { left: 97, z: 1 },
  { left: 234, z: 2 },
  { left: 685, z: 2 },
  { left: 876, z: 1 },
];

function TestimonialCardsRow() {
  return (
    <div className="relative h-[623px] overflow-hidden border-b-[0.8px] border-l-[0.8px] border-r-[0.8px] border-[#c3c4c8]">
      {SIDE_CARDS.map(({ left, z }) => (
        <div
          key={left}
          className={`absolute flex h-[283px] w-[273px] items-center justify-center rounded-[32px] bg-[#EFF0F1] blur-[4px] dark:bg-[#18191B] ${NEOMORPHIC_SHADOW}`}
          style={{ left, top: 170, zIndex: z }}
        >
          <p className="whitespace-nowrap font-mono text-[15px] font-extrabold text-[#18191B] dark:text-[#EFF0F1]">coming soon</p>
        </div>
      ))}
      <div
        className={`absolute z-[3] flex h-[409px] w-[395px] items-center justify-center rounded-[31px] bg-[#EFF0F1] dark:bg-[#18191B] ${NEOMORPHIC_SHADOW}`}
        style={{ left: 407, top: 107 }}
      >
        <p className="whitespace-nowrap font-mono text-[15px] font-extrabold text-[#18191B] dark:text-[#EFF0F1]">coming soon</p>
      </div>
    </div>
  );
}

function AboutRow() {
  return (
    <div id="about" className="flex">
      <div className="h-[535px] w-[578px] shrink-0 border-b-[0.8px] border-l-[0.8px] border-r-[0.8px] border-[#c3c4c8] pl-[27px] pt-[70px]">
        <SectionHeading gap="12px">About</SectionHeading>
      </div>
      <div className="relative h-[535px] w-[670px] shrink-0 border-b-[0.8px] border-r-[0.8px] border-[#c3c4c8]">
        <div className="flex w-[602px] flex-col gap-[12px] pl-[34px] pt-[69px] text-[20px] tracking-[-0.1px] text-black dark:text-[#EFF0F1]">
          <p className="font-outfit font-medium">Hey there !</p>
          <p className="text-justify font-outfit">
            {`I'm Jeevitesh. I like taking things apart to understand how they work, questioning why they work the way they do, and designing how they could work better. My work sits at the intersection of interfaces, systems thinking and emerging tech - VR, computer vision, physical computing. I care less about how something looks and more about whether it works for the person using it.`}
          </p>
          <p className="text-justify font-outfit">
            {`When I'm not designing, you'll find me scouting Ahmedabad for good chai and better food, or losing badly at pool.`}
          </p>
        </div>
        <div className="absolute" style={{ left: 41, top: 395 }}>
          <CtaPill label="Full Story" href="#" />
        </div>
      </div>
    </div>
  );
}

function BackToTopRow() {
  return (
    <div className="relative h-[222px] border-l-[0.8px] border-r-[0.8px] border-[#c3c4c8]">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute flex h-[37px] w-[130.05px] items-center justify-center gap-[6px] rounded-[20px] border-[0.8px] border-[#121212] bg-[#EFF0F1] px-[14px] py-[10px] dark:border-[#EFF0F1] dark:bg-[#18191B]"
        style={{ left: 555.2, top: 104 }}
      >
        <span className="flex items-center gap-[11px]">
          <span className="whitespace-nowrap font-outfit text-[14px] tracking-[0.2px] text-[#050505] dark:text-[#EFF0F1]">Back To Top</span>
          <span className="flex h-[12.045px] w-[12.045px] items-center justify-center">
            <img
              src="/images/footer/back-to-top-arrow.svg"
              alt=""
              className="h-[8.517px] w-[8.517px] rotate-[135deg] dark:hidden"
            />
            <img
              src="/images/footer/back-to-top-arrow-dark.svg"
              alt=""
              className="hidden h-[8.517px] w-[8.517px] rotate-[135deg] dark:block"
            />
          </span>
        </span>
      </button>
    </div>
  );
}

function FooterLeft() {
  return (
    <div className="h-[432px] w-[686px] shrink-0 overflow-hidden border-b-[0.8px] border-l-[0.8px] border-r-[0.8px] border-[#c3c4c8]">
      <div className="flex w-[531px] flex-col items-start gap-[27px] pl-[37.2px] pt-[75px]">
        <NeomorphicPill>
          <p className="font-mono text-[20px] font-bold tracking-[-0.1px] text-[#18191B] dark:text-[#EFF0F1]">PORTFOLIO</p>
        </NeomorphicPill>
        <div>
          <div className="flex items-end gap-[10px]">
            <h3 className="whitespace-nowrap font-bricolage text-[64px] leading-[64.34px] font-medium tracking-[-0.1px] text-black dark:text-[#EFF0F1]" style={OPSZ}>
              Jeevitesh Gaur
            </h3>
            <span className="mb-[10px] h-[8px] w-[8px] shrink-0 bg-[#FE5B2A] opacity-80" />
          </div>
          <p className="mt-[6px] whitespace-nowrap font-bricolage text-[14px] leading-[24px] tracking-[0.32px] text-[#18191B] dark:text-[#EFF0F1]" style={OPSZ}>
            Interaction Designer | Product Designer
          </p>
        </div>
      </div>
    </div>
  );
}

function SocialLink({
  icon,
  label,
  href,
  external,
}: {
  icon: "mail" | "linkedin" | "behance";
  label: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="flex items-center gap-[6px]"
    >
      <span className={`flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[8.421px] bg-[#EFF0F1] shadow-[2.526px_2.526px_5.895px_0px_rgba(24,25,27,0.16),-2.526px_-2.526px_5.895px_0px_rgba(255,255,255,0.9)]`}>
        {icon === "mail" && <img src="/images/footer/mail-icon.svg" alt="" className="h-[14.4px] w-[16px]" />}
        {icon === "linkedin" && <span className="font-bricolage text-[13px] font-bold text-[#18191B]">in</span>}
        {icon === "behance" && <span className="font-bricolage text-[13px] font-bold italic text-[#18191B]">Be</span>}
      </span>
      <span className="whitespace-nowrap font-outfit text-[12px] tracking-[0.32px] text-[#18191B] dark:text-[#EFF0F1]">{label}</span>
    </a>
  );
}

function FooterRight() {
  return (
    <div className="h-[431px] w-[562px] shrink-0 overflow-hidden border-b-[0.8px] border-r-[0.8px] border-[#c3c4c8]">
      <div className="flex w-[443px] flex-col items-start pl-[60px] pt-[68px]">
        <p className="font-bricolage text-[13px] leading-[24px] tracking-[0.32px] text-[#18191B] dark:text-[#EFF0F1]" style={OPSZ}>
          {`Currently based in Ahmedabad, India's Heritage City.`}
          <br />
          Always happy to connect !
        </p>

        <div className="flex flex-col gap-[10px] pt-[10px]">
          <p className="font-bricolage text-[13px] font-bold text-[#18191B] dark:text-[#EFF0F1]" style={OPSZ}>
            Pages
          </p>
          <Link href="/" className="font-outfit text-[13px] text-[#18191B] dark:text-[#EFF0F1]">
            Home
          </Link>
          <Link href="/#featured-projects" className="font-outfit text-[13px] text-[#18191B] dark:text-[#EFF0F1]">
            My Work
          </Link>
          <Link href="/#about" className="font-outfit text-[13px] text-[#18191B] dark:text-[#EFF0F1]">
            About
          </Link>
        </div>

        <div className="w-full py-[24px]">
          <div className="h-[0.8px] w-full bg-[#c3c4c8]" />
        </div>

        <div className="flex gap-[38px]">
          <SocialLink icon="mail" label="jeeviteshgaur28@gmail.com" href="mailto:jeeviteshgaur28@gmail.com" />
          <SocialLink
            icon="linkedin"
            label="LinkedIn"
            href="https://www.linkedin.com/in/jeevitesh-gaur-452b84331"
            external
          />
          <SocialLink
            icon="behance"
            label="Behance"
            href="https://www.behance.net/JeeviteshGaur_Design"
            external
          />
        </div>

        <div className="pt-[23px]">
          <CtaPill
            label="Resume"
            href="https://drive.google.com/drive/folders/1KePvXq61KI_JdmQmpJ1wRt8DyWNbIP2x"
            external
          />
        </div>
      </div>
    </div>
  );
}

function CopyrightBar() {
  return (
    <div className="flex h-[62px] items-center justify-between border-l-[0.8px] border-r-[0.8px] border-[#c3c4c8] px-[38px]">
      <p className="whitespace-nowrap font-outfit text-[14px] tracking-[0.24px] text-[#18191B] dark:text-[#EFF0F1]">© Jeevitesh Gaur @2026</p>
      <p className="whitespace-nowrap font-outfit font-light text-[14px] tracking-[-0.1px] text-black dark:text-[#EFF0F1]">
        Designed through iterations, late nights and caffeine
      </p>
    </div>
  );
}

// Faint plus-grid texture sits as a full-bleed background layer behind the
// footer content (left/right blocks + copyright bar) - that's how Figma
// actually stacks it (same y-range, footer content simply painted on top),
// not a separate divider strip squeezed in above.
function FooterBackground() {
  return (
    <div className="relative overflow-hidden border-t-[0.8px] border-[#c3c4c8]">
      <img
        src="/images/plus-grid.png"
        alt=""
        className="pointer-events-none absolute left-0 top-0 h-full w-[112.5%] object-cover opacity-[0.15] dark:hidden"
      />
      <img
        src="/images/plus-grid-dark.png"
        alt=""
        className="pointer-events-none absolute left-0 top-0 hidden h-full w-[112.5%] object-cover dark:block"
      />
      <div className="relative mx-auto max-w-[1440px] px-[96px]">
        <div className="flex">
          <FooterLeft />
          <FooterRight />
        </div>
        <CopyrightBar />
      </div>
    </div>
  );
}

export function TestimonialsAboutFooter() {
  return (
    <section className="relative bg-[#EFF0F1] dark:bg-[#18191B]">
      <div className="relative mx-auto max-w-[1440px] px-[96px]">
        <TestimonialsHeadingRow />
        <FilterPillsRow />
        <TestimonialCardsRow />
        <AboutRow />
        <BackToTopRow />
      </div>
      <FooterBackground />
    </section>
  );
}
