import { Heart, ShoppingCart } from "lucide-react";
import React from "react";
import Products from "../assets/products";
const ProductCard = ({ product }: { product: (typeof Products)[number] }) => {
  return React.createElement(
    "div",
    { className: "group" },
    React.createElement(
      "div",
      { className: "relative overflow-hidden rounded-xl bg-gray-100" },
      React.createElement("img", {
        src: product.image,
        alt: product.name,
        className: "w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105",
      }),
      React.createElement(
        "button",
        { className: "absolute top-3 right-3 bg-white p-2 rounded-full transition-all active:scale-90 active:opacity-50" },
        React.createElement(Heart, { size: 18 }),
      ),
    ),
    React.createElement(
      "div",
      { className: "mt-3" },
      React.createElement("h2", { className: "font-semibold" }, product.name),
      React.createElement("p", { className: "text-gray-600" }, `₹${product.price}`),
      React.createElement(
        "button",
        { className: "mt-2 flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full" },
        React.createElement(ShoppingCart, { size: 17 }),
        "Add to Cart",
      ),
    ),
  );
};

export default ProductCard;