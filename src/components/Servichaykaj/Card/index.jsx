import { useState } from "react";
import cash from "../../../static/cash.png";
import coins from "../../../static/coins.png";
import QRCode from "../../../static/QR Code.png";
import safebox from "../../../static/safe box.png";
import wallet from "../../../static/wallet with credit card.png";

import "./card.css"
function Card() {

  return (
    <div onClick={()=>setShowAnime(!showAnime)} className="container flex">
      <div className="soton1 flex flex-col -mt-28 gap-20 -ml-16 ">
        <div className=" card11  element xs:hidden sm:hidden md:block  ">
          <div className="transform shadow-xl rotate-45 max-w-sm bg-white border border-gray-200 rounded-lg  dark:bg-gray-100 dark:border-gray-700  ">
            <div className="flex justify-center">
              <img className="rounded-t-lg w-28 h-40" src={cash} alt="cash" />
            </div>
            <div className="p-5">
              <div>
                <h5 className="text-md font-bold tracking-tight text-gray-700 dark:text-black">
                  خرید و فروش ارز ها{" "}
                </h5>
              </div>
              <p className="font-normal text-gray-700 dark:text-gray-500">
                استفاده , پرداخت
              </p>
            </div>
          </div>
        </div>{" "}
        <div className="card12  element xs:hidden sm:hidden md:block ">
          <div className="transform shadow-xl rotate-45 max-w-sm bg-white border border-gray-200 rounded-lg  dark:bg-gray-100 dark:border-gray-700  ">
            <div className="flex justify-center">
              <img className="rounded-t-lg " src={coins} alt="cash" />
            </div>
            <div className="p-5">
              <div>
                <h5 className="text-md font-bold tracking-tight text-gray-700 dark:text-black">
                  خرید و فروش ارز ها{" "}
                </h5>
              </div>
              <p className="font-normal text-gray-700 dark:text-gray-500">
                استفاده , پرداخت
              </p>
            </div>
          </div>
        </div>{" "}
        <div className="card13  element xs:hidden sm:hidden md:block ">
          <div className="transform shadow-xl rotate-45 max-w-sm bg-white border border-gray-200 rounded-lg  dark:bg-gray-100 dark:border-gray-700 w-56 h-72 ">
            <div className="flex justify-center">
              <img
                className="rounded-t-lg w-28 h-40"
                src={safebox}
                alt="cash"
              />
            </div>
            <div className="p-5">
              <div>
                <h5 className="text-md font-bold tracking-tight text-gray-700 dark:text-black">
                  خرید و فروش ارز ها{" "}
                </h5>
              </div>
              <p className="font-normal text-gray-700 dark:text-gray-500">
                استفاده , پرداخت
              </p>
            </div>
          </div>
        </div>{" "}
      </div>

      {/* end  soton 1 */}
      <div className="soton2 flex flex-col mr-28 gap-28">
        <div className="card21 element xs:hidden sm:hidden md:block ">
          <div className="transform shadow-xl rotate-45 max-w-sm bg-white border border-gray-200 rounded-lg  dark:bg-gray-100 dark:border-gray-700 ">
            <div className="flex justify-center">
              <img
                className="rounded-t-lg w-28 h-40"
                src={safebox}
                alt="cash"
              />
            </div>
            <div className="p-5">
              <div>
                <h5 className="text-md font-bold tracking-tight text-gray-700 dark:text-black">
                  خرید و فروش ارز ها{" "}
                </h5>
              </div>
              <p className="font-normal text-gray-700 dark:text-gray-500">
                استفاده , پرداخت
              </p>
            </div>
          </div>
        </div>{" "}
        <div className="card22 element xs:hidden sm:hidden md:block ">
          <div className="transform shadow-xl rotate-45 max-w-sm bg-white border border-gray-200 rounded-lg  dark:bg-gray-100 dark:border-gray-700  ">
            <div className="flex justify-center">
              <img className="rounded-t-lg w-28 h-40" src={wallet} alt="cash" />
            </div>
            <div className="p-5">
              <div>
                <h5 className="text-md font-bold tracking-tight text-gray-700 dark:text-black">
                  خرید و فروش ارز ها{" "}
                </h5>
              </div>
              <p className="font-normal text-gray-700 dark:text-gray-500">
                استفاده , پرداخت
              </p>
            </div>
          </div>
        </div>{" "}
        <div className="card23 element xs:hidden sm:hidden md:block ">
          <div className="transform shadow-xl rotate-45 max-w-sm bg-white border border-gray-200 rounded-lg  dark:bg-gray-100 dark:border-gray-700 w-56 h-72 ">
            <div className="flex justify-center">
              <img className="rounded-t-lg w-28 h-40" src={coins} alt="cash" />
            </div>
            <div className="p-5">
              <div>
                <h5 className="text-md font-bold tracking-tight text-gray-700 dark:text-black">
                  خرید و فروش ارز ها{" "}
                </h5>
              </div>
              <p className="font-normal text-gray-700 dark:text-gray-500">
                استفاده , پرداخت
              </p>
            </div>
          </div>
        </div>{" "}
      </div>

      {/* end  soton 2 */}
      <div className="soton3 flex flex-col  -ml-20 -mt-40 gap-28 ">
        <div className="card31 element xs:hidden sm:hidden md:block ">
          <div className="transform rotate-45 max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-100 dark:border-gray-700  ">
            <div className="flex justify-center">
              <img
                className="rounded-t-lg w-28 h-40"
                src={safebox}
                alt="cash"
              />
            </div>
            <div className="p-5">
              <div>
                <h5 className="text-md font-bold tracking-tight text-gray-700 dark:text-black">
                  خرید و فروش ارز ها{" "}
                </h5>
              </div>
              <p className="font-normal text-gray-700 dark:text-gray-500">
                استفاده , پرداخت
              </p>
            </div>
          </div>
        </div>{" "}
        <div className="card32 element xs:hidden sm:hidden md:block ">
          <div className="transform rotate-45 max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-100 dark:border-gray-700  ">
            <div className="flex justify-center">
              <img className="rounded-t-lg w-28 h-40" src={QRCode} alt="cash" />
            </div>
            <div className="p-5">
              <div>
                <h5 className="text-md font-bold tracking-tight text-gray-700 dark:text-black">
                  خرید و فروش ارز ها{" "}
                </h5>
              </div>
              <p className="font-normal text-gray-700 dark:text-gray-500">
                استفاده , پرداخت
              </p>
            </div>
          </div>
        </div>{" "}



        
        <div  className="card33 element xs:hidden sm:hidden md:block ">

          <div className="transform rotate-45 max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-100 dark:border-gray-700 w-56 h-72 ">
            <div href="#" className="flex justify-center">
              <img className="rounded-t-lg w-28 h-40" src={coins} alt="cash" />
            </div>
            <div className="p-5">
              <div>
                <h5 className="text-md font-bold tracking-tight text-gray-700 dark:text-black">
                  خرید و فروش ارز ها{" "}
                </h5>
              </div>
              <p className="font-normal text-gray-700 dark:text-gray-500">
                استفاده , پرداخت
              </p>
            </div>
          </div>


        </div>{" "}
      </div>
      {/* end  soton 3 */}
    </div>
  );
}

export default Card;


