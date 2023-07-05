import React,{useLayoutEffect} from 'react'
import PrivacyHeader from '../privacyHeader/PrivacyHeader'
import privacy1 from '../../assets/privacyVectors/privacy1.svg'
import privacy2 from '../../assets/privacyVectors/privacy2.svg'
import CTA from '../cta/CTA'


const PrivacyPolicy = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  return (
    <div class="bg-white py-6 sm:py-8 lg:py-16 text-align:center w-full">
      <PrivacyHeader  
        head1="DATA AND PRIVACY"
        mainHeading="Privacy Policy"
        sub1="Welcome to EntrustUs."
        sub2="This Privacy Policy describes how Hope Advisors Pvt. Ltd. (“EntrustUs,” “we,” “us,” or “our”) collects, uses, processes and discloses your information on www.EntrustUs.in (the “Site”) and the products, services, mobile websites, and native mobile applications (collectively and together with the Site, the “Services”)."
        />
      <div class = 'bg-[#171A46]'>
      <section class="text-gray-500 body-font bg-white">
        <img class="mx-auto w-1/2 h-1/2" alt="hero" src={privacy1}/>
      </section>

      <section class="text-gray-500 body-font bg-white">
        <div class="container mx-auto flex px-5 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="text-4xl mb-4 font-bold tracking-tight text-[#171A46] sm:text-5xl md:text-6xl">What types of information does EntrustUs collect, how is it collected, and how does it use it?
             </h1>
         </div>
        </div>
      </section>

      <section class="text-gray-500 body-font bg-white">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-8 font-bold text-gray-900 ">1. Personal Information
            </h1>
              <p class="text-lg text-[#777E90]"> a. For the purpose of this Privacy Policy, “Personal Information” means any information that uniquely identifies you or any other individual or otherwise contains personally identifiable information provided by or obtained from you or any other user of the Services.  Personal Information may include certain types of Basic Information, Secure Information, Read Or Write Access Deputy Information, Access Code Information and Public Information, each of which is described in further detail below.  EntrustUs does not share Personal Information with any third party other than as described in this Privacy Policy. ​</p><br></br> 
              <p class="text-lg text-[#777E90]"> b. “Basic Information” means the first and last name, email address, gender, zip code, date of birth, and the date and time of associated with the Account creation and (if applicable) deletion of you, your Read Or Write Access Deputies, and any Co-Administrators (each a “Collaborator”) on your LifePlan. We may use your Basic Information to operate, provide, and improve the Site, the Services and our (and our successors’ and assigns’) businesses, to contact you and (if applicable) your Collaborators to send information about the Services. If you or your Collaborators don’t want to receive email communications from us, follow the “unsubscribe” instructions at the bottom of any email message received from us. That said, there are certain types of important email communications that we need to always be able to send to you and your Collaborators (such as notifications about password changes, permissions changes, or changes to the Terms of Service or this Privacy Policy) for which you may not be given an “unsubscribe” option.  ​</p><br></br> 
              <p class="text-lg text-[#777E90]"> c. “Secure Information” means your private, sensitive, personal information that you privately submit through the Services, including your health and medical information, financial information and legal information. While we may know whether and when you submitted a particular type or category of Secure Information, we do not in the course of our standard daily business operations have access to the content or details of any Secure Information you privately submit through the Services because it is encrypted. We will share your Secure Information only with your designated Read Or Write Access Deputy (as defined below) and only pursuant to your, or (if applicable) your Co-Administrator’s, explicit instruction, except when we are required to by law or in other rare circumstances, as described below. </p><br></br> 
              <p class="text-lg text-[#777E90]"> ​d. “Use Information” means certain high-level information about your use of and access to the Services that may be visible to a financial advisor or Partner Provider if you accepted an Invitation from that financial advisor or Partner Provider, as applicable, to sign up for and access the Premium Services (as defined below) (if applicable), which may include the type of Everplan you signed up for, the date and time of your last login to the Services, your total number of logins to the Services, and which sections of your Everplan you completed. We may share your Use Information only with your financial advisor (if applicable).​ </p><br></br> 
              <p class="text-lg text-[#777E90]"> e. “Public Information” means any personally identifying information you post in any public forum through the Services (e.g., in the comments section below articles).  Please remember that any Public Information you post publicly on the Services is not private, and thus may be used or disclosed by any third party who reads such Public Information without our control and without your knowledge, and search engines may index that information.  Accordingly, please think carefully before publicly posting any Public Information on the Services.</p>
          </div>
        </div>
      </section>

      <section class="text-gray-500 body-font bg-white">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900 ">2. Non-Personal Information
            </h1>
              <p class="text-lg text-[#777E90]"> a. In contrast to Personal Information, “Non-Personal Information” does not, on its own, uniquely identify you or anyone else as a specific individual, but rather provides technical data, such as information about your interaction with the Services or about your browser.  Non-Personal Information may include Aggregate Information, and Cookie Information, each of which is described in further detail below. ​</p> <br></br> 
              <p class="text-lg text-[#777E90]"> b. “Aggregate Information” means statistical information about how, how often, and when you use the Services and your demographic information.  We may use Aggregate Information in order to understand how and how often people use the Services, which in turn allows us to improve them, but never in a way that is personally identifiable.   ​</p> <br></br> 
              <p class="text-lg text-[#777E90]"> c. “Cookie Information” means information collected via cookies which enable our servers to recognize your web browser and tell us how and when you visit the Site and otherwise use the Services.  Cookies are small pieces of data that are stored on your computer through your web browser when you access a website.  Our cookies by themselves do not contain Personal Information, and we do not combine Cookie Information with your Personal Information to tell us who you are. </p> <br></br> 
              <p class="text-lg text-[#777E90]"> ​d. While many browsers have an option to turn off the cookie feature (which may prevent your browser from accepting any new cookie or may allow you to decide which cookie to accept from any website on a case-by-case basis), we strongly recommend that you leave cookies active because the Cookie Information we derive enables us to provide you with the most advantageous and attractive features of the Services. </p>   <br></br> 
              <p class="text-lg text-[#777E90]"> ​e. Please note, however, that this Privacy Policy only covers our use of cookies and Cookie Information, and does not cover the use of cookies by third parties.  Certain third party vendors use cookies in certain unrestricted publicly-available parts of our Site to provide analytical data and target and serve ads based on your prior visits to Site and use of the Services.  We do not control when or how a third party places cookies on your computer.</p>
        </div>
        </div>     
      </section>

      <section class="text-gray-500 body-font bg-white">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900 ">3. Information EntrustUs Typically Does Not Collect (But Sometimes Might)
            </h1>
              <p class="text-lg text-[#777E90]"> While we may charge a fee now or in the future for use of certain aspects of our Services (the “Premium Services”), your valid credit card number, type, expiration date, name and billing address (collectively, “Payment Information”) is collected, stored, used and processed by Stripe Inc. (“Stripe”), our third party payment processing company, and not by us.  Accordingly, the collection, storage, use and processing of your Payment Information is governed by Stripe’s applicable terms of service available at https://stripe.com/us/terms and privacy policy available at https://stripe.com/us/privacy.  However, sometimes we may request and receive some of your Payment Information from Stripe in order to complete certain transactions you initiated through the Services, to enroll you in a discount or other rebate program you elected to participate in, to protect against or identify potentially fraudulent transactions, or otherwise as necessary to manage our business.  Accordingly, sometimes we may obtain Payment Information pertaining to you as a result of your use of the Services; but, you can rest assured that we will only use any such Payment Information we obtain in furtherance of the Services.​</p> 
        </div> 
        </div>     
      </section>
      
      <section class="text-gray-500 body-font bg-white">
        <div class="container mx-auto flex px-5 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="text-4xl mb-4 font-bold tracking-tight text-[#171A46] sm:text-5xl md:text-6xl">Does EntrustUs share the information it collects or receives, and if so, with whom and why?
             </h1>
         </div>
        </div>
      </section>

      <section class="text-gray-500 body-font bg-white">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900 ">1. Sharing with read or write access deputies
            </h1>
              <p class="text-lg text-[#777E90]"> We will share your Secure Information only with your designated Read Or Write Access Deputies and only pursuant to and in accordance with your opt-in authorization (“Authorization”) and explicit instruction, including the permissions you set that give any particular Read Or Write Access Deputy access to only certain designated portions of your Everplan. If you designate any of your Secure Information as only shareable with Read or Write Access Deputies after you are Declared Dead (the “After Death Sections”), then EntrustUs will only share such After Death Sections according to the timing and permissions that you have explicitly provided. As part of your use of the Services, you may designate one of your Read or Write Access Deputies as an “Unlocker” of your “After Death Sections.” With your explicit permission, the Unlocker will be able to alert EntrustUs that you have been “Declared Dead” through their use of the Services, and your “After Death Sections” will be made visible to your Read Or Write Access Deputies according to your Authorization, explicit instructions and permissions.​</p> 
        </div> 
        </div>     
      </section>

      <section class="text-gray-500 body-font bg-white">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900 ">2. Sharing with Co-Administrators
            </h1>
            <p class="text-lg text-[#777E90]"> If you are enrolled in a Household Membership, your Secure Information and your Read or Write Access Deputy Information are shared with any Co-Administrators associated with your Household Membership. Co-Administrators can equally view, edit, and administrate all parts of the Everplan that you are using.</p>
        </div> 
        </div>     
      </section>
      <section class="text-gray-500 body-font bg-white">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900 ">3. Sharing with Financial Advisors or Partner Providers
            </h1>
            <p class="text-lg text-[#777E90]"> If you signed up for the Services using an Invitation you received from your financial advisor or a Partner Provider, then we may share your Use Information with such financial advisor or Partner Provider, all of whom are contractually bound to protect the confidentiality of your Personal Information. For the avoidance of doubt, we don’t share any of your Secure Information with Financial Advisors or Partner Providers unless you have designated them as a Read or Write Access Deputy for the particular Secure Information you have chosen to share.</p>
        </div> 
        </div>     
      </section>
      <section class="text-gray-500 body-font bg-white">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900 ">4. Sharing with Agents
            </h1>
          <p class="text-lg text-[#777E90]">a. We may share certain of your Basic Information with certain partners or service providers we use to perform, facilitate or improve the Services (collectively, “Agents”), but only in order for EntrustUs to be able to provide you the Services.   All of our Agents are contractually bound to protect the confidentiality of your Personal Information.</p> <br></br>
          <p class="text-lg text-[#777E90]">b. We may also share non-personal Aggregate Information with our Agents so that they understand how and how often people use our Services and their services, which in turn allows both us and them to improve. </p><br></br>
          <p class="text-lg text-[#777E90]">c. We do not share your Secure Information with Agents.</p><br></br>
        </div> 
        </div>     
      </section>

      <section class="text-gray-500 body-font bg-white">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900 ">​5. Sharing with Acquirers
            </h1>
            <p class="text-lg text-[#777E90]">If EntrustUs is involved in a merger, acquisition, sale, reorganization, liquidation or other disposition of all or substantially all of its assets to another entity (the “Acquirer”), you will be notified via email and/or a prominent notice on our Site of any such change in ownership and of the choices available to you with respect to your Personal Information.  Remember, you can always choose to export and delete your Secure Information from the Services.  The Acquirer will possess your Basic Information and any other Personal Information you do not delete from the Services (which may include part or all of your Secure Information) and will assume the rights and obligations regarding your Personal Information as described in this Privacy Policy. </p>
        </div> 
        </div>     
      </section>
      <section class="text-gray-500 body-font bg-white">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900 ">​6. Sharing pursuant to applicable law
            </h1>
          <p class="text-lg text-[#777E90]">a. Other than sharing with Read Or Write Access Deputies, Agents or Acquirers as described above, we can only share Personal Information, including your Secure Information, in the limited circumstances described below relating to your abuse or misuse of the Services or legal process. </p> <br></br>
          <p class="text-lg text-[#777E90]">b. If we believe that you have misused or abused the Services or the Personal Information of any other user, or have attempted to interfere with or harm the Services, we will investigate and cooperate with appropriate law enforcement officials, which may include sharing your Basic Information with them in order to protect our rights or property or that of other users, Read Or Write Access Deputies, Agents, and others.  We will give our full cooperation in any legal process or criminal investigation into any misuse or abuse of the Services. </p> <br></br>
          <p class="text-lg text-[#777E90]">c. We may also share your Personal Information solely to the extent required by law to comply with a subpoena or analogous legal process or governmental request; while this may include certain of your Secure Information, rest assured that we will never willingly share any of your Secure Information unless required by law.    We may also share your Personal Information as otherwise necessary to protect our rights or property or that of other users, Read Or Write Access Deputies, Agents and others. </p> <br></br>
          <p class="text-lg text-[#777E90]">d. We will promptly notify you if we receive any request for your Personal Information or Secure Information from any governmental entity or other third party pursuant to a subpoena or analogous legal process before sharing any such requested information, unless we are legally prohibited from so notifying you or we have a good faith reason to believe that such sharing is or may be necessary to protect someone’s life, avoid serious physical injury or property loss or damage, or to prevent or investigate any ongoing crime.</p><br></br>
          <p class="text-lg text-[#777E90]">​e. As discussed in the Terms and Conditions , no fiduciary duty is or will ever be created between you and EntrustUs by virtue of you using the Services.  Accordingly, while communications between you and us are protected in accordance with this Privacy Policy, they are not protected by the physician-patient privilege, doctor-patient confidentiality, attorney-client privilege, work product doctrine, or any other fiduciary duty.</p><br></br>
        </div>
        </div>     
      </section>
      <section class="text-gray-500 body-font bg-white">
        <div class="container mx-auto flex px-5 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="text-4xl mb-4 font-bold tracking-tight text-[#171A46] sm:text-5xl md:text-6xl">How does EntrustUs protect, safeguard and secure the information it collects?
             </h1>
         </div>
        </div>
      </section>

      <section class="text-gray-500 body-font bg-white">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <p class="text-lg text-[#777E90]">The security, privacy and confidentiality of your Personal Information is of utmost and critical importance to us, which is why we have implemented a variety of industry standard (or better) administrative, physical and technical protections to safeguard the security, privacy, confidentiality and integrity of your Personal Information, including without limitation your Secure Information. </p>
          <div class="float-right">
            <img class="h-full py-2  ml-8" alt="hero" src={privacy2}/>
          </div>          
          <p class="text-lg text-[#777E90]">​For starters, your password is encrypted and not stored in a readable fashion.  Moreover, our technology uses encryption algorithms of the same quality relied on by banks. When we collect, maintain, access, use, or disclose your Personal Information, including without limitation your Secured Information, we will do so using systems and processes consistent with information privacy and security requirements under applicable national laws. </p><br></br>
          <p class="text-lg text-[#777E90]">Nevertheless, no website operator can guarantee that its security measures or safeguards will be 100% effective, and EntrustUs cannot guarantee absolute security of any of your Personal Information, including without limitation your Secure Information.  EntrustUs SHALL NOT BE RESPONSIBLE OR LIABLE FOR UNAUTHORIZED ACCESS, HACKING OR OTHER SECURITY INTRUSIONS OR FAILURE TO STORE OR THE THEFT, DELETION, CORRUPTION, DESTRUCTION, DAMAGE, OR LOSS OF ANY DATA OR INFORMATION, INCLUDING WITHOUT LIMITATION SECURE INFORMATION.</p><br></br>
          <p class="text-lg text-[#777E90]">If we discover a security incident that compromises your Secure Information, we will let you know about it in accordance with applicable law.  Please notify us immediately of any suspected or unauthorized use of your password or account or any other such incident by contacting us.</p>
        </div>
        </div>     
      </section>

      <section class="text-gray-500 body-font bg-white">
        <div class="container mx-auto flex px-5 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="text-4xl mb-4 font-bold tracking-tight text-[#171A46] sm:text-5xl md:text-6xl">How does one delete an EntrustUs account?
             </h1>
         </div>
        </div>
      </section>
      <section class="text-gray-500 body-font bg-white">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900 ">How does one delete an EntrustUs account?
            </h1>
        <p class="text-lg text-[#777E90]" >If you wish to delete your account, you may do so via our account deletion tool, which you can access by logging into your account and clicking “my account” followed by “account settings,” where you will see a button that says “Delete My Account.” When you delete your account, all of your Secure Information will be deleted or (if applicable) transferred to a Co-Administrator. Please note that we may keep your Non-Personal Information and any of your Personal Information other than your Secure Information even after your account deletion.</p>
        </div> 
        </div>     
      </section>
      <section class="text-gray-500 body-font bg-white">
        <div class="container mx-auto flex px-5 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="text-4xl mb-4 font-bold tracking-tight text-[#171A46] sm:text-5xl md:text-6xl">What happens when there are changes to this Privacy Policy?
             </h1>
         </div>
        </div>
      </section>
      <section class="text-gray-500 body-font bg-white">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900 ">How does one delete an EntrustUs account?
            </h1>
        <p class="text-lg text-[#777E90]"> We may amend or modify this Privacy Policy from time to time.  If we make any material changes in the way we collect or use your Personal Information, we will notify you by sending you an email or by posting an announcement on the Services.  Remember, it is your responsibility to keep your email address information accurate and up-to-date.  Your continued use of the Services following notice of such changes indicates your agreement to be bound by the changes and the new Privacy Policy.</p>
        </div> 
        </div>     
      </section>
    </div>

    <div class = 'flex justify-center'>
      <CTA/>
    </div>

    </div>
  )
}

export default PrivacyPolicy