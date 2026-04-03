import ShoppingImg from "../assets/products/shopping-cart.png";


const NavBar = ({carts}) => {
  
  return (
    <div className="navbar">
  <div className="navbar-start">
    <div className="flex items-center gap-1 font-bold text-2xl text-purple-700">
      DigiTools
    </div>
  </div>

  <div className="navbar-center hidden md:flex">
    <ul className="menu menu-horizontal px-1 text-lg mx-auto">
      <li><a>Products</a></li>
      <li><a>Features</a></li>
      <li><a>Pricing</a></li>
      <li><a>Testemonials</a></li>
      <li><a>FAQ</a></li>
    </ul>
  </div>

  <div className="navbar-end gap-3">

    {/* 🛒 Cart with Notification */}
    <div className="relative">
      <div className="btn p-2">
        <img src={ShoppingImg} className="w-5 h-5" />
      </div>

      {/* 🔴 Badge */}
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1.5 rounded-full">
        {carts.length}
      </span>
    </div>

    <a className="btn">Log in</a>
    <a className="btn bg-purple-500 rounded-full text-white">
      Get Started
    </a>
  </div>
</div>
  );
};

export default NavBar;