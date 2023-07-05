import React, {useLayoutEffect}from 'react'
import DoMath from '../components/home/DoMath'
import Hero from '../components/home/Hero'
import WhyEntrustus from '../components/home/WhyEntrustus'
import AboutYourself from '../components/home/AboutYourself'
import Nominee from '../components/home/Nominee'
import ToDoList from '../components/home/ToDoList'
import NoText from '../components/home/NoText'
import BlogPost from '../components/blogPost/BlogPost'
import HowToGetStarted from '../components/home/HowToGetStarted'
const Home = () => {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });
  
  return (
    <div class = "bg-[#171A46]">
          <div class = "bg-white">
            <Hero/>
            <WhyEntrustus/>
            <DoMath/>
          </div>
          <HowToGetStarted/>
          <AboutYourself/>
          <NoText/>
          <ToDoList/>
          <Nominee/>
    </div>

  )

}

export default Home