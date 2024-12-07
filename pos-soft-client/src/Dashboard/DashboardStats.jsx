import axios from "axios";
import { useEffect, useState } from "react";
import { FaMoneyBill } from "react-icons/fa";

const DashboardStats = () => {
    const [stats, setStats] = useState();
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    // Fetch data from the server
    const fetchTotalSum = async (startDate, endDate) => {
        try {
            const params = {};
            if (startDate && endDate) {
                params.startDate = startDate;
                params.endDate = endDate;
            }

            const response = await axios.get("http://localhost:5000/calculate-totals", {
                params,
            });

            console.log(response.data);
            setStats(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    // Initial fetch (all data)
    useEffect(() => {
        fetchTotalSum();
    }, []);

    // Handle button click for date-wise filtering
    const handleFilter = () => {
        if (startDate && endDate) {
            fetchTotalSum(startDate, endDate);
        } else {
            alert("Please select both start and end dates.");
        }
    };

    return (
        <section>
            {/* Sale count stats */}
            <div className='p-4 bg-slate-400/70 space-y-3 mt-8'>
                <h1 className='text-white md:text-4xl font-bold pb-3'>Total Sales Report</h1>
                <div className='flex gap-5 items-center justify-start'>
                    <input
                        onChange={(e) => setStartDate(e.target.value)}
                        className='block px-2 py-1 bg-gray-600/50'
                        type='date'
                        name='start'
                        id='start'
                    />
                    <input
                        onChange={(e) => setEndDate(e.target.value)}
                        className='block px-2 py-1 bg-gray-600/50'
                        type='date'
                        name='end'
                        id='end'
                    />
                    <button
                        onClick={handleFilter}
                        className='block px-2 py-1 bg-green-300'
                    >
                        See data
                    </button>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
                    <div className='rounded-md bg-gray-200/50 border border-gray-200/70 p-3 flex items-center justify-between'>
                        <div className='space-y-2'>
                            <h4 className='text-xl font-medium'>Total Sale</h4>
                            <p>{stats?.totalSale || 0}</p>
                        </div>
                        <FaMoneyBill size={50}></FaMoneyBill>
                    </div>
                    <div className='rounded-md bg-gray-200/70 border border-gray-200/90 p-3 flex items-center justify-between'>
                        <div className='space-y-2'>
                            <h4 className='text-xl font-medium'>Nagad Sale</h4>
                            <p>{stats?.nagad || 0}</p>
                        </div>
                        <FaMoneyBill size={50}></FaMoneyBill>
                    </div>
                    <div className='rounded-md bg-gray-200/85 border border-gray-200 p-3 flex items-center justify-between'>
                        <div className='space-y-2'>
                            <h4 className='text-xl font-medium'>Baki Sale</h4>
                            <p>{stats?.due || 0}</p>
                        </div>
                        <FaMoneyBill size={50}></FaMoneyBill>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardStats;
