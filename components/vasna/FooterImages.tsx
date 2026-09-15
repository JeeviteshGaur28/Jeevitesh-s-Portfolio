// A single pre-composited export from Figma at the section's exact
// dimensions (1440x484, transparent background) - no per-photo cropping
// or positioning logic needed, it already is the finished collage.
export function FooterImages() {
  return (
    <section className="h-[484px] w-full bg-[#f3f0eb]">
      <img
        src="/images/vasna/Footer Grayscale image.png"
        alt="Vendors and shoppers at Vasna Market"
        className="h-full w-full"
      />
    </section>
  );
}
