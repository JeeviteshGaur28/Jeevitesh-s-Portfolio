const bricolageOptical = { fontVariationSettings: '"opsz" 14, "wdth" 100' } as const;

function InterviewCard({ photo, alt, quote, tag }: { photo: string; alt: string; quote: string; tag: string }) {
  return (
    <div className="h-[336px] w-[340px] shrink-0 overflow-hidden rounded-[18px] bg-white shadow-[0px_8px_24px_0px_rgba(26,18,10,0.12)]">
      <div className="h-[179px] w-full overflow-hidden">
        <img src={photo} alt={alt} className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-col gap-[16px] px-[22px] py-[24px]">
        <div className="flex items-start gap-[18px]">
          <img src="/images/vasna/voice-icon.svg" alt="" className="mt-[2px] h-[24px] w-[18px] shrink-0" />
          <p className="font-lato text-[16px] italic leading-[1.4] text-[#2e2117]">{quote}</p>
        </div>
        <p
          className="pl-[36px] font-bricolage text-[11px] font-semibold uppercase tracking-[0.66px] text-[#b85536]"
          style={bricolageOptical}
        >
          {tag}
        </p>
      </div>
    </div>
  );
}

export function Interviews() {
  return (
    <section className="bg-[#f3f0eb] px-[149px] py-[90px]">
      <div className="mx-auto flex max-w-[1142px] flex-col items-center gap-[8px] text-center">
        <p
          className="font-lato text-[14px] font-bold uppercase tracking-[1.12px] text-[#b85536]"
          style={bricolageOptical}
        >
          On - Field Interviews
        </p>
        <p className="font-bricolage text-[26px] font-medium text-[#2e2117]" style={bricolageOptical}>
          In their own words
        </p>
      </div>

      <div className="mx-auto mt-[90px] flex max-w-[1142px] justify-center gap-[59px]">
        <InterviewCard
          photo="/images/vasna/interview-1.png"
          alt="Two women shopping and chatting at Vasna Market"
          quote="“Yeh jagah bilkul safe hai, raat ke 4-5 baje tak bhi ghoom sakte ho, koi tension nahi.”"
          tag="LOCAL VENDOR · TRUST"
        />
        <InterviewCard
          photo="/images/vasna/interview-2.png"
          alt="Vendors and a customer talking beside a stall"
          quote="“Market mera ghar ke bilkul paas hai. Ab toh yeh log mujhe jaante hain, isliye achha rate dete hain.”"
          tag="CUSTOMER · LOYALTY"
        />
        <InterviewCard
          photo="/images/vasna/interview-3.png"
          alt="A vendor standing beside his stall under an umbrella"
          quote="“Woh apna kaam karte hain, hum apna karte hain. Koi problem nahi hai.”"
          tag="LOCAL VENDOR · COOPERATION"
        />
      </div>
    </section>
  );
}
