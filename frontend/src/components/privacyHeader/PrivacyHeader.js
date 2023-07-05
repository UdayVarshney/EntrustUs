import React from 'react';

export default function NormalHeader(props){
    return(
        <div>
            <section class="bg-[#171A46] text-gray-100">
            <div class="container mx-auto flex flex-col items-center px-4 py-10 text-center md:py-16 md:px-10 lg:px-32 xl:max-w-3xl">
                <p class="px-8 text-lg mb-4">{props.head1}</p>
                
                    <h1 class="text-4xl font-bold leading-none sm:text-5xl">{props.mainHeading}
                    </h1>
                    <p class="px-8 mt-5 text-lg">{props.sub1}</p>
                    <p class="px-4 text-justify mt-5 text-lg">{props.sub2}</p>
                </div>
            </section>
            
        </div>
        
    )
}