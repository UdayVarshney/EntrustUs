/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const CTA = () => {
  return (
      <div class="container py-20 lg:py-[120px]">
        <div class="bg-[#171A46] relative rounded-xl py-8 px-8 z-10">
            <div class="flex flex-wrap items-center -mx-4">
                  <div class="w-full lg:w-1/2 px-4 text-left">
                      <span class="text-white text-base font-semibold ">
                        Still have questions?
                      </span>
                      <h2 class="text-white text-sm text-left leading-tight mb-6 sm:mb-8 lg:mb-0">
                        Can't find the answer you're looking for? Please chat to our friendly team.
                      </h2>
                  </div>
            <div class="w-full lg:w-1/2 px-4">
               <div class="flex flex-wrap lg:justify-end">
                  <a href="javascript:void(0)" class="inline-block py-2 px-6 md:px-9 lg:px-6 xl:px-9 rounded text-base font-medium bg-white transition hover:bg-opacity-90 text-[#171A46] my-1">
                  Get in touch
                  </a>
               </div>
            </div>
         </div>
      </div>
   </div>
  )
}

export default CTA