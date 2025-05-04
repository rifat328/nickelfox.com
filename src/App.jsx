import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components//Hero";
import Company from "./components/Company";
import Category from "./components/Category";
import Promotion from "./components/Promotion";
import Favourite from "./components/Favourite";
import MobileAppPromotion from "./components/MobileAppPromotion";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Company />
      <Category />
      <Promotion />
      <Favourite />
      <MobileAppPromotion />
      <NewsLetter />
      {/* <Footer /> */}
    </>
  );
}

export default App;
