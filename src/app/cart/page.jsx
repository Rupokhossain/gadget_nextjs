"use client";
import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, addToCart } from "@/redux/cartSlice";
import { FaStar, FaStore } from "react-icons/fa";
import Link from "next/link";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.newPrice * item.quantity,
    0
  );
  const taxes = 10.0;
  const total = subtotal + (cartItems.length > 0 ? taxes : 0);

  return (
    <div className="container mx-auto px-4 lg:px-24 py-10 min-h-screen">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section: Cart Table */}
        <div className="lg:w-2/3 w-full overflow-x-auto">
          <table className="w-full text-left border-collapse border border-gray-100">
            <thead>
              <tr className="bg-[#DEE5FF] text-gray-800">
                <th className="py-3 px-4 Unbounded font-normal text-left">
                  Product
                </th>
                <th className="py-3 px-4 Unbounded font-normal text-left">
                  Price
                </th>
                <th className="py-3 px-4 Unbounded font-normal text-left">
                  Quantity
                </th>
                <th className="py-3 px-4 Unbounded font-normal text-left">
                  Subtotal
                </th>
                <th className="py-3 px-4 Unbounded font-normal text-left">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b border-gray-200">
                  <td className="py-3 px-6 flex flex-col items-center gap-4 h-36">
                    <div className="object-contain h-[100px] flex items-center justify-center rounded w-full">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={220}
                        height={120}
                        className="object-contain"
                      />
                    </div>
                    <div className="text-center w-full">
                      <h4 className="font-medium Unbounded">{item.title}</h4>
                      <p className="my-2 text-sm text-gray-500 flex items-center justify-center gap-1 mt-1">
                        <FaStore className="text-blue-500" /> By ElectraHub
                      </p>
                      <div className="flex items-center text-yellow-500 text-sm justify-center">
                        <FaStar />{" "}
                        <span className="text-gray-400 ml-1">
                          ({item.rating}) Reviews
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-6 Unbounded">${item.newPrice}</td>
                  <td className="p-4">
                    <div className="flex items-center justify-center border border-gray-300 rounded-lg w-fit mx-auto overflow-hidden">
                      <button
                        className="px-3 py-1 hover:bg-gray-100 cursor-pointer"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        -
                      </button>
                      <span className="px-4 py-1 border-x border-gray-300 font-bold">
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
                  <td className="py-3 px-6 Unbounded">
                    ${(item.newPrice * item.quantity).toFixed(2)}
                  </td>
                  <td className=" cursor-pointer">
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="text-red-500! Unbounded hover:text-red-700 cursor-pointer"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {cartItems.length === 0 && (
                <tr>
                  <td
                    colSpan="5"
                    className="p-10 text-center text-gray-400 font-bold italic"
                  >
                    Your cart is empty!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Right Section: Totals Summary */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-24 self-start h-fit">
          <div className="bg-[#DEE5FF] p-8 rounded-lg space-y-4 shadow-sm">
            <h3 className="text-xl font-bold text-gray-800">Cart Totals</h3>
            <div className="flex justify-between text-gray-700 font-medium">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-700 font-medium">
              <span>Estimated Delivery</span>
              <span className="text-blue-600 font-bold">Free</span>
            </div>
            <div className="flex justify-between text-gray-700 font-medium">
              <span>Estimated Taxes</span>
              <span>
                USD {cartItems.length > 0 ? taxes.toFixed(2) : "0.00"}
              </span>
            </div>
            <hr className="border-gray-300" />
            <div className="flex justify-between text-xl font-black text-gray-900">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <Link href="/checkout">
              <button className="w-full bg-[#4B70F5] hover:bg-black duration-300 cursor-pointer text-white py-4 rounded-md font-bold transition-all shadow-lg shadow-blue-200 mt-4">
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
