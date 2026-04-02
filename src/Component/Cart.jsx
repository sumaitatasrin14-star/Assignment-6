

const Cart = ({carts}) => {
    console.log(carts)
    return (
        <div className="p-10 px-20">
            <div className="space-y-3">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            {
                carts.map(item =><div className="flex items-center gap-3 border rounded-lg p-3" key={item.id}>
                    <div>
                        <img className="h-10 w-10 object-contain" src={item.image}></img>
                    </div>
                    <div>
                    <div>
                        <h2 className=" font-bold">{item.title}</h2>
                    </div>
                    <div className=" font-bold">${item.price}/month</div>
                    </div>
                    </div>)
            
            }
            </div>
            <div className="flex justify-between bg-black text-white p-5 mt-5 rounded-lg text-xl">
                <div>Total</div>
                <div>0</div>
            </div>
        </div>
    );
};

export default Cart;