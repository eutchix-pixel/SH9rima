import { Switch, Route } from "wouter";
import { Layout } from "./components/layout";
import Home from "./pages/Home";
import DetailPage from "./pages/Detail";
import TonkinOriginsPage from "./pages/asia/TonkinOrigins";
import ChinaExpedition1900Page from "./pages/asia/ChinaExpedition1900";
import ScanPage from "./pages/Scan";
import AiAssistant from "./pages/AiAssistant";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/ai-assistant" component={AiAssistant} />
        <Route path="/detail/:id" component={DetailPage} />
        <Route path="/asie/naissance-du-9-tonkin" component={TonkinOriginsPage} />
        <Route path="/asie/chine-1900-expedition" component={ChinaExpedition1900Page} />
        <Route path="/scan" component={ScanPage} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default function App() {
  return <Router />;
}
