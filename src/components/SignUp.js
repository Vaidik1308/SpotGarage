import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className=' lg:ml-24 lg:mt-8 lg:w-[91%] lg:flex lg:flex-col lg:justify-center lg:h-fit'>
        <section className='lg:flex lg:ml-2'>
            <img className='lg:w-[27px] lg:h-[20px]' src={require('../img/arrow.png')} alt="" />
            <p className='font-Inter lg:font-[500] lg:text-[20px] lg:w-[72px] lg:h-[24px] lg:relative lg:bottom-[5px] lg:left-1'>Sign up</p>
        </section>
        <section className='lg:flex lg:my-12 lg:w-full   '>
            <img className='lg:w-[570px] ' src={require('../img/signUp.png')} alt="" />
            <div className='lg:w-full'>
                <div className=' lg:bg-[#F7F6FF] lg:h-[75vh] bg-white lg:w-[100%] lg:relative lg:top-[40px] lg:right-[60px] rounded-t-lg'>
                    <div className='lg:flex lg:w-full lg:h-[70vh] lg:items-center  lg:flex-col lg:justify-center'>
                        <h3 className='font-Inter lg:font-[500] lg:text-[20px] lg:relative lg:top-11'>Sign up using your mobile number!</h3>
                        <div className='lg:mt-12 lg:relative lg:flex lg:top-[42px] lg:right-[125px] lg:border-r-2 lg:border-black lg:pr-1'>
                            <img src={require('../img/indian_flag.png')} alt="" />
                            <span className='lg:font-[600] font-Inter lg:text-[16px] lg:mt-1'>+91</span>
                        </div>
                        <input 
                            className='lg:shadow-md lg:rounded-md lg:w-[340px] lg:h-[50px] lg:text-[16px] font-[600] lg:pl-[85px] lg:outline-none lg:'
                            placeholder='9876543210' 
                            type="number" 
                            name="" 
                            required
                            id="" />
                        <button  className='lg:mt-[25px] bg-[#6445FF] lg:w-[98px] lg:h-[42px] lg:text-[14px] font-Inter lg:font-[500] text-white lg:rounded-md'>GET OTP</button>
                        <button  className='lg:font-[500] font-Inter lg:text-[10px] text-[#FF6700] lg:relative lg:top-[43.5px] lg:left-[115px]'>Resend OTP</button>
                        <input 
                            className='lg:mt-[10px] lg:mb-4 lg:shadow-md lg:rounded-md lg:w-[340px] text-[#6F6969] lg:pr-24 lg:h-[50px] lg:text-[14px] font-[600] lg:pl-5 outline-none'
                            placeholder='OTP' 
                            type="number" 
                            name="" 
                            id="" 
                            required
                        />
                        <button type='submit' className='lg:mt-[11px] font-Inter lg:w-[340px] lg:h-[50px] bg-[#FF6700] lg:text-[14px] text-white lg:rounded-md'>SIGN UP</button>
                        <p className='lg:text-[16px] lg:font-[500] font-Inter lg:mt-[10px]'>Already have an account ? <span className='text-[#6445FF]'><Link to='/login' >Login here</Link></span> </p>
                    </div>
                </div>
                <div className='lg:bg-[#FF6700] lg:bottom-[-20px]  lg:h-[20px] lg:w-[100%] lg:relative lg:right-[60px]'></div>
            </div>
        </section>
    </div>
  )
}

export default SignUp