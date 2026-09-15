const bricolageOptical = { fontVariationSettings: '"opsz" 14, "wdth" 100' } as const;
const frauncesOptical = { fontVariationSettings: '"SOFT" 0, "WONK" 1' } as const;

type Stage = {
  number: string;
  label: string;
  topPhoto: string;
  bottomPhoto: string;
  topRotated?: boolean;
};

const STAGES: Stage[] = [
  {
    number: "01",
    label: "Paper Prototype",
    topPhoto: "/images/vasna/iter-context5.png",
    bottomPhoto: "/images/vasna/iter-board-testing2.png",
  },
  {
    number: "02",
    label: "More Iterations",
    topPhoto: "/images/vasna/iter-context4.png",
    bottomPhoto: "/images/vasna/iter-board-final2.png",
  },
  {
    number: "03",
    label: "Digital Prototype",
    topPhoto: "/images/vasna/iter-image56.png",
    bottomPhoto: "/images/vasna/iter-context6.png",
    topRotated: true,
  },
];

// Matches the real "Group 273" tick asset exactly: a 6px circle sitting
// right on the horizontal dashed line, four short dashes below it, and a
// second 6px circle just above the number - not a plain solid line with
// a stray dot floating off to the side (the first pass's bug).
function TickMark() {
  const dashCenters = [12, 25, 38, 51];
  return (
    <div className="absolute left-0 top-0 h-[57px] w-[6px]">
      <span className="absolute left-0 top-0 h-[6px] w-[6px] rounded-full bg-[#b0b0b0]" />
      {dashCenters.map((y) => (
        <span key={y} className="absolute left-[2.5px] h-[7px] w-px bg-[#b0b0b0]" style={{ top: y - 3.5 }} />
      ))}
      <span className="absolute bottom-0 left-0 h-[6px] w-[6px] rounded-full bg-[#b0b0b0]" />
    </div>
  );
}

function Milestone({ number, label }: { number: string; label: string }) {
  return (
    <div className="relative flex flex-col items-start gap-[8px] pt-[46px]">
      <TickMark />
      <p className="font-lato text-[36px] font-extrabold italic tracking-[0.432px] text-[#c76647]">{number}</p>
      <p className="font-fraunces text-[20px] font-semibold text-[#251d18]" style={frauncesOptical}>
        {label}
      </p>
    </div>
  );
}

function StagePhotos({ topPhoto, bottomPhoto, topRotated }: Stage) {
  return (
    <div className="flex flex-col gap-[16px]">
      <div className="h-[221px] w-full overflow-hidden rounded-[8px]">
        <img
          src={topPhoto}
          alt=""
          className={`h-full w-full object-cover ${topRotated ? "rotate-90 scale-[1.65]" : ""}`}
        />
      </div>
      <div className="h-[256px] w-full overflow-hidden rounded-[8px] bg-white">
        <img src={bottomPhoto} alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

export function Iterations() {
  return (
    <section className="bg-[#f3f0eb] py-[90px]">
      <div className="mx-auto max-w-[1440px] px-[149px]">
        <div className="flex flex-col items-start gap-[10px]">
          <p className="font-lato text-[12px] font-bold uppercase tracking-[2px] text-[#c76647]">
            From paper to playtest
          </p>
          <p className="font-bricolage text-[26px] font-semibold text-[#0a0a0a]" style={bricolageOptical}>
            Iterations
          </p>
        </div>

        <div className="relative mt-[70px]">
          <div className="border-t-2 border-dashed border-[#b0b0b0]" />
          <div className="grid grid-cols-3 gap-[24px]">
            {STAGES.map((stage) => (
              <Milestone key={stage.number} number={stage.number} label={stage.label} />
            ))}
          </div>
        </div>

        <div className="mt-[40px] grid grid-cols-3 gap-[24px]">
          {STAGES.map((stage) => (
            <StagePhotos key={stage.number} {...stage} />
          ))}
        </div>
      </div>
    </section>
  );
}
