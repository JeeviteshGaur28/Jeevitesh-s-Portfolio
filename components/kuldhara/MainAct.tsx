import { HoverPhoto } from "./HoverPhoto";

export function MainAct() {
  return (
    <div className="relative mx-auto max-w-[1440px] py-[80px] pl-[111px] pr-[14px]">
      <div className="flex gap-[87px]">
        <div className="flex w-[441px] shrink-0 flex-col items-end gap-[30px] text-right">
          <div className="flex flex-col items-end gap-[14px]">
            <p
              className="font-fraunces text-[40px] font-semibold italic leading-[42px] text-[#5c4632]"
              style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
            >
              The Main Act
            </p>
            <p className="font-lato text-[20px] uppercase text-black">Inside The Well</p>
          </div>
          <p className="font-lato text-[18px] leading-[26px] text-[#3a2c21]">
            When you walk toward the well in VR, you&apos;re actually walking toward a physical well set up
            in the same spot — the space is mapped so you end up exactly where the real rig is. You can see
            the rope in front of you.
            <br />
            <br />
            To find out how much water is left, you have to pull it — a real rope, running through a
            pulley system. Each turn of the pulley is tracked by a rotary encoder, so your pull moves the
            bucket in VR in real time.
            <br />
            <br />
            That physical act of pulling becomes the turning point — the moment Munshi realizes the well is
            dry, and the village can&apos;t survive.
          </p>
        </div>

        <div className="relative h-[567px] w-[787px] shrink-0">
          <div
            className="absolute rounded-[13px] bg-[#b98b4e] shadow-[0px_3px_2px_1px_rgba(0,0,0,0.41)]"
            style={{ left: 36, top: 33, width: 713, height: 531, transform: "rotate(-3.11deg) skewX(-1.62deg)" }}
          />
          <div
            className="absolute overflow-hidden rounded-[37px] border-2 border-white bg-[#e8cda2] shadow-[0px_3px_2px_1px_rgba(0,0,0,0.41)]"
            style={{ left: 0, top: 60, width: 787, height: 507 }}
          >
            <p className="absolute z-[10] bottom-[10px] left-1/2 w-[304px] -translate-x-1/2 text-center font-gochi text-[20px] text-[#fff9f0]">
              PLAYERS EXPERIENCING THE BUILT
            </p>
          </div>

          <div className="absolute" style={{ left: 14, top: 80, width: 760, height: 430 }}>
            <p
              className="absolute z-[10] font-gochi text-[20px] leading-[22.8px] text-[#fff9f0]"
              style={{ left: -8, top: 27, writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              DOCUMENTATION
            </p>
            <div
              className="absolute rounded-[37px] border-2 border-white bg-[#e8cda2] shadow-[4px_6px_4px_0px_rgba(0,0,0,0.25)]"
              style={{ left: 27, top: -20, width: 731, height: 462, transform: "rotate(-0.21deg) skewX(-0.01deg)" }}
            />

            <HoverPhoto
              className="absolute overflow-hidden rounded-[20px] border-[6px] border-white"
              style={{ left: 49, top: -55, width: 207, height: 265, rotate: "2.43deg" }}
            >
              <img alt="Player pulling the rope, VR headset on" className="h-full w-full object-cover" src="/images/mainact/doc-1.png" />
            </HoverPhoto>
            <HoverPhoto
              className="absolute overflow-hidden rounded-[20px] border-[6px] border-white"
              style={{ left: 295, top: -48, width: 193, height: 252, rotate: "-1.65deg" }}
            >
              <img alt="Close-up of the rope rig" className="h-full w-full object-cover" src="/images/mainact/doc-2.png" />
            </HoverPhoto>
            <HoverPhoto
              className="absolute overflow-hidden rounded-[20px] border-[6px] border-white"
              style={{ left: 503, top: -53, width: 212, height: 270, rotate: "5.11deg" }}
            >
              <img alt="Player interacting with the well rig" className="h-full w-full object-cover" src="/images/mainact/doc-3.png" />
            </HoverPhoto>
            <HoverPhoto
              className="absolute overflow-hidden rounded-[20px] border-[6px] border-white"
              style={{ left: 277, top: 221, width: 267, height: 275, rotate: "4.4deg" }}
            >
              <img alt="Team gathered around a laptop" className="h-full w-full object-cover" src="/images/mainact/doc-4.png" />
            </HoverPhoto>
            <HoverPhoto
              className="absolute overflow-hidden rounded-[20px] border-[6px] border-white"
              style={{ left: 555, top: 226, width: 203, height: 266, rotate: "-2.12deg" }}
            >
              <img alt="Player reaching toward the rig" className="h-full w-full object-cover" src="/images/mainact/doc-5.png" />
            </HoverPhoto>
            <HoverPhoto
              className="absolute overflow-hidden rounded-[20px] border-[6px] border-white"
              style={{ left: 49, top: 217, width: 215, height: 284, rotate: "-1.02deg" }}
            >
              <img alt="Player pulling the rope, wide shot" className="h-full w-full object-cover" src="/images/mainact/doc-6.png" />
            </HoverPhoto>
          </div>
        </div>
      </div>
    </div>
  );
}
