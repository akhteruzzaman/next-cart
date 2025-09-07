# 📦 Next.js Cart Application  

[![Next.js](https://img.shields.io/badge/Next.js-13-black?logo=next.js)](https://nextjs.org/)  
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-593D88?logo=redux&logoColor=white)](https://redux-toolkit.js.org/)  
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)  
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)  

This project is a simple **e-commerce cart system** built with **Next.js 13 (App Router)**, **Redux Toolkit**, and **TypeScript**. It demonstrates how to integrate state management with Redux in a modern Next.js application, fetch data from an API, and manage a shopping cart with product quantity, pricing, and a live cart dropdown.  

👉 **Live Demo:** [next-cart-hazel.vercel.app](https://next-cart-hazel.vercel.app/)  

---

## 🚀 Features  

- 🛍 **Product Listing Page**: Fetches products from [Fake Store API](https://fakestoreapi.com/) and displays them with images, titles, and prices.  
- ➕ **Add to Cart**: Each product includes an “Add to Cart” button that stores items in the Redux state.  
- 🛒 **Cart Dropdown**: The Navbar contains a cart icon. When clicked, it opens a dropdown showing:  
  - Product images, names, and quantities  
  - Price per item × quantity  
  - Auto-calculated total price  
- 🔄 **Quantity Handling**: Repeatedly adding the same product increases its quantity instead of duplicating it.  
- 📱 **Responsive Layout**:  
  - Top navigation bar  
  - Left category section  
  - Centered product grid (responsive across devices)  
- ⚡ **Optimized Images**: Uses `next/image` for performance and LCP improvements.  

---

## 🛠️ Tech Stack  

- [Next.js 13](https://nextjs.org/) – React framework  
- [TypeScript](https://www.typescriptlang.org/) – Type safety  
- [Redux Toolkit](https://redux-toolkit.js.org/) – State management  
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first styling  
- [Fake Store API](https://fakestoreapi.com/) – Sample product data  

---

## 📂 Project Structure  


