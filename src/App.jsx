
import NavBar from './Component/NavBar'
import Banner from './Component/Banner'
import './App.css'
import Modals from './Component/Modals'
import Star from './Component/Star'
import Cart from './Component/Cart'
import { useState } from 'react'


const getModals = async() =>{
  const res =  await fetch("/modals.json")
  return res.json()
}

const modalPromise = getModals()


function App() {
  const [activeTab,setActiveTab] = useState("model")
  const [carts,setCarts] = useState([])
  console.log(carts)

  return (
    <>
          <NavBar></NavBar>
          <hr className='bg-gray-500'></hr>
          <Banner></Banner>
          <Star></Star>
          {/* name of each tab group should be unique */}
        <div className="mt-5 tabs tabs-box justify-center bg-transparent">
          <input type="radio" name="my_tabs_1" className="tab rounded-full w-40 font-bold" aria-label="Products" defaultChecked onClick={()=> setActiveTab("modal")} />
          <input type="radio" name="my_tabs_1" className="tab rounded-full w-40 font-bold" aria-label="Cart" onClick={()=> setActiveTab("cart")} />
  
      </div>
          
          {activeTab === "modal" && <Modals modalPromise={modalPromise} carts={carts} setCarts={setCarts}></Modals>}
          {activeTab === "cart" && <Cart carts={carts}></Cart>}
          
          
      
    </>
  )
}

export default App
