

const Cart = ({carts, setCarts}) => {
    const totalPrice = carts.reduce((sum, item) => sum + item.price ,0)

    const handlePayment =()=>{
        setCarts([])
    }
    const handleDelete =(item)=>{
        const filteredArray = carts.filter(c => c.id !== item.id)
        setCarts(filteredArray)
    }


    return (
        <div className="p-10 px-40">
            <div className="space-y-3">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            {
                
                carts.map(item =><div className="flex items-center gap-3 border rounded-lg p-3" key={item.id}>
                    <div>
                        <img className="h-10 w-10 object-contain" src={item.image}></img>
                    </div>
                    <div className="flex gap-230">
                    <div>
                        <h2 className=" font-bold">{item.title}</h2>
                        <div className=" font-bold">${item.price}/month</div>
                    </div>
                    
                    <button onClick={()=>handleDelete(item)} className="btn rounded-3xl bg-purple-100">Remove</button>
                    </div>
                    
                    </div>)
            
            }
            </div>
            <div className="flex justify-between  text-black mt-3 rounded-lg text-2xl font-bold">
                <div>Total</div>
                <div>{totalPrice}</div>
            </div>
            <button onClick={handlePayment} className="btn w-full mt-5 bg-purple-600 text-white text-xl rounded-lg">Proceed to Checkout</button>
        </div>
    );
};

export default Cart;