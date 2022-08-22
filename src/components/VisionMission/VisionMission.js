import './VisionMission.css'
import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col } from 'react-bootstrap';
import { LogoOsha } from '../NavigationBar/imports';

AOS.init({
  once: true,
  duration: 1000,
});
const VisionMission = () => {
  return (
    <section className='visionmission'>
        <Container>
            <img src={LogoOsha} alt='logo' width='180' data-aos='flip-up'/>
            <Row className='gap-5'>
                <Col data-aos='zoom-in'>
                    <h2>our <span>VISION</span></h2>
                    <p>Making OSHA technology as the main choice of business partners for supporting information technology companies throughout Indonesia</p>
                </Col>
                <Col data-aos='zoom-in'>
                    <h2>our <span>MISSION</span></h2>
                    <p>Creating business competitiveness of our partners as based on technology with effectiveness, efficiency, and business quality through information technology</p>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default VisionMission