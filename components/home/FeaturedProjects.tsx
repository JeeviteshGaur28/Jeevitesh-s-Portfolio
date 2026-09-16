"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Loadout } from "./Loadout";
import { usePageTransition } from "../PageTransition";

// Scroll-in treatment matches the hero's own entrance (scale 92%->100% +
// fade), but triggered per-row via whileInView instead of on page load -
// this section isn't visible until scrolled to. Broken into per-row
// reveals (skills / each card row / loadout) rather than one single
// block: at ~2366px tall, a single trigger for the whole section would
// either fire while most of it is still off-screen, or not fire until
// you've already scrolled past half of it - per-row reads far better for
// content this long.
const revealVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
};
const revealTransition = { duration: 0.5, ease: [0.65, 0, 0.35, 1] as const };
const revealViewport = { once: true, amount: 0.2 };

function PlusDivider() {
  return (
    <div className="relative h-[153px] w-full overflow-hidden border-x-[0.8px] border-[#c3c4c8]">
      <img
        src="/images/plus-grid.png"
        alt=""
        className="absolute left-0 top-0 h-full w-[112.5%] object-cover opacity-20 dark:hidden"
      />
      <img
        src="/images/plus-grid-dark.png"
        alt=""
        className="absolute left-0 top-0 hidden h-full w-[112.5%] object-cover dark:block"
      />
    </div>
  );
}

function HeadingRow() {
  return (
    <div className="border-[0.8px] border-[#c3c4c8] pb-[40px] pl-[27px] pt-[105px]">
      <div className="flex items-end gap-[10px]">
        <h2
          className="whitespace-nowrap font-bricolage text-[52px] leading-[52.275px] tracking-[-1.792px] text-[#0C0C0C] dark:text-[#EFF0F1]"
          style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}
        >
          Featured Projects
        </h2>
        <span className="mb-[9px] h-[8px] w-[8px] shrink-0 bg-[#FE5B2A] opacity-80" />
      </div>
    </div>
  );
}

const SKILLS = [
  "AR/VR design",
  "UI/UX design",
  "Systems Design",
  "User research",
  "Game Design",
  "wireframing & prototyping",
];

function SkillsRow() {
  return (
    <motion.div
      className="border-b-[0.8px] border-l-[0.8px] border-r-[0.8px] border-[#c3c4c8] py-[33px] pl-[27px] pr-[23px]"
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      transition={revealTransition}
    >
      <div className="flex items-center gap-[20px]">
        <div className="flex shrink-0 items-center justify-center rounded-[98px] bg-[#EFF0F1] px-[28px] py-[16px] shadow-[10px_10px_20px_0px_rgba(24,25,27,0.18),-10px_-10px_20px_0px_rgba(255,255,255,0.95)] dark:bg-[#18191B] dark:shadow-[5px_5px_10px_0px_rgba(0,0,0,0.7),-5px_-5px_10px_0px_rgba(82,87,94,0.55)]">
          <p className="whitespace-nowrap font-bricolage text-[15px] font-medium text-[#18191B] dark:text-[#EFF0F1]">SKILLS</p>
        </div>
        <div className="flex flex-wrap items-center gap-[8px]">
          {SKILLS.map((skill) => (
            <div
              key={skill}
              className="flex shrink-0 items-center justify-center rounded-[20px] border-[0.8px] border-black bg-[#FDFDFD] px-[14px] py-[10px] dark:border-[#EFF0F1] dark:bg-[#18191B]"
            >
              <p className="whitespace-nowrap font-outfit text-[14px] capitalize tracking-[0.2px] text-[#050505] dark:text-[#EFF0F1]">
                {skill}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function TeamIcon({ team }: { team: "solo" | "group" }) {
  return (
    <>
      <img
        src={team === "solo" ? "/images/projects/team-solo.svg" : "/images/projects/team-group.svg"}
        alt=""
        className="h-[14px] w-[25px] shrink-0 dark:hidden"
      />
      <img
        src={team === "solo" ? "/images/projects/team-solo-dark.svg" : "/images/projects/team-group-dark.svg"}
        alt=""
        className="hidden h-[14px] w-[25px] shrink-0 dark:block"
      />
    </>
  );
}

function TagPill({ children }: { children: string }) {
  return (
    <div className="flex shrink-0 items-center justify-center rounded-[4px] bg-[rgba(0,89,255,0.11)] px-[6px] py-[4px]">
      <p className="whitespace-nowrap font-bricolage text-[12px] font-medium capitalize tracking-[-0.2px] text-[#0059FF]">
        {children}
      </p>
    </div>
  );
}

// Real Figma asset (the "Read" pill on card 1), reused hover-only on all
// 4 cards per spec - Figma only draws it once, that's a file limitation
// not the intended design. Now triggers the slip-up page transition
// instead of a plain Link - "leaving" color is home's own current bg
// (light/dark aware, via next-themes), "arriving" color is that specific
// case study's real page background, so the reveal on the other side is
// seamless rather than a flat brand-orange cut.
function ReadPill({ href, bgColor }: { href: string; bgColor: string }) {
  const { navigate } = usePageTransition();
  const { resolvedTheme } = useTheme();
  const homeColor = resolvedTheme === "dark" ? "#18191B" : "#EFF0F1";

  return (
    <button
      type="button"
      onClick={() => navigate(href, homeColor, bgColor)}
      className="relative flex items-center gap-[8px] rounded-[98px] bg-[#FE5B2A] px-[28px] py-[15px] drop-shadow-[0px_20px_13.75px_rgba(26,18,10,0.3)]"
    >
      <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_-5px_4px_0px_rgba(255,255,255,0.31),inset_0px_8px_6.3px_0px_rgba(0,0,0,0.25)]" />
      <p className="relative whitespace-nowrap font-mono text-[20px] font-extrabold tracking-[-0.1px] text-[#EFF0F1]">
        Read
      </p>
      <img src="/images/projects/cta-arrow.svg" alt="" className="relative h-[12px] w-[12px] rotate-180" />
    </button>
  );
}

// Real project images, pulled directly from each card's own Figma node
// (1582:2115 for row 1, 1582:2177 for row 2) - exact same absolute
// positions/crops as the source, not simplified to one full-bleed photo,
// since Vasna and Buried in the Crowd are genuine collages there, not a
// single image. Card 4 (Polite paparazzo) has no image in the source file
// itself yet, so it correctly stays the plain grey placeholder.

// Card 1: a single full-bleed photo, object-position bottom (matches the
// source exactly).
function KuldharaImage() {
  return (
    <img
      src="/images/projects/kuldhara-photo.png"
      alt=""
      className="pointer-events-none absolute inset-0 h-full w-full object-cover object-bottom"
    />
  );
}

// Card 2: a rotated decorative polygon peeking in from the top-right,
// behind the board-game photo sitting directly on the grey background -
// no card/shadow wrapper around the photo itself. (Figma also has a small
// ellipse+arrow decoration on this node, but it sits at local y=623 inside
// a 375px-tall, overflow-clipped frame - entirely below the visible area
// in the source itself, so it's omitted here too: including it would
// either stay invisible or introduce something the design never actually
// shows.)
function VasnaImage() {
  return (
    <>
      <div
        className="pointer-events-none absolute flex items-center justify-center"
        style={{ left: 336, top: -57, width: 286.661, height: 264.414 }}
      >
        <div style={{ transform: "rotate(-15.21deg)" }}>
          <div className="relative" style={{ width: 240.335, height: 208.673 }}>
            <div className="absolute left-[6.7%] right-[6.7%] top-0" style={{ bottom: "25%" }}>
              <img src="/images/projects/vasna-polygon.svg" alt="" className="block h-full w-full max-w-none" />
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute" style={{ left: 100.97, top: 13, width: 341, height: 350 }}>
        <img
          src="/images/projects/vasna-board-photo.png"
          alt=""
          className="absolute inset-0 h-full w-full object-contain object-bottom"
        />
      </div>
    </>
  );
}

// Card 3: three separately-cropped images (title graphic, the large
// crowd-reaching sketch, and the small reaching-arm sketch) - each crop
// window (the oversized image + overflow-hidden window it sits in) copied
// exactly from Figma's own percentages rather than approximated with
// object-fit, since these aren't simple centered crops.
function BuriedImage() {
  return (
    <>
      <div className="pointer-events-none absolute overflow-hidden" style={{ left: 21.2, top: 34, width: 327, height: 108 }}>
        <img
          src="/images/projects/buried-title.png"
          alt=""
          className="absolute max-w-none"
          style={{ height: "234.73%", left: "-23.1%", top: "0.34%", width: "138.5%" }}
        />
      </div>
      <div className="pointer-events-none absolute overflow-hidden" style={{ left: 0.2, top: 177, width: 441, height: 198 }}>
        <img
          src="/images/projects/buried-illustration-large.png"
          alt=""
          className="absolute max-w-none"
          style={{ height: "173.9%", left: 0, top: "-73.9%", width: "117.08%" }}
        />
      </div>
      <div
        className="pointer-events-none absolute overflow-hidden rounded-[32px]"
        style={{ left: 391.2, top: 0, width: 178, height: 164 }}
      >
        <img
          src="/images/projects/buried-illustration-small.png"
          alt=""
          className="absolute max-w-none"
          style={{ height: "173.9%", left: "-124.61%", top: 0, width: "240.74%" }}
        />
      </div>
    </>
  );
}

// Card 4: added after the fact in Figma - a single full-bleed photo with
// a 2.5px blur (matching the node exactly), fitting since this one's
// still "Coming Soon".
function PaparazzoImage() {
  return (
    <img
      src="/images/projects/paparazzo-photo.png"
      alt=""
      className="pointer-events-none absolute inset-0 h-full w-full object-cover blur-[2.5px]"
    />
  );
}

// Pulled from card 4's own Figma node - same pill treatment, no arrow.
function ComingSoonPill() {
  return (
    <div className="relative flex items-center rounded-[98px] bg-[#FE5B2A] px-[28px] py-[15px] drop-shadow-[0px_20px_13.75px_rgba(26,18,10,0.3)]">
      <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_-5px_4px_0px_rgba(255,255,255,0.31),inset_0px_8px_6.3px_0px_rgba(0,0,0,0.25)]" />
      <p className="relative whitespace-nowrap font-mono text-[20px] font-extrabold tracking-[-0.1px] text-[#EFF0F1]">
        Coming Soon
      </p>
    </div>
  );
}

type Project = {
  id: "kuldhara" | "vasna" | "buried" | "paparazzo";
  title: string;
  description: string;
  tags: string[];
  team: "solo" | "group";
  cta: "read" | "coming-soon";
  href?: string;
  // That case study's own real page background - used so the page
  // transition's reveal color matches exactly what's actually there.
  bgColor?: string;
};

const PROJECTS: Project[] = [
  {
    id: "kuldhara",
    title: "The Village of Kuldhara (VR)",
    description:
      "Pull a real rope inside a VR experience set in Kuldhara to unravel what actually happened, witnessed through Munshi, the village's record-keeper.",
    tags: ["Multisensory Design", "VR Experience Design", "Narrative Design", "3D World-Building"],
    team: "solo",
    cta: "read",
    href: "/work/kuldhara",
    bgColor: "#FFF9F0",
  },
  {
    id: "vasna",
    title: "Hop and Shop in Vasna",
    description: "Ethnographic research at Vasna's market, turned into a playable tabletop board game.",
    tags: ["Ethnographic Research", "Game Design", "UX Case Study"],
    team: "group",
    cta: "read",
    href: "/work/vasna",
    bgColor: "#193C3C",
  },
  {
    id: "buried",
    title: "Buried in the Crowd",
    description:
      "A systems-level investigation into stampedes in India, mapping leverage points toward solutions that could prevent the next one.",
    tags: ["Systems Thinking", "Systems Design", "Research", "Leverage Points"],
    team: "group",
    cta: "read",
    href: "/work/buried-in-the-crowd",
    bgColor: "#E9E4D7",
  },
  {
    id: "paparazzo",
    title: "Polite paparazzo",
    description:
      "A CCTV camera on a Raspberry Pi that blurs the face of anyone wearing a hand-painted marker, and records everyone else as usual.",
    tags: ["Critical Design", "Smart Living", "Physical Computing", "Computer Vision"],
    team: "solo",
    cta: "coming-soon",
  },
];

// All four cards now have their real image/collage from Figma, inserted
// BEFORE the hover-reveal pill below so the pill's own DOM position (and
// therefore its stacking + hover target) is completely unchanged.
function ProjectImage({ id }: { id: Project["id"] }) {
  if (id === "kuldhara") return <KuldharaImage />;
  if (id === "vasna") return <VasnaImage />;
  if (id === "buried") return <BuriedImage />;
  if (id === "paparazzo") return <PaparazzoImage />;
  return null;
}

function ProjectCard({ project, className }: { project: Project; className?: string }) {
  return (
    <div className={`flex flex-col gap-[28px] bg-[#EFF0F1] px-[27px] py-[39px] dark:bg-[#18191B] ${className ?? ""}`}>
      <div className="group/image relative h-[375px] w-full overflow-hidden bg-[#D9D9D9]">
        <ProjectImage id={project.id} />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-90 opacity-0 transition-all duration-300 ease-out group-hover/image:scale-100 group-hover/image:opacity-100">
          {project.cta === "read" ? <ReadPill href={project.href!} bgColor={project.bgColor!} /> : <ComingSoonPill />}
        </div>
      </div>

      <div className="flex w-full flex-col gap-[20px]">
        <div className="flex flex-col gap-[6px]">
          <div className="flex items-center justify-between gap-[12px]">
            <h3
              className="whitespace-nowrap font-bricolage text-[22px] font-medium capitalize tracking-[-0.2px] text-[#121212] dark:text-[#EFF0F1]"
              style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}
            >
              {project.title}
            </h3>
            <TeamIcon team={project.team} />
          </div>
          <p className="font-outfit text-[16px] leading-[20.8px] text-[#121212] dark:text-[#EFF0F1]">{project.description}</p>
        </div>
        <div className="flex flex-wrap items-center gap-[12px]">
          {project.tags.map((tag) => (
            <TagPill key={tag}>{tag}</TagPill>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectRow({ projects }: { projects: [Project, Project] }) {
  return (
    <motion.div
      className="grid grid-cols-2 bg-[rgba(70,67,67,0.12)]"
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      transition={revealTransition}
    >
      <ProjectCard project={projects[0]} className="border-[0.8px] border-[#c3c4c8]" />
      <ProjectCard project={projects[1]} className="border-b-[0.8px] border-r-[0.8px] border-t-[0.8px] border-[#c3c4c8]" />
    </motion.div>
  );
}

export function FeaturedProjects() {
  return (
    <section id="featured-projects" className="relative bg-[#EFF0F1] dark:bg-[#18191B]">
      <div className="relative mx-auto max-w-[1440px] px-[96px]">
        <HeadingRow />
        <SkillsRow />
        <PlusDivider />
        <ProjectRow projects={[PROJECTS[0], PROJECTS[1]]} />
        <PlusDivider />
        <ProjectRow projects={[PROJECTS[2], PROJECTS[3]]} />
        <PlusDivider />
        <Loadout />
      </div>
    </section>
  );
}
