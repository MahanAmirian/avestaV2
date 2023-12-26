import { AiOutlineCheckCircle } from "react-icons/ai";
const Mission = () => {
  return (
    <div className="container px-4 md:px-0 flex flex-col md:flex-row ">
      <div className="rastemission w-full md:w-1/2 flex flex-col gap-4 mx-4">
        <div className="mb-2 font-bold text-2xl">
          <p>ماموریت ما</p>
        </div>
        <div className="mb-2 text-xl">
          <p>
            ما بر این باور هستیم که تمامی مشتریان ما ارزشمند هستند و به عنوان
            سرمایه اصلی این کسب و کار محسوب می شوند و تلاش می کنیم تا با افزایش
            کیفیت کاری و پایبندی به مسئولیت و تعهد کاری و همچنین رعایت اصول حرفه
            ای و مشتری مداری رابطه ایی صمیمانه با مشتریان خود داشته باشیم.
          </p>
        </div>
        <div className="text-xl">
          <p>
            ما دریک رقابت سالم با اراِئه بهترین نرخ ها و پاسخگویی به درخواست های
            متنوع مشتریان گرامی، اعتماد و رضایت حداکثری آنها را فراهم کرده و
            همواره تلاش خواهیم کرد که از این طریق جایگاه خود را به عنوان یکی از
            چند صرافی معتبر و شناخته شده در کانادا و بویژه در ونکور ارتقاء
            ببخشیم.
          </p>
        </div>
        <div className="text-xl">
          <p>
            زیرا باور ما بر این است که{" "}
            <span className="text-green-500">پشتوانه ی ما رضایت و اعتماد</span>{" "}
            شماست.
          </p>
        </div>
      </div>
      <div className="chape-mission w-full md:w-1/2 flex justify-center md:mt-0 ">
        <div className="text-white bg-gray-900 rounded-2xl p-4 w-full md:w-3/4 h-5/6  ">
          <p>ارزش های ما</p>
          <div>
            <ul className="flex flex-col gap-2">
              <li className="flex ">
                <AiOutlineCheckCircle />
                امنیت: ما تعهد داریم تا امانت و امنیت مالی شما را حفظ کنیم.
              </li>
              <li className="flex">
                <AiOutlineCheckCircle />
                شفافیت: نرخ‌های تبدیل ما در دسترس هستند و شفافیت در همه معاملات
                ما وجود دارد.
              </li>
              <li className="flex">
                <AiOutlineCheckCircle />
                سادگی: ما فرآیند تبادل را ساده کرده‌ایم تا شما بهتر تصمیم
                بگیرید.
              </li>
              <li className="flex">
                <AiOutlineCheckCircle />
                پشتیبانی: تیم پشتیبانی ما آماده است تا به تمام سوالات شما پاسخ
                دهند.
              </li>
              <li className="flex">
                <AiOutlineCheckCircle />
                انعطاف: ما با تبادل ارزهای معتبر و رایج و انعطاف پذیری در پرداخت
                مشتریان به تمام نیازهای شما پاسخ می دهیم.
              </li>
              <li className="flex">
                <AiOutlineCheckCircle />
                اعتماد: ما به مشتریان خود اعتماد می کنیم و دراین مسیر روابط
                کاریمان را توسعه می بخشیم.
              </li>{" "}
              <li className="flex">
                <AiOutlineCheckCircle />
                همکاری: ما شرایط هموطنان خود را در ایران و خارج از کشور درک
                میکنیم و تلاش میکنیم خدمات و مشاوره ی مالی متناسب با شرایط هر
                فرد را ارائه دهیم.
              </li>{" "}
              <li className="flex">
                <AiOutlineCheckCircle />
                پاسخ دهی سریع: با توجه به نواسانات مداوم نرخ ارز و نیاز به
                پاسخگویی فوری همیشه در دسترس هستیم و سریعا به شما پاسخ می دهیم.
              </li>{" "}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
