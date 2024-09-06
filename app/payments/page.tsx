"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import WhatsAppContact from "../_components/Bcontact";

interface UserDetails {
  name: string;
  email: string;
  phone: string;
  address: string;
}

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

function CheckoutPage() {
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "1234567890",
    address: "123 Main St, Anytown, USA",
  });

  const [orderItems, setOrderItems] = useState<OrderItem[]>([
    { name: "Dangote", quantity: 50, price: 20 },
    { name: "Lafarge", quantity: 45, price: 25 },
  ]);

  const [paymentMethod, setPaymentMethod] = useState<string>("Bank Transfer");

  const handleUserDetailsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handlePaymentMethodChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  const handlePlaceOrder = (e: FormEvent) => {
    e.preventDefault();
    alert("Order placed successfully!");
  };

  const calculateTotal = () => {
    return orderItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-semibold mb-6">Checkout</h1>

        {/* Order Summary */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {orderItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2 border-b"
            >
              <div>
                <p className="text-lg">{item.name} Cement</p>
                <p className="text-sm text-gray-600">
                  Quantity: {item.quantity}
                </p>
              </div>
              <div>
                <p className="text-lg">${item.price * item.quantity}</p>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center py-4 mt-4 border-t">
            <h3 className="text-lg font-semibold">Total</h3>
            <p className="text-lg font-bold">${calculateTotal()}</p>
          </div>
        </div>

        {/* User Details */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Your Details</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              value={userDetails.name}
              onChange={handleUserDetailsChange}
              placeholder="Full Name"
              className="p-2 border rounded-md"
            />
            <input
              type="email"
              name="email"
              value={userDetails.email}
              onChange={handleUserDetailsChange}
              placeholder="Email"
              className="p-2 border rounded-md"
            />
            <input
              type="tel"
              name="phone"
              value={userDetails.phone}
              onChange={handleUserDetailsChange}
              placeholder="Phone Number"
              className="p-2 border rounded-md"
            />
            <input
              type="text"
              name="address"
              value={userDetails.address}
              onChange={handleUserDetailsChange}
              placeholder="Delivery Address"
              className="p-2 border rounded-md col-span-2"
            />
          </div>
        </div>

        {/* Payment Method */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
          <div className="flex justify-between gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="Bank Transfer"
                checked={paymentMethod === "Bank Transfer"}
                onChange={handlePaymentMethodChange}
                className="mr-2"
              />
              Bank Transfer
            </label>
            <section>
              <p>9063456754</p>
              <p>Opay</p>
              <p>Adesina Hammed</p>
            </section>
          </div>
          <h1>Contact admin to pay and confirm payment</h1>
          <WhatsAppContact />
        </div>

        {/* Place Order Button */}
        <div className="text-center">
          <button
            onClick={handlePlaceOrder}
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
