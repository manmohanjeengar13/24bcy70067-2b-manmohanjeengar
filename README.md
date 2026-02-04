# 🛍️ Dynamic Product Filter

**Next.js • React • TypeScript • Tailwind • Shadcn UI**

A modern web application that allows users to filter and sort products dynamically using dropdown controls.  
This project demonstrates React state management, reusable components, array filtering, sorting, and responsive UI design.

---

## 🌐 Features

- Filter products by category
- Sort products by price (Low → High / High → Low)
- Responsive product cards
- Smooth hover animations
- Instant UI updates using React state

---

## 🎯 Project Aim

To build a dynamic product filter that demonstrates:

- React state management  
- Controlled components  
- Reusable UI components  
- Array filtering & sorting  
- Responsive Tailwind layouts  

---

## 🛠️ Tech Stack

- Next.js  
- React  
- TypeScript  
- Tailwind CSS  
- Shadcn UI  
- pnpm  

---

## 🚀 Getting Started

### Install dependencies
```bash
pnpm install
Start development server
pnpm dev
Open in browser
http://localhost:3000
📂 Project Structure
app/
  layout.tsx
  page.tsx
  globals.css

components/
  product-card.tsx
  select-control.tsx

components/ui/
  (Shadcn UI components)

types/
  index.ts
🧠 Application Architecture
page.tsx → manages state and logic

SelectControl → renders dropdowns

ProductCard → renders products

Data Flow
User → Dropdown → State Update → Filter/Sort → UI Re-render

1️⃣ TypeScript Data Models
File: types/index.ts

export type SelectOption = {
  value: string
  label: string
}

export type Product = {
  id: number
  name: string
  price: number
  category: "electronics" | "clothing"
}
Why TypeScript?
Prevents invalid data

Provides autocomplete

Improves reliability

2️⃣ Reusable Dropdown Component
File: components/select-control.tsx

This component is used for both filtering and sorting.

Key Concept: Controlled Component
Flow:

User selects option → onValueChange() → Parent state updates → React re-renders UI

This pattern is called Lifting State Up.

3️⃣ Product Card Component
File: components/product-card.tsx

Cards include hover animation:

transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
Hover Effect
Card moves upward on hover

Shadow increases

Smooth transition animation

This creates a modern floating card UI.

4️⃣ State Management
File: app/page.tsx

const [filterCategory, setFilterCategory] = useState("all")
const [sortBy, setSortBy] = useState("default")
filterCategory → controls filtering

sortBy → controls sorting

🔍 Filtering Logic
let visibleProducts = PRODUCTS.filter((p) =>
  filterCategory === "all" ? true : p.category === filterCategory
)
Steps
Loop through products

If "All" selected → show all

Otherwise → match category

🔃 Sorting Logic
if (sortBy === "low") {
  visibleProducts.sort((a, b) => a.price - b.price)
}

if (sortBy === "high") {
  visibleProducts.sort((a, b) => b.price - a.price)
}
Low → High: a.price - b.price

High → Low: b.price - a.price

📱 Responsive Layout
grid grid-cols-1 md:grid-cols-2 gap-10
Mobile → 1 column

Desktop → 2 columns

🔄 Application Flow
User selects category

User selects sort option

Products are filtered

Products are sorted

React updates UI automatically

🎓 Learning Outcomes
This project teaches:

React component architecture

Props & state

Controlled components

Array filtering & sorting

Tailwind responsive design

Next.js App Router basics
