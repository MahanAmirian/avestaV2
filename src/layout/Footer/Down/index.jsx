import Canada from "../../../static/Canada.png";

const Down = () => {
  return (
    <div className="bg-slate-900 flex flex-col md:flex-row justify-evenly items-center ">
      <div className="soton1 mt-10 md:mt-20 text-center md:text-left">
        <ul className="text-white flex flex-col gap-2">
          <li className="text-xl md:text-3xl">Avesta Exchange</li>
          <li className="text-base md:text-xl">
            225-1433 Lonsdale Ave, North Vancouver BC, V7M 2H9
          </li>
          {/* <li className="text-base md:text-xl">تاپ هیلز</li> */}
          {/* <li className="text-sm md:text-l">شمال کانادا</li> */}
          {/* <li>جاده دارتر 56, صرافی اوستا, طبقه سوم</li> */}
          {/* <li>+1 (236 888 8836)</li> */}
        </ul>
      </div>
      <div className="soton2 mx-auto md:mx-0">
        <div className="w-48 h-64 md:w-64 md:h-80 hidden lg:block md:hidden xs:hidden">
          <a href="#" className="flex justify-center align-middle">
            <img src={Canada} alt="Rectangle" />
          </a>
        </div>
      </div>
      <div className="soton3 mt-10 md:mt-20 flex flex-col items-center gap-3 text-white">
        <div className="flex flex-col items-center gap-1 justify-center">
          <p className="text-xs md:text-base">به ما یپیوندید و در تماس باشید</p>
          <p className="text-sm md:text-base">
            ایمیل خود را برای دریافت اخبار صرافی وارد کنید
          </p>
        </div>
        <input
          className="w-40 md:w-60 h-8 md:h-10 rounded-full text-black"
          type="text"
        />
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold w-40 md:w-60 py-2 rounded-full mt-2 md:mt-0">
          ارسال
        </button>
      </div>
    </div>
  );
};

export default Down;
