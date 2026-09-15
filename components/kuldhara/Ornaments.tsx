/**
 * Small decorative elements reused across the page: the line-with-end-dots
 * section dividers, the dot clusters that bookend the "Process" heading,
 * and the standalone dot rows/columns used as spacers between sections.
 */

export function SectionDivider({
  className = "",
  dotClassName = "bg-[#D9BE93]",
  lineClassName = "bg-[#D9BE93]/60",
}: {
  className?: string;
  dotClassName?: string;
  lineClassName?: string;
}) {
  return (
    <div className={`relative mx-auto h-[10px] w-full max-w-[1211px] ${className}`}>
      <span className={`absolute left-0 top-1/2 h-[10px] w-[10px] -translate-y-1/2 rounded-full ${dotClassName}`} />
      <span className={`absolute right-0 top-1/2 h-[10px] w-[10px] -translate-y-1/2 rounded-full ${dotClassName}`} />
      <span className={`absolute left-[10px] right-[10px] top-1/2 h-[2px] -translate-y-1/2 rounded-full ${lineClassName}`} />
    </div>
  );
}

export function FooterDivider({
  dotClassName = "bg-[#FFF9F0]",
  lineClassName = "bg-[#FFF9F0]/60",
  children,
}: {
  dotClassName?: string;
  lineClassName?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="relative mx-auto flex h-[26px] w-full max-w-[1211px] items-center justify-center">
      <span className={`absolute left-0 top-1/2 h-[10px] w-[10px] -translate-y-1/2 rounded-full ${dotClassName}`} />
      <span className={`absolute right-0 top-1/2 h-[10px] w-[10px] -translate-y-1/2 rounded-full ${dotClassName}`} />
      <span className={`absolute left-[10px] top-1/2 h-[2px] w-[409px] -translate-y-1/2 rounded-full ${lineClassName}`} />
      <span className={`absolute right-[10px] top-1/2 h-[2px] w-[414px] -translate-y-1/2 rounded-full ${lineClassName}`} />
      {children && <span className="relative">{children}</span>}
    </div>
  );
}

export function DotCluster({
  className = "",
  dotClassName = "bg-[#E8CDA2]",
}: {
  className?: string;
  dotClassName?: string;
}) {
  const cols = 4;
  const rows = 4;
  return (
    <div className={`grid h-[88px] w-[143px] grid-cols-4 content-between ${className}`}>
      {Array.from({ length: cols * rows }).map((_, i) => (
        <span key={i} className={`m-auto h-[14px] w-[14px] rounded-full ${dotClassName}`} />
      ))}
    </div>
  );
}

export function DotColumn({ dotClassName = "bg-[#D98E3B]" }: { dotClassName?: string }) {
  return (
    <div className="flex h-[158px] w-[14px] flex-col items-center justify-between">
      {Array.from({ length: 8 }).map((_, i) => (
        <span key={i} className={`h-[14px] w-[14px] rounded-full ${dotClassName}`} />
      ))}
    </div>
  );
}

export function VerticalDotRow({ dotClassName = "bg-[#D9BE93]" }: { dotClassName?: string }) {
  return (
    <div className="mx-auto flex h-[180px] w-[16px] flex-col items-center justify-between">
      {Array.from({ length: 8 }).map((_, i) => (
        <span key={i} className={`h-[16px] w-[16px] rounded-full ${dotClassName}`} />
      ))}
    </div>
  );
}
