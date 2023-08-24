import { Layout } from "./landingPageComponents/Layout"
import { Helmet } from "react-helmet";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LandingPage from "./pages/public/LandingPage";
// import { LandingPage } from "./pages/public/LandingPage";
import { LandingPage } from "./pages/public/LandingPage";
import Articles from "./pages/public/Articles";

import Forum from "./pages/public/Forum";
import Directory from "./pages/public/Directory";
import MarketPlace from "./pages/public/MarketPlace";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/articles" element={<Articles />} />

        <Route path="/forum" element={<Forum />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/marketplace" element={<MarketPlace />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
