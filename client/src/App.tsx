import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { Layout } from "./components/layout";
import Home from "./pages/Home";
import TonkinOriginsPage from "./pages/asia/TonkinOrigins";
import ChinaExpedition1900Page from "./pages/asia/ChinaExpedition1900";
import Tonkin1901Page from "./pages/asia/Tonkin1901";
import SiberiePage from "./pages/asia/Siberie";
import AnneesHeureusesPage from "./pages/asia/AnneesHeureuses";
import TourmentePage from "./pages/asia/Tourmente";
import AlgerieRenaissancePage from "./pages/algeria/AlgerieRenaissance";
import AlgeriePalestroPage from "./pages/algeria/AlgeriePalestro";
import AlgerieContreInsurrectionPage from "./pages/algeria/AlgerieContreInsurrection";
import AlgerieKJ25Page from "./pages/algeria/AlgerieKJ25";
import AlgerieCommandosPage from "./pages/algeria/AlgerieCommandos";
import AlgerieDisparitionPage from "./pages/algeria/AlgerieDisparition";
import GuyaneDebutsPage from "./pages/guyane/GuyaneDebuts";
import GuyaneEmprisesPage from "./pages/guyane/GuyaneEmprises";
import GuyaneFluvialPage from "./pages/guyane/GuyaneFluvial";
import GuyaneCrajPage from "./pages/guyane/GuyaneCraj";
import GuyaneJunglePage from "./pages/guyane/GuyaneJungle";
import GuyaneInternationalPage from "./pages/guyane/GuyaneInternational";
import GuyaneHarpiePage from "./pages/guyane/GuyaneHarpie";
import GuyaneTitanPage from "./pages/guyane/GuyaneTitan";
import TraditionsDrapeauPage from "./pages/traditions/TraditionsDrapeau";
import TraditionsInsignesPage from "./pages/traditions/TraditionsInsignes";
import TraditionsPagodePage from "./pages/traditions/TraditionsPagode";
import TraditionsChantPage from "./pages/traditions/TraditionsChant";
import TraditionsEspritPage from "./pages/traditions/TraditionsEsprit";
import ScanPage from "./pages/Scan";
import NotFound from "./pages/not-found";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (location !== '/scan') {
      localStorage.setItem('lastVisitedPage', location);
    }
  }, [location]);
  return null;
}

function Router() {
  return (
    <Layout>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/asie/naissance-du-9-tonkin" component={TonkinOriginsPage} />
        <Route path="/asie/chine-1900-expedition" component={ChinaExpedition1900Page} />
        <Route path="/asie/tonkin-1901-1914" component={Tonkin1901Page} />
        <Route path="/asie/siberie-ww1" component={SiberiePage} />
        <Route path="/asie/annees-heureuses" component={AnneesHeureusesPage} />
        <Route path="/asie/tourmente-1940" component={TourmentePage} />
        <Route path="/algerie/renaissance" component={AlgerieRenaissancePage} />
        <Route path="/algerie/palestro" component={AlgeriePalestroPage} />
        <Route path="/algerie/contre-insurrection" component={AlgerieContreInsurrectionPage} />
        <Route path="/algerie/kj25" component={AlgerieKJ25Page} />
        <Route path="/algerie/commandos-chasse" component={AlgerieCommandosPage} />
        <Route path="/algerie/disparition" component={AlgerieDisparitionPage} />
        <Route path="/guyane/debuts" component={GuyaneDebutsPage} />
        <Route path="/guyane/emprises" component={GuyaneEmprisesPage} />
        <Route path="/guyane/fluvial" component={GuyaneFluvialPage} />
        <Route path="/guyane/craj" component={GuyaneCrajPage} />
        <Route path="/guyane/jungle" component={GuyaneJunglePage} />
        <Route path="/guyane/international" component={GuyaneInternationalPage} />
        <Route path="/guyane/harpie" component={GuyaneHarpiePage} />
        <Route path="/guyane/titan" component={GuyaneTitanPage} />
        <Route path="/traditions/drapeau" component={TraditionsDrapeauPage} />
        <Route path="/traditions/insignes" component={TraditionsInsignesPage} />
        <Route path="/traditions/pagode" component={TraditionsPagodePage} />
        <Route path="/traditions/chant" component={TraditionsChantPage} />
        <Route path="/traditions/esprit" component={TraditionsEspritPage} />
        <Route path="/scan" component={ScanPage} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default function App() {
  return <Router />;
}
