
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import FooterCom from './Components/FooterCom'

function App() {

  return (
    <div className=''>
    
    <Navbar></Navbar>
   
   <Outlet></Outlet>
   <FooterCom></FooterCom>
    </div>
   
  )
}

export default App
