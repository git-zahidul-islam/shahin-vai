import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PurchaseReportDetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [pay, isPay] = useState(true);
  const [payAmount,SetPayAmount] = useState({
    payable: 0
  })

  console.log(products);

  const companyAmmount = products;
  const due = companyAmmount?.payableMoney - companyAmmount?.moneyGiven


  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(
        `http://localhost:5000/single-product-report/${id}`
      );
      setProducts(res.data);
    };
    
    fetchData();
  }, [id]);

  const handlePay = async () => {
    console.log(payAmount);

  }

  return (
    <section className="p-10">
      {/* Top bar showing totals */}
      <div className="mb-6 bg-gray-100 p-4 rounded-lg shadow space-y-3">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold mb-2">Payment Summary</h2>
          <button onClick={handlePay} className="bg-green-400 p-2">
            Give money
          </button>
        </div>
        <div className="flex justify-between">
          <p className="text-lg">
            <strong>Total Payable:</strong> {products?.payableMoney} ৳
          </p>
          <p className="text-lg">
            <strong>Given:</strong> {products?.moneyGiven} ৳
          </p>
          <p className="text-lg">
            <strong>Due:</strong> {due} ৳
          </p>

        
          <div className="pb-3 flex gap-3 items-center">
            <p>Pay Money</p>
            <input
              disabled={pay}
              type="text"
              name="price"
              id="price"
              value={payAmount.payable}
              onChange={(e) =>SetPayAmount(e.target.value) }
              className="p-1 border-2"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PurchaseReportDetails;
