import React from 'react'
import whyVector from '../../assets/WhyEntrustus/whyVector.svg'
const whyEntrustus = () => {
  return (
    <section class="  mt-[2rem] text-gray-600 body-font bg-white rounded-br-[120px] xl:mt-[6rem] lg:mt-[3rem] md:mt-[5rem]">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img class="object-cover object-center rounded" alt="hero" src={whyVector}/>
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="text-4xl mb-4 font-bold tracking-tight text-[#171A46] sm:text-5xl md:text-6xl">Why EntrustUs?</h1>
          <p class="mt-3 text-lg text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0 text-justify">Our secure end-of-life planning platform guides you to create or upload documents like living wills, advance directive forms, and estate planning documents that ensure users create a plan for a meaningful ending so they can live their best life.</p>
        </div>
      </div>
    </section>
  );
}

export default whyEntrustus