import React from 'react';
import { use } from 'react';
const Modals = ({modalPromise}) => {
    const modals = use(modalPromise)
    console.log(modals)
    return (
        <div>
            <div className='text-center'>
                <h1 className="text-5xl font-bold">Premium Digital Tools</h1>
                <p>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 px-10'>
                {modals.map(modal=><div className="shadow-lg rounded-lg border overflow-hidden border-zinc-300">
                    <div className="flex justify-center items-center h-56 bg-zinc-200">
                        <img className='h-20 w-20' src={modal.image}/>
                    </div>
                    <div className='p-4 space-y-3'>
                        <h2 className='text-2xl font-bold'>{modal.title}</h2>
                        <p>{modal.description}</p>
                    </div>
                    <div>
                        ${modal.price}/month
                    </div>
                    <button>Buy now</button>
                    </div>
                    )}
            </div>
        </div>
    );
};

export default Modals;