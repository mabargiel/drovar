type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
};

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <h2
        className={`text-3xl font-bold lg:text-4xl ${light ? "text-cream" : ""}`}
      >
        {title}
      </h2>
      <div
        className={`mt-3 h-1 w-16 bg-accent ${centered ? "mx-auto" : ""}`}
      />
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-lg ${centered ? "mx-auto" : ""} ${light ? "text-cream/70" : "text-muted"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
