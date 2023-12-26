import audi from "../../../static/audi.png";
import cast from "../../../static/cast.png";
import kiva from "../../../static/kiva.png";
import redfin from "../../../static/redfin 1.png";
import tiw from "../../../static/tiw.png";
import nasa from "../../../static/nasa.png";

const Subtitle = () => {
  return (
    <div className="flex flex-col justify-center gap-7">
      <div className="flex flex-col items-center">
        <h2>ملحق شوید به 25+ شرکت هایی که از خدمات ما استفاده کردند !</h2>
        <div className="flex gap-2">
          <p>icon</p>
          <a>مشاهده داستان یک مشتری</a>
        </div>
      </div>
      <div className="flex justify-center gap-24 ">
        <img src={kiva}   alt="kiva"     className="w-20 h-14" />
        <img src={tiw}    alt="tiw"      className="w-20 h-14" />
        <img src={nasa}   alt="tiw"      className="w-20 h-14" />
        <img src={redfin} alt="redfin"   className="w-20 h-14" />
        <img src={cast}   alt="cast"     className="w-20  h-14" />
        <img src={audi}   alt="audi"     className="w-20 h-14" />
      </div>
    </div>
  );
};

export default Subtitle;
