import { useState } from "react";
import Dropdowns from "./CurrencyComponents/Dropdowns";
import ConvertResult from "./CurrencyComponents/ConvertResult";
import "./cureency.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { getConverterCurService } from "../../../api/services/getConverterCur";
import { convertCurrency } from "../../../api/services/convertCurrency";

const schema = yup
  .object({
    currency: yup.string(),
    amount: yup.number(),
  })
  .required();

const CurrencyConverter = () => {
  const [currency, setCurrency] = useState("USD");
  const [loading, setLoading] = useState(false);
  const [conversionResult, setConversionResult] = useState("");
  const [CurensyData, setCurensyData] = useState([]);
  const [convertedAmount, setConvertedAmount] = useState("");

  const handleFrom = (event) => {
    setCurrency(event.currentTarget.value);
  };
  console.log(currency);

  const fetchData = async () => {
    setLoading(true);
    const res = await getConverterCurService();
    setCurensyData(res);
    setLoading(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ amount }) => {
    convertCurrency({ currency, amount }).then((res) =>
      setConvertedAmount(res.amount)
    );
  };
  return (
    <div className="w-full hover:mr-2 flex flex-col container justify-center items-start rounded-2xl gap-4">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center items-end w-full">
          <Dropdowns
            labelName="From"
            handleChange={(e) => handleFrom(e)}
            value={currency}
            options={CurensyData}
            {...register("currency")}
          />
          <input
            className="text-gray-900 mt-3 border-b-2 border-b-sky-400 placeholder:text-gray-700 placeholder:my-auto rounded mx-auto w-1/2 h-10 text-center font-bold transition-all"
            placeholder="Enter Amount"
            type="number"
            {...register("amount")}
          />
        </div>
        {errors.amount && <p>{errors.amount.message}</p>}
        {errors.currency && <p>{errors.currency.message}</p>}
        <hr className="border-gray-500 my-4 border w-11/12" />
        <div className="flex items-end w-full">
          <label className="flex gap-10 flex-col justify-between w-full text-gray-900 text-opacity-60 font-bold">
            iNTO(toman)
          </label>
          <div className="text-gray-900 mt-3 border-b-2 border-b-sky-400 placeholder:text-gray-700 placeholder:my-auto rounded mx-auto w-1/2 h-10 text-center font-bold">
            {convertedAmount}
          </div>
        </div>
        <div className="w-full border-t-0 mt-48 mx-auto border-r-0 pt-0 hover:border-b-2 hover:border-l-2 border-gray-400 pl-0.5 pr-0.5 rounded-2xl transition-all ease-in-out duration-75">
          <button
            type="submit"
            className="w-full bg-green-400 py-3 mb-0.5 ml-0.5 rounded-2xl transition-all ease-in-out duration-75 border-gray-400"
            disabled={errors.amount || errors.currency}
          >
            convert
          </button>
        </div>
      </form>
    </div>
  );
};

export default CurrencyConverter;
