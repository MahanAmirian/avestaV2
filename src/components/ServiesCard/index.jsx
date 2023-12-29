import CanadaFlag from "../../static/canadaflag.png";
import UsaFlag from "../../static/united-states.png";
import EmiratesFlag from "../../static/united-arab-emirates.png";
import TurkeyFlag from "../../static/turkey.png";
import ChinaFlag from "../../static/china.png";
import EuropeanFlag from "../../static/european-union.png";
import "./ss.css";
const ServiceCard = () => {
  return (
    <div className="container">
      <div className="flex flex-wrap justify-center md:justify-around ">
        <div className="card m-4 sm:m-6 md:m-8 lg:m-10 xl:m-12 ">
          <div className="bg flex flex-col justify-center items-center">
            <img src={CanadaFlag} alt="" className="w-20" />
            <br />
            <p>ارسال حواله به کانادا از ایران وبالعکس</p>
          </div>
          <div className="blob "></div>
        </div>
        <div className="card m-4 sm:m-6 md:m-8 lg:m-10 xl:m-12">
          <div className="bg flex flex-col justify-center items-center">
            <img src={UsaFlag} alt="" className="w-20" />
            <br />
            <p>ارسال حواله به آمریکا</p>
          </div>
          <div className="blob"></div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center md:justify-around">
        <div className="card m-4 sm:m-6 md:m-8 lg:m-10 xl:m-12">
          <div className="bg flex flex-col justify-center items-center">
            <img src={EmiratesFlag} alt="" className="w-20" />
            <br />
            <p>ارسال حواله به امارات</p>
          </div>
          <div className="blob"></div>
        </div>
        <div className="card m-4 sm:m-6 md:m-8 lg:m-10 xl:m-12">
          <div className="bg flex flex-col justify-center items-center">
            <img src={TurkeyFlag} alt="" className="w-20" />
            <br />
            <p>ارسال حواله به ترکیه</p>
          </div>
          <div className="blob"></div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center md:justify-around">
        <div className="card m-4 sm:m-6 md:m-8 lg:m-10 xl:m-12">
          <div className="bg flex flex-col justify-center items-center">
            <img src={ChinaFlag} alt="" className="w-20" />
            <br />
            <p>ارسال حواله به چین</p>
          </div>
          <div className="blob"></div>
        </div>
        <div className="card m-4 sm:m-6 md:m-8 lg:m-10 xl:m-12">
          <div className="bg flex flex-col justify-center items-center">
            <img src={EuropeanFlag} alt="" className="w-20" />
            <br />
            <p>ارسال حواله به اقصی نقاط قاره اروپا</p>
          </div>
          <div className="blob"></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
