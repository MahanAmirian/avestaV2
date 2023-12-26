import { useState } from "react";
// import { ShabaConverter } from "../ConverterContent";
import CurrencyConverter from "../currenConverterCustome/CurrencyConverter";
// import CurrencyConverterUi from "../ConverterContent/CurrencyConverter";

// eslint-disable-next-line react/prop-types
const ConverterSection = ({ color }) => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className="flex   flex-row  flex-wrap-reverse md:h-screen h-full  md:flex-nowrap mx-auto rounded-3xl container">
        <div className=" h-screen  xs:w-full sm:w-full md:w-full md-lg:w-full flex justify-start pt-20 flex-col  gap-3">
          <h1 className="text-4xl font-bold ">
            درگاه پرداخت هوشمند (smart IPG) دیجی پی سرویسی است که میتوان عمل کرد
          </h1>
          <div className="text-base font-bold text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa illo
            neque quae est beatae, dolor <br /> quia odit itaque optio,
            laudantium animi nisi! Dolore, reprehenderit. <br /> Molestias
            reiciendis repellat assumenda fuga suscipit.
          </div>
        </div>
        <div
          className=" flex flex-col   xs:w-full sm:w-full md:w-full md-lg:w-full items-start h-full  "
          style={{
            direction: "ltr",
          }}
        >
          <ul className=" mb-0 list-none w-2/4 flex" role="tablist">
            <li className="-mb-px mr-2 cursor-pointer last:mr-0 flex-auto text-center">
              <div
                className={
                  "text-xs font-bold uppercase px-5 py-4 rounded-xl border-b-0 block leading-normal " +
                  (openTab === 1
                    ? "text-gray-400 border border-b-0 hover:border-2 hover:border-b-0 w-1/2  transition-all ease-linear duration-200 hover:translate-x-4" +
                      color +
                      "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                role="tablist"
              >
                Currency converter
              </div>
            </li>
          
          </ul>
            <div className="  flex flex-col min-w-0 break-words w- mb-6 hover:pb-3 hover:shadow-slate-600   transition-all ease-in-out duration-200 shadow-sm rounded-3xl border-t-0 rounded-t-3xl border-2 border-gray-400 ">
              <div
                className="w-full h-96 rounded-3xl p-10 border-2 border-gray-400 
            transition-all ease-linear duration-500 hover:translate-x-4"
              >
                <div className=" flex-auto border-gray-400 ">
                  <div
                    className={openTab === 1 ? "block" : "hidden"}
                    id="link1"
                  >
                    <CurrencyConverter />
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};
export default ConverterSection;
