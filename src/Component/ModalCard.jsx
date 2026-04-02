import React, { useState } from 'react';

const ModalCard = ({modal, carts, setCarts}) => {
    const [isBuynow, setIsBuynow] =useState(false)

    const handleBuyNow =()=>{
         setIsBuynow(true)
         setCarts([...carts,modal])
    }
    return (
        <div className="shadow-lg rounded-lg border overflow-hidden border-purple-200">
                    <div className="flex justify-center items-center h-50 bg-purple-500">
                        <img className='h-20 w-20 object-contain' src={modal.image}/>
                    </div>
                    <div className='p-4 space-y-3'>
                        <h2 className='text-2xl font-bold'>{modal.title}</h2>
                        <p>{modal.description}</p>
                    </div>
                    <div className='text-2xl font-bold p-4'>
                        ${modal.price}/month
                    </div>
                    <button onClick ={handleBuyNow}className='btn w-full bg-purple-500 text-white rounded-full mb-2'>
                        {isBuynow ? "Add To Cart" :"Buy now"}</button>
                    </div>
    );
};

export default ModalCard;