export function HeroImage() {
  return (
    <div className="relative w-full">
      <div className="relative h-[719px] w-full overflow-hidden rounded-t-[36px] bg-[#EADFCB]">
        <img
          alt="Kuldhara heritage site at sunset, rendered hero visual"
          className="h-full w-full object-cover"
          src="/images/hero.png"
        />
        <img
          alt=""
          aria-hidden
          className="absolute object-contain"
          style={{ left: "80.74%", top: "71.02%", width: "4.66%", height: "8.11%" }}
          src="/images/hero-objects/object-1.png"
        />
        <img
          alt=""
          aria-hidden
          className="absolute object-contain"
          style={{ left: "55.21%", top: "74.94%", width: "6.38%", height: "6.63%" }}
          src="/images/hero-objects/object-2.png"
        />
        <img
          alt=""
          aria-hidden
          className="absolute object-contain"
          style={{ left: "20.61%", top: "74.45%", width: "9.94%", height: "11.06%" }}
          src="/images/hero-objects/object-3.png"
        />
        <img
          alt=""
          aria-hidden
          className="absolute object-contain"
          style={{ left: "40.25%", top: "50.12%", width: "5.03%", height: "24.82%" }}
          src="/images/hero-objects/object-4.png"
        />
        <img
          alt=""
          aria-hidden
          className="absolute object-contain"
          style={{ left: "45.40%", top: "52.58%", width: "1.47%", height: "5.65%" }}
          src="/images/hero-objects/object-5.png"
        />
        <img
          alt=""
          aria-hidden
          className="absolute object-contain"
          style={{ left: "38.40%", top: "52.34%", width: "1.47%", height: "5.65%" }}
          src="/images/hero-objects/object-5.png"
        />
      </div>

      <div className="absolute bottom-[48px] right-[75px] w-[316px] rounded-[24px] border border-white/10 bg-white/5 p-[24px] backdrop-blur-md">
        <div className="flex flex-col gap-[4px]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[1.4px] text-white/65">Role</p>
            <p className="pt-[4px] font-outfit text-[16px] text-white/80">Interaction + Spatial Designer</p>
          </div>
          <div className="pt-[30px]">
            <p className="font-mono text-[11px] uppercase tracking-[1.4px] text-white/65">Duration</p>
            <p className="pt-[4px] font-outfit text-[16px] text-white/80">5 Weeks</p>
          </div>
          <div className="pt-[30px]">
            <p className="font-mono text-[11px] uppercase tracking-[1.4px] text-white/65">Tools</p>
            <p className="pt-[4px] font-outfit text-[16px] text-white/80">Unity · Arduino · Blender · Meta Quest 3</p>
          </div>
          <div className="pt-[30px]">
            <p className="font-mono text-[11px] uppercase tracking-[1.4px] text-white/65">Context</p>
            <p className="pt-[4px] font-outfit text-[16px] text-white/80">
              VR Experience Design, 3D Game World Building
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
