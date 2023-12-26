import CommentSection from "../components/CommentSection";
import Fing from "../components/Fing";
import HeroSection from "../components/HeroSection";
import Mtnnlm from "../components/Mtnnlm";
import Nlam from "../components/nlan";

// import ServicesSection from "../components/Servichaykaj";
// import CurrencySection from "../components/CurrencySection";
// import ConverterSection from "../components/ConverterSection";
// import "./styles.css";

function Screens() {
  return (
    <div className="container mx-auto overflow-hidden">
      <HeroSection />
      <Mtnnlm />
      <Nlam />
      <Fing />
      <CommentSection />
      {/* <ServicesSection /> */}
      {/* <CurrencySection /> */}
      {/* <ConverterSection /> */}
    </div>
  );
}

export default Screens;
