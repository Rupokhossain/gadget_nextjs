"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { FaShoppingCart, FaArrowLeft } from "react-icons/fa";
import { clearCart } from "@/redux/cartSlice";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [error, setError] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    contact: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    nameOnCard: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handlePlaceOrder = () => {
    const {
      contact,
      lastName,
      address,
      city,
      cardNumber,
      expiry,
      cvv,
      nameOnCard,
    } = formData;

    if (
      !contact ||
      !lastName ||
      !address ||
      !city ||
      !cardNumber ||
      !expiry ||
      !cvv ||
      !nameOnCard
    ) {
      setError("Please fill in all the required fields before proceeding!");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (cartItems.length === 0) {
      setError("Your cart is empty!");
      return;
    }

    alert("Thank you for your purchase! Order Placed Successfully.");
    dispatch(clearCart());
    router.push("/"); 
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.newPrice * item.quantity,
    0
  );
  const estimatedTax = subtotal * 0.1;
  const total = subtotal + estimatedTax;

  return (
    <div className="container mx-auto px-4 lg:px-24 py-10 bg-white min-h-screen">
 
      {error && (
        <div data-aos="fade-up" className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 text-center font-bold sticky top-0 z-50">
          {error}
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-8">
        {/* LEFT SECTION */}
        <div data-aos="fade-right" className="lg:w-2/3 w-full flex flex-col gap-6 border border-gray-200 rounded-xl p-6 lg:p-8">
          <section className="space-y-4">
            <h2 className="text-2xl Unbounded ">Contact</h2>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              placeholder="Email or Mobile Phone number"
              className={`w-full border p-3 rounded-md outline-none transition-all ${
                error && !formData.contact
                  ? "border-red-500 bg-red-50"
                  : "border-gray-300"
              }`}
            />
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl Unbounded">Delivery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <select className="border border-gray-300 appearance-none cursor-pointer rounded px-2 py-2 md:col-span-2">
                <option>Bangladesh</option>
                <option>Nepal</option>
                <option>Italy</option>
              </select>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name (optional)"
                className="border border-gray-300 p-3 rounded-md"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                className={`border p-3 rounded-md ${
                  error && !formData.lastName
                    ? "border-red-500 bg-red-50"
                    : "border-gray-300"
                }`}
              />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Address"
                className={`md:col-span-2 border p-3 rounded-md ${
                  error && !formData.address
                    ? "border-red-500 bg-red-50"
                    : "border-gray-300"
                }`}
              />
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="City"
                className={`border p-3 rounded-md ${
                  error && !formData.city
                    ? "border-red-500 bg-red-50"
                    : "border-gray-300"
                }`}
              />
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleInputChange}
                placeholder="Postal Code"
                className="border border-gray-300 p-3 rounded-md"
              />
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl Unbounded">Payment</h2>
            <div className="border border-gray-300 rounded-md overflow-hidden">
              <div className="p-4 bg-gray-50 Unbounded font-semibold">
                Credit Card
              </div>
              <div className="p-4 space-y-4 bg-white">
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="Card number"
                  className={`w-full border p-3 rounded-md ${
                    error && !formData.cardNumber
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="expiry"
                    value={formData.expiry}
                    onChange={handleInputChange}
                    placeholder="MM / YY"
                    className={`border p-3 rounded-md ${
                      error && !formData.expiry
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300"
                    }`}
                  />
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    placeholder="CVV"
                    className={`border p-3 rounded-md ${
                      error && !formData.cvv
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300"
                    }`}
                  />
                </div>
                <input
                  type="text"
                  name="nameOnCard"
                  value={formData.nameOnCard}
                  onChange={handleInputChange}
                  placeholder="Name on card"
                  className={`w-full border p-3 rounded-md ${
                    error && !formData.nameOnCard
                      ? "border-red-500 bg-red-50"
                      : "border-gray-300"
                  }`}
                />
              </div>
            </div>
          </section>

          <button
            onClick={handlePlaceOrder}
            className="w-full py-4 bg-[#4B70F5] rounded-md cursor-pointer text-white font-bold hover:bg-black transition-all shadow-lg active:scale-95"
          >
            Pay Now
          </button>
        </div>

        {/* RIGHT SECTION: Order Summary */}
        <div data-aos="fade-left" className="w-full lg:w-1/3 lg:sticky lg:top-24 self-start h-fit">
          <div className="border border-gray-200 rounded-xl p-6 lg:p-8 bg-white shadow-sm">
            <div className="flex items-center gap-2 text-xl font-bold mb-6 text-gray-800">
              <FaShoppingCart className="text-blue-600" /> Order Summary
            </div>

            <div className="max-h-[300px] overflow-y-auto space-y-6 mb-6 pr-2">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 items-center">
                  <div className="relative w-16 h-16 border rounded-lg p-1 shrink-0 bg-gray-50">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-gray-700 line-clamp-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-400 font-medium">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <span className="font-bold text-gray-800">
                    ${(item.newPrice * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <hr className="border-gray-100 my-6" />

            <div className="space-y-3 text-gray-600 font-medium text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax</span>
                <span>${estimatedTax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xl font-bold Unbounded text-gray-900 py-3 border-t border-gray-100 mb-6 ">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={handlePlaceOrder}
                className="w-full border cursor-pointer border-gray-300 text-gray-600 py-3 rounded-md font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-all text-sm"
              >
                Place Order
              </button>
              <Link
                href="/cart"
                className="w-full border border-gray-300 text-gray-600 py-3 rounded-md font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-all text-sm"
              >
                <FaArrowLeft size={12} /> Back to Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
