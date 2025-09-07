// src/components/nav/Navbar.tsx
"use client";

import { useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import Image from "next/image";

export default function Navbar() {
  const cartItems = useAppSelector((state) => state.cart.items);
  const [isOpen, setIsOpen] = useState(false);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <nav className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center relative">
      <h1 className="text-xl font-bold">Next Shop</h1>

      <div className="relative">
        {/* Open cart on click */}
        <span
          className="cursor-pointer"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Cart 🛒
        </span>

        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full px-2 text-xs">
            {cartItems.length}
          </span>
        )}

        {/* Cart Dropdown */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-80 bg-white text-black shadow-lg rounded z-50 p-4">
            <button
              className="mb-2 text-sm text-gray-500 hover:text-gray-800 float-right"
              onClick={() => setIsOpen(false)}
            >
              ✕ Close
            </button>

            {cartItems.length === 0 ? (
              <p className="text-center mt-6">Cart is empty</p>
            ) : (
              <>
                <ul className="max-h-64 overflow-y-auto space-y-2 mt-6">
                  {cartItems.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-center gap-2 border-b pb-2"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={50}
                        height={50}
                        className="object-contain"
                      />
                      <div className="flex-1">
                        <p className="font-bold text-sm">{item.title}</p>
                        <p className="text-xs text-gray-600">
                          ${item.price} x {item.quantity}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 font-bold flex justify-between">
                  <span>Total:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
