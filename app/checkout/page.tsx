
// "use client"

// import { useState } from "react";
// import { course } from "../../data/mockCourse";

// export default function CheckoutPage() {
//   const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal">("card");

//   const discountAmount = course.originalPrice * course.discount;

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 sm:p-6 w-full max-w-5xl mx-auto">
//       {/* Left side */}
//       <div className="bg-white shadow-md rounded-2xl p-6 space-y-6">
//         <h2 className="text-xl font-semibold">Checkout</h2>

//         {/* Country selector */}
//         <div>
//           <label htmlFor="country" className="block mb-2 font-medium">
//             Country
//           </label>
//           <select id="country" className="w-full border rounded-lg p-2">
//             <option>Cameroon</option>
//             <option>Nigeria</option>
//             <option>USA</option>
//           </select>
//         </div>

//         {/* Payment Method */}
//         <div>
//           <h3 className="mb-2 font-medium">Payment method</h3>
//           <div className="space-y-4">
//             {/* Cards Option */}
//             <label className="flex items-center gap-2">
//               <input
//                 type="radio"
//                 name="payment"
//                 value="card"
//                 checked={paymentMethod === "card"}
//                 onChange={() => setPaymentMethod("card")}
//               />
//               Cards
//             </label>

//             {paymentMethod === "card" && (
//               <div className="space-y-3 border p-4 rounded-lg">
//                 <div>
//                   <label htmlFor="card-number" className="block mb-1 text-sm font-medium">
//                     Card number
//                   </label>
//                   <input
//                     id="card-number"
//                     type="text"
//                     placeholder="Card number"
//                     className="w-full border rounded-lg p-2"
//                   />
//                 </div>

//                 <div className="flex flex-col sm:flex-row gap-2">
//                   <div className="w-full sm:w-1/2">
//                     <label htmlFor="expiry" className="block mb-1 text-sm font-medium">
//                       MM/YY
//                     </label>
//                     <input
//                       id="expiry"
//                       type="text"
//                       placeholder="MM/YY"
//                       className="w-full border rounded-lg p-2"
//                     />
//                   </div>
//                   <div className="w-full sm:w-1/2">
//                     <label htmlFor="cvc" className="block mb-1 text-sm font-medium">
//                       CVC
//                     </label>
//                     <input
//                       id="cvc"
//                       type="text"
//                       placeholder="CVC"
//                       className="w-full border rounded-lg p-2"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label htmlFor="name-on-card" className="block mb-1 text-sm font-medium">
//                     Name on card
//                   </label>
//                   <input
//                     id="name-on-card"
//                     type="text"
//                     placeholder="Name on card"
//                     className="w-full border rounded-lg p-2"
//                   />
//                 </div>

//                 <label className="flex items-center gap-2 text-sm">
//                   <input type="checkbox" />
//                   Securely save this card
//                 </label>
//               </div>
//             )}

//             {/* PayPal Option */}
//             <label className="flex items-center gap-2">
//               <input
//                 type="radio"
//                 name="payment"
//                 value="paypal"
//                 checked={paymentMethod === "paypal"}
//                 onChange={() => setPaymentMethod("paypal")}
//               />
//               PayPal
//             </label>
//           </div>
//         </div>
//       </div>

//       {/* Right side - Order Summary */}
//       <div className="bg-white shadow-md rounded-2xl p-6 space-y-6">
//         <h2 className="text-xl font-semibold">Order summary</h2>

//         <div className="flex justify-between">
//           <span>Original Price:</span>
//           <span>${course.originalPrice.toFixed(2)}</span>
//         </div>

//         <div className="flex justify-between text-green-600">
//           <span>Discounts ({(course.discount * 100).toFixed(0)}% Off):</span>
//           <span>-${discountAmount.toFixed(2)}</span>
//         </div>

//         <div className="flex justify-between font-bold text-lg">
//           <span>Total (1 course):</span>
//           <span>${course.finalPrice.toFixed(2)}</span>
//         </div>

//         <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700">
//           Pay ${course.finalPrice.toFixed(2)}
//         </button>

//         <div className="text-sm text-center text-gray-600">
//           30-Day Money-Back Guarantee <br />
//           Not satisfied? Get a full refund within 30 days.
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import { mockCourses, Course } from "../../data/mockCourse";

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal">("card");
  const discountRate = 0.1; // 10% discount

  // Calculate total original price
  const originalPrice = mockCourses.reduce((total, course) => total + course.price, 0);

  // Calculate discount amount
  const discountAmount = originalPrice * discountRate;

  // Final price after discount
  const finalPrice = originalPrice - discountAmount;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 sm:p-6 w-full max-w-5xl mx-auto">
      {/* Left side - Checkout Form */}
      <div className="bg-white shadow-md rounded-2xl p-6 space-y-6">
        <h2 className="text-xl font-semibold">Checkout</h2>

        {/* Country selector */}
        <div>
          <label htmlFor="country" className="block mb-2 font-medium">
            Country
          </label>
          <select id="country" className="w-full border rounded-lg p-2">
            <option>Cameroon</option>
            <option>Nigeria</option>
            <option>USA</option>
          </select>
        </div>

        {/* Payment Method */}
        <div>
          <h3 className="mb-2 font-medium">Payment method</h3>
          <div className="space-y-4">
            {/* Card Option */}
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="card"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
              />
              Card
            </label>

            {paymentMethod === "card" && (
              <div className="space-y-3 border p-4 rounded-lg">
                <div>
                  <label htmlFor="card-number" className="block mb-1 text-sm font-medium">
                    Card number
                  </label>
                  <input
                    id="card-number"
                    type="text"
                    placeholder="Card number"
                    className="w-full border rounded-lg p-2"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="w-full sm:w-1/2">
                    <label htmlFor="expiry" className="block mb-1 text-sm font-medium">
                      MM/YY
                    </label>
                    <input
                      id="expiry"
                      type="text"
                      placeholder="MM/YY"
                      className="w-full border rounded-lg p-2"
                    />
                  </div>
                  <div className="w-full sm:w-1/2">
                    <label htmlFor="cvc" className="block mb-1 text-sm font-medium">
                      CVC
                    </label>
                    <input
                      id="cvc"
                      type="text"
                      placeholder="CVC"
                      className="w-full border rounded-lg p-2"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="name-on-card" className="block mb-1 text-sm font-medium">
                    Name on card
                  </label>
                  <input
                    id="name-on-card"
                    type="text"
                    placeholder="Name on card"
                    className="w-full border rounded-lg p-2"
                  />
                </div>

                <label className="flex items-center gap-2 text-sm">
                  <input type="checkbox" />
                  Securely save this card
                </label>
              </div>
            )}

            {/* PayPal Option */}
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="payment"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={() => setPaymentMethod("paypal")}
              />
              PayPal
            </label>
          </div>
        </div>
      </div>

      {/* Right side - Order Summary */}
      <div className="bg-white shadow-md rounded-2xl p-6 space-y-6">
        <h2 className="text-xl font-semibold">Order Summary</h2>

        <div className="space-y-2">
          {mockCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-between">
              <span>{course.title}</span>
              <span>${course.price.toFixed(2)}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between">
          <span>Original Price:</span>
          <span>${originalPrice.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-green-600">
          <span>Discount ({(discountRate * 100).toFixed(0)}% Off):</span>
          <span>-${discountAmount.toFixed(2)}</span>
        </div>

        <div className="flex justify-between font-bold text-lg">
          <span>Total ({mockCourses.length} courses):</span>
          <span>${finalPrice.toFixed(2)}</span>
        </div>

        <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700">
          Pay ${finalPrice.toFixed(2)}
        </button>

        <div className="text-sm text-center text-gray-600">
          30-Day Money-Back Guarantee <br />
          Not satisfied? Get a full refund within 30 days.
        </div>
      </div>
    </div>
  );
}
