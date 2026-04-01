import React from 'react';

const Star = () => {
    return (
        <div className="relative min-h-162.5  overflow-hidden">
        <div className="bg-purple-600 flex px-85 justify-between gap-15 py-20">
            <div>
                <h1 className="text-white text-5xl font-bold">50+</h1>
                <p className="text-white flex">Active Users</p>
            </div>
            
            <div>
                <h1 className="text-white text-5xl font-bold">200+</h1>
                <p className="text-white">Premium Tools</p>
            </div>
            <div>
                <h1 className="text-white text-5xl font-bold">4.9</h1>
                <p className="text-white text-center">Rating</p>
            </div>
        </div>
        </div>
    );
};

export default Star;