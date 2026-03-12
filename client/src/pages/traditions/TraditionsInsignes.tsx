import TraditionsPageTemplate from "./TraditionsPageTemplate";
import { traditionsInsignesData } from "@/lib/traditions-insignes-data";
import { Shield, Award, Gem } from "lucide-react";

export default function TraditionsInsignesPage() {
  return (
    <TraditionsPageTemplate
      data={traditionsInsignesData}
      accent="#5a3a1a"
      accentDark="#2a1a08"
      accentLight="#a07040"
      heroIcon={Shield}
      blocIcons={[Shield, Gem, Award]}
      blocLabels={["9e RIC", "9e BIMa", "9e RIMa"]}
      highlightedBloc={1}
      heroGradient="linear-gradient(180deg, #0a0604 0%, #1a0e08 30%, #2d1a10 55%, #4a2e1a 70%, #d4c5a0 100%)"
      heroBgPattern={`url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='15' stroke='%23a07040' stroke-width='0.3' fill='none'/%3E%3Cpath d='M30 15 L30 45 M15 30 L45 30' stroke='%23a07040' stroke-width='0.2' fill='none'/%3E%3C/svg%3E")`}
      prevLink="/traditions/drapeau"
      prevLabel="Drapeau"
      nextLink="/traditions/pagode"
      nextLabel="Pagode"
      dateRange="1956 — Aujourd'hui"
    />
  );
}
