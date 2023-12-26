import React from "react";
import Refund from "../../static/refund.png";
import Personalremittance from "../../static/personalremittance.png";
import Companyremittance from "../../static/companyremittance.png";
import Crypto from "../../static/crypto.png";
import Travel from "../../static/travel.png";
import Advice from "../../static/advice.png";

const Nlam = () => {
  return (
    <div className="container mx-auto px-4 bg-gradient-to-r from-white via-white to-violet-100">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mx-4 md:mx-40 gap-4 md:gap-80  ">
        <img alt="Sample" className=" w-72 h-50" src={Refund} />
        <div>
          <p className="text-2xl">شهریه و بازپرداخت دانشگاه ها</p>
          <p>
            دانشجویان عزیز می توانید در هنگام پرداخت شهریه خود از نرخ رقابتی
            صرافی اوستا بهره مند شوید. همچنین در صورت انصراف از دوره یا عدم
            پذیرش، ما طبق شرایط روز متعهد به بازپرداخت شهریه شما عزیزان می
            باشیم.
          </p>
        </div>
      </div>
      {/* ... additional cards ... */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mx-4 md:mx-40 gap-4 md:gap-80">
        <div>
          <p className="text-2xl">حواله های شخصی</p>
          <p>
            صرافی اوستا از مسیری سریع و مطمئن ارز را تبدیل و پرداخت های بین
            المللی شما را انجام می دهد.
          </p>
        </div>
        <img alt="Sample" className="w-72 h-50" src={Personalremittance} />
      </div>
      {/*  */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mx-4 md:mx-40 gap-4 md:gap-80">
        <img alt="Sample" className="w-72 h-50" src={Companyremittance} />
        <div>
          <p className="text-2xl">حواله های شرکتی</p>
          <p>
            با اطمینان خاطر سرمایه ی خود را از طریق صرافی اوستا به کانادا منتقل
            کنید و پرداخت های خود را با بهترین نرخ‌های رقابتی برای معاملات برون
            مرزی انجام دهید.
          </p>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mx-4 md:mx-40 gap-4 md:gap-80">
        <div>
          <p className="text-2xl">ارزهای دیجیتال</p>
          <p>
            در صرافی اوستا به راحتی دلار کانادا، ریال، درهم و... خود را به
            ارزهای دیجیتال محبوب مانند بیت کوین و اتریوم و تتر تبدیل کنید.
          </p>
        </div>
        <img alt="Sample" className="w-72 h-50" src={Crypto} />
      </div>
      {/*  */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mx-4 md:mx-40 gap-4 md:gap-80">
        <img alt="Sample" className="w-72 h-50" src={Travel} />
        <div>
          <p className="text-2xl">پرداخت امور مهاجرتی</p>
          <p>
            شما میتوانید با صرافی اوستا حق الزحمه وکلا و مشاورین مهاجرتی، هزینه
            ی پرونده های مهاجرتی و امور دادگاهی را با روشی امن، آسان و سریع
            پرداخت کنید.
          </p>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mx-4 md:mx-40 gap-4 md:gap-80">
        <div>
          <p className="text-2xl">مشاوره مالی و سرمایه گذاری</p>
          <p>
            صرافی اوستا با ارائه مشاوره های تخصصی این امکان را برای صاحبان مشاغل
            و کسب و کارها فراهم مینماید تا بتوانند به بهترین شکل ممکن در خصوص
            انتقال سرمایه و سرمایه گذاری در کشور کانادا تصمیم گیری نمایند.
          </p>
        </div>
        <img alt="Sample" className="w-72 h-50" src={Advice} />
      </div>
    </div>
  );
};

export default Nlam;

