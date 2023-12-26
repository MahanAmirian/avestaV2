import { useState } from "react";
import { getConverterCurService } from "../../../../api/services/getConverterCur";
// import { language } from "../config/language";
import "../cureency.css";

const label = {
  width: "325px",
  // color: "black",
  fontSize: "21px",
};
// eslint-disable-next-line react/prop-types
function Dropdowns({ labelName, handleChange, value }) {
  const [CurensyData, setCurensyData] = useState([]);
  const fetchData = async () => {
    const res = await getConverterCurService();
    setCurensyData(res);
  };
  return (
    <>
      <label
        className="flex gap-10 flex-col justify-between w-full  text-gray-900 text-opacity-60 font-bold"
        style={label}
      >
        {labelName}
        <select
          onClick={fetchData}
          className=" text-gray-900 py-2 rounded-md border-green-800 border text-center font-bold text-sm w-1/2"
          value={value}
          onChange={(event) => handleChange(event)}
        >
          {CurensyData.map((Curensy) => (
            <option key={Curensy.code} className="font-bold">
              {Curensy.title}
            </option>
          ))}
        </select>
      </label>
    </>
  );
}

export default Dropdowns;
