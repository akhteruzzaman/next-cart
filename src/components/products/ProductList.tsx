// src/components/products/ProductList.tsx
"use client";

import { useEffect } from "react";
import { fetchProducts } from "../../redux/productSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import AddToCartButton from "./AddToCartButton";
import type { Product } from "../../types/Product";
import Image from "next/image";

export default function ProductList() {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p className="p-4">Loading products...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;

  return (
    <main className="w-3/4 p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((product: Product) => (
        <div
          key={product.id}
          className="border p-4 rounded shadow hover:shadow-lg"
        >
          <Image
            src={product.image}
            alt={product.title}
            width={200}
            height={200}
            className="h-40 mx-auto object-contain"
            priority
          />
          <h3 className="font-bold mt-2 text-sm">{product.title}</h3>
          <p className="text-gray-600">${product.price}</p>
          <AddToCartButton product={product} />
        </div>
      ))}
    </main>
  );
}
