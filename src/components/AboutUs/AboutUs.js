import './AboutUs.css'
import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LogoOshaFull } from '../NavigationBar/imports'
import { Container, Row, Col } from 'react-bootstrap';

AOS.init({
  once: true,
  duration: 1000,
});

const AboutUs = () => {
  return (
    <section className='about-us'>
        <Container>
        <Row >
            <Col xs={12} sm={12} md={8} data-aos='fade-up'>
                <h1>PT. OSHA Teknologi Indonesia</h1>
                <span>IT Solutions and Management Services </span>
                <p> OSHA technology is a digital technology & marketing services company committed to continuing to collaborate closely together customers to improve, accelerate business performance and create real value. With professional consultants and developers, we can send the required professional staff according to their skills, tools, and the right technology to deliver innovation.
                </p>
            </Col>
            <Col xs={12} sm={12} md={4} data-aos='fade-up' data-aos-delay='500' className='item-center'>
                <img src={LogoOshaFull} alt='logo' />
            </Col>
        </Row>
        </Container>
    </section>
  )
}

export default AboutUs