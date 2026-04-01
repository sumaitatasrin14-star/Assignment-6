
import NavBar from './Component/NavBar'
import Banner from './Component/Banner'
import './App.css'
import Modals from './Component/Modals'
import Star from './Component/Star'


const getModals = async() =>{
  const res =  await fetch("/modals.json")
  return res.json()
}

const modalPromise = getModals()


function App() {
  

  return (
    <>
          <NavBar></NavBar>
          <hr className='bg-gray-500'></hr>
          <Banner></Banner>
          <Star></Star>
          <Modals modalPromise={modalPromise} ></Modals>
          
      
    </>
  )
}

export default App
