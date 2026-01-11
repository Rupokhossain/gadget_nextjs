"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, addToCart } from "@/redux/cartSlice";
import { FaStar, FaStore } from "react-icons/fa";
import Link from "next/link";
import AOS from "aos";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

   useEffect(() => {
    AOS.refresh();
  }, [cartItems]);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.newPrice * item.quantity,
    0
  );
  const taxes = 10.0;
  const total = subtotal + (cartItems.length > 0 ? taxes : 0);

  return (
    <div className="container mx-auto px-4 xl:px-24 py-10 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Section: Cart Items */}
        <div className="w-full xl:w-2/3" data-aos="fade-right" data-aos-duration="1000">
          {/* --- 1. DESKTOP VIEW (Table) - Visible on md and up --- */}
          <div className="hidden md:block border border-gray-200 cursor-pointer rounded-xl bg-white shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#DEE5FF] text-gray-800">
                <tr>
                  <th className="py-4 px-6 Unbounded font-semibold text-sm">
                    Product
                  </th>
                  <th className="py-4 px-6 Unbounded font-semibold text-sm">
                    Price
                  </th>
                  <th className="py-4 px-6 Unbounded font-semibold text-sm text-center">
                    Quantity
                  </th>
                  <th className="py-4 px-6 Unbounded font-semibold text-sm">
                    Subtotal
                  </th>
                  <th className="py-4 px-6 Unbounded font-semibold text-sm">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr
                    key={item.id}
                       data-aos="fade-up"
                    data-aos-delay={index * 100}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="py-6 px-6 flex items-center gap-4">
                      <div className="relative w-[250px] h-[150px] flex items-center justify-center rounded bg-gray-50 p-1">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={180}
                          height={120}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="Unbounded font-medium text-lg line-clamp-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-gray-500">By ElectraHub</p>
                      </div>
                    </td>
                    <td className="py-6 px-6 font-bold text-gray-800">
                      ${item.newPrice}
                    </td>
                    <td className="py-6 px-6">
                      <div className="flex items-center border border-gray-300 rounded w-fit mx-auto overflow-hidden">
                        <button
                          className="px-3 py-1 hover:bg-gray-100 cursor-pointer"
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          -
                        </button>
                        <span className="px-4 font-bold text-sm">
                          {item.quantity}
                        </span>
                        <button
                          className="px-3 py-1 hover:bg-gray-100 cursor-pointer"
                          onClick={() => dispatch(addToCart(item))}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="py-6 px-6 font-bold text-gray-800">
                      ${(item.newPrice * item.quantity).toFixed(2)}
                    </td>
                    <td className="py-6 px-6">
                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="text-red-500 font-bold hover:underline cursor-pointer"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* --- 2. MOBILE VIEW (Cards) - Visible only on small screens --- */}
          <div className="md:hidden flex flex-col gap-6">
            {cartItems.map((item, index) => (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-4"
              >
                {/* Product Image */}
                <div className="relative w-full h-48 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-4"
                  />
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <h4 className="Unbounded font-medium text-lg text-gray-900 leading-tight">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-blue-500 text-sm font-medium">
                    <FaStore size={14} /> <span>By ElectraHub</span>
                  </div>
                  <div className="flex items-center text-yellow-400 text-sm">
                    <FaStar />{" "}
                    <span className="text-gray-400 ml-1">
                      ({item.rating}) Reviews
                    </span>
                  </div>
                </div>

                {/* Price Info */}
                <div className="space-y-1 py-2 border-y border-gray-50">
                  <div className="flex justify-between text-base">
                    <span className="font-bold text-gray-800">Price:</span>
                    <span className="font-bold text-gray-900">
                      ${item.newPrice}
                    </span>
                  </div>
                  <div className="flex justify-between text-base">
                    <span className="font-bold text-gray-800">Subtotal:</span>
                    <span className="font-bold text-gray-900">
                      ${(item.newPrice * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Bottom Row: Quantity and Delete */}
                <div className="flex justify-between items-center pt-2">
                  <div className="flex items-center border border-gray-400 rounded-lg overflow-hidden bg-white">
                    <button
                      className="px-4 py-1.5 hover:bg-gray-100 font-bold text-xl cursor-pointer"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      -
                    </button>
                    <span className="px-5 font-bold">{item.quantity}</span>
                    <button
                      className="px-4 py-1.5 hover:bg-gray-100 font-bold text-xl cursor-pointer"
                      onClick={() => dispatch(addToCart(item))}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-red-500 font-bold text-lg hover:underline cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {cartItems.length === 0 && (
            <div className="p-20 text-center text-gray-400 font-bold italic text-lg bg-white rounded-xl border border-dashed border-gray-300">
              Your cart is empty!
            </div>
          )}
        </div>

        {/* Right Section: Totals Summary (Always Visible) */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-24 h-fit" data-aos="fade-left" data-aos-duration="1000">
          <div className="bg-[#DEE5FF] p-8 rounded-2xl space-y-5 shadow border border-gray-100">
            <h3 className="text-xl font-bold mb-4">Cart Totals</h3>
            <div className="space-y-3 text-gray-700 font-medium text-lg">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-bold text-gray-900">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Delivery</span>
                <span className="text-blue-600 font-bold">Free</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Taxes</span>
                <span className="font-bold">
                  USD {cartItems.length > 0 ? taxes.toFixed(2) : "0.00"}
                </span>
              </div>
            </div>
            <hr className="border-gray-400 my-2" />
            <div className="flex justify-between text-xl font-semibold Unbounded py-2">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Link href="/checkout" className="block w-full">
              <button className="w-full py-3 cursor-pointer bg-[#4B70F5] text-white font-semibold rounded-lg mt-4 hover:bg-black transition">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
