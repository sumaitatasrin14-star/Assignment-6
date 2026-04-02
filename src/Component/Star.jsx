import React from 'react';

const Star = () => {
    return (
        <div className="bg-purple-600 px-10 py-20 flex justify-center items-center text-center gap-30">
      
      <div>
        <h1 className="text-white text-5xl font-bold">50+</h1>
        <p className="text-white">Active Users</p>
      </div>

      {/* Divider */}
      <div className="h-12 w-[2px] bg-white/40"></div>

      <div>
        <h1 className="text-white text-5xl font-bold">200+</h1>
        <p className="text-white">Premium Tools</p>
      </div>

      {/* Divider */}
      <div className="h-12 w-[2px] bg-white/40"></div>

      <div>
        <h1 className="text-white text-5xl font-bold">4.9</h1>
        <p className="text-white">Rating</p>
      </div>

    </div>
    );
};

export default Star;