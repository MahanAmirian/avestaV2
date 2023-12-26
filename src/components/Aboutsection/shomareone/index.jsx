import group from "../../../static/group.png";
import business from "../../../static/business.png";

const Shomreone = () => {
  return (
    <div className="my-10 sm:my-20 lg:my-32  ">
      <div className="flex flex-col max-w-lg mx-auto  my-4 sm:my-0 md:mx-1">
        <div>
          <p className="text-2xl font-bold mx-4">درباره ما</p>
        </div>
        <div className="mt-4 mx-4">
          <p>
            صرافی اوستا به عنوان یکی از صرافی های معتبر و خوشنام دارای مجوز رسمی
            از دولت کانادا در شهر ونکوور می باشد که با بهره مندی از کادری مجرب و
            متخصص، جهت ارائه خدمات ارزی و مالی به هموطنان عزیز در سال 2019 با
            نام تجاری 6030 فعالیت حرفه ای خود را آغاز نموده و در حال حاضر با نام
            تجاری اوستا مشغول فعالیت و خدمات رسانی به مشتریان گرامی می باشد.
          </p>
        </div>
      </div>

      <div className="flex lg:flex-row justify-end mx-4 ">
        <div className="   ">
          <div>
            {/* className="hidden sm:block" */}
            <img
              className="lg:h-auto border rounded-3xl mx-4	"
              src={business}
              alt="grou"
            />
          </div>
          <div className=" flex gap-24 justify-start items-start lg:justify-center lg:items-start">
            <div className="ston-rast">
              <div>
                {/* <p>263+</p> */}
                {/* <p>حواله</p> */}
              </div>
              <div>
                {/* <p>893+</p> */}
                {/* <p>کاربر</p> */}
              </div>
            </div>
            <div className="ston-chap">
              <div>
                {/* <p>2018</p> */}
                {/* <p>سال تاسیس</p> */}
              </div>
              <div>
                {/* <p>893</p> */}
                {/* <p>کاربر</p> */}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden sm:block lg:h-auto 	 ">
          <img
            className="h-full w-full lg:w-auto boeder rounded-3xl"
            src={group}
            alt="grou"
          />
        </div>
      </div>
    </div>
  );
};

export default Shomreone;
