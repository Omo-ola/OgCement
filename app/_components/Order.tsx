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

interface OrderItem {
  brand: CementBrand;
  quantity: number;
}

function UserOrderPage() {
  const [isLoading, setIsloading] = useState<boolean>(false);
  const router = useRouter();
  const [userDetails, setUserDetails] = useState<UserDetails>({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [selectedBrands, setSelectedBrands] = useState<OrderItem[]>([]);

  const handleUserDetailsChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleBrandCheckboxChange = (brand: CementBrand): void => {
    const isSelected = selectedBrands.some((item) => item.brand === brand);
    if (isSelected) {
      setSelectedBrands(selectedBrands.filter((item) => item.brand !== brand));
    } else {
      setSelectedBrands([...selectedBrands, { brand, quantity: 1 }]);
    }
  };

  const handleQuantityChange = (brand: CementBrand, quantity: number): void => {
    setSelectedBrands((prev) =>
      prev.map((item) =>
        item.brand === brand
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      )
    );
  };

  const validateForm = (): boolean => {
    return (
      Object.values(userDetails).every((detail) => detail.trim() !== "") &&
      selectedBrands.length > 0
    );
  };

  const handleOrderNow = async (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const orderData = {
        items: selectedBrands.map((item) => {
          return {
            name: `${item.brand} Cement`,
            price: 7000,
            quantity: item.quantity,
          };
        }),
        address: userDetails.address,
        phone: userDetails.phone,
      };

      try {
        console.log(orderData);

        const token = localStorage.getItem("token");
        const response = await axios.post(
          "https://cement-api.onrender.com/api/cart",
          orderData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);

        // alert("Order placed successfully!");
        router.push("/payments");
      } catch (error) {
        alert("An error occurred while placing the order. Please try again.");
        console.error(error);
      }
    } else {
      alert(
        "Please fill out all the details and select at least one brand before placing your order."
      );
    }
  };

  useEffect(() => {
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
        const { data: test } = await axios.get(
          "https://cement-api.onrender.com/api/cements",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(test);

        const { data: userData } = data;
        const users = {
          name: userData.name,
          email: userData.email,
          phone: "",
          address: "",
        };
        setUserDetails(users);
      } catch (error) {
        router.push("/login");
        setIsloading(false);
      }
    };

    fetchUser();
  }, [router]);

  return (
    <OrderPageContainer>
      <h2>Place Your Order</h2>

      <form onSubmit={handleOrderNow}>
        {/* User Details Section */}
        <main className="flex flex-col gap-6">
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

          {/* Brand Selection Section */}
          <div className="brand-selection">
            <h3>Select Cement Brands:</h3>
            {["Dangote", "Lafarge", "BUA"].map((brand) => (
              <div key={brand} className="flex items-center gap-4 mb-4">
                <input
                  type="checkbox"
                  id={brand}
                  value={brand}
                  onChange={() =>
                    handleBrandCheckboxChange(brand as CementBrand)
                  }
                  checked={selectedBrands.some((item) => item.brand === brand)}
                />
                <label htmlFor={brand}>{brand} Cement</label>

                {/* Quantity Input for Selected Brands */}
                {selectedBrands.some((item) => item.brand === brand) && (
                  <div className="quantity-control flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() =>
                        handleQuantityChange(
                          brand as CementBrand,
                          selectedBrands.find((item) => item.brand === brand)!
                            .quantity - 1
                        )
                      }
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={
                        selectedBrands.find((item) => item.brand === brand)!
                          .quantity
                      }
                      onChange={(e) =>
                        handleQuantityChange(
                          brand as CementBrand,
                          parseInt(e.target.value) || 1
                        )
                      }
                      min="1"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        handleQuantityChange(
                          brand as CementBrand,
                          selectedBrands.find((item) => item.brand === brand)!
                            .quantity + 1
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Order Button */}
          <button className="order-button" type="submit">
            Add to cart
          </button>
        </main>
      </form>
    </OrderPageContainer>
  );
}

export default UserOrderPage;
