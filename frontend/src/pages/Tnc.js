import React,{useLayoutEffect} from 'react'
import NormalHeader from '../components/normalHeader/NormalHeader'
import vec1 from '../assets/securityVectors/vec1.png'
import vec2 from '../assets/securityVectors/vec2.png'
import CTA from '../components/cta/CTA'


const Tnc = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  
  return (
    <div class="bg-white py-6 sm:py-8 lg:py-16 text-align:center w-full">
      <NormalHeader
        head1="Data and Privacy"
        mainHeading="Security"
        sub="Because we care."
      />
      <div class = 'bg-[#171A46]'>
      <section class="text-gray-600 body-font bg-white ">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-8 font-bold text-[#171A46] ">Securing your data at rest
            </h1>
            <p class="mb-1 leading-relaxed text-xl text-justify">Within our systems, all your data is stored using AES-256 encryption with a uniquely derived key for each user as recommended by NIST Special Publication 800-132. We encrypt every single personally identifiable field in the database, including your name and email address.
            <br/>
            <br/>
            For searching and indexing, we hash a small number of fields using HMAC. We apply the same encryption technique to all files you upload.
            <br/>
            <br/>
            As with all systems such as ours, the security of your information depends on you. Choose a strong password (we enforce that as best we can) and never share it with anyone. EntrustUs is a secure system for sharing information with others via our deputy function.</p>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font bg-white">
        <div class="container mx-auto flex px-5 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-4xl mb-8 font-bold text-[#171A46] ">Securing your data in transit
            </h1>
            <p class="mb-8 leading-relaxed text-xl text-justify">All communications between you and EntrustUs are encrypted via SSL using 2048-bit certificates and we require SSL on all communications. 
            <br/>
            <br/>
            We support perfect forward secrecy so that even if someone eavesdrops on your communication, they will still not be able to decrypt the data in the event that our key is compromised.</p>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded box-border h-80" alt="hero" src={vec1}/>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font bg-white">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-8 font-bold text-[#171A46] ">Operational Procedures to keep the site secure
            </h1>
            <p class="leading-relaxed text-justify text-xl text-justify">EntrustUs follows best practices to keep your data secure. We regularly audit our environments and code for security issues and apply patches expeditiously. We use commercial services that regularly check our site (including McAfee Secure) and we retain our own security experts to probe and verify the security of our site.</p>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font bg-white">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-[#171A46] ">Administrative Access to your Information
            </h1>
            <p class="mb-8 leading-relaxed text-justify text-xl text-justify">Our strict internal procedures prevent any EntrustUs employee or administrator from gaining access to your account, beyond a limited set of data necessary to help grant you access to your account (e.g. triggering confirmation emails) and restricting access to your account in urgent circumstances (e.g. limiting or removing a deputy’s access). EntrustUs administrators can never see the plan information that you fill out or any documents that you upload. EntrustUs logs and regularly audits all accesses to your account, whether by you, an administrator or your deputies.</p>
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font bg-white">
        <div class="container mx-auto flex px-5 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img class="object-cover object-center rounded pt-2" alt="hero" src={vec2}/>
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-8 font-bold text-[#171A46]">Two Factor Authentication</h1>
            <p class="mb-8 leading-relaxed text-xl text-justify">Security is not just about protecting your data, it is also about protecting access to your account. By enabling Two Factor Authentication, whenever you sign into EntrustUs from a new computer, device, or browser, we will send a unique code to your phone that you must input as part of your login.
            <br/>
            <br/>
            This extra layer of security makes sure that even if a bad guy steals your password from you (or from a site that’s less secure than EntrustUS), he won’t be able to access your account.
            </p>
          </div>
        </div>
      </section>
      <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
      </div>
    </div>

    <div class = 'flex justify-center'>
      <CTA/>
    </div>

    </div>
  )
}

export default Tnc