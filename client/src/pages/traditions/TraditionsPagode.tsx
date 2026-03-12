import TraditionsPageTemplate from "./TraditionsPageTemplate";
import { traditionsPagodeData } from "@/lib/traditions-pagode-data";
import { Landmark, Building, PartyPopper, ArrowRightLeft } from "lucide-react";

export default function TraditionsPagodePage() {
  return (
    <TraditionsPageTemplate
      data={traditionsPagodeData}
      accent="#8b1a1a"
      accentDark="#3d0808"
      accentLight="#c05050"
      heroIcon={Landmark}
      blocIcons={[Landmark, Building, PartyPopper, ArrowRightLeft]}
      blocLabels={["TONKIN", "CONSTRUCTION", "CÉRÉMONIES", "TRANSFERT"]}
      highlightedBloc={2}
      heroGradient="linear-gradient(180deg, #080404 0%, #1a0808 30%, #2d1010 55%, #4a1818 70%, #d4c5a0 100%)"
      heroBgPattern={`url("data:image/svg+xml,%3Csvg width='80' height='80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 60 L40 20 L60 60 Z M30 60 L40 30 L50 60 Z' stroke='%23c05050' stroke-width='0.3' fill='none'/%3E%3C/svg%3E")`}
      prevLink="/traditions/insignes"
      prevLabel="Insignes"
      nextLink="/traditions/chant"
      nextLabel="Chant"
      dateRange="1890 — Aujourd'hui"
    />
  );
}
