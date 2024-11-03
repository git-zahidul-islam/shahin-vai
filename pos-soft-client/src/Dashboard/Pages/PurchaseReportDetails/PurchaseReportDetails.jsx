import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const PurchaseReportDetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [payAmount,SetPayAmount] = useState({
    payable: ''
  })

  console.log(products);
  const companyAmmount = products;
  const due = companyAmmount?.payableMoney - companyAmmount?.moneyGiven

  console.log(products);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `http://localhost:5000/single-product-report/${id}`
      );
      setProducts(res.data);
    };
    
    fetchData();
  }, [id]);

  const handleUpdate = async () => {
    if (payAmount <= 0) {
      Swal.fire({
        title: 'Error!',
        text: `Payable amount must be greater than 0`,
        icon: 'error',
        timer: 5000,
      });
      return; 
    }
    else if(due < payAmount){
      Swal.fire({
        title: 'Error!',
        text: `no allow big annount from pay ammount`,
        icon: 'error',
        timer: 5000
      });
      return
    }
    console.log(payAmount);

    try {
      const res = await axios.put(`http://localhost:5000/update-pay-amount/${id}`,{payAmount})
    const result = res.data
    console.log(result);
    console.log(result);
    } catch (error) {
      console.log(error);
    }

  }


  return (
    <section className="p-10">
      {/* Top bar showing totals */}
      <div className="mb-6 bg-gray-100 p-4 rounded-lg shadow space-y-3">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold mb-2">Payment Summary</h2>
          <button disabled={products?.payableMoney == products?.moneyGiven} onClick={handleUpdate} className={`p-2 ${products?.payableMoney == products?.moneyGiven ? "bg-gray-400 cursor-wait" : "bg-green-400" }`}>
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
            {
              products?.payableMoney == products?.moneyGiven
              ? <p className="bg-green-500/70 px-2 py-1 text-white">বাকি নাই</p>
              : <input
              disabled={products?.payableMoney == products?.moneyGiven}
                type="text"
                name="price"
                id="price"
                value={payAmount.payable}
                onChange={(e) =>SetPayAmount(e.target.value) }
                className={`p-1 border-2`}
              />
            }
            
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PurchaseReportDetails;
