import { Switch, Route } from "wouter";
import { Layout } from "./components/layout";
import Home from "./pages/Home";
import TourPage from "./pages/Tour";
import ArtworkPage from "./pages/Artwork";
import ScanPage from "./pages/Scan";
import AdminPage from "./pages/Admin";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/tour/:id" component={TourPage} />
        <Route path="/artwork/:id" component={ArtworkPage} />
        <Route path="/scan" component={ScanPage} />
        <Route path="/admin" component={AdminPage} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

export default function App() {
  return <Router />;
}
