import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";

import Landing from "./pages/Landing";
import Article from "./pages/Article/Articles";
import DetailArticles from "./pages/Article/DetailArticles";
import About from "./pages/About/About";
import Guru from "./pages/Guru/Guru";

import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={Landing} />
        <Route path="Articles" Component={Article} />
        <Route path="DetailArticle" Component={DetailArticles} />
        <Route path="About" Component={About} />
        <Route path="Guru" Component={Guru} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
