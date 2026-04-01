import ShoppingImg from "../assets/products/shopping-cart.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-2xl text-purple-700">
          DigiTools
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 text-lg mx-auto">
           <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testemonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-1">
        <div className="btn"> <img src={ShoppingImg}></img></div>
        <a className="btn">Log in</a>
        <a className="btn bg-purple-500 rounded-full text-white">Get Started</a>
      </div>
    </div>
  );
};

export default NavBar;