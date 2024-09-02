"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import { DeliveryAddressInputContainer, OrderPageContainer } from "./Styled";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";

type CementBrand = "Dangote" | "Lafarge" | "BUA";

export interface UserDetails {
  name: string;
  email: string;
  phone: string;
  address: string;
}
type User = {
  id: number;
  name: string;
  email: string;
};

type OrderPageProps = {
  user: UserDetails | null;
};

function UserOrderPage() {
  const [isLoading, setIsloading] = useState<boolean>(false);
  const router = useRouter();
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [selectedBrand, setSelectedBrand] = useState<CementBrand>("Dangote");
  const [quantity, setQuantity] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleUserDetailsChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleBrandChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setSelectedBrand(e.target.value as CementBrand);
  };

  const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const newQuantity = Math.max(1, parseInt(e.target.value) || 1);
    setQuantity(newQuantity);
  };

  const incrementQuantity = (): void => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = (): void => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  const validateForm = (): boolean => {
    return Object.values(userDetails).every((detail) => detail.trim() !== "");
  };

  const handleOrderNow = (e: FormEvent): void => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      alert(
        `Order placed successfully!\n\nDetails:\nName: ${userDetails.name}\nEmail: ${userDetails.email}\nPhone: ${userDetails.phone}\nAddress: ${userDetails.address}\nBrand: ${selectedBrand}\nQuantity: ${quantity}`
      );
    } else {
      alert("Please fill out all the details before placing your order.");
    }
  };

  useEffect(() => {
    setIsloading(true);

    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          router.push("/login");
          return;
        }

        const { data } = await axios.get(
          "https://cement-api.onrender.com/api/auth/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const { data: userData } = data;
        console.log(userData);

        const users = {
          name: userData.name,
          email: userData.email,
          phone: "",
          address: "",
        };
        setUserDetails(users);
        setIsloading(false);
      } catch (error) {
        router.push("/login");
        setIsloading(false);
      } finally {
        setIsloading(false);
      }
    };

    fetchUser();
  }, [router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <OrderPageContainer>
      <h2>Place Your Order</h2>

      <form onSubmit={handleOrderNow}>
        {/* User Details Section */}
        <main className="flex justify-between flex-col">
          <div className="flex flex-col gap-4">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                disabled
                value={userDetails.name}
                onChange={handleUserDetailsChange}
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                disabled
                value={userDetails.email}
                onChange={handleUserDetailsChange}
                placeholder="Enter your email"
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={userDetails.phone}
                onChange={handleUserDetailsChange}
                placeholder="Enter your phone number"
              />
            </div>
            {/* Delivery Address Input */}
            <DeliveryAddressInputContainer>
              <label htmlFor="address">Delivery Address:</label>
              <textarea
                id="address"
                name="address"
                value={userDetails.address}
                onChange={handleUserDetailsChange}
                placeholder="Enter your delivery address here..."
              />
            </DeliveryAddressInputContainer>
          </div>
        </main>

        {/* Brand Selector */}
        <article className="flex justify-between flex-col gap-2">
          <div className="brand-selector">
            <label htmlFor="brand">Select Cement Brand:</label>
            <select
              id="brand"
              value={selectedBrand}
              onChange={handleBrandChange}
            >
              <option value="Dangote Cement">Dangote Cement</option>
              <option value="Lafarge Cement">Lafarge Cement</option>
              <option value="Other Cement Brand">Other Cement Brand</option>
            </select>
          </div>
          {/* Quantity Control */}
          <div className="quantity-control">
            <button type="button" onClick={decrementQuantity}>
              -
            </button>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
            />
            <button type="button" onClick={incrementQuantity}>
              +
            </button>
          </div>
        </article>

        {/* Order Button */}
        <button className="order-button" type="submit">
          Order Now
        </button>
      </form>

      {isSubmitted && <p>Thank you for your order!</p>}
    </OrderPageContainer>
  );
}

export default UserOrderPage;
