/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const ToDoComponent = (props) => {
  return (
        <div class="flex items-center lg:w-3/5 mx-auto mb-8 pb-10  sm:flex-row flex-col justify-center">
            <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <img src = {props.icon} class = "w-60 h-60" />
            </div>
            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 class="text-4xl mb-12 font-bold tracking-tight text-white sm:text-5xl md:text-6xl">{props.title}</h2>
                <p class="mt-3  text-gray-300 text-lg sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0 text-justify">{props.description}</p>
            </div>
        </div>
  )
}

export default ToDoComponent