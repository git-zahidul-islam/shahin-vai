import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios'

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
   // Form 1 (Top Section)
   const {
    register: registerDetails,
    // handleSubmit: handleSubmitTop,
    watch: watchDetails,
    formState: { errors: errorsTop },
  } = useForm();
  // Handlers for form submissions
  // const onSubmitTop = (data) => {
  //   console.log("Top Form Data:", data);
  // };

   // Form 2 (Terms of Contract Section)
   const {
    register: registerTerms,
    // handleSubmit: handleSubmitTerms,
    watch: watchTerms,
    formState: { errors: errorsTerms },
  } = useForm();

  // not use this 
  const onSubmitTerms = (data) => {
    console.log("Terms of Contract Form Data:", data);
  };


  const userDetails = watchDetails()
  const paymentForm = watchTerms()
  // console.log(userDetails);
  // console.log(paymentForm);
  // console.log(products);

  const handleSale = async () => {
    const salesData = {...paymentForm, date: userDetails?.dateOfSales ,userDetails ,products}
    console.log(salesData);

    try {
      const res = await axios.post('http://localhost:5000/api/v1/sales',salesData)
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }

  }

  

  return (
    <div className="mx-auto p-6 bg-gray-100 border border-gray-300">
      <h1 className="text-center text-2xl font-bold text-blue-600 mb-4">
        BABU ELECTRONICS & Crocarise
      </h1>

      {/* Header Section */}

      {/* onSubmit={handleSubmit(onSubmit)}  remove */}
      <form  className="mb-6">
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center">
            <label className="block text-gray-700 font-semibold w-[30%] border p-[3px] border-gray-300">
              Account Number:
            </label>
            <input
              type="text"
              {...registerDetails("accountNumber", { required: "Account Number is required" })}
              className="w-[70%] border border-gray-300 p-[3px] outline-none"
              placeholder="Enter Account Number"
            />
            {errorsTop.accountNumber && (
              <p className="text-red-500 text-sm">{errorsTop.accountNumber.message}</p>
            )}
          </div>
          <div className="flex items-center">
            <label className="block text-gray-700 font-semibold w-[30%] border p-[3px] border-gray-300">
              Date of Sales:
            </label>
            <input
              type="date"
              {...registerDetails("dateOfSales", { required: "Date is required" })}
              className="w-[70%] border border-gray-300 p-[3px] outline-none"
            />
            {errorsTop.dateOfSales && (
              <p className="text-red-500 text-sm">{errorsTop.dateOfSales.message}</p>
            )}
          </div>
          <div className="flex items-center">
            <label className="block text-gray-700 font-semibold w-[30%] border p-[3px] border-gray-300">
              Hire's Name:
            </label>
            <input
              type="text"
              {...registerDetails("hiresName")}
              className="w-[70%] border border-gray-300 p-[3px] outline-none"
              placeholder="Enter Hire's Name"
            />
          </div>
          <div className="flex items-center">
            <label className="block text-gray-700 font-semibold w-[30%] border p-[3px] border-gray-300">
              Father Name:
            </label>
            <input
              type="text"
              {...registerDetails("fatherName")}
              className="w-[70%] border border-gray-300 p-[3px] outline-none"
              placeholder="Enter Father Name"
            />
          </div>
          <div className="flex items-center">
            <label className="block text-gray-700 font-semibold w-[30%] border p-[3px] border-gray-300">
              Address:
            </label>
            <input
              type="text"
              {...registerDetails("address")}
              className="w-[70%] border border-gray-300 p-[3px] outline-none"
              placeholder="Enter Address"
            />
          </div>
          <div className="flex items-center">
            <label className="block text-gray-700 font-semibold w-[30%] border p-[3px] border-gray-300">
              Occupation:
            </label>
            <input
              type="text"
              {...registerDetails("occupation")}
              className="w-[70%] border border-gray-300 p-[3px] outline-none"
              placeholder="Enter Occupation"
            />
          </div>
          <div className="flex items-center">
            <label className="block text-gray-700 font-semibold w-[30%] border p-[3px] border-gray-300">
              Reference-1:
            </label>
            <input
              type="text"
              {...registerDetails("reference1")}
              className="w-[70%] border border-gray-300 p-[3px] outline-none"
              placeholder="Enter Reference"
            />
          </div>
          <div className="flex items-center">
            <label className="block text-gray-700 font-semibold w-[30%] border p-[3px] border-gray-300">
              Mobile:
            </label>
            <input
              type="text"
              {...registerDetails("mobile")}
              className="w-[70%] border border-gray-300 p-[3px] outline-none"
              placeholder="Enter Mobile Number"
            />
          </div>
          <div className="flex items-center">
            <label className="block text-gray-700 font-semibold w-[30%] border p-[3px] border-gray-300">
              Reference-2:
            </label>
            <input
              type="text"
              {...registerDetails("reference2")}
              className="w-[70%] border border-gray-300 p-[3px] outline-none"
              placeholder="Enter Reference"
            />
          </div>
          <div className="flex items-center">
            <label className="block text-gray-700 font-semibold w-[30%] border p-[3px] border-gray-300">
              Images:
            </label>
            <input
              type="file"
              {...registerDetails("images")}
              className="w-[70%] border border-gray-300 outline-none"
            />
          </div>
        </div>
        {/* <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600"
        >
          Submit Top Form
        </button> */}
      </form>



      {/* Terms of Contract */}
      <h2 className="text-lg font-bold text-gray-700 mb-4">Terms of Contract</h2>
      {/* onSubmit={handleSubmitTerms(onSubmitTerms)} remove */}
      <form  className="grid grid-cols-3 gap-4 mb-6 text-[14px]">
      <div className="flex items-center">
        <label className="block text-gray-700 font-semibold w-[45%] border p-[3px] border-gray-300">
          Case Value Tk:
        </label>
        <input
          type="number"
          className="w-[55%] border border-gray-300 p-[3px] outline-none"
          placeholder="products ammount"
          {...registerTerms("caseValue", { required: "Case value is required" })}
        />
        {/* {errors.caseValue && <span className="text-red-500 text-xs">{errors.caseValue.message}</span>} */}
      </div>

      <div className="flex items-center">
        <label className="block text-gray-700 font-semibold w-[45%] border p-[3px] border-gray-300">
          Monthly Payment Tk:
        </label>
        <input
          type="number"
          className="w-[55%] border border-gray-300 p-[3px] outline-none"
          placeholder="Monthly Payment Tk"
          {...registerTerms("monthlyPayment", { required: "Monthly payment is required" })}
        />
        {/* {errors.monthlyPayment && <span className="text-red-500 text-xs">{errors.monthlyPayment.message}</span>} */}
      </div>

      <div className="flex items-center">
        <label className="block text-gray-700 font-semibold w-[45%] border p-[3px] border-gray-300">
          Down Payment Tk:
        </label>
        <input
          type="number"
          className="w-[55%] border border-gray-300 p-[3px] outline-none"
          placeholder="Down Payment Tk"
          {...registerTerms("downPayment", { required: "Down payment is required" })}
        />
        {/* {errors.downPayment && <span className="text-red-500 text-xs">{errors.downPayment.message}</span>} */}
      </div>

      <div className="flex items-center">
        <label className="block text-gray-700 font-semibold w-[45%] border p-[3px] border-gray-300">
          Payment Time ({paymentForm?.PaymentTime ? paymentForm?.PaymentTime : 0}):
        </label>
        <input
          type="number"
          className="w-[55%] border border-gray-300 p-[3px] outline-none"
          placeholder="Enter Value"
          {...registerTerms("PaymentTime", { required: "Payment Time is required" })}
        />
        {/* {errors.hireMonth && <span className="text-red-500 text-xs">{errors.hireMonth.message}</span>} */}
      </div>

      {/* <button type="submit" className="col-span-3 mt-4 p-2 bg-blue-500 text-white rounded">
        Submit
      </button> */}
    </form>



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

      <div className="flex justify-end items-center">
        <button className="px-4 py-2 bg-red-600 block text-black rounded-lg border border-red-950" onClick={handleSale}>Sale</button>
      </div>

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
