import axios from 'axios';
import { useEffect, useState } from 'react';

const ProductsBuyReport = (reface) => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    // Fetch purchase report from the server
    const fetchData = async () => {
        const res = await axios.get('http://localhost:5000/company-buy-report')
        setData(res.data)
    }
    fetchData()
  }, [reface]);

  return (
    <section className="p-10">
      <h2>ক্রয় পন্যের রিপোর্ট</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
                Index
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
                Company Name
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
                কোম্পানি পাবে
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
                প্রদান করেছি
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
                বাকি
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border border-gray-300">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index}>
                <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900 border border-gray-300">
                  {index + 1}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
                  {item.companyName}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
                  {item.payableMoney}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
                  {item.moneyGiven}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
                  {parseInt(item.payableMoney) - parseInt(item.moneyGiven)}
                </td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 border border-gray-300">
                  {item.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProductsBuyReport;