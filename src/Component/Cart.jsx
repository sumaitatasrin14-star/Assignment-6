import {toast} from 'react-toastify';

const Cart = ({carts, setCarts}) => {
    const totalPrice = carts.reduce((sum, item) => sum + item.price ,0)

    const handlePayment =()=>{
        setCarts([])
        toast.success("Payment successful!")
    }
    const handleDelete =(item)=>{
        const filteredArray = carts.filter(c => c.id !== item.id)
        setCarts(filteredArray)
        toast.success("Item removed!")
    }


    return (
        <div className="p-10 px-40">
            <div className="space-y-3">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            {carts.map((item) => (
      <div
        key={item.id}
        className="flex items-center justify-between border rounded-lg p-3"
      >
        {/* Left Side */}
        <div className="flex items-center gap-3">
          <div className="text-2xl">
            {/* If using emoji */}
            {item.icon}

            {/* If using image instead, use this: */}
            {/* <img src={item.image} className="h-10 w-10 object-contain" /> */}
          </div>

          <div>
            <h2 className="font-bold">{item.name}</h2>
            <div className="font-bold text-sm text-gray-600">
              ${item.price}/
              {item.pricingType === "monthly" ? "month" : "one-time"}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <button
          onClick={() => handleDelete(item)}
          className="px-4 py-1 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200"
        >
          Remove
        </button>
      </div>
    ))}
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