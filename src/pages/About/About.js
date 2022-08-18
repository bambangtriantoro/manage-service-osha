import './About.css'
import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Footer, NavigationBar } from '../../components/index'
import { Container, Row, Col } from 'react-bootstrap';
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { whoweare1, whoweare2, whoweare3, indo } from './imports'
import { LogoOshaFull, LogoOsha } from '../../components/NavigationBar/imports';

AOS.init({
  once: true,
  duration: 1000,
});

const About = () => {
  return (
    <>
      <NavigationBar />
        <section className='about-us'>
          <Container>
            <Row>
              <Col xs={8} data-aos='fade-up'>
                <h1>PT. OSHA Teknologi Indonesia</h1>
                <span>IT Solutions and Management Services </span>
                <p> OSHA Technology is a company engaged in the business of developing information technology or software in developing corporate and individual websites, information systems for companies, android applications, desktop applications and making logo designs. The presence of our company is expected to help our clients' problems in order to find solutions and solve problems in the field of information technology.
                </p>
              </Col>
              <Col xs={4} data-aos='fade-up' data-aos-delay='500'>
                <img src={LogoOshaFull} alt='logo' />
              </Col>
            </Row>
          </Container>
        </section>

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
                <img src={whoweare3} alt='who we are 3' width={90}/>
              </div>
              <p>Close collaboration with customers to enhance,accelerate business performance and create tangible values.</p>
            </Col>
            <Col data-aos='fade-up' data-aos-delay='600'>
              <div className='img-container'>
                <img src={whoweare2} alt='who we are 2' width={90}/>
              </div>
              <p>We have consultants and developers who can mobilize the right people, skills, tools and technology to deliver innovation. </p>
            </Col>
          </Row>
        </section>

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

        <section className='whereweare'>
          <h2 data-aos='fade-up' data-aos-delay='500'>WHERE WE ARE</h2>
          <Container>
            <Row>
              <Col>
                <img src={indo} alt='map indo' className='image' data-aos='zoom-out'/>
              </Col>
              <Col>
                <div className='location'>
                  <h5 data-aos='fade-right'><HiOutlineLocationMarker size={30} color='#FF7A00' /> BANDUNG</h5>
                  <div className='d-flex flex-column'>
                    <p data-aos='fade-right' data-aos-delay='300'>Griya Cikutra Blok-B No.08, Cibeunying, Bandung, Jawa Barat</p>
                    <p data-aos='fade-right' data-aos-delay='600'><b>Phone</b> : +62 878 1770 0088</p>
                    <p data-aos='fade-right' data-aos-delay='900'><b>Email</b> : info@oshatechnology.com</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <Footer />
    </>
  )
}

export default About
