import React from 'react'
import ipadVector from '../../assets/GetStarted/ipadVector.svg'

const HowToGetStarted = () => {
  return (
        <section class="text-gray-600 body-font overflow-hidden bg-white  ">
            <div class="container px-5  pt-12 py-14 mx-auto">
                <div class="flex flex-col text-center w-full ">
                    <h1 class="text-4xl mb-4 font-bold tracking-tight text-[#171A46] sm:text-5xl md:text-6xl">How to get started</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500  sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl  text-justify-center">Learn How EntrustUs Works</p>
                </div> 
            </div>
            <div class="container mx-auto flex px-5 py-4 md:flex-row justify-center  pb-10">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-5 md:mb-0">
                    <img class="object-cover object-center rounded" alt="hero" src={ipadVector}/>
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center mt-12">
                    <h1 class="text-4xl mb-4 font-bold tracking-tight text-[#171A46] sm:text-5xl md:text-6xl mb-12">Sign Up</h1>
                    <p class="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0 text-justify">Our secure end-of-life planning platform guides you to create or upload documents like living wills, advance directive forms, and estate planning documents that ensure users create a plan for a meaningful ending so they can live their best life</p>
                </div>
            </div>
        </section>
  )
}

export default HowToGetStarted