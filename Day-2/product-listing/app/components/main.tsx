"use client";

import { useState } from "react";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 2499,
    description: "High-quality wireless headphones with clear sound.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Electronics",
    price: 3999,
    description: "Smart watch with fitness and health tracking.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 3,
    name: "Cotton T-Shirt",
    category: "Clothing",
    price: 799,
    description: "Comfortable cotton t-shirt for everyday wear.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
  },
  {
    id: 4,
    name: "Denim Jacket",
    category: "Clothing",
    price: 1899,
    description: "Stylish denim jacket with a modern design.",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5",
  },
  {
    id: 5,
    name: "Leather Wallet",
    category: "Accessories",
    price: 999,
    description: "Premium leather wallet with multiple card slots.",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93",
  },
  {
    id: 6,
    name: "Sunglasses",
    category: "Accessories",
    price: 1299,
    description: "Classic sunglasses with UV protection.",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 1599,
    description: "Portable speaker with powerful sound.",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
  },
  {
    id: 8,
    name: "Running Shoes",
    category: "Clothing",
    price: 2299,
    description: "Comfortable running shoes for daily workouts.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
];

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [sort, setSort] = useState("default");

  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All Categories" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  if (sort === "low-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (sort === "name") {
    filteredProducts.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  return (
    <div className="shop-page">

   

      {/* ================= MAIN ================= */}
      <main className="products-main">

        {/* Hero Heading */}
        <section className="products-heading">

          <p className="small-heading">
            DISCOVER OUR COLLECTION
          </p>

          <h2>Our Products</h2>

          <p className="heading-description">
            Explore our collection of quality products designed
            for your everyday needs.
          </p>

        </section>


        {/* ================= FILTERS ================= */}
        <section className="filter-section">

          {/* Search */}
          <div className="search-box">
            <span className="search-icon">⌕</span>

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>


          {/* Category */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="filter-select"
          >
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Clothing</option>
            <option>Accessories</option>
          </select>


          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="filter-select"
          >
            <option value="default">Sort By</option>
            <option value="low-high">
              Price: Low to High
            </option>
            <option value="high-low">
              Price: High to Low
            </option>
            <option value="name">
              Name: A to Z
            </option>
          </select>

        </section>


        {/* ================= PRODUCT AREA ================= */}
        <section className="product-section">

          <div className="product-count">
            <span>{filteredProducts.length}</span> Products
          </div>


          <div className="product-grid">

            {filteredProducts.map((product) => (

              <div
                key={product.id}
                className="product-card"
              >

                <div className="product-image-container">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />

                </div>


                <div className="product-details">

                  <p className="product-category">
                    {product.category}
                  </p>

                  <h2>{product.name}</h2>

                  <p className="product-price">
                    ₹{product.price}
                  </p>

                  <p className="product-description">
                    {product.description}
                  </p>

                  <button className="details-button">
                    View Details
                  </button>

                </div>

              </div>

            ))}
{/* VIEW MORE BUTTON */}

            {/* ================= 9TH VIEW MORE CARD ================= 
            <Link
              href="/products/all"
              className="view-more-card"
            >

              <div className="view-more-icon">
                →
              </div>

              <h2>View More Products</h2>

              <p>
                Explore our complete collection
                of products.
              </p>

              <span className="view-more-button">
                Explore All Products →
              </span>

            </Link>*/}

          </div>
<div className="mt-12 flex w-full justify-center">
  <Link
    href="/products"
    className="group flex w-fit items-center gap-3 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/40"
  >
    <span className="text-xl">🛒</span>

    <span className="whitespace-nowrap">
      View More Products
    </span>

    <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </Link>
</div>
        </section>

      </main>


     
    </div>
  );
}