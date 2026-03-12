import TraditionsPageTemplate from "./TraditionsPageTemplate";
import { traditionsChantData } from "@/lib/traditions-chant-data";
import { Music, PenLine, BookText, Users } from "lucide-react";

export default function TraditionsChantPage() {
  return (
    <TraditionsPageTemplate
      data={traditionsChantData}
      accent="#1a4a3a"
      accentDark="#082a1a"
      accentLight="#40a080"
      heroIcon={Music}
      blocIcons={[Music, PenLine, BookText, Users]}
      blocLabels={["ORIGINES", "PAROLES", "SOLDATS BLEUS", "COHÉSION"]}
      highlightedBloc={2}
      heroGradient="linear-gradient(180deg, #040a08 0%, #081a14 30%, #102d22 55%, #184a38 70%, #d4c5a0 100%)"
      heroBgPattern={`url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 30 Q30 10 40 30 Q50 50 60 30' stroke='%2340a080' stroke-width='0.3' fill='none'/%3E%3Ccircle cx='20' cy='30' r='3' stroke='%2340a080' stroke-width='0.3' fill='none'/%3E%3C/svg%3E")`}
      prevLink="/traditions/pagode"
      prevLabel="Pagode"
      nextLink="/traditions/esprit"
      nextLabel="Esprit du 9"
      dateRange="1909 — Aujourd'hui"
    />
  );
}
