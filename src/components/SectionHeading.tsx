type SectionHeadingProps = {
  serif: string;
  script?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ serif, script, align = "left", className = "" }: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align} ${className}`.trim()}>
      <h2 className="section-heading__serif">{serif}</h2>
      {script ? <p className="section-heading__script">{script}</p> : null}
    </div>
  );
}
