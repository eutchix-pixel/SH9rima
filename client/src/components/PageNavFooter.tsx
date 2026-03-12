import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Layers } from "lucide-react";

interface PageNavFooterProps {
  prevLink: string;
  prevLabel: string;
  nextLink: string;
  nextLabel: string;
  sectionAnchor: string;
  accent: string;
  hasNext: boolean;
}

export default function PageNavFooter({ prevLink, prevLabel, nextLink, nextLabel, sectionAnchor, accent, hasNext }: PageNavFooterProps) {
  return (
    <section className="py-16">
      <div className="text-center space-y-6">
        <div className="w-16 h-[1px] bg-[#4a3b2a]/20 mx-auto" />
        <p className="text-[10px] uppercase tracking-[0.4em] text-[#4a3b2a]/40">Navigation</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href={prevLink}>
            <Button
              variant="outline"
              className="border-[#4a3b2a]/15 text-[#4a3b2a]/70 hover:bg-white/40 hover:text-[#4a3b2a] px-6 py-5 text-xs rounded-lg"
              data-testid="button-back-prev"
            >
              <ArrowLeft className="mr-2 h-3.5 w-3.5" /> {prevLabel}
            </Button>
          </Link>
          <Link href={sectionAnchor}>
            <Button
              variant="outline"
              className="border-[#4a3b2a]/15 text-[#4a3b2a]/70 hover:bg-white/40 hover:text-[#4a3b2a] px-6 py-5 text-xs rounded-lg"
              data-testid="button-back-themes"
            >
              <Layers className="mr-2 h-3.5 w-3.5" /> Thèmes
            </Button>
          </Link>
          {hasNext ? (
            <Link href={nextLink}>
              <Button
                className="text-white px-6 py-5 text-xs rounded-lg shadow-lg"
                style={{ backgroundColor: accent, boxShadow: `0 10px 15px -3px ${accent}33` }}
                data-testid="button-continue-visit"
              >
                {nextLabel} <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </Button>
            </Link>
          ) : (
            <Link href={sectionAnchor}>
              <Button
                className="text-white px-6 py-5 text-xs rounded-lg shadow-lg"
                style={{ backgroundColor: accent, boxShadow: `0 10px 15px -3px ${accent}33` }}
                data-testid="button-continue-visit"
              >
                Retour {nextLabel} <ArrowRight className="ml-2 h-3.5 w-3.5" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
