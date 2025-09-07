// src/app/page.tsx
import Navbar from "../components/nav/Navbar";
import Sidebar from "../components/nav/Sidebar";
import ProductList from "../components/products/ProductList";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <ProductList />
      </div>
    </div>
  );
}
