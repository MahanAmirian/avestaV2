import Mission from "./Mission";
import Shomreone from "./shomareone";
import Moral from "./moral";

import w from "../../static/wive.png";
import NavBar from "../../layout/NavBar";
const About = () => {
  return (
    <div>
      <div>
        <NavBar className="bg-red-900" />
      </div>
      <div className="container  mx-auto mt-20">
        <Shomreone />
        <Mission />
        <Moral />
      </div>

      <div className="w-full mt-20">
        <img className="w-full" src={w} alt="a" />
      </div>
    </div>
  );
};

export default About;
