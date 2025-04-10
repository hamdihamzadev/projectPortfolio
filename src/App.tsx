import Header from "./pages/header";
import Topbar from "./pages/topbar";
import Banner from "./pages/banner";
import About from "./pages/aboutus";
import Skills from "./pages/skills";

import './styles/App.css';
function App() {
return (
<div className="app">
  <Topbar/>
  <Header/>
  <Banner/>
  <About/>
  <Skills/>
</div>
);
}

export default App;