// src/components/Sidebar.tsx
export default function Sidebar() {
  return (
    <aside className="bg-gray-100 w-1/4 p-4">
      <h2 className="font-bold mb-2">Categories</h2>
      <ul className="space-y-2">
        <li>Electronics</li>
        <li>Clothing</li>
        <li>Books</li>
        <li>Accessories</li>
      </ul>
    </aside>
  );
}
