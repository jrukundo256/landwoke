import { Layout } from "./landingPageComponents/Layout"
import { Helmet } from "react-helmet";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LandingPage from "./pages/public/LandingPage";
// import { LandingPage } from "./pages/public/LandingPage";
import { LandingPage } from "./pages/public/LandingPage";
import Articles from "./pages/public/Articles";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/articles" element={<Articles />} />


      </Routes>

    </BrowserRouter>
  );
}

export default App;
