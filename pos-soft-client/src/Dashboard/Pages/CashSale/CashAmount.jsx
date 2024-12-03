import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useAuth } from "../../../provider/useAuth";

const CashAmount = () => {
    const { register, handleSubmit, watch, setValue, reset } = useForm();
    const { cashSubTotal , cashCart , formData,resetCart } = useAuth();
    const cart = cashCart || []
    console.log("checcck",cashSubTotal);

    // Set cashSubTotal as the default value for subtotal
    useEffect(() => {
        setValue("subtotal", cashSubTotal || 0); // Set default value for subtotal
    }, [cashSubTotal, setValue]);

    // Watching inputs
    const subtotal = watch("subtotal", 0); // Default value 0
    const discount = watch("discount", 0); // Default value 0
    const cashPaid = watch("cashPaid", 0); // Default value 0

    // Calculate totalAmount and previousDue
    useEffect(() => {
        const discountedAmount = parseFloat(subtotal || 0) * (1 - parseFloat(discount || 0) / 100);
        setValue("totalAmount", discountedAmount.toFixed(2)); // Update totalAmount

        const remainingDue = discountedAmount - parseFloat(cashPaid || 0);
        setValue("due", remainingDue.toFixed(2)); // Update previousDue
    }, [subtotal, discount, cashPaid, setValue]);

    // Handle form submission
    const onSubmit = (data) => {
        console.log("Form Data:", {payments: data, products: cart, customerData: formData});
        reset()
        resetCart()
    };

    return (
        <section>
            <div className="relative">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="bg-red-200 border border-red-500 p-1 rounded text-sm">
                        <h2 className="font-bold mb-2">লেনদেন তথ্য</h2>

                        {/* Date Field */}
                        <div className="mb-1">
                            <label htmlFor="date" className="mr-2">তারিখ</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                className="border p-1 rounded w-full"
                                {...register("date", { required: true })}
                            />
                        </div>

                        {/* Subtotal */}
                        <div className="mb-1 flex items-center">
                            <label htmlFor="subtotal" className="mr-2 w-[20%]">সাময়িক টাকা</label>
                            <input
                                readOnly
                                type="number"
                                id="subtotal"
                                name="subtotal"
                                className="border p-1 rounded w-[80%] outline-none"
                                {...register("subtotal")}
                            />
                        </div>

                        {/* Discount */}
                        <div className="mb-1 flex items-center">
                            <label htmlFor="discount" className="mr-2 w-[20%]">কমিশন</label>
                            <div className="flex gap-2 w-[80%] items-center">
                                <input
                                    type="number"
                                    id="discount"
                                    name="discount"
                                    placeholder="কমিশন"
                                    className="border p-1 rounded w-[90%]"
                                    {...register("discount")}
                                />
                                <span className="w-[10%]">%</span>
                            </div>
                        </div>

                        {/* Total Amount */}
                        <div className="mb-1">
                            <label htmlFor="totalAmount" className="mr-2">মোট টাকা</label>
                            <input
                                type="number"
                                id="totalAmount"
                                name="totalAmount"
                                placeholder="0"
                                className="border p-1 rounded w-full outline-none"
                                readOnly
                                {...register("totalAmount")}
                            />
                        </div>

                        {/* Cash Paid */}
                        <div className="mb-1">
                            <label htmlFor="cashPaid" className="mr-2">ক্যাশ জমা</label>
                            <input
                                type="number"
                                id="cashPaid"
                                name="cashPaid"
                                className="border p-1 rounded w-full"
                                placeholder="ক্যাশ জমা"
                                {...register("cashPaid", { required: true })}
                            />
                        </div>

                        {/* Previous Due */}
                        <div className="mb-1 w-[60%]">
                            <label htmlFor="due" className="mr-2">বাকী</label>
                            <input
                                type="number"
                                id="due"
                                name="due"
                                className="border p-1 rounded w-full outline-none bg-black/80"
                                readOnly
                                {...register("due")}
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-[#e94374f5] text-white font-semibold px-3 py-2 mt-2 rounded-md"
                        >
                            বিক্রি নিশ্চিত করুন
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default CashAmount;
