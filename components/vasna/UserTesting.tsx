const bricolageOptical = { fontVariationSettings: '"opsz" 14, "wdth" 100' } as const;

const PHOTOS = [
  { src: "/images/vasna/user-testing-1.png", alt: "Players gathered around the board during an indoor playtest session" },
  { src: "/images/vasna/user-testing-2.png", alt: "A playtester walking through the rules with a participant outdoors" },
  { src: "/images/vasna/user-testing-3.png", alt: "A group playtesting the board game together at a table" },
];

export function UserTesting() {
  return (
    <section className="bg-[#f3f0eb] py-[90px]">
      <div className="mx-auto max-w-[1440px] px-[149px]">
        <div className="flex flex-col items-start gap-[10px]">
          <p className="font-lato text-[12px] font-bold uppercase tracking-[2px] text-[#c76647]">
            Putting it in front of players
          </p>
          <p className="font-bricolage text-[26px] font-semibold text-[#0a0a0a]" style={bricolageOptical}>
            User Testing
          </p>
        </div>

        <div className="mt-[70px] grid grid-cols-3 gap-[26px]">
          {PHOTOS.map((photo) => (
            <div
              key={photo.src}
              className="h-[238px] w-full overflow-hidden rounded-[8px] shadow-[0px_10px_24px_0px_rgba(0,0,0,0.1)]"
            >
              <img src={photo.src} alt={photo.alt} className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
