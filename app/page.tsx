"use client"

import { useState } from "react"
import ProductCard from "@/components/product-card"
import SelectControl from "@/components/select-control"
import { Product, SelectOption } from "@/types"

const PRODUCTS: Product[] = [
  { id: 1, name: "Wireless Headphones", price: 129.99, category: "electronics" },
  { id: 2, name: "Cotton T-Shirt", price: 24.99, category: "clothing" },
  { id: 3, name: "Bluetooth Speaker", price: 89.99, category: "electronics" },
  { id: 4, name: "Denim Jeans", price: 59.99, category: "clothing" },
]

const CATEGORY_OPTIONS: SelectOption[] = [
  { value: "all", label: "All Products" },
  { value: "electronics", label: "Electronics" },
  { value: "clothing", label: "Clothing" },
]

const SORT_OPTIONS: SelectOption[] = [
  { value: "default", label: "Default" },
  { value: "low", label: "Price: Low to High" },
  { value: "high", label: "Price: High to Low" },
]

export default function HomePage() {
  const [filterCategory, setFilterCategory] = useState("all")
  const [sortBy, setSortBy] = useState("default")

  let visibleProducts = PRODUCTS.filter((p) =>
    filterCategory === "all" ? true : p.category === filterCategory
  )

  if (sortBy === "low") {
    visibleProducts.sort((a, b) => a.price - b.price)
  }

  if (sortBy === "high") {
    visibleProducts.sort((a, b) => b.price - a.price)
  }

  return (
    <main className="min-h-screen bg-slate-100 py-16 text-gray-900">
      <div className="max-w-6xl mx-auto px-6 space-y-12">

        <h1 className="text-5xl font-bold tracking-tight">
  Product Filter
</h1>

        <div className="flex flex-wrap items-center gap-10">

          <SelectControl
            selectLabel="Filter by:"
            value={filterCategory}
            onValueChange={setFilterCategory}
            options={CATEGORY_OPTIONS}
            groupLabel="Categories"
            placeholder="Select category"
          />

          <SelectControl
            selectLabel="Sort by:"
            value={sortBy}
            onValueChange={setSortBy}
            options={SORT_OPTIONS}
            groupLabel="Sorting"
            placeholder="Sort products"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {visibleProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

      </div>
    </main>
  )
}
