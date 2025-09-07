// src/components/nav/Navbar.tsx
"use client";

import { useAppSelector } from "../../redux/hooks"; 
export default function Navbar() {
  const cartItems = useAppSelector((state) => state.cart.items);

  return (
    <nav className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold">My Shop</h1>
      <div className="relative">
        <span>Cart 🛒</span>
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full px-2 text-xs">
            {cartItems.length}
          </span>
        )}
      </div>
    </nav>
  );
}
