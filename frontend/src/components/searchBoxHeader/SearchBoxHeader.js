import React from 'react';

export default function SearchBoxHeader(props){
    return(
        <div class = ''>
            <section class="bg-[#171A46] text-gray-100">
            <div class="container mx-auto flex flex-col items-center px-4 py-10 text-center md:py-8 md:px-10 lg:px-32 xl:max-w-3xl">
                <p class="px-8 text-lg mb-4">{props.head1}</p>
                    <h1 class="text-4xl font-bold leading-none sm:text-5xl">{props.mainHeading}
                    </h1>
                    <p class="px-8 mt-4 text-lg">{props.sub}</p>
                
                    <br></br>
                    

                    <div class="flex flex-wrap justify-center">
                
                    
{/* <form class="flex items-center">   
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-[#171A46] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required=""/>
    </div>
   
     
        
        <span class="sr-only">Search here</span>
    
</form> */}

                    
                    </div>
                </div>
            </section>
            
        </div>
        
    )
}
