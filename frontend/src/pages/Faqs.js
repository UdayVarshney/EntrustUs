/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, {useLayoutEffect} from 'react'
import icon1 from '../../src/assets/faqIcons/icon1.svg' 
import icon2 from '../../src/assets/faqIcons/icon2.svg' 
import icon3 from '../../src/assets/faqIcons/icon3.svg' 
import icon4 from '../../src/assets/faqIcons/icon4.svg' 
import icon5 from '../../src/assets/faqIcons/icon5.svg' 
import icon6 from '../../src/assets/faqIcons/icon6.svg' 
import icon7 from '../../src/assets/faqIcons/icon7.svg' 
import icon8 from '../../src/assets/faqIcons/icon8.svg' 
import CTA from '../components/cta/CTA'
import FaqBlock from '../components/faqComponents/FaqBlock'
import SearchBoxHeader from '../components/searchBoxHeader/SearchBoxHeader'

const Faqs = () => {

   useLayoutEffect(() => {
      window.scrollTo(0, 0)
    });

  return (
    <div class="bg-white py-6 sm:py-8 lg:py-12 text-align:center">
         <SearchBoxHeader
         head1="FAQs"
         mainHeading="Ask us anything"
         sub="Have any questions? We're here to help you."/>
         <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
         <br/>
         <br/>
         <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-y-10">

      <FaqBlock
         question = 'Who should use Entrustus?'
         icon = {icon1}
         answer = "If you're exploring mortality or contending with the end-of-life for yourself or a loved one.Each and everyone of us should have a say in how we live our lives, from beginning to end.Gift your loved ones the information they will need someday to make it easier on them." 
      />

      <FaqBlock
         question = 'Can I trust EntrustUs with my Data? Is my information private and secure.'
         icon = {icon2}
         answer = "Yes and yes! The EntrustUs team takes your security very seriously.We  employ bank-level security, and all of your data is protected in transit and at rest with 256-bit AES encryption and 2048-bit certificates."
      />
      
      <FaqBlock
         question = 'Do I need to download any software to my computer or phone?'
         icon = {icon3}
         answer = "No. EntrustUs is a web app, which means you do not need to download anything. You can access and manage your EntrustUs account by logging into our website (www.EntrustUs.in) from any web browser on your phone, tablet, or computer. For now, EntrustUs cannot be used offline."
      />

      <FaqBlock
         question = 'What happens to my plan if EntrustUs is not available in 50 years?'
         icon = {icon4}
         answer = "Rest assured, you will not lose any planning you do with EntrustUs! We greatly value the trust our users place in us to keep their plans safe and secure for the long term. That said, we understand the concern some people may have about saving their end-of-life plans online with a company. We are committed to protecting the information in your profile, no matter what the future holds. You own all of the personal information in your profile, and you can download or print your planning at any time. In the event EntrustUs would need to cease operations, we would ensure our users receive access to a copy of their plan for printing or digital safekeeping elsewhere."
      />

      <div class="bg-white-100 rounded-lg relative p-5 pt-8">
         <span class="w-8 h-8 inline-flex justify-center items-center bg-indigo-500 text-white rounded-full absolute -top-4 left-4">
            <img src = {icon5}/>
         </span>

         <h3 class="text-[#171A46] text-lg md:text-xl font-semibold mb-3 text-justify">I already have a will. What does EntrustUs offer that a will doesn't?</h3>
         <p class="text-gray-500 text-justify">A will is a great start! However, there are many end-of-life preferences that a standard will does not always address. Many of our users already have a will, but still find enormous value from EntrustUs. We help you think through the personal, human preferences that a will may overlook:

         <li>Detailed wishes for end-of-life medical care</li>
         <li>Ideas for a more personalized and comforting funeral</li>

         <li>Ideas for unique ways to memorialize someone</li>

         <li>A digital asset plan (e.g., social media, online accounts, etc)</li>

         <li>Continued care plan for pet(s)</li></p>
      </div>

      <FaqBlock
         question = "I've already done some planning. Should I sign up for this?"
         icon = {icon6}
         answer = "Yes! No matter what planning you've already done, you'll find value in using our planning tool to explore a number of ideas and options other resources may not have presented to you. We'll also help make sure you've thought of everything. This is especially helpful if you've done planning on paper, as a lot of offline planners worry that their paper documents might not be found by family when they are needed. For example, will your family remember that you have a binder or packet of documents in the desk? Think of EntrustUs as an online binder for all of your current end-of-life wishes and documents. Any planning you've done can be uploaded to your EntrustUs profile for safekeeping and sharing!"
      />

      <div class="bg-white-100 rounded-lg relative p-5 pt-8">
         <span class="w-8 h-8 inline-flex justify-center items-center bg-indigo-500 text-white rounded-full absolute -top-4 left-4">
            <img src = {icon7}/>
         </span>

         <h3 class="text-[#171A46] text-lg md:text-xl font-semibold mb-3 text-justify">I need more help than just a planning tool. What should I do?</h3>
         <p class="text-gray-500 text-justify">The Planning Tool is just the tip of the iceberg in our Service Offerings.We also have a team of certified industry experts who will provide the perfect solution for your specific requirements across a variety of categories included but not limited to :-
         <li> Will Creation and Registration</li>
         <li>Succession Planning</li>
         <li> Financial and Tax Planning</li>
         <li> Family Trust Creation</li>
         <li>Legacy Management</li></p>
      </div>

      <FaqBlock
         question = "How is EntrustUs free? How do you make money?"
         icon = {icon8}
         answer = "We always offer a free version of EntrustUs because our primary goal is to help as many people as possible to successfully complete their end-of-life planning. We make money by adding immense value to our customers lives by paid Value Added Services or additional features that convince them to upgrade to one of our Paid Tiers. Your trust is the most important thing to us. We will never sell or share personally identifiable information (PII) with any 3rd party. We are committed to protecting your privacy and security, as outlined in our Privacy Policy and Terms of Use."
      />
         </div>
         <div class = "w-full flex justify-center items-center"> 
         <CTA/>
         </div>
         </div>
   </div>

  )

}

export default Faqs
