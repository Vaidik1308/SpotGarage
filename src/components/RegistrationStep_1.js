import React from 'react'

const RegistrationStep_1 = () => {
  return (
    <div className='font-Inter lg:ml-24 lg:mt-8 lg:w-[91%] lg:flex lg:flex-col lg:justify-center lg:h-fit'>
        <section className='lg:flex lg:ml-2'>
            <img className='lg:w-[27px] lg:h-[20px]' src={require('../img/arrow.png')} alt="" />
            <p className='font-Inter lg:font-[500] lg:text-[20px] lg:w-[170px] lg:h-[24px] lg:relative lg:bottom-[5px] lg:left-1'>Free Registration</p> 
        </section>
        <section className='w-full'>
            <div className='w-full lg:flex lg:justify-center'>
                <h2 className='lg:text-[32px] font-[600] font-Inter'>Create Your garage account Today. <span>For Free ! </span></h2>
            </div>
            <div className='w-full lg:flex lg:justify-center'>
                <p className='font-[500] font-Inter lg:text-[18px]'>In just 3 steps you will have your own  Digital Garage</p>
            </div>
        </section>
    </div>
  )
}

export default RegistrationStep_1