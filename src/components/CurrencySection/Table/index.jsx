/* eslint-disable react/jsx-key */
// import React from "react";
import { useTable } from "react-table";
import { useMemo } from "react";
// import {
//   FaBitcoin,
//   FaEthereum,
//   FaCcMastercard,
//   FaCcVisa,
// } from "react-icons/fa";
import "./table.css";

function CurrencyTable({ data }) {
  const columns = useMemo(
    () => [
      // {
      //   Header: "کشور",
      //   accessor: "title",
      //   Cell: ({ value }) => {
      //     switch (value) {
      //       case "bitcoin":
      //         return <FaBitcoin />;
      //       case "ethereum":
      //         return <FaEthereum />;
      //       case "mastercard":
      //         return <FaCcMastercard />;
      //       case "visa":
      //         return <FaCcVisa />;
      //       default:
      //         return null;
      //     }
      //   },
      // },
      {
        Header: "کشور",
        accessor: "title",
      },

      {
        Header: "کد",
        accessor: "sign",
      },
      {
        Header: "ارز",
        accessor: "name",
      },
      {
        Header: "قیمت",
        accessor: "seperated_selling_price",
      },
    ],
    
    []
  );

  const tableData = useMemo(() => data, [data]);

  const tableInstance = useTable({ columns, data: tableData });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (

    <div className="ltr-grid scrollable-table">
      <div className="border-2 overflow-x-hidden overflow-auto border-gray-200 rounded-xl bg-gray-100  ">
        <table
          {...getTableProps()}
          className="flex flex-col align-middle items-center w-full"
        >
          <thead className=" px- border-b-2 border-black">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    className="px-4 md:px-28  py-2 text-center font-bold"
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody  {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} className=" transition-all duration-500 cursor-pointer  hover:border-b-green-500 hover:border-b-2 ">
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="px-2 md:px-24 py-2 whitespace-no-wrap text-right"
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>


  );
}

export default CurrencyTable;

// ?


