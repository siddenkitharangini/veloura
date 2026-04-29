import { useReveal } from "@/hooks/use-reveal";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export const SectionTitle = ({ eyebrow, title, subtitle, align = "center" }: SectionTitleProps) => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal max-w-2xl mb-16 ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.35em] text-rose-gold mb-5">{eyebrow}</p>
      )}
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-balance leading-[1.05]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-6 text-muted-foreground text-base md:text-lg leading-relaxed text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
};
