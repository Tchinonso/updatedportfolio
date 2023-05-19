import React from 'react'
import HeroSection from '../HeroSection'
import AboutSection from '../AboutSection'
import ServicesSection from '../ServicesSection'
import ProjectSection from '../ProjectSection'
import TestimonialSection from '../TestimonialSection'
import ContactBanner from '../ContactBanner'

const Home = () => {
  return (
	<div>
		  <HeroSection />
		  <AboutSection />
		  <ServicesSection />
		  <ProjectSection />
		  <TestimonialSection />
		  <ContactBanner />
	</div>
  )
}

export default Home
