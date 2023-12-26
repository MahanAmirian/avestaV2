import {
  FaWhatsapp,
  FaTelegram,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Rectangle from "../../static/Rectangle.png";
import Down from "./Down";

function Footer() {
  return (
    <div>
      <div className="bg-slate-300 flex flex-col md:flex-row justify-around mx-4 md:me-80   ">
        <div className="mb-4 md:mb-0">
          <h3>نشانی ایمیل</h3>
          <h3>Avestaexch@gmail.com</h3>
        </div>
        <div className="mb-4 md:mb-0">
          <h3>دفتر ونکوور</h3>
          <h3>+1 (778) 990 1010</h3>
          <h3>+1 (236) 888 8836</h3>
        </div>
        <div className="mb-4 md:mb-0">
          <h3>کانادا</h3>
          <h3>+1 (236) 888 8836</h3>
        </div>
      </div>
      <div
        className="container mx-auto gap-2 mt-20 mb-3 
             flex flex-col md:flex-row justify-evenly"
      >
        <div className="soton1 mt-5">
          <div className="mb-3 font-black">
            <p>لینک های مفید</p>
          </div>
          <div>
            <ul className="flex flex-col items-center font-semibold gap-2">
              <li>ارتباط با ما</li>
              <li>درباره ما</li>
              <li>بلاگ</li>
              <li>کاربر</li>
              <li>اخبار</li>
            </ul>
          </div>
        </div>
        <div className="soton2 mt-5">
          <div className="mb-3 font-black flex justify-center">
            <p>خدمات</p>
          </div>
          <div>
            <ul className="flex flex-col items-center p-1 font-semibold gap-2">
              <li>پرداخت امور مهاجرتی</li>
              <li>بهترین نرخ ها</li>
              <li>مشاوره مالی واحد سرمایه گذاری</li>
              <li>پرداخت شهریه دانشگاه و مدرسه با تضمین</li>
              <li>تبدیل فیزیکی تمام ارز ها</li>
              <li>ارسال حواله</li>
              <li>آسان در استفاده</li>
              <li>ثبت دقیق معاملات انجام شده</li>
            </ul>
          </div>
        </div>
        <div className="soton3 mt-5">
          <div className="mb-3 font-black">
            <p>لینک های مفید</p>
          </div>
          <div>
            <ul className="flex flex-col items-center p-1 font-semibold gap-2">
              <li>ارتباط با ما</li>
              <li>درباره ما</li>
              <li>بلاگ</li>
              <li>کاربر</li>
              <li>اخبار</li>
            </ul>
          </div>
        </div>
        <div className="soton4 mt-5 flex flex-col gap-2 md:w-1/4">
          <div className="w-full h-80">
            <a href="#" className="flex justify-center align-middl">
              <img src={Rectangle} alt="Rectangle" />
            </a>
          </div>
          <div className="flex justify-center">
            <p>ما را در شبکه های اجتمای دنبال کنید</p>
          </div>
          <div className="icon flex justify-evenly mt-4">
            <FaInstagram size={30} />
            <FaWhatsapp size={30} />
            <FaTelegram size={30} />
            <FaLinkedinIn size={30} />
          </div>
        </div>
      </div>
      <Down />
    </div>
  );
}

export default Footer;
