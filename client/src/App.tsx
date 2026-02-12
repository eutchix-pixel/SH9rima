import { Switch, Route } from "wouter";
import { Layout } from "./components/layout";
import Home from "./pages/Home";
import DetailPage from "./pages/Detail";
import ScanPage from "./pages/Scan";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/detail/:id" component={DetailPage} />
        <Route path="/scan" component={ScanPage} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default function App() {
  return <Router />;
}
