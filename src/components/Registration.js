import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {

  return (
    <div className=' lg:ml-24 lg:mt-8 lg:w-[91%] lg:flex lg:flex-col lg:justify-center lg:h-fit'>
        <section className='lg:flex lg:ml-2'>
            <img className='lg:w-[27px] lg:h-[20px]' src={require('../img/arrow.png')} alt="" />
            <p className='font-Inter lg:font-[500] lg:text-[20px] lg:w-[170px] lg:h-[24px] lg:relative lg:bottom-[5px] lg:left-1'>Free Registration</p>
        </section>
        <section className='lg:flex lg:my-12 lg:w-full   '>
            <img className='lg:w-[570px] ' src={require('../img/signUp.png')} alt="" />
            <div className='lg:w-full'>
                <div className=' lg:bg-[#F7F6FF] lg:h-[75vh] bg-white lg:w-[100%] lg:relative lg:top-[40px] lg:right-[60px] rounded-t-lg'>
                    <div className='lg:flex lg:w-full lg:h-[70vh] lg:items-center  lg:flex-col lg:justify-evenly'>
                        <section className='w-full lg:flex lg:flex-col justify-center items-center'>
                            <div className='lg:w-[50%] lg:text-left'>
                                <h3 className='font-Inter lg:font-[600] lg:text-[24px] text-left lg:relative lg:top-11'>Welcome to SpotGarage</h3>
                            </div>
                            <div className='lg:mt-12 lg:w-[55%] lg:ml-[35px]  lg:flex  '>
                                <p className='text-[#7E7E81] lg:border-b-2 lg:border-black font-[500] lg:text-[16px]'>Come and update your Personal & Garage Profile</p>
                            </div>
                        </section>
                        <section className='w-full lg:flex lg:flex-col justify-center items-center'>
                            <div className='w-[50%] text-left'>
                                <h3 className='text-[#6445FF] font-[500] font-Inter lg:text-[20px] lg:w-[100%]'>Add your Personal Details</h3>
                            </div>
                            <form className='w-[70%] text-center ml-[48px] lg:mt-8' action="">
                                <label className='font-[400] font-Inter lg:text-[16px] lg:mr-2 lg:after:content-["*"] lg:after:text-red-600 ' htmlFor="">Full Name</label>
                                <input className=' border-[1px] border-[#D9D9D9] lg:pr-8 lg:w-[234px] lg:ml-[65px] outline-none lg:h-[32px] rounded-md lg:pl-2' type="text" required name="" id="" />
                                <img className='lg:relative lg:left-[86%] lg:bottom-[15%]' src={require('../img/registration_input.png')} alt="" />
                                <label className='font-[400] font-Inter lg:text-[16px] lg:mr-[26px]' htmlFor=""> Email ID</label>
                                <input className=' border-[1px] border-[#D9D9D9] lg:pr-8 lg:w-[234px] lg:ml-[69px] outline-none lg:h-[32px] rounded-md lg:pl-2' type="email" name="" id="" />
                                <img className='lg:relative lg:left-[86%] lg:bottom-[15%]' src={require('../img/registration_input.png')} alt="" />
                                <button className='lg:mt-8 bg-[#FF6700] lg:h-[32px] lg:w-[191px] text-white rounded-sm'>CREAT YOUR GARARGE</button>
                            </form>
                        </section>
                    </div>
                </div>
                <div className='lg:bg-[#FF6700] lg:bottom-[-20px]  lg:h-[20px] lg:w-[100%] lg:relative lg:right-[60px]'></div>
            </div>
        </section>
    </div>
  )
}

export default SignUp