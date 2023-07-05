import React from 'react'
import nominee from '../../assets/Nominee/Nominee.svg'

const Nominee = () => {
    return (
    <section class="text-gray-600 body-font  bg-white">
      <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={nominee}></img>
        <div class="text-center lg:w-2/3 w-full">
          <h1 class="text-4xl mb-12 font-bold tracking-tight text-[#171A46] sm:text-5xl md:text-6xl">Choose your nominee</h1>
          <p class="mb-8 leading-relaxed text-lg text-justify">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
        </div>
      </div>
    </section>
    )
}

export default Nominee