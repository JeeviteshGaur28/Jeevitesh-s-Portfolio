import { HoverPhoto } from "./HoverPhoto";

export function StoryBehindIdea() {
  return (
    <div className="relative mx-auto max-w-[1440px] py-[80px] pl-[103px] pr-[14px]">
      <div className="flex gap-[99px]">
        <div className="w-[437px] shrink-0 text-right">
          <p
            className="font-fraunces text-[40px] leading-[42px]"
            style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
          >
            <span className="font-semibold italic text-[#5c4632]">Story</span>{" "}
            <span className="italic text-[#5c4632]/60">behind the idea ?</span>
          </p>
          <div className="mt-[30px] flex flex-col gap-0 text-[18px] leading-[26px] text-[#3a2c21]">
            <p className="font-lato italic">&quot;That&apos;s what tourism says. Go and see for yourself.&quot;</p>
            <p className="mt-[3px] font-lato">
              I heard about Kuldhara from Manganiyar musicians during a community immersion in Jaisalmer —
              not as a ghost story, but as a complaint. The haunted village is what tourism sells. The
              villages around it are lived in, ordinary, and left out of that story entirely.
            </p>
          </div>
        </div>

        <div className="relative h-[374.6px] w-[787px] shrink-0">
          <div
            className="absolute rounded-[13px] bg-[#b98b4e] shadow-[0px_3px_2px_1px_rgba(0,0,0,0.41)]"
            style={{ left: 41.93, top: 13.18, width: 700.18, height: 348.23, transform: "rotate(-2.18deg) skewX(-0.06deg)" }}
          />
          <div
            className="absolute overflow-hidden rounded-[37px] border-2 border-white bg-[#e8cda2] shadow-[0px_3px_2px_1px_rgba(0,0,0,0.41)]"
            style={{ left: 0, top: 18.71, width: 787, height: 337.27 }}
          >
            <p
              className="absolute z-[10] text-center font-gochi text-[20px] text-[#fff9f0]"
              style={{ left: 378, top: 308.29, width: 390.79, transform: "rotate(-0.19deg)" }}
            >
              MANGANIYAR COMMUNITY, KANOI,JAISALMER
            </p>
          </div>
          <div className="absolute" style={{ left: 13.89, top: 32.79, width: 760.22, height: 300.84 }}>
            <p
              className="absolute z-[10] font-gochi text-[20px] leading-[22.8px] text-[#fff9f0]"
              style={{ left: -8, top: 63, writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              JAISALMER
            </p>
            <div
              className="absolute rounded-[37px] border-2 border-white bg-[#e8cda2] shadow-[4px_6px_4px_0px_rgba(0,0,0,0.25)]"
              style={{ left: 27.23, top: 1.96, width: 732.35, height: 291.57, transform: "rotate(-0.21deg) skewX(-0.01deg)" }}
            />
            <HoverPhoto
              className="absolute overflow-hidden rounded-[20px] border-[7px] border-white"
              style={{ left: 536.1, top: 140.2, width: 183, height: 155 }}
            >
              <img alt="Community portrait, Jaisalmer" className="h-full w-full object-cover" src="/images/story/polaroid.png" />
            </HoverPhoto>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 translate-x-[103px] translate-y-[81px]">
        <HoverPhoto
          className="absolute overflow-hidden rounded-[20px] border-[7px] border-white"
          style={{ left: 608, top: 183, width: 240, height: 123 }}
        >
          <img
            alt="Community members in Jaisalmer"
            className="absolute left-[0.13%] top-[-51.13%] h-[272.43%] w-full max-w-none"
            src="/images/story/street.png"
          />
        </HoverPhoto>
        <HoverPhoto
          className="absolute overflow-hidden rounded-[20px] border-[7px] border-white"
          style={{ left: 879, top: 163, width: 183, height: 155 }}
        >
          <img alt="Two friends by the ruins" className="h-full w-full object-cover" src="/images/story/friends.png" />
        </HoverPhoto>
        <HoverPhoto
          className="absolute overflow-hidden rounded-[20px] border-[7px] border-white"
          style={{ left: 824, top: -18, width: 207, height: 155 }}
        >
          <img
            alt="Desert landscape near Jaisalmer"
            className="absolute left-[-46.81%] top-0 h-full w-[143.33%] max-w-none"
            src="/images/story/desert.png"
          />
        </HoverPhoto>
        <HoverPhoto
          className="absolute overflow-hidden rounded-[20px] border-[7px] border-white"
          style={{ left: 1095, top: -18, width: 174, height: 185 }}
        >
          <img alt="Team discussion by a motorbike" className="h-full w-full object-cover" src="/images/story/team.png" />
        </HoverPhoto>
        <HoverPhoto
          className="absolute overflow-hidden rounded-[20px] border-[7px] border-white"
          style={{ left: 608, top: -18, width: 171, height: 182 }}
        >
          <img alt="Field visit portrait" className="h-full w-full object-cover" src="/images/story/portrait.png" />
        </HoverPhoto>
      </div>
    </div>
  );
}
