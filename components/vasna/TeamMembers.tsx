// A single pre-composited export from Figma at the section's exact
// dimensions (1440x926, transparent background) - heading, dotted lines,
// photo cards, and the closing "thank you" divider are all already
// baked into this one image, so the hand-built version (heading markup,
// per-photo crop math, divider) is gone; this just places it in the same
// reserved footprint on the page's own background.
export function TeamMembers() {
  return (
    <section className="h-[926px] w-full bg-[#f3f0eb]">
      <img
        src="/images/vasna/Team members.png"
        alt="Team Members: Parisha, Shriyans, Priyanka, Jeevitesh, Ananya, and Simran"
        className="h-full w-full"
      />
    </section>
  );
}
