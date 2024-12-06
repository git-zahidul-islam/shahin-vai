import axios from "axios";
import { useEffect, useState } from "react";
import { FaMoneyBill } from "react-icons/fa";


const DashboardStats = () => {
    const [stats, setStats] = useState();
    const [srartDate,setStartDate] = useState()
    const [endDate,setEndDate] = useState()
    // console.log(stats);

    useEffect(() => {
        const fetchTotalSum = async () => {
            try {               
                const response = await axios.get("http://localhost:5000/calculate-totals");
                console.log(response.data);
                setStats(response.data)
            } catch (err) {
               console.log(err);
            }
        };

        fetchTotalSum();
    }, []);

    return (
        <section>
             {/* slae count stats */}
             <div className='p-4 bg-slate-400/70 space-y-3 mt-8'>
                <h1 className='text-white md:text-4xl font-bold pb-3'>Total Sales Report</h1>
                <div className='flex gap-5 items-center justify-start'>
                    <input onChange={(e) => } className='block px-2 py-1 bg-gray-600/50' type="date" name="start" id="start" />
                    <input className='block px-2 py-1 bg-gray-600/50' type="date" name="start" id="start" />
                    <button className='block px-2 py-1 bg-green-300'>See data</button>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
                    <div className='rounded-md bg-gray-200/50 border border-gray-200/70 p-3 flex items-center justify-between'>
                        <div className='space-y-2'>
                        <h4 className='text-xl font-medium'>Total Sale</h4>
                        <p>{stats?.totalSale}</p>
                        </div>
                        <FaMoneyBill size={50}></FaMoneyBill>
                    </div>
                    <div className='rounded-md bg-gray-200/70 border border-gray-200/90 p-3 flex items-center justify-between'>
                        <div className='space-y-2'> 
                        <h4 className='text-xl font-medium'>Baki Sale</h4>
                        <p>{stats?.nagad}</p>
                        </div>
                        <FaMoneyBill size={50}></FaMoneyBill>
                    </div>
                    <div className='rounded-md bg-gray-200/85 border border-gray-200 p-3 flex items-center justify-between'>
                        <div className='space-y-2'>
                        <h4 className='text-xl font-medium'>Nagad Sale</h4>
                        <p>{stats?.due}</p>
                        </div>
                        <FaMoneyBill size={50}></FaMoneyBill>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardStats;