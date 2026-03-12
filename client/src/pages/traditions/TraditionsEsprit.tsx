import TraditionsPageTemplate from "./TraditionsPageTemplate";
import { traditionsEspritData } from "@/lib/traditions-esprit-data";
import { Heart, Users, Flag, Sparkles } from "lucide-react";

export default function TraditionsEspritPage() {
  return (
    <TraditionsPageTemplate
      data={traditionsEspritData}
      accent="#2a1a6b"
      accentDark="#12083d"
      accentLight="#7050c0"
      heroIcon={Heart}
      blocIcons={[Heart, Users, Flag, Sparkles]}
      blocLabels={["DEVISE", "DIVERSITÉ", "CÉRÉMONIES", "AVENIR"]}
      highlightedBloc={0}
      heroGradient="linear-gradient(180deg, #040408 0%, #0a081a 30%, #14102d 55%, #20184a 70%, #d4c5a0 100%)"
      heroBgPattern={`url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 15 L35 25 L45 25 L37 32 L40 42 L30 36 L20 42 L23 32 L15 25 L25 25 Z' stroke='%237050c0' stroke-width='0.3' fill='none'/%3E%3C/svg%3E")`}
      prevLink="/traditions/chant"
      prevLabel="Chant"
      nextLink="/#traditions"
      nextLabel="Traditions"
      dateRange="1870 — Aujourd'hui"
    />
  );
}
