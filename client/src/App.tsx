import { Switch, Route } from "wouter";
import { Layout } from "./components/layout";
import Home from "./pages/Home";
import DetailPage from "./pages/Detail";
import TonkinOriginsPage from "./pages/asia/TonkinOrigins";
import ChinaExpedition1900Page from "./pages/asia/ChinaExpedition1900";
import Tonkin1901Page from "./pages/asia/Tonkin1901";
import ScanPage from "./pages/Scan";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/detail/:id" component={DetailPage} />
        <Route path="/asie/naissance-du-9-tonkin" component={TonkinOriginsPage} />
        <Route path="/asie/chine-1900-expedition" component={ChinaExpedition1900Page} />
        <Route path="/asie/tonkin-1901-1914" component={Tonkin1901Page} />
        <Route path="/scan" component={ScanPage} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default function App() {
  return <Router />;
}
