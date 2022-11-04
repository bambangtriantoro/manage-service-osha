import './WhoWeAre.css'
import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Row, Col } from 'react-bootstrap';
import { whoweare1, whoweare2, whoweare3 } from './imports'

AOS.init({
    once: true,
    duration: 1000,
});

const WhoWeAre = () => {
  return (
    <section className='whoweare'>
        <Row xs={1} sm={1} md={3} className='justify-content-start align-items-center g-0'>
            <h2 data-aos='fade-right' data-aos-delay='500'>WHO WE ARE</h2>
            <Col data-aos='fade-up'>
                <div className='img-container'>
                    <img src={whoweare1} alt='who we are 1' width={90}/>
                </div>
                <p>Digital Marketing & Technology Service Companies.</p>
            </Col>
            <Col data-aos='fade-up' data-aos-delay='300'>
                <div className='img-container'>
                    <img src={whoweare2} alt='who we are 2' width={90}/>
                </div>
                <p>Close collaboration with customers to enhance,accelerate business performance and create tangible values.</p>
            </Col>
            <Col data-aos='fade-up' data-aos-delay='600'>
                <div className='img-container'>
                    <img src={whoweare3} alt='who we are 3' width={90}/>
                </div>
                <p>We have consultants and developers who can mobilize the right people, skills, tools and technology to deliver innovation. </p>
            </Col>
        </Row>
    </section>
  )
}

export default WhoWeAre