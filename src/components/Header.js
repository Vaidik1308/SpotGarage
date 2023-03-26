import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className=' bg-[#6243FE] lg:h-[80px] lg:w-full lg:mt-1 lg:justify-between lg:flex' >
        <section>
            <div className='lg:bg-white lg:w-[278px] lg:h-[73px] lg:items-center  logo lg:justify-evenly lg:flex'>
                <img className='lg:w-[42.74px] lg:h-[50px]' src={require('../img/logo_2.png')} alt="" />
                <h4 className='lg:text-[28px] font-Inter font-[600]'>SpotGarage</h4>
            </div>
        </section>
        <section className='lg:flex lg:justify-center lg:items-center text-white lg:w-[45%]'>
            <div className=''>
                <ul className='lg:flex'>
                    <li className='lg:mx-4 font-Inter lg:text-[18px] lg:font-[400]'><Link to='/home'>Home</Link></li>
                    <li className='lg:mx-4 font-Inter lg:text-[18px] lg:font-[400]'><Link to='/about'>About Us</Link></li>
                    <li className='lg:mx-4 font-Inter lg:text-[18px] lg:font-[400]'><Link to='/contact'>Contact Us</Link></li>
                </ul>
            </div>
            <button className='lg:border lg:bottom-[4px] lg:w-[18%] lg:h-[6vh] lg:flex lg:justify-center lg:ml-2 lg:items-center'>
                <p className=' font-Inter lg:font-[400] lg:text-[20px]'><Link to='/login'>Login</Link></p>
            </button>
        </section>
    </div>
  )
}

export default Header