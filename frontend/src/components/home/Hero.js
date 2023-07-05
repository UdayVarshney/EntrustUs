/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import homeVector from "../../assets/homeVector/homeVector.svg";

const hero = () => {
  return (
    <section class="w-full bg-[#171A46] pb-8 sm:pb-32 md:pb-60 lg:pb-42 xl:pb-40">
      <main class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
        <div class="sm:text-center lg:text-left pt-36">
          <h1 class="text-4xl mb-12 font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span class="block">Be Prepared</span>
          </h1>
          <p class="mt-3 text-base text-gray-300 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-lg lg:mx-0">
            Let us help you and your family plan for challenging times and bring order to the chaos that is everyday life
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <a
                href="#"
                class="flex  items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-[#171A46] hover:bg-white md:py-4 md:px-10 md:text-lg"
              >
                Get started
              </a>
            </div>
          </div>
          <img
            src={homeVector}
            alt="homeVector"
            //class="justify-end w-1/2 h-auto"
            //class=" absolute right-0 h-auto sm:-bottom-[100%] md:-bottom-[170%] lg:-bottom-[200%] xl:-bottom-[170%] 2xl:-bottom-[150%] "
            class="absolute right-0 h-auto lg:w-[95%] lg:-bottom-[30%] md:w-[85%] md:-bottom-[15%] xl:w-[80%] xl:-bottom-[25%] sm:-bottom-[0] sm:w-[80%] 2xl:w-[75%] 2xl:-bottom-[40%] "
            // class="absolute right-0 h-auto object-cover lg:top-[30rem] lg:w-[80vw] sm:top-[30rem] sm:w-[90vw] md:top-[32rem] md:w-[80vw]"
          />
        </div>
      </main>
    </section>
  );
}

export default hero