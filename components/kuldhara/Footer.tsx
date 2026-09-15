import { DotCluster, FooterDivider, VerticalDotRow } from "./Ornaments";
import { ContactArea } from "./ContactArea";

export function Footer() {
  return (
    <>
      {/* "Disclaimer" (renamed from "Footer Note" in Figma) - the heritage-site note bar */}
      <div className="bg-[#5c4632] py-[30px]">
        <div className="mx-auto flex max-w-[1431px] items-center justify-between px-[5px]">
          <DotCluster dotClassName="bg-[#e8cda2]" />
          <p className="max-w-[693px] text-center font-lato text-[18px] italic leading-[26px] text-[#fff9f0]">
            Kuldhara is a protected heritage site. This project doesn&apos;t claim to have solved what
            happened there. It proposes a version that fits the evidence better than a curse does — and
            argues the difference is worth feeling, not just reading.
          </p>
          <DotCluster dotClassName="bg-[#e8cda2]" />
        </div>
      </div>

      {/* Vertical dot column + gapped divider with "thank you" text, both on the cream ground,
          sitting between the Disclaimer bar and the real Footer/Contact Area */}
      <div className="mx-auto flex max-w-[1440px] flex-col items-center px-[149px] py-[80px]">
        <VerticalDotRow />
        <div className="mt-[40px] w-full">
          <FooterDivider dotClassName="bg-[#D9BE93]" lineClassName="bg-[#D9BE93]/60">
            <p className="whitespace-nowrap bg-[#FFF9F0] px-[16px] font-fraunces text-[16px] italic text-[#3a2c21]">
              thank you for viewing till the end
            </p>
          </FooterDivider>
        </div>
      </div>

      <ContactArea />
    </>
  );
}
