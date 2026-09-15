export function TechPipeline() {
  return (
    <div className="mx-auto flex max-w-[1440px] gap-[80px] px-[149px] py-[100px]">
      <div className="flex w-[405px] shrink-0 flex-col items-end gap-[14px] text-right">
        <p className="font-lato text-[20px] uppercase text-black">Technical</p>
        <p
          className="font-fraunces text-[40px] font-semibold italic text-[#5c4632]"
          style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
        >
          Pipeline
        </p>
      </div>

      <div className="relative h-[634px] w-[579px] shrink-0">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 579 634" fill="none" aria-hidden>
          <defs>
            <marker id="pipeline-arrow" markerWidth="7" markerHeight="7" refX="3.5" refY="3.5" orient="auto">
              <path d="M0,0 L7,3.5 L0,7 Z" fill="#B98B4E" />
            </marker>
          </defs>
          {/* Sensor/Rotary Encoder -> Player Trigger */}
          <path d="M296 40 C 250 15, 220 30, 196 62" stroke="#B98B4E" strokeWidth="1.5" markerEnd="url(#pipeline-arrow)" />
          {/* Sensor/Rotary Encoder -> Arduino board */}
          <path d="M418 35 C 450 15, 468 45, 470 74" stroke="#B98B4E" strokeWidth="1.5" markerEnd="url(#pipeline-arrow)" />
          {/* Arduino board -> Arduino logo */}
          <path d="M465 178 C 460 195, 440 200, 418 215" stroke="#B98B4E" strokeWidth="1.5" markerEnd="url(#pipeline-arrow)" />
          {/* Arduino logo -> Unity */}
          <path d="M368 262 C 340 285, 305 300, 275 315" stroke="#B98B4E" strokeWidth="1.5" markerEnd="url(#pipeline-arrow)" />
          {/* Blender -> Unity */}
          <path d="M100 253 C 120 285, 150 305, 175 320" stroke="#B98B4E" strokeWidth="1.5" markerEnd="url(#pipeline-arrow)" />
          {/* Unity -> Meta */}
          <path d="M268 384 L 268 462" stroke="#B98B4E" strokeWidth="1.5" markerEnd="url(#pipeline-arrow)" />
          {/* Meta -> Player Sees Results */}
          <path d="M268 505 L 268 586" stroke="#B98B4E" strokeWidth="1.5" markerEnd="url(#pipeline-arrow)" />
        </svg>

        <p className="absolute left-[102px] top-[78px] w-[172px] text-right font-lato text-[20px] uppercase leading-[24px] text-black">
          Player Trigger
        </p>

        <div className="absolute left-[296px] top-0 w-[116px] text-center font-lato uppercase text-black">
          <p className="text-[20px] leading-[20px]">Sensor</p>
          <p className="text-[14px] normal-case leading-[18px] text-black/80">rotatory encoder</p>
        </div>

        <img
          alt="Arduino board"
          src="/images/pipeline/arduino-board.png"
          className="absolute rounded-[6px] object-cover"
          style={{ left: 434, top: 78, width: 145, height: 97 }}
        />
        <img
          alt="Arduino logo"
          src="/images/pipeline/arduino-logo.svg"
          style={{ left: 335, top: 207, width: 77, height: 52 }}
          className="absolute object-contain"
        />
        <img
          alt="Blender logo"
          src="/images/pipeline/blender-logo.svg"
          style={{ left: 0, top: 204, width: 185, height: 46 }}
          className="absolute object-contain"
        />
        <img
          alt="Unity logo"
          src="/images/pipeline/unity-logo.svg"
          style={{ left: 178, top: 317, width: 180, height: 63 }}
          className="absolute object-contain"
        />
        <img
          alt="Meta logo"
          src="/images/pipeline/meta-logo.svg"
          style={{ left: 185, top: 467, width: 166, height: 34 }}
          className="absolute object-contain"
        />
        <p className="absolute left-[164px] top-[592px] w-[208px] text-center font-lato text-[20px] uppercase leading-[24px] text-black">
          Player Sees Results
        </p>
      </div>
    </div>
  );
}
