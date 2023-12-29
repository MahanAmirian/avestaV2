import NavBar from "../../layout/NavBar";
import Service from "../../static/Service.png";
// import ServicesSection from "../Servichaykaj";
import ServiceCard from "../ServiesCard";
import Nlam from "../nlan";

const Serviceha = () => {
  return (
    <>
      <NavBar />
      {/* <ServicesSection /> */}
      <div className="flex flex-col items-center justify-between lg:flex-row">
        {/* //? */}
        {/* //? */}
        <div className="lg:w-1/3 lg:mr-8">
          <p className="text-sky-700 text-2xl font-semibold mt-8 lg:mt-20">
            خدمات
          </p>
          <p className="text-xl font-semibold mt-4 lg:mt-8">
            اوستا پلی مطمن برای انجام کلیه حواله جات ارزی شما از ایران به
            کانادا، آمریکا و سایر کشورهای اروپایی و آسیایی و بالعکس
          </p>
          <p className="mt-4 lg:mt-8">
            صرافی اوستا با کادری مجرب و سابقه‌ای درخشان و با داشتن مجوز رسمی از
            کشور کانادا (FINTRAC) آماده‌ی ارائه خدمات مالی و ارزی به صاحبان
            بیزینس، سرمایه‌گذاران، دانشجویان، توریست‌ها و سایر هموطنان عزیز
            ایرانی می‌باشد.
          </p>
        </div>
        <div className="imgService w-full lg:w-1/3">
          <img src={Service} alt="service" className="mx-auto mt-8 lg:mt-20" />
        </div>
      </div>
      <ServiceCard />
      <div className="container mx-auto ">
        <div className="service-vasate mb-4 lg:mb-8">
          <p className="text-black text-2xl font-semibold">
            خدمات قابل ارائه در صرافی اوستا
          </p>
        </div>

        <div className="Service-paine flex flex-col lg:flex-row justify-center gap-8 ">
          <div className="soton-service1 border-t-2 border-gray-600  ">
            <ul className="mt-4 lg:mt-0">
              <li>خرید و فروش ارزهای رایج در کانادا</li>
              <li>
                پرداخت شهریه دانشگاه‌ها و مدارس کانادایی با بهترین قیمت و تضمین
                ریفاند
              </li>
              <li>ارسال و دریافت حوالجات ارزی در کمترین زمان ممکن</li>
              <li>حواله به حسابهای شخصی و شرکتی</li>
              <li>امکان خرید مشتریان گرامی براساس شرایط و نحوه پرداخت ایشان</li>
            </ul>
          </div>
          <div className="soton-service2 border-t-2 border-gray-600  ">
            <ul className="mt-4 lg:mt-0">
              <li>ارسال حوالجات ارزی به اکثر نقاط جهان</li>
              <li>خرید و فروش ارزهای دیجیتال بویژه USDT</li>
              <li>ارسال و دریافت حوالجات ارزی درهم امارات و لیر ترکی</li>
              <li>
                انتقال سریع سرمایه متقاضیان مطابق با قوانین روز و استانداردهای
                دولت کانادا
              </li>
              <li>ارسال پول به ایران در کمترین زمان ممکن</li>
              <li>ارسال پول به ایران در کمترین زمان ممکن</li>
            </ul>
          </div>
          <div className="soton-service3 border-t-2 border-gray-600  ">
            <ul className="mt-4 lg:mt-0">
              <li>
                حواله داخلی آمریکا به بانکهای: Wells Fargo, Chase Bank , Bank of
                America
              </li>
              <li>خرید و فروش ارزهای دیجیتال بویژه USDT</li>
              <li>
                تبدیل و یا خرید ارز شما در ایران و تحویل دلار بصورت نقدی یا
                واریز بحساب شما در شهرهای کانادا
              </li>
              <li>تخفیف ویژه حواله های دانشجویی</li>
              <li>انتقال سریع ارز با بهترین قیمت</li>
              <li>اعلام نرخ ارز بصورت آنلاین و 24 ساعته</li>
            </ul>
          </div>
        </div>
        <br />
      </div>
      <Nlam />
    </>
  );
};

export default Serviceha;
