/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const FaqBlock = (props) => {
  return (
    <div class="bg-white-100 rounded-lg relative p-5 pt-8 text-lg">
        <span class="w-8 h-8 inline-flex justify-center items-center text-white rounded-full absolute -top-4 left-4">
         <img src = {props.icon}/>
        </span>

        <h3 class="text-[#171A46] text-lg md:text-xl font-semibold mb-4 mt-4 text-justify">{props.question}</h3>
        <p class=" text-gray-500 text-justify">{props.answer}</p>
    </div>
  )
}

export default FaqBlock