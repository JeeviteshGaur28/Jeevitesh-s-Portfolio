import { HoverPhoto } from "./HoverPhoto";
import { DotCluster } from "./Ornaments";

function StepGlow({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute rounded-[13px] bg-[#5c4632]/90 shadow-[0px_3px_2px_1px_rgba(0,0,0,0.41)] ${className}`}
    />
  );
}

export function ProcessSection() {
  return (
    <section className="relative bg-[#94704f] py-[90px]">
      <DotCluster className="absolute left-[8px] top-[8px]" dotClassName="bg-[#e8cda2]" />
      <DotCluster className="absolute right-[8px] top-[8px]" dotClassName="bg-[#e8cda2]" />
      <DotCluster className="absolute bottom-[8px] left-[8px]" dotClassName="bg-[#e8cda2]" />
      <DotCluster className="absolute bottom-[8px] right-[8px]" dotClassName="bg-[#e8cda2]" />

      <div className="mx-auto max-w-[1440px] px-[149px]">
        <div className="flex items-center justify-center">
          <p
            className="font-fraunces text-[40px] font-semibold italic text-[#5c4632]"
            style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
          >
            Process
          </p>
        </div>
        <div className="mx-auto mt-[24px] h-[2px] w-[102px] bg-[#d9d9d9]" />

        <div className="relative pt-[80px]">
          {/* Connecting spine: References (01) -> Blender (02) -> Unity (03) -> Final Outcome (04) */}
          <div
            className="absolute w-[2px]"
            style={{
              left: 375,
              top: 70,
              height: 2138,
              backgroundImage: "repeating-linear-gradient(to bottom, #d9d9d9 0, #d9d9d9 7px, transparent 7px, transparent 13px)",
            }}
            aria-hidden
          />
          <span className="absolute h-[10px] w-[10px] rounded-full bg-[#d9d9d9]" style={{ left: 371, top: 88 }} aria-hidden />
          <span className="absolute h-[10px] w-[10px] rounded-full bg-[#d9d9d9]" style={{ left: 371, top: 628 }} aria-hidden />
          <span className="absolute h-[10px] w-[10px] rounded-full bg-[#d9d9d9]" style={{ left: 371, top: 1449 }} aria-hidden />
          <span className="absolute h-[10px] w-[10px] rounded-full bg-[#d9d9d9]" style={{ left: 371, top: 2178 }} aria-hidden />

        {/* 01 — References */}
        <div className="flex gap-[130px]">
          <div className="flex w-[360px] shrink-0 flex-col items-end gap-[20px] text-right">
            <div className="flex items-center gap-[20px]">
              <p className="font-fraunces text-[24px] font-bold uppercase text-[#e8cda2]">References</p>
              <p className="font-lato text-[64px] font-black text-[#fff9f0]/55">01</p>
            </div>
            <p className="font-lato text-[18px] leading-[26px] text-[#fff9f0]">
              Every asset in the project is based on something real — a period painting, a museum piece, an
              old photo, not guesswork. Most pieces needed two or three references before they could be
              built.
            </p>
          </div>

          <div className="relative h-[320px] w-[795px] shrink-0">
            <StepGlow className="-left-[15px] top-[60px] h-[253px] w-[746px] -rotate-[2.18deg] -skew-x-[0.06deg]" />
            <div
              className="absolute overflow-hidden rounded-[37px] border-2 border-white bg-[#e8cda2] shadow-[0px_3px_2px_1px_rgba(0,0,0,0.41)]"
              style={{ left: 0, top: 92, width: 795, height: 196 }}
            >
              <div
                className="absolute -rotate-[0.2deg] rounded-[37px] border-2 border-white bg-[#e8cda2] shadow-[-6px_8px_4px_0px_rgba(0,0,0,0.25)]"
                style={{ left: 22, top: 9, width: 755, height: 147 }}
              />
              <p className="absolute z-[10] left-[64px] top-[168px] font-gochi text-[16px] text-[#fff9f0] underline">
                Desk from Calcuttan Studio
              </p>
              <p className="absolute z-[10] left-[290px] top-[169px] font-gochi text-[16px] text-[#fff9f0] underline">
                painting from wallace collection
              </p>
              <p className="absolute z-[10] left-[555px] top-[169px] font-gochi text-[16px] text-[#fff9f0] underline">
                Painting of Diwan from NGMA
              </p>
            </div>

            <HoverPhoto
              className="absolute overflow-hidden rounded-[4px] border-[10px] border-white shadow-[0_0_0_1px_rgba(0,0,0,0.2),0_0_2px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.1)]"
              style={{ left: 46, top: 115, width: 211, height: 127, rotate: "-0.81deg" }}
            >
              <img alt="Reference: writing desk" className="h-full w-full object-cover" src="/images/process/ref-desk.png" />
            </HoverPhoto>
            <HoverPhoto
              className="absolute overflow-hidden rounded-[4px] border-[10px] border-white shadow-[0_0_0_1px_rgba(0,0,0,0.2),0_0_2px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.1)]"
              style={{ left: 291, top: 76, width: 246, height: 160 }}
            >
              <img alt="Reference: painting from Wallace Collection" className="h-full w-full object-cover" src="/images/process/ref-painting.png" />
            </HoverPhoto>
            <HoverPhoto
              className="absolute overflow-hidden rounded-[3px] border-[10px] border-white shadow-[0_0_0_1px_rgba(0,0,0,0.2),0_0_1.5px_rgba(0,0,0,0.08),0_1.5px_4.5px_rgba(0,0,0,0.1)]"
              style={{ left: 577, top: 0, width: 180, height: 239 }}
            >
              <img alt="Reference: painting of Diwan, NGMA" className="h-full w-full object-cover" src="/images/process/ref-diwan.png" />
            </HoverPhoto>
          </div>
        </div>

        {/* 02 — Blender */}
        <div className="mt-[220px] flex gap-[130px]">
          <div className="flex w-[360px] shrink-0 flex-col items-end gap-[20px] text-right">
            <div className="flex items-end gap-[20px]">
              <p className="font-fraunces text-[24px] font-bold uppercase text-[#e8cda2]">
                Modelling 3D Assets- Blender
              </p>
              <p className="font-lato text-[64px] font-black text-[#fff9f0]/55">02</p>
            </div>
            <p className="font-lato text-[18px] leading-[26px] text-[#fff9f0]">
              Same objects, rebuilt in 3D — checked against every reference before they were considered
              done.
            </p>
          </div>

          <div className="relative h-[601px] w-[795px] shrink-0">
            <StepGlow className="left-0 top-0 h-[621px] w-[751px] -rotate-[2.18deg] -skew-x-[0.06deg]" />
            <div
              className="absolute overflow-hidden rounded-[37px] border-2 border-white bg-[#e8cda2] shadow-[0px_3px_2px_1px_rgba(0,0,0,0.41)]"
              style={{ left: 0, top: 59, width: 795, height: 516 }}
            >
              <div
                className="absolute -rotate-[0.2deg] rounded-[37px] border-2 border-white bg-[#e8cda2] shadow-[-6px_8px_4px_0px_rgba(0,0,0,0.26)]"
                style={{ left: 44, top: 31, width: 730, height: 420 }}
              />
            </div>

            <HoverPhoto
              className="absolute overflow-hidden rounded-[20px] border-[6px] border-white"
              style={{ left: 372, top: 188, width: 368, height: 167 }}
            >
              <img alt="Blender: prop asset render" className="h-full w-full object-cover" src="/images/process/blender-1.png" />
            </HoverPhoto>
            <HoverPhoto
              className="absolute overflow-hidden rounded-[20px] border-[6px] border-white"
              style={{ left: 220, top: 198, width: 126, height: 137 }}
            >
              <img alt="Blender: screenshot detail" className="h-full w-full object-cover" src="/images/process/blender-2.png" />
            </HoverPhoto>
            <HoverPhoto
              className="absolute overflow-hidden rounded-[20px] border-[6px] border-white"
              style={{ left: 16, top: 0, width: 184, height: 314, rotate: "-90deg" }}
            >
              <img alt="Blender: double door gate model" className="h-full w-full object-cover" src="/images/process/blender-door.png" />
            </HoverPhoto>
            <HoverPhoto
              className="absolute overflow-hidden rounded-[20px] border-[6px] border-white"
              style={{ left: 257, top: 0, width: 230, height: 166 }}
            >
              <img alt="Blender: untitled asset" className="h-full w-full object-cover" src="/images/process/blender-3.png" />
            </HoverPhoto>
            <HoverPhoto
              className="absolute overflow-hidden rounded-[20px] border-[6px] border-white"
              style={{ left: 524, top: 13, width: 235, height: 140 }}
            >
              <img alt="Blender: screenshot detail 2" className="h-full w-full object-cover" src="/images/process/blender-4.png" />
            </HoverPhoto>
            <HoverPhoto
              className="absolute overflow-hidden rounded-[20px] border-[6px] border-white"
              style={{ left: 24, top: 380, width: 217, height: 221 }}
            >
              <img alt="Blender: scene screenshot" className="h-full w-full object-cover" src="/images/process/blender-5.png" />
            </HoverPhoto>
            <HoverPhoto
              className="absolute overflow-hidden rounded-[20px] border-[6px] border-white"
              style={{ left: 298, top: 384, width: 461, height: 217 }}
            >
              <img alt="Blender: full building render" className="h-full w-full object-cover" src="/images/process/blender-6.png" />
            </HoverPhoto>
          </div>
        </div>

        {/* 03 — Unity */}
        <div className="mt-[220px] flex gap-[130px]">
          <div className="flex w-[360px] shrink-0 flex-col items-end gap-[20px] text-right">
            <div className="flex items-end gap-[20px]">
              <p className="font-fraunces text-[24px] font-bold uppercase text-[#e8cda2]">Unity</p>
              <p className="font-lato text-[64px] font-black text-[#fff9f0]/55">03</p>
            </div>
            <p className="font-lato text-[18px] leading-[26px] text-[#fff9f0]">
              All assets from Blender come together in Unity — assembled into one working village with
              lighting and interactables. This is where it stops being objects and becomes a place you can
              walk through.
            </p>
          </div>

          <div className="relative h-[564px] w-[795px] shrink-0">
            <StepGlow className="left-0 -top-[20px] h-[612px] w-[746px] -rotate-[2.18deg] -skew-x-[0.06deg]" />
            <div
              className="absolute overflow-hidden rounded-[37px] border-2 border-white bg-[#e8cda2] shadow-[0px_3px_2px_1px_rgba(0,0,0,0.41)]"
              style={{ left: 0, top: 26, width: 795, height: 516 }}
            >
              <div
                className="absolute -rotate-[0.2deg] rounded-[37px] border-2 border-white bg-[#e8cda2] shadow-[-6px_8px_4px_0px_rgba(0,0,0,0.26)]"
                style={{ left: 44, top: 31, width: 730, height: 420 }}
              />
            </div>

            <HoverPhoto
              className="absolute overflow-hidden rounded-[20px] border-[6px] border-white"
              style={{ left: 35, top: 292, width: 347, height: 272 }}
            >
              <img alt="Unity: village scene screenshot" className="h-full w-full object-cover" src="/images/process/unity-1.png" />
            </HoverPhoto>
            <HoverPhoto
              className="absolute overflow-hidden rounded-[20px] border-[6px] border-white"
              style={{ left: 35, top: 7, width: 331, height: 254 }}
            >
              <img alt="Unity: interior scene screenshot" className="h-full w-full object-cover" src="/images/process/unity-2.png" />
            </HoverPhoto>
            <HoverPhoto
              className="absolute overflow-hidden rounded-[20px] border-[6px] border-white"
              style={{ left: 395, top: 328, width: 364, height: 236 }}
            >
              <img alt="Unity: village exterior at night" className="h-full w-full object-cover" src="/images/process/unity-3.png" />
            </HoverPhoto>
            <HoverPhoto
              className="absolute overflow-hidden rounded-[20px] border-[6px] border-white"
              style={{ left: 389, top: 0, width: 171, height: 160 }}
            >
              <img alt="Unity: door detail screenshot" className="h-full w-full object-cover" src="/images/process/unity-4.png" />
            </HoverPhoto>
            <HoverPhoto
              className="absolute overflow-hidden rounded-[20px] border-[6px] border-white"
              style={{ left: 395, top: 176, width: 364, height: 136 }}
            >
              <img alt="Unity: lit village walkway" className="h-full w-full object-cover" src="/images/process/unity-5.png" />
            </HoverPhoto>
            <HoverPhoto
              className="absolute overflow-hidden rounded-[20px] border-[6px] border-white"
              style={{ left: 571, top: 0, width: 183, height: 161 }}
            >
              <img alt="Unity: staircase and courtyard" className="h-full w-full object-cover" src="/images/process/unity-6.png" />
            </HoverPhoto>
          </div>
        </div>

        {/* 04 — Final Outcome */}
        <div className="mt-[165px] flex gap-[186px]">
          <div className="flex w-[307px] shrink-0 flex-col items-end gap-[20px] text-right">
            <div className="flex items-end gap-[20px]">
              <p className="font-fraunces text-[24px] font-bold uppercase text-[#e8cda2]">Final Outcome</p>
              <p className="font-lato text-[64px] font-black text-[#fff9f0]/55">04</p>
            </div>
            <p className="font-lato text-[18px] leading-[26px] text-[#fff9f0]">
              Here&apos;s the village, walked through.
            </p>
          </div>

          <div className="relative h-[769.5px] w-[708px] shrink-0">
            <div
              className="absolute rounded-[13px] bg-[#5c4632] shadow-[0px_3px_2px_1px_rgba(0,0,0,0.41)]"
              style={{ left: 18, top: 24, width: 660, height: 745, transform: "rotate(-2.18deg) skewX(-0.06deg)" }}
            />
            <button
              type="button"
              aria-label="Play walkthrough video"
              className="absolute overflow-hidden rounded-[14px] border-[6px] border-white"
              style={{ left: 0, top: 35, width: 708, height: 709 }}
            >
              <img
                alt="Walkthrough video thumbnail"
                className="h-full w-full object-cover"
                src="/images/process/walkthrough-thumb.png"
              />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-white/85 text-[#5c4632]">
                  ▶
                </span>
              </span>
            </button>
          </div>
        </div>
        </div>

        <p className="mx-auto mt-[80px] max-w-[619px] text-center font-lato text-[16px] italic leading-[24px] text-[#fff9f0]/80">
          *The current video is not updated with project, will upload the latest Walkthrough soon!
        </p>
      </div>
    </section>
  );
}
