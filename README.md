# 🛍️ DigiTools

A simple and modern **React + Tailwind CSS** project that displays digital products and allows users to add/remove items from a cart.

---

## 🚀 Features

* 🧾 Product listing from JSON file
* 🛒 Add to Cart functionality
* ❌ Remove items from cart
* 💰 Dynamic pricing display (monthly / one-time)
* 🎨 Clean UI using Tailwind CSS
* 🔄 Reusable components

---

## 📂 Project Structure

```
src/
│
├── components/
│   ├── ProductList.jsx
│   ├── ProductCard.jsx
│   └── Cart.jsx
│
├── data/
│   └── products.json
│
├── App.jsx
└── main.jsx
```

---

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo-name.git
```

2. Navigate to the project:

```bash
cd your-repo-name
```

3. Install dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```

---

## 🧠 How It Works

* Products are stored in a **JSON file**
* React maps through the products and displays them as cards
* When clicking **"Buy Now" / "Add to Cart"**:

  * Product is added to cart state
* Cart component:

  * Displays selected items
  * Allows removing items

---

## 📄 Sample Product Data

```json
{
  "id": 1,
  "name": "AI Writing Pro",
  "price": 29,
  "pricingType": "monthly"
}
```

---

## 🎨 Tech Stack

* ⚛️ React
* 🎨 Tailwind CSS
* 🟨 JavaScript (ES6)

---

## ✨ Future Improvements

* 🧮 Total price calculation
* 🔢 Cart item count (Cart 2 badge)
* 💾 LocalStorage persistence
* 🌙 Dark mode
* 🔍 Search & filter products

---

## 🙌 Author

**Sumaita Tasrin**

---

## 📜 Project link:
flourishing-shortbread-a89631.netlify.app



