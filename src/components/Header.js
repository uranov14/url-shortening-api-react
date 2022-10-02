import React, {useState, useEffect} from 'react'
import logo from "../images/logo.svg"
import hamburger from '../images/icon-hamburger.svg'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [width] = useState(768)
  
    useEffect(() => {
      if(window.innerWidth >= width) {
          setIsOpen(true)
      } else {
          setIsOpen(false)
      }
    }, [width])

  return (
    <>
        <header className='flex items-center justify-between px-5 md:px-12 pt-7 pb-3 mt-3'>
            <div className='md:pl-12 md:ml-12'>
                <img src={logo} alt="logo"/>
            </div>

            <div className='md:hidden'>
                <img 
                    src={hamburger} 
                    alt="hamburger" 
                    className='w-6 cursor-pointer'
                    onClick={() => setIsOpen(!isOpen)}
                />
            </div>

            {isOpen && (
                <nav className='absolute top-20 md:top-0 md:relative md:flex justify-between rounded-lg shadow-2xl md:shadow-none md:bg-transparent px-5 py-5 md:py-0 md:pl-0 md:pr-12 md:mr-12 md:w-9/12'>
                    <ul className='pb-5 md:py-2 md:flex'>
                        <li className='py-3 px-5 md:px-0 md:py-0 text-center md:mx-3'>
                            <button className='hover:text-orange-300 md:hover:text-slate-800'>Features</button>
                        </li>
                        <li className='py-3 px-5 md:px-0 md:py-0 text-center md:mx-3'>
                            <button className='hover:text-orange-300 md:hover:text-slate-800'>Pricing</button>
                        </li>
                        <li className='py-3 px-5 md:px-0 md:py-0 text-center md:mx-3'>
                            <button className='hover:text-orange-300 md:hover:text-slate-800'>Resources</button>
                        </li>
                    </ul>
                    <hr className='md:hidden'/>
                    <div className='flex flex-col md:flex-row justify-center my-3 md:my-0'>
                        <button className='md:px-5 py-2 my-2 md:my-0 block md:inline text-white md:text-gray-400 hover:text-orange-300 md:hover:text-slate-800'>Login</button>
                        <button className='btn md:px-5 py-2 my-2 md:my-0 text-white rounded-full'>Sign Up</button>
                    </div>      
                </nav>
            )}
        </header>
    </>
  )
}

export default Header