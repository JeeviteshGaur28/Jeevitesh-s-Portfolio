"use client";

import { motion } from "framer-motion";
import { Loadout } from "./Loadout";

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
        className="absolute left-0 top-0 h-full w-[112.5%] object-cover opacity-20"
      />
    </div>
  );
}

function HeadingRow() {
  return (
    <div className="border-[0.8px] border-[#c3c4c8] pb-[40px] pl-[27px] pt-[105px]">
      <div className="flex items-end gap-[10px]">
        <h2
          className="whitespace-nowrap font-bricolage text-[52px] leading-[52.275px] tracking-[-1.792px] text-[#0C0C0C]"
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
        <div className="flex shrink-0 items-center justify-center rounded-[98px] bg-[#EFF0F1] px-[28px] py-[16px] shadow-[10px_10px_20px_0px_rgba(24,25,27,0.18),-10px_-10px_20px_0px_rgba(255,255,255,0.95)]">
          <p className="whitespace-nowrap font-bricolage text-[15px] font-medium text-[#18191B]">SKILLS</p>
        </div>
        <div className="flex flex-wrap items-center gap-[8px]">
          {SKILLS.map((skill) => (
            <div
              key={skill}
              className="flex shrink-0 items-center justify-center rounded-[20px] border-[0.8px] border-black bg-[#FDFDFD] px-[14px] py-[10px]"
            >
              <p className="whitespace-nowrap font-outfit text-[14px] capitalize tracking-[0.2px] text-[#050505]">
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
    <img
      src={team === "solo" ? "/images/projects/team-solo.svg" : "/images/projects/team-group.svg"}
      alt=""
      className="h-[14px] w-[25px] shrink-0"
    />
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
// not the intended design.
function ReadPill() {
  return (
    <div className="relative flex items-center gap-[8px] rounded-[98px] bg-[#FE5B2A] px-[28px] py-[15px] drop-shadow-[0px_20px_13.75px_rgba(26,18,10,0.3)]">
      <span className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_-5px_4px_0px_rgba(255,255,255,0.31),inset_0px_8px_6.3px_0px_rgba(0,0,0,0.25)]" />
      <p className="relative whitespace-nowrap font-mono text-[20px] font-extrabold tracking-[-0.1px] text-[#EFF0F1]">
        Read
      </p>
      <img src="/images/projects/cta-arrow.svg" alt="" className="relative h-[12px] w-[12px] rotate-180" />
    </div>
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
  title: string;
  description: string;
  tags: string[];
  team: "solo" | "group";
  cta: "read" | "coming-soon";
};

const PROJECTS: Project[] = [
  {
    title: "The Village of Kuldhara (VR)",
    description:
      "Pull a real rope inside a VR experience set in Kuldhara to unravel what actually happened, witnessed through Munshi, the village's record-keeper.",
    tags: ["Multisensory Design", "VR Experience Design", "Narrative Design", "3D World-Building"],
    team: "solo",
    cta: "read",
  },
  {
    title: "Hop and Shop in Vasna",
    description: "Ethnographic research at Vasna's market, turned into a playable tabletop board game.",
    tags: ["Ethnographic Research", "Game Design", "UX Case Study"],
    team: "group",
    cta: "read",
  },
  {
    title: "Buried in the Crowd",
    description:
      "A systems-level investigation into stampedes in India, mapping leverage points toward solutions that could prevent the next one.",
    tags: ["Systems Thinking", "Systems Design", "Research", "Leverage Points"],
    team: "group",
    cta: "read",
  },
  {
    title: "Polite paparazzo",
    description:
      "A CCTV camera on a Raspberry Pi that blurs the face of anyone wearing a hand-painted marker, and records everyone else as usual.",
    tags: ["Critical Design", "Smart Living", "Physical Computing", "Computer Vision"],
    team: "solo",
    cta: "coming-soon",
  },
];

// Image area is a flat #D9D9D9 placeholder, matching Figma exactly - no
// real project photography exists yet, so this isn't a corner cut, it's
// what the source file itself shows.
function ProjectCard({ project, className }: { project: Project; className?: string }) {
  return (
    <div className={`flex flex-col gap-[28px] bg-[#EFF0F1] px-[27px] py-[39px] ${className ?? ""}`}>
      <div className="group/image relative h-[375px] w-full overflow-hidden bg-[#D9D9D9]">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-90 opacity-0 transition-all duration-300 ease-out group-hover/image:scale-100 group-hover/image:opacity-100">
          {project.cta === "read" ? <ReadPill /> : <ComingSoonPill />}
        </div>
      </div>

      <div className="flex w-full flex-col gap-[20px]">
        <div className="flex flex-col gap-[6px]">
          <div className="flex items-center justify-between gap-[12px]">
            <h3
              className="whitespace-nowrap font-bricolage text-[22px] font-medium capitalize tracking-[-0.2px] text-[#121212]"
              style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}
            >
              {project.title}
            </h3>
            <TeamIcon team={project.team} />
          </div>
          <p className="font-outfit text-[16px] leading-[20.8px] text-[#121212]">{project.description}</p>
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
    <section id="featured-projects" className="relative bg-[#EFF0F1]">
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
