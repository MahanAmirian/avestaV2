import NavBar from "./NavBar";
import Footer from "./Footer";
import Screens from "../screens";


function LayOut({ children }) {

  return (
    <div id="allContent" >
      <NavBar />
      <Screens />
      <Footer />
    </div>
  );
}

export default LayOut;
