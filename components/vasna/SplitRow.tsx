// Shared left/right frame for every section built on a middle partition.
// The gutter is a fixed 96px column, not a flex gap - measured off the
// Figma source (About Project: left block ends x=673, right block starts
// x=769, an 96px gap centered almost exactly on the 1440 canvas's own
// midpoint, x=720). Centering a fixed gutter inside this shared, evenly
// padded container reproduces that same page-centered gutter automatically.
// Both columns are left-aligned - content sits at its own natural width,
// it doesn't need to fill the column.
export function SplitRow({
  left,
  right,
  className = "",
}: {
  left: React.ReactNode;
  right: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto grid max-w-[1440px] grid-cols-[1fr_96px_1fr] px-[149px] ${className}`}>
      <div className="flex flex-col items-start text-left">{left}</div>
      <div aria-hidden />
      <div className="flex flex-col items-start text-left">{right}</div>
    </div>
  );
}
