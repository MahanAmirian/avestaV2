import "./heroStyle.css";
import Application from "../Scrollkatze";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../constants";
import { useState } from "react";
import image1 from "../../static/1.png";
import image2 from "../../static/2.jpg";
import image3 from "../../static/3.png";
import image4 from "../../static/4.png";
import image5 from "../../static/5.png";
import image6 from "../../static/6.png";
import image7 from "../../static/7.png";
import logo from "../../static/logo.jpg";
function HeroSection() {
  // ??????
  const { t, i18n } = useTranslation();
  const [languageCode, setLanguageCode] = useState("en");
  console.log(i18n.language);
  const handleLanguageChange = (event) => {
    const newLanguageCode = event.target.value;
    i18n.changeLanguage(newLanguageCode);
  };
  // ???????
  // const [mainImgHero, setMainImgHero] = useState(image5);
  // const changeMainPic1 = () => {
  //   setMainImgHero(image1);
  // };
  // const changeMainPic2 = () => {
  //   setMainImgHero(image2);
  // };
  // const changeMainPic3 = () => {
  //   setMainImgHero(image3);
  // };
  // const changeMainPic4 = () => {
  //   setMainImgHero(image4);
  // };
  // const changeMainPic6 = () => {
  //   setMainImgHero(image5);
  // };
  return (
    // <div className="flex flex-row xs:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap container mx-auto mb-10">
    //   <div className="flex flex-col gap-10   my-auto text-start w-1/2 ">
    //     <div className="flex items-center ">
    //       <img src={logo} alt="logo" width={300} />
    //       <p className="text-4xl -mx-20">Avesta</p>
    //     </div>

    //     <div className="">
    //       <h1
    //         style={{
    //           color: "#1D1929",
    //         }}
    //         className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold"
    //       >
    //         {t("Heroeins")}
    //         <br />
    //         {t("Heroeinss")}
    //       </h1>
    //       <p
    //         className="text-lg font-bold text-start"
    //         style={{
    //           color: "#77757F",
    //         }}
    //       >
    //         {t("Herozwei")}
    //       </p>
    //     </div>

    //     {/* *??? */}
    //     <div className="flex  overflow-x-auto overflow-y-hidden   ">
    //       <Application />
    //     </div>
    //     {/* *??? */}
    //   </div>
    //   <div className="imageSection flex xs:w-full md:w-full xs:hidden h-screen lg:p-0 sm:hidden md:flex justify-around items-center">
    //     <div className="flex flex-col gap-20">
    //       <div
    //         className="transform -translate-x-2/4"
    //         onClick={() => changeMainPic1()}
    //       >
    //         <img
    //           src={image1}
    //           alt=""
    //           width={275}
    //           className="hexagon   "
    //         />
    //       </div>
    //       <div
    //         className="transform -translate-x-1/4"
    //         onClick={() => changeMainPic2()}
    //       >
    //         <img
    //           src={image2}
    //           alt=""
    //           width={275}
    //           className="hexagon   "
    //         />
    //       </div>

    //       <div
    //         className="transform -translate-x-2/4"
    //         onClick={() => changeMainPic3()}
    //       >
    //         <img
    //           src={image3}
    //           alt=""
    //           width={275}
    //           className="hexagon   "
    //         />
    //       </div>
    //     </div>
    //     <div className="flex items-center justify-center mx-28">
    //       <img
    //         src={mainImgHero}
    //         width={300}
    //         alt=""
    //         className="hexagon "
    //       />
    //     </div>
    //     <div className="flex flex-col gap-20">
    //       <div
    //         className="transform translate-x-2/4"
    //         onClick={() => changeMainPic4()}
    //       >
    //         <img
    //           src={image4}
    //           alt=""
    //           width={175}
    //           className="hexagon   "
    //         />
    //       </div>
    //       <div
    //         className="transform translate-x-1/4"
    //         onClick={() => changeMainPic6()}
    //       >
    //         <img
    //           src={image4}
    //           alt=""
    //           width={275}
    //           className="hexagon   "
    //         />
    //       </div>
    //       <div
    //         className="transform translate-x-2/4"
    //         onClick={() => changeMainPic6()}
    //       >
    //         <img
    //           src={image5}
    //           alt=""
    //           width={275}
    //           className="hexagon   "
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   {/*  */}
    // </div>
    <div className="flex flex-col xs:flex-row xs:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap container mx-auto mb-10">
      <div className="flex flex-col gap-10 my-auto text-start xs:w-full sm:w-full md:w-1/2">
        <div className="flex items-center">
          <img src={logo} alt="logo" width={300} />
          <p className="text-4xl -mx-20">Avesta</p>
        </div>

        <div className="">
          <h1
            style={{
              color: "#1D1929",
            }}
            className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold"
          >
            {t("Heroeins")}
            <br />
            {t("Heroeinss")}
          </h1>
          <p
            className="text-lg font-bold text-start"
            style={{
              color: "#77757F",
            }}
          >
            {t("Herozwei")}
          </p>
        </div>

        {/* *??? */}
        <div className="flex overflow-x-auto overflow-y-hidden">
          <Application />
        </div>
        {/* *??? */}
      </div>
      <div className="imageSection flex xs:w-full md:w-full xs:hidden h-screen lg:p-0 sm:hidden md:flex justify-around items-center">
        <div className="flex flex-col gap-20">
          <div
            className="transform -translate-x-2/4"
            // onClick={() => changeMainPic1()}
          >
            <img src={image1} alt="" width={175} className="hexagon   " />
          </div>
          <div
            className="transform -translate-x-1/4"
            // onClick={() => changeMainPic2()}
          >
            <img src={image2} alt="" width={175} className="hexagon   " />
          </div>

          <div
            className="transform -translate-x-2/4"
            // onClick={() => changeMainPic3()}
          >
            <img src={image3} alt="" width={175} className="hexagon   " />
          </div>
        </div>
        <div className="flex items-center justify-center mx-28">
          <img src={image7} width={250} alt="" className="hexagon " />
        </div>
        <div className="flex flex-col gap-20">
          <div
            className="transform translate-x-2/4"
            // onClick={() => changeMainPic4()}
          >
            <img src={image4} alt="" width={175} className="hexagon   " />
          </div>
          <div
            className="transform translate-x-1/4"
            // onClick={() => changeMainPic6()}
          >
            <img src={image5} alt="" width={175} className="hexagon   " />
          </div>
          <div
            className="transform translate-x-2/4"
            // onClick={() => changeMainPic6()}
          >
            <img src={image6} alt="" width={175} className="hexagon   " />
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
}
export default HeroSection;
