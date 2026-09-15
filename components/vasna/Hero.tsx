// Static cover frame - dark teal ground, cream/gold type, three oversized
// mustard triangles floating behind the copy, and a collage of real Vasna
// Market vendor/shopper photos. Figma's own frame clips at exactly 900px
// (both the triangles and the photos run taller than that in the source),
// so this section clips the same way - full-bleed edge-to-edge within the
// hero, nothing spilling into the section that follows.
function BackgroundPolygon({
  left,
  top,
  wrapSize,
  innerSize,
  rotate,
  src,
}: {
  left: number;
  top: number;
  wrapSize: number;
  innerSize: number;
  rotate: string;
  src: string;
}) {
  return (
    <div
      className="absolute flex items-center justify-center"
      style={{ left, top, width: wrapSize, height: wrapSize }}
    >
      <div style={{ width: innerSize, height: innerSize, transform: `rotate(${rotate})` }}>
        <img src={src} alt="" className="block h-full w-full max-w-none" />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute left-[122px] top-[156px] flex w-[560px] flex-col gap-[64px]">
      <div className="flex w-full flex-col gap-[20px]">
        <p className="font-lato text-[14px] font-bold tracking-[1.4px] text-[#c99a5b]">
          UX CASE STUDY&nbsp;&nbsp;·&nbsp;&nbsp;ETHNOGRAPHIC RESEARCH&nbsp;&nbsp;→&nbsp;&nbsp;GAME DESIGN
        </p>
        <h1
          className="whitespace-nowrap font-fraunces text-[96px] font-black leading-[0.96] text-[#f6eedd]"
          style={{ fontVariationSettings: '"opsz" 144, "SOFT" 0, "WONK" 1' }}
        >
          <span className="block">Hop &amp; Shop</span>
          <span className="block">in Vasna</span>
        </h1>
      </div>
      <p className="w-[520px] font-lato text-[20px] font-normal leading-[1.4] text-[#f6eedd]">
        A week of on-field research at a 60-year-old street market in Ahmedabad turned into Table-top Game
        experience.
      </p>
    </div>
  );
}

function HeroPhotoCollage() {
  return (
    <div className="absolute left-0 right-0 top-[483px] h-[417px]">
      <div className="absolute left-0 top-0 h-[488px] w-[499px] overflow-hidden">
        <img
          src="/images/vasna/hero-collage-1.png"
          alt="Vendors and a young shopper at Vasna Market"
          className="h-full w-full object-cover object-bottom"
        />
      </div>
      <div className="absolute left-[431px] top-[183px] h-[305px] w-[611px] overflow-hidden">
        <img
          src="/images/vasna/hero-collage-2.png"
          alt="A vendor weighing produce at Vasna Market"
          className="h-full w-full object-cover object-top"
        />
      </div>
      <div className="absolute left-[974px] top-[99px] h-[389px] w-[468px] overflow-hidden">
        <img
          src="/images/vasna/hero-collage-3.png"
          alt="A shopkeeper seated among her wares at Vasna Market"
          className="h-full w-full object-cover object-bottom"
        />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative h-[900px] w-full overflow-hidden bg-[#193c3c]">
      <BackgroundPolygon left={1229} top={-211} wrapSize={422.65} innerSize={300} rotate="-40deg" src="/images/vasna/polygon-1.svg" />
      <BackgroundPolygon left={909} top={462} wrapSize={705.641} innerSize={560} rotate="18deg" src="/images/vasna/polygon-2.svg" />
      <BackgroundPolygon left={-390} top={340} wrapSize={791.914} innerSize={560} rotate="45.61deg" src="/images/vasna/polygon-3.svg" />

      <Heading />
      <HeroPhotoCollage />
    </section>
  );
}
