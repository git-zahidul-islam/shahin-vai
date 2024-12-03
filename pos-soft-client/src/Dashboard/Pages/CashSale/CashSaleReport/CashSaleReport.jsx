import React, { useEffect, useState } from "react";
import axios from "axios";

const CashSaleReport = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    axios.get("http://localhost:5000/nagad-sale-report")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="p-4 overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="px-4 py-2 border">SL</th>
            <th className="px-4 py-2 border">Date</th>
            <th className="px-4 py-2 border">Customer Name</th>
            <th className="px-4 py-2 border">Products</th>
            <th className="px-4 py-2 border">Address</th>
            <th className="px-4 py-2 border">Mobile</th>
            <th className="px-4 py-2 border">Due</th>
            <th className="px-4 py-2 border">Total Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.sl} className="hover:bg-gray-100">
              <td className="px-4 py-2 border">{row.sl}</td>
              <td className="px-4 py-2 border">{row.date}</td>
              <td className="px-4 py-2 border">{row.customerName}</td>
              <td className="px-4 py-2 border">{row.products}</td>
              <td className="px-4 py-2 border">{row.address}</td>
              <td className="px-4 py-2 border">{row.mobile}</td>
              <td className="px-4 py-2 border">{row.due}</td>
              <td className="px-4 py-2 border">{row.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CashSaleReport;