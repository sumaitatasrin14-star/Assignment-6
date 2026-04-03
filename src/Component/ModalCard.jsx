import React, { useState } from 'react';
import {toast} from 'react-toastify';

const ModalCard = ({modal, carts, setCarts}) => {
    const [isBuynow, setIsBuynow] =useState(false)

    const handleBuyNow =()=>{
         setIsBuynow(true)

        const isFound =carts.find(item => item.id === modal.id)
        if(isFound){
            toast.error("Item already in cart!")
            return
        }

         setCarts([...carts,modal])
         toast.success("Item added to cart")

    }
    return (
        <div className="shadow-lg rounded-lg border overflow-hidden border-purple-200">

  {/* Image / Icon */}
  <div className="flex justify-center items-center h-40 bg-white text-5xl">
    <span>{modal.icon}</span>
  </div>

  {/* Content */}
  <div className="p-4 space-y-3">
    <h2 className="text-2xl font-bold">{modal.name}</h2>
    <p className="text-gray-500 text-sm">{modal.description}</p>

    {/* Badge */}
    <span className="inline-block text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-600">
      {modal.badge}
    </span>
  </div>

  {/* Price */}
  <div className="text-2xl font-bold px-4">
    ${modal.price}
    <span className="text-sm font-normal text-gray-500">
      /{modal.pricingType === "monthly" ? "month" : "one-time"}
    </span>
  </div>

  {/* Features */}
  <ul className="px-4 py-2 text-sm space-y-1">
    {modal.features.map((item, index) => (
      <li key={index}>✔ {item}</li>
    ))}
  </ul>

  {/* Button */}
  <div className="p-4">
    <button
      onClick={handleBuyNow}
      className="w-full bg-purple-500 text-white rounded-full py-2 hover:bg-purple-600 transition"
    >
      {isBuynow ? "Add To Cart" : modal.buttonText}
    </button>
  </div>

</div>
    );
};

export default ModalCard;