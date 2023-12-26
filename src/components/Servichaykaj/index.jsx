import Card from "./Card";
import QRCode from "../../static/coins.png";
import Subtitle from "./Subtitle";

function ServicesSection() {
  return (
    <div>
      <div className="md:container flex overflow-hidden mx-auto">
        <div className="raste flex flex-col justify-center ">
          <div className="mtn">
            <div>
              <p className="text-3xl">
                خدمات ما به شما در راستای
                <span className="text-green-500">تضمین همکار</span>
              </p>
            </div>
            <div>
              <p className="text-xl">
                آسان در استفاده، پرداخت امور مهاجرتی، دارای مجوز از دولت کانادا،
                ثبت دقیق معاملات انجام شده، ارسال حواله و...
              </p>
            </div>
          </div>
          <div className="cardpainmtn ">
            <div className="flex mt-20 justify-evenly gap-8 ">
              <div className="itaem1 mt-16">
                <div className="card11 element xs:hidden sm:hidden md:block">
                  <div className="transform rotate-45 max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-100 dark:border-gray-700">
                    <div className="flex justify-center align-middl">
                      <img className="" src={QRCode} alt="cash" />
                    </div>
                    <div className="p-5">
                      <div>
                        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-black">
                          خرید و فروش ارز ها
                        </h5>
                      </div>
                      <p className="font-normal text-gray-700 dark:text-gray-500">
                        استفاده، پرداخت
                      </p>
                    </div>
                  </div>
                </div>{" "}
              </div>
              <div className="iteam2">
                <div className="itaem1 ">
                  <div className=" card11 element xs:hidden sm:hidden md:block">
                    <div className="transform rotate-45 max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-100 dark:border-gray-700">
                      <div className="flex justify-center">
                        <img
                          className="rounded-t-lg mt-2"
                          src={QRCode}
                          alt="cash"
                        />
                      </div>
                      <div className="p-5">
                        <div>
                          <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-black">
                            خرید و فروش ارز ها
                          </h5>
                        </div>
                        <p className="font-normal text-gray-700 dark:text-gray-500">
                          استفاده، پرداخت
                        </p>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>
            <div className="responseCards flex flex-row flex-wrap gap-10 md:hidden container mx-auto  ">
              <div className="flex  w-full gap-3 flex-row justify-center">
                <div className=" card11   ">
                  <div className="transform max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-100 dark:border-gray-700">
                    <div href="#" className="flex justify-center">
                      <img
                        className="rounded-t-lg mt-2"
                        src={QRCode}
                        alt="cash"
                      />
                    </div>
                    <div className="p-5">
                      <div href="#">
                        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-black">
                          خرید و فروش ارز ها
                        </h5>
                      </div>
                      <p className="font-normal text-gray-700 dark:text-gray-500">
                        استفاده، پرداخت
                      </p>
                    </div>
                  </div>
                </div>{" "}
                <div className=" card11   ">
                  <div className="transform max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-100 dark:border-gray-700">
                    <div href="#" className="flex justify-center">
                      <img
                        className="rounded-t-lg mt-2"
                        src={QRCode}
                        alt="cash"
                      />
                    </div>
                    <div className="p-5">
                      <div>
                        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-black">
                          خرید و فروش ارز ها
                        </h5>
                      </div>
                      <p className="font-normal text-gray-700 dark:text-gray-500">
                        استفاده، پرداخت
                      </p>
                    </div>
                  </div>
                </div>{" "}
              </div>
              <div className="flex  w-full gap-3 flex-row justify-center">
                <div className=" card11  ">
                  <div className="transform max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-100 dark:border-gray-700">
                    <div href="#" className="flex justify-center">
                      <img
                        className="rounded-t-lg mt-2"
                        src={QRCode}
                        alt="cash"
                      />
                    </div>
                    <div className="p-5">
                      <div>
                        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-black">
                          خرید و فروش ارز ها
                        </h5>
                      </div>
                      <p className="font-normal text-gray-700 dark:text-gray-500">
                        استفاده، پرداخت
                      </p>
                    </div>
                  </div>
                </div>{" "}
                <div className=" card11 ">
                  <div className="transform max-w-sm bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-100 dark:border-gray-700">
                    <div href="#" className="flex justify-center">
                      <img
                        className="rounded-t-lg mt-2"
                        src={QRCode}
                        alt="cash"
                      />
                    </div>
                    <div className="p-5">
                      <div>
                        <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-black">
                          خرید و فروش ارز ها
                        </h5>
                      </div>
                      <p className="font-normal text-gray-700 dark:text-gray-500">
                        استفاده، پرداخت
                      </p>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="chapake">
          <Card />
        </div>{" "}
      </div>
    </div>
  );
}

export default ServicesSection;
