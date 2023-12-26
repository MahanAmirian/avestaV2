import React from "react";
import agf from "../../static/agf.jpg";

const Fing = () => {
  return (
    <div className="container mx-auto">
      <div className="title text-center mt-8 text-5xl">
        <p>
          <span className="text-green-500">مجوز حرفه‌ای</span> و رسمی فعالیت
        </p>
      </div>
      <div className="content mt-4 text-center text-xl">
        <p>
          صرافی اوستا در (Financial Transaction and Reports Analysis Center of
          Canada-FINTRAC) به عنوان یک واحد تجاری و ارائه دهنده خدمات مالی و ارزی
          به ثبت رسیده است{" "}
          <a
            className="text-cyan-700  hover:text-sky-400"
            href="https://www10.fintrac-canafe.gc.ca/msb-esm/public/detailed-information/msb-details/7b226d73624f72674e756d626572223a3137303231382c227072696d617279536561726368223a7b226f72674e616d65223a22417665737461222c2273656172636854797065223a317d7d/"
          >
            {" "}
            (M23667814){" "}
          </a>{" "}
          و دارای مجوز رسمی فعالیت حرفه‌ای می‌باشد.
        </p>
      </div>
      <div className="content mt-4 text-2xl text-center">
        <p>فین ترک ( FINTRAC ):</p>
      </div>
      <div className="content mt-4 text-center text-lg">
        <p>
          مأموریت اصلی ( FINTRAC ) کمک به کشف و پیشگیری از فعالیت‌های پولشویی و
          تامین مالی تروریسم است که با جمع‌آوری و تجزیه و تحلیل گزارش‌های
          تراکنش‌های مالی و سایر اطلاعات مرتبط به این مهم دست می‌یابد. این
          فرآیند شامل رویه‌های بررسی دقیق مشتری برای تأیید هویت مشتریان و
          ارزیابی ریسک‌های مرتبط با آنها است.
        </p>
      </div>
      <div className="content mt-4 text-center">
        <p>صرافی اوستا بر پایه‌ی اعتماد و رضایت‌مندی مشتری بنا شده است.</p>
      </div>
      <div className="mt-4">
        <a href="https://www10.fintrac-canafe.gc.ca/msb-esm/public/detailed-information/msb-details/7b226d73624f72674e756d626572223a3137303231382c227072696d617279536561726368223a7b226f72674e616d65223a22417665737461222c2273656172636854797065223a317d7d/">
          <img src={agf} alt="FINTRAC" width={350} className="mx-auto" />
        </a>
      </div>
    </div>
  );
};

export default Fing;
