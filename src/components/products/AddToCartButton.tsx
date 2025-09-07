// src/components/products/AddToCartButton.tsx
"use client";

import { useAppDispatch } from "../../redux/hooks";
import { addToCart } from "../../redux/cartSlice";
import type { Product } from "../../types/Product";

interface Props {
  product: Product;
}

export default function AddToCartButton({ product }: Props) {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <button
      onClick={handleAddToCart}
      className="mt-2 bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
    >
      Add to Cart
    </button>
  );
}
