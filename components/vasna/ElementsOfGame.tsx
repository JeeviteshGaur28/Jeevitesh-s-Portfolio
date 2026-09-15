const bricolageOptical = { fontVariationSettings: '"opsz" 14, "wdth" 100' } as const;

type Element = {
  title: string;
  description: string;
  photo: string;
};

const ELEMENTS: Element[] = [
  {
    title: "Player Cards",
    description:
      "Assign each player their role for the round — shopkeeper, vendor, or customer — by chance, not choice.",
    photo: "/images/vasna/elements-1.png",
  },
  {
    title: "Product Cards",
    description: "The goods being bought and sold — what moves through the market and who profits from it.",
    photo: "/images/vasna/elements-2.png",
  },
  {
    title: "Task & Spiral Cards",
    description: "Daily tasks players must complete, and the spiral cards that throw in what no one can plan for.",
    photo: "/images/vasna/elements-3.png",
  },
];

// The illustration photo is taller than its dark backing plate and shares
// the same top edge, so its bottom ~60px deliberately hangs off the plate
// onto the plain page background - the "cards peeking out of a slot" look
// from the Figma source, not a sizing bug.
function ElementCard({ title, description, photo }: Element) {
  return (
    <div className="flex flex-col gap-[24px]">
      <div className="relative h-[195px] w-full">
        <div className="absolute inset-x-[4px] top-0 h-[132px] rounded-[12px] bg-[#1d3c3c]" />
        <img
          src={photo}
          alt=""
          className="absolute left-0 top-0 h-[195px] w-full object-contain drop-shadow-[0px_20px_40px_rgba(0,0,0,0.28)]"
        />
      </div>
      <div className="flex flex-col gap-[12px]">
        <p className="font-bricolage text-[22px] font-medium text-[#251d18]" style={bricolageOptical}>
          {title}
        </p>
        <p className="font-bricolage text-[16px] leading-[1.48] text-[#251d18]/70" style={bricolageOptical}>
          {description}
        </p>
      </div>
    </div>
  );
}

export function ElementsOfGame() {
  return (
    <section className="bg-[#f3f0eb] py-[90px]">
      <div className="mx-auto max-w-[1440px] px-[149px]">
        <div className="flex flex-col items-start gap-[10px]">
          <p className="font-lato text-[12px] font-bold uppercase tracking-[2px] text-[#c76647]">
            What&rsquo;s inside the box?
          </p>
          <p className="font-bricolage text-[26px] font-semibold text-[#0a0a0a]" style={bricolageOptical}>
            Elements of the Game
          </p>
        </div>

        <div className="mt-[70px] grid grid-cols-3 gap-[26px]">
          {ELEMENTS.map((el) => (
            <ElementCard key={el.title} {...el} />
          ))}
        </div>
      </div>
    </section>
  );
}
