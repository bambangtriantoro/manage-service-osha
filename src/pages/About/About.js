import './About.css'
import React from 'react'
import { Footer, NavigationBar, AboutUs, WhoWeAre, VisionMission, WhereWeAre } from '../../components/index'

const About = () => {
  return (
    <>
      <NavigationBar />
      <AboutUs />
      <WhoWeAre />
      <VisionMission />
      <WhereWeAre />
      <Footer />
    </>
  )
}

export default About
