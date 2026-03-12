import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

interface PageNavHeaderProps {
  prevLink: string;
  prevLabel: string;
  sectionAnchor: string;
  sectionLabel: string;
  lightText?: boolean;
}

export default function PageNavHeader({ prevLink, prevLabel, sectionAnchor, sectionLabel, lightText = true }: PageNavHeaderProps) {
  const base = lightText
    ? "text-white/30 hover:text-white/60"
    : "text-[#4a3b2a]/40 hover:text-[#4a3b2a]/70";

  return (
    <div className="flex justify-between items-center mb-16">
      <Link href={prevLink}>
        <button className={`${base} transition-colors text-[10px] uppercase tracking-widest flex items-center gap-2`} data-testid="link-back-prev">
          <ArrowLeft className="h-3 w-3" /> {prevLabel}
        </button>
      </Link>
      <Link href={sectionAnchor}>
        <button className={`${base} transition-colors text-[10px] uppercase tracking-widest`} data-testid="link-back-section">
          {sectionLabel}
        </button>
      </Link>
    </div>
  );
}
