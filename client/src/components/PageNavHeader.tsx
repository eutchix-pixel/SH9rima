import { Link } from "wouter";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";

interface PageNavHeaderProps {
  prevLink: string;
  prevLabel: string;
  nextLink: string;
  nextLabel: string;
  sectionAnchor: string;
  hasPrev: boolean;
  hasNext: boolean;
  lightText?: boolean;
  [key: string]: any;
}

export default function PageNavHeader({ prevLink, prevLabel, nextLink, nextLabel, sectionAnchor, hasPrev, hasNext, lightText = true }: PageNavHeaderProps) {
  const textBase = lightText ? "text-white/50" : "text-[#4a3b2a]/50";
  const textHover = lightText ? "active:text-white/80" : "active:text-[#4a3b2a]/80";
  const bgHover = lightText ? "active:bg-white/10" : "active:bg-[#4a3b2a]/8";
  const divider = lightText ? "bg-white/15" : "bg-[#4a3b2a]/15";

  return (
    <nav className="flex items-center justify-between mb-12 -mx-1" data-testid="page-nav-header">
      {hasPrev ? (
        <Link href={prevLink}>
          <button
            className={`flex items-center gap-1 px-3 py-2.5 rounded-lg ${textBase} ${textHover} ${bgHover} transition-colors min-h-[44px] min-w-[44px]`}
            data-testid="link-back-prev"
          >
            <ChevronLeft className="h-4 w-4 shrink-0" />
            <span className="text-[11px] uppercase tracking-wider truncate max-w-[80px]">{prevLabel}</span>
          </button>
        </Link>
      ) : (
        <div className="min-w-[44px]" />
      )}

      <Link href={sectionAnchor}>
        <button
          className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg ${textBase} ${textHover} ${bgHover} transition-colors min-h-[44px]`}
          data-testid="link-back-home"
        >
          <Home className="h-3.5 w-3.5 shrink-0" />
          <span className="text-[11px] uppercase tracking-wider font-medium">Accueil</span>
        </button>
      </Link>

      {hasNext ? (
        <Link href={nextLink}>
          <button
            className={`flex items-center gap-1 px-3 py-2.5 rounded-lg ${textBase} ${textHover} ${bgHover} transition-colors min-h-[44px] min-w-[44px]`}
            data-testid="link-next"
          >
            <span className="text-[11px] uppercase tracking-wider truncate max-w-[80px]">{nextLabel}</span>
            <ChevronRight className="h-4 w-4 shrink-0" />
          </button>
        </Link>
      ) : (
        <div className="min-w-[44px]" />
      )}
    </nav>
  );
}
