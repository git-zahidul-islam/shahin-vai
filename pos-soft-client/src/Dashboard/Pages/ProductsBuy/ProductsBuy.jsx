import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const CompanyProductForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [selectedDate, setSelectedDate] = useState("");

  const onSubmit = async (data) => {

    if (data.moneyGiven > data.payableMoney) {
      Swal.fire({
        icon: 'error',
        title: 'সতর্কীকরণ',
        text: 'প্রদেয় অর্থের পরিমাণ বড় হতে পারবে না!',
      });
      return; // Exit the function to prevent submission
    }

    const productsBuyDetails = {
      companyName: data.companyName,
      payableMoney: data.payableMoney,
      moneyGiven: data.moneyGiven,
      date: selectedDate,  // Include date here
    };

    try {
      const response = await axios.post('http://localhost:5000/company-products', productsBuyDetails);
      console.log('Response from backend:', response.data);  // Log the response from backend


      if(response.data.result.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "সেভ হয়েছে । ",
          showConfirmButton: false,
          timer: 1500,
        });
      }

    } catch (error) {
      console.error('Error submitting data:', error);

      // Display error message if the request fails
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Something went wrong!',
      });
    }
  };

  // Handle date change
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="mx-auto bg-red-200">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-2 p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-semibold">কোম্পানির তথ্য</h2>
        <div className="md:grid md:grid-cols-2 md:justify-center md:items-center gap-5">
          <div className="flex flex-col space-y-2">
            <label htmlFor="companyName" className="font-medium">
              কোম্পানির নামঃ
            </label>
            <input
              type="text"
              id="companyName"
              className="p-2 border border-gray-300 rounded"
              {...register('companyName', { required: 'Company Name is required' })}
            />
            {errors.companyName && (
              <span className="text-red-500 text-sm">
                {errors.companyName.message}
              </span>
            )}
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="payableMoney" className="font-medium">
              মোট ক্রয় টাকাঃ
            </label>
            <input
              type="number"
              id="payableMoney"
              className="p-2 border border-gray-300 rounded"
              {...register('payableMoney', { required: 'Payable Money is required' })}
            />
            {errors.payableMoney && (
              <span className="text-red-500 text-sm">
                {errors.payableMoney.message}
              </span>
            )}
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="moneyGiven" className="font-medium">
            moneyGiven
            </label>
            <input
              type="number"
              id="moneyGiven"
              className="p-2 border border-gray-300 rounded"
              {...register('moneyGiven', { required: 'Money Given is required' })}
            />
            {errors.moneyGiven && (
              <span className="text-red-500 text-sm">
                {errors.moneyGiven.message}
              </span>
            )}
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="date" className="font-medium mr-5">তারিখ</label>
            <input
              type="date"
              id="date"
              name="date"
              value={selectedDate}
              onChange={handleDateChange}
              className="p-2 border border-gray-300 rounded"
            />
          </div>
        </div>

        <div className="flex justify-center mb-12">
          <button
            type="submit"
            className="w-1/2 bg-[#dc4b76f5] text-white p-3 rounded-md font-semibold"
          >
            জমা করুন
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompanyProductForm;
