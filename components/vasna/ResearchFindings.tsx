const bricolageOptical = { fontVariationSettings: '"opsz" 14, "wdth" 100' } as const;

type Finding = {
  number: string;
  quote: string;
  evidence: string;
};

const FINDINGS: Finding[] = [
  {
    number: "01",
    quote:
      "Street vendors skillfully balance competition and cooperation, using trust to overcome customer biases about lower quality",
    evidence: "Evidence : Card Sorting",
  },
  {
    number: "02",
    quote:
      "Shopkeepers stay cooperative with vendors despite past friction, fear of their influence outweighs their own legal authority, so keeping the peace protects their business.",
    evidence: "Evidence : Card Sorting",
  },
  {
    number: "03",
    quote:
      "Foot traffic has shrunk to mostly locals buying basics, forcing vendors to lean on community ties and stay in shopkeepers' good books to avoid conflict, and to adjust what they sell.",
    evidence: "Evidence : Card Sorting",
  },
];

function FindingCard({ number, quote, evidence }: Finding) {
  return (
    <div className="flex min-h-[279px] w-full flex-col gap-[32px] rounded-[16px] bg-[#f6eedd] px-[24px] py-[36px]">
      <p className="font-lato text-[36px] font-extrabold italic tracking-[1.2px] text-[#b89158]">{number}</p>
      <div className="flex flex-col gap-[24px]">
        <p className="min-h-[100px] font-lato text-[18px] leading-[1.38] text-[#0a0a0a]">{quote}</p>
        <p className="font-lato text-[13px] font-bold text-[#7c7f8a]">{evidence}</p>
      </div>
    </div>
  );
}

export function ResearchFindings() {
  return (
    <section className="bg-[#1d3c3c] py-[90px]">
      <div className="mx-auto max-w-[1440px] px-[149px]">
        <div className="flex flex-col gap-[8px]">
          <p
            className="font-bricolage text-[16px] font-semibold uppercase tracking-[2px] text-[#b89158]"
            style={bricolageOptical}
          >
            Insights
          </p>
          <p className="font-bricolage text-[32px] font-medium leading-[1.1] text-[#f3f0eb]" style={bricolageOptical}>
            Research Findings
          </p>
        </div>

        <div className="mt-[70px] grid grid-cols-3 gap-[16px]">
          {FINDINGS.map((finding) => (
            <FindingCard key={finding.number} {...finding} />
          ))}
        </div>
      </div>
    </section>
  );
}
