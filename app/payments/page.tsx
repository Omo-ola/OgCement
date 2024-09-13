"use client";

import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import WhatsAppContact from "../_components/Bcontact";
import axios from "axios";
import { formatCurrency } from "@/lib/helper";

interface UserDetails {
  name: string;
  email: string;
}

interface OrderItem {
  name: string;
  quantity: number;
  price: number;
  phoneNumber: string;
  address: string;
}

function CheckoutPage() {
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: "",
    email: "",
  });

  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

  const [paymentMethod, setPaymentMethod] = useState<string>("Bank Transfer");

  const handleUserDetailsChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handlePaymentMethodChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPaymentMethod(e.target.value);
  };

  const handlePlaceOrder = async (e: FormEvent) => {
    e.preventDefault();
    const response = await axios.post(
      `https://cement-api.onrender.com/api/order`
    );
    console.log(response);
    alert("Successful");
  };

  const calculateTotal = () => {
    return orderItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  useEffect(() => {
    async function getCart() {
      const token = localStorage.getItem("token");
      try {
        const { data: loginUser } = await axios.get(
          "https://cement-api.onrender.com/api/auth/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUserDetails(loginUser.data);
        const { data } = await axios.get(
          "https://cement-api.onrender.com/api/cart",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setOrderItems(data.data.items);
      } catch (error) {
        // @ts-ignore
        if (error.response.data.error.includes("No cart found"))
          setOrderItems([]);
        else throw new Error("Something went wrong");
      }
    }
    getCart();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-semibold mb-6">Checkout</h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {orderItems.length < 1 && <p className="">No item in your cart</p>}
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
                <p className="text-lg">
                  {formatCurrency(item.price * item.quantity)}
                </p>
              </div>
            </div>
          ))}
          <div className="flex justify-between items-center py-4 mt-4 border-t">
            <h3 className="text-lg font-semibold">Total</h3>
            <p className="text-lg font-bold">
              {formatCurrency(calculateTotal())}
            </p>
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
              value={orderItems[0]?.phoneNumber}
              onChange={handleUserDetailsChange}
              placeholder="Phone Number"
              className="p-2 border rounded-md"
            />
            <input
              type="text"
              name="address"
              value={orderItems[0]?.address}
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
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
