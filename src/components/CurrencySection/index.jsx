import CurrencyTable from "./Table";
import { useState, useEffect } from "react";

function CurrencySection() {
  const [data, setData] = useState([
    {
      title: "bitcoin",
      sign: "$",
      name: "100",
      selling_price: "",
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "http://192.168.5.5:8000/api/currency/table/"
      );
      const jsonData = await response;
      // console.log(response);
      const t = await jsonData.json();
      setData(t);
    }

    fetchData();
  }, []);

  return (
    <div className=" mx-auto  pt-20 mt-20 px-1 container">
      <div className="mtnbala flex justify-center ">
        <p className="text-2xl font-bold">جدول ارز ها</p>
      </div>
      <div className="chart pt-10">
        <CurrencyTable data={data} />
      </div>
    </div>
  );
}

export default CurrencySection;
