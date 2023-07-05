import React from 'react'

const GetInTouch = () => {
  return (
    <section class="bg-white dark:bg-[#171A46]">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="w-1/2 mb-4 text-4xl tracking-tight font-extrabold text-left text-[#171A46] dark:text-white">Get in Touch</h2>
      <div class="relative h-32 w-32">
       <div class="absolute top-0 right-0 h-16 w-16 ...">
        <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </div>
      </div>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Have questions or feedback about the EntrustUs Platform? Send us a message and we'll get back to you.</p>
      <form action="#" class="container mx-auto my-4 px-4">
      <div className="flex :flex">
       <div className="w-1/2">
          <div className="mb-5 mr-5" >
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-[#171A46] text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Name" required/>
          </div>
          <div className="mb-5 mr-5">
              <input type="text" id="subject" class="block p-3 w-full text-sm text-[#171A46] bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Email" required/>
          </div> 
        </div>
         
          <div class="sm:col-span-2 w-1/2 ">
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-[#171A46] bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
      </div>
       
    
      </form>
  </div>
</section>

  )
}

export default GetInTouch