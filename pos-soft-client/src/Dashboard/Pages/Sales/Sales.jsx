import { useState } from "react";

const ContractForm = () => {
  const [products, setProducts] = useState([{ name: "", model: "", serial: "" }]);

  const addProduct = () => {
    setProducts([...products, { name: "", model: "", serial: "" }]);
  };

  const handleInputChange = (index, field, value) => {
    const updatedProducts = [...products];
    updatedProducts[index][field] = value;
    setProducts(updatedProducts);
  };

  return (
    <div className="mx-auto p-6 bg-gray-100 border border-gray-300">
      <h1 className="text-center text-2xl font-bold text-blue-600 mb-4">
        BABU ELECTRONICS & Crocarise
      </h1>

      {/* Header Section */}
      <div className="grid grid-cols-2 gap-2 mb-6">
        <div className="flex items-center">
          <label className="block text-gray-700 font-semibold w-[30%] border p-[3px] border-gray-300">
            Account Number:
          </label>
          <input
            type="text"
            className="w-[70%] border border-gray-300  p-[3px] outline-none"
            placeholder="Enter Account Number"
          />
        </div>

        <div className="flex items-center">
          <label className="block text-gray-700 font-semibold w-[30%] border p-[3px] border-gray-300">
            Date of Sales:
          </label>
          <input
            type="date"
            className="w-[70%] border border-gray-300  p-[3px] outline-none"
          />
        </div>

        <div className="flex items-center">
          <label className="block text-gray-700 font-semibold w-[30%] border p-[3px] border-gray-300">
            Hire's Name:
          </label>
          <input
            type="text"
            className="w-[70%] border border-gray-300  p-[3px] outline-none"
            placeholder="Enter Hire's Name"
          />
        </div>

        <div className="flex items-center">
          <label className="block text-gray-700 font-semibold w-[30%] border p-[3px] border-gray-300">
            Father Name:
          </label>
          <input
            type="text"
            className="w-[70%] border border-gray-300  p-[3px] outline-none"
            placeholder="Enter Father Name"
          />
        </div>

        <div className="flex items-center">
          <label className="block text-gray-700 font-semibold w-[30%] border p-[3px] border-gray-300">
            Address:
          </label>
          <input
            type="text"
            className="w-[70%] border border-gray-300  p-[3px] outline-none"
            placeholder="Enter Address"
          />
        </div>

        <div className="flex items-center">
          <label className="block text-gray-700 font-semibold w-[30%] border p-[3px] border-gray-300">
            Occupation:
          </label>
          <input
            type="text"
            className="w-[70%] border border-gray-300  p-[3px] outline-none"
            placeholder="Enter Occupation"
          />
        </div>

        <div className="flex items-center">
          <label className="block text-gray-700 font-semibold w-[30%] border p-[3px] border-gray-300">
            Reference-1:
          </label>
          <input
            type="text"
            className="w-[70%] border border-gray-300  p-[3px] outline-none"
            placeholder="Enter Reference"
          />
        </div>

        <div className="flex items-center">
          <label className="block text-gray-700 font-semibold w-[30%] border p-[3px] border-gray-300">
            Mobile:
          </label>
          <input
            type="text"
            className="w-[70%] border border-gray-300  p-[3px] outline-none"
            placeholder="Enter Mobile Number"
          />
        </div>

        <div className="flex items-center">
          <label className="block text-gray-700 font-semibold w-[30%] border p-[3px] border-gray-300">
            Reference-2:
          </label>
          <input
            type="text"
            className="w-[70%] border border-gray-300  p-[3px] outline-none"
            placeholder="Enter Reference"
          />
        </div>

        <div className="flex items-center">
          <label className="block text-gray-700 font-semibold w-[30%] border p-[3px] border-gray-300">
            Images:
          </label>
          <input
            type="file"
            className="w-[70%] border border-gray-300 outline-none"
            placeholder="Enter Reference"
          />
        </div>
      </div>



      {/* Terms of Contract */}
      <h2 className="text-lg font-bold text-gray-700 mb-4">Terms of Contract</h2>
      <div className="grid grid-cols-3 gap-4 mb-6 text-[14px]">
        <div className="flex items-center">
          <label className="block text-gray-700 font-semibold w-[45%] border p-[3px] border-gray-300">
            Case Value Tk:
          </label>
          <input
            type="number"
            className="w-[55%] border border-gray-300 p-[3px] outline-none"
            placeholder="28000"
          />
        </div>

        <div className="flex items-center">
          <label className="block text-gray-700 font-semibold w-[45%] border p-[3px] border-gray-300">
            Monthly Payment Tk:
          </label>
          <input
            type="number"
            className="w-[55%] border border-gray-300 p-[3px] outline-none"
            placeholder="5555"
          />
        </div>

        <div className="flex items-center">
          <label className="block text-gray-700 font-semibold w-[45%] border p-[3px] border-gray-300">
            Down Payment Tk:
          </label>
          <input
            type="number"
            className="w-[55%] border border-gray-300 p-[3px] outline-none"
            placeholder="5000"
          />
        </div>

        <div className="flex items-center">
          <label className="block text-gray-700 font-semibold w-[45%] border p-[3px] border-gray-300">
            Hire month:
          </label>
          <input
            type="number"
            className="w-[55%] border border-gray-300 p-[3px] outline-none"
            placeholder="Enter Value"
          />
        </div>

        {/* <div className="flex items-center">
          <label className="block text-gray-700 font-semibold w-[45%] border p-[3px] border-gray-300">
            Balance Amount Tk:
          </label>
          <input
            type="number"
            className="w-[55%] border border-gray-300 p-[3px] outline-none"
            placeholder="Enter Amount"
          />
        </div> */}

        {/* <div className="flex items-center">
          <label className="block text-gray-700 font-semibold w-[45%] border p-[3px] border-gray-300">
            Months Contract:
          </label>
          <input
            type="number"
            className="w-[55%] border border-gray-300 p-[3px] outline-none"
            placeholder="Enter Months"
          />
        </div> */}
      </div>



      {/* Product Details */}
      <h2 className="text-lg font-bold text-gray-700 mb-4">Product Details</h2>
      {products.map((product, index) => (
        <div key={index} className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-gray-700 font-semibold">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2"
              placeholder="Enter Product Name"
              value={product.name}
              onChange={(e) => handleInputChange(index, "name", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Model</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2"
              placeholder="Enter Model"
              value={product.model}
              onChange={(e) => handleInputChange(index, "model", e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Changed SL</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2"
              placeholder="Enter Serial Number"
              value={product.serial}
              onChange={(e) => handleInputChange(index, "serial", e.target.value)}
            />
          </div>
        </div>
      ))}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={addProduct}
      >
        + Add Another Product
      </button>

      {/* Collection Details */}
      <h2 className="text-lg font-bold text-gray-700 my-2">Collection Details</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="border border-gray-300 p-2">Date</th>
            <th className="border border-gray-300 p-2">Collection Amount</th>
            <th className="border border-gray-300 p-2">Balance Amount</th>
            <th className="border border-gray-300 p-2">Total Coll. Amount</th>
            <th className="border border-gray-300 p-2">Remarks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 p-2">2055</td>
            <td className="border border-gray-300 p-2">50255</td>
            <td className="border border-gray-300 p-2">55</td>
            <td className="border border-gray-300 p-2">50255</td>
            <td className="border border-gray-300 p-2">4566894282</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContractForm;
