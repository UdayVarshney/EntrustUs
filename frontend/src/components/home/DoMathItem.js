import React from 'react'

const DoMathItem = (props) => {
  return (
        <div class="p-4 md:w-1/2 flex flex-col text-center items-center">
            <div class = "flex justify-center align-items-center">
                <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#171A46] mb-5 flex-shrink-0">
                    <img class = "h-20 w-20" src = {props.icon} />
                </div>
                <h1 class = "ml-4 text-4xl mb-4 font-bold tracking-tight text-white sm:text-5xl md:text-6xl">{props.percentage}</h1>
            </div>
            <div class="flex-grow">
                <p class="mt-3 text-lg text-gray-300 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0 text-justify">{props.content}</p>
            </div>
        </div>
  )
}

export default DoMathItem