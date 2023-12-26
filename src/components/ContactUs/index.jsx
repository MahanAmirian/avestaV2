import { AiOutlinePhone, AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";
import ContactUsForm from "./ContactUsForm";
import contactUsFooter from "../../static/contactUsFooter.png";
import NavBar from "../../layout/NavBar";
function ContactUsScreen() {
  return (
    <>
      <NavBar />
      <div className="flex flex-row h-full flex-wrap container mx-auto overflow-hidden ">
        <div className=" flex flex-col gap-10 items-center justify-center  sm:w-full xs:w-full md:w-1/2">
          <div className="">
            <iframe
              className="rounded-2xl"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2600.6198293659872!2d-123.07542692341762!3d49.321482871398665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486711d005a331b%3A0xc5965d51d6406036!2sAvesta%20Exchange!5e0!3m2!1sen!2s!4v1703428075500!5m2!1sen!2s"
              width="500"
              height="250"
              allowfullscreen=""
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            {/*  */}
          </div>
          <ContactUsForm />
        </div>
        <div className=" my-auto bg-blue-700  h-screen flex flex-col  sm:w-full xs:w-full md:w-1/2 justify-around  px-4 text-white">
          <div
            style={{
              fontFamily: "Yekan Bakh",
            }}
            className="flex flex-col gap-4 justify-center items-start"
          >
            <div className=" font-extrabold text-2xl">اطلاعات تماس</div>
            <div className=" font-extrabold text-lg">
              برای دریافت نرخ روزانه با ما در تماس باشید:
            </div>
          </div>
          <div
            style={{
              fontFamily: "Nunito Sans",
            }}
            className="flex flex-col gap-4 text-sm"
          >
            <div className="flex flex-row gap-4 items-center justify-start">
              <div>
                <AiOutlinePhone />
              </div>
              <div>+1 (236 888 8836 )</div>
            </div>
            <div
              style={{
                fontFamily: "Nunito Sans",
              }}
              className="flex flex-row gap-4 items-center justify-start"
            >
              <div>
                <AiOutlineMail />
              </div>
              <div>hello@gmail.com</div>
            </div>
            <div
              style={{
                fontFamily: "Nunito Sans",
              }}
              className="flex flex-row gap-4 items-center justify-start"
            >
              <div>
                <CiLocationOn />
              </div>
              <div>Canada , heilei , street 5 , Avesta exchange</div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center w-full  h-1/3  gap-4">
            <div className="flex flex-row">
              <div className="p-4 hover:bg-gray-500 rounded-full transition-all ease-in-out duration-200">
                {/* <FaTelegramPlane /> */}
              </div>
              <div className="p-4 hover:bg-gray-500 rounded-full transition-all ease-in-out duration-200">
                {/* <AiFillLinkedin /> */}
              </div>
              <div className="p-4 hover:bg-gray-500 rounded-full transition-all ease-in-out duration-200">
                {/* <BsWhatsapp /> */}
              </div>
            </div>
            <div className="md:-translate-x-14 md:translate-y-14  ">
              <img src={contactUsFooter} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsScreen;
