import './ItBootcamp.css'
import React from 'react'
import { ContactUs, NavigationBar, Footer } from '../../components'
import { Col, Container, Row } from 'react-bootstrap'
import { FaJava, FaPhp, FaMobileAlt } from 'react-icons/fa'
import { DiDotnet } from 'react-icons/di'
import { SiPowerbi } from 'react-icons/si'
import itBootcamp from '../../assets/Flaticon/itbootcamp.png'

const ItBootcamp = () => {
  return (
    <div>
        <NavigationBar />
        <section className='itbootcamp the-header'>
            <Container>
                <Row className='gy-3'>
                    <Col xs={12} sm={12} md={7}>
                      <h2>IT Bootcamp</h2>
                        <p><span>Fresh Graduate Hiring</span></p>
                        <p>IT Bootcamp is a training program that takes place intensively, with material that has been designed in such a way as to be relevant to careers in the IT field.</p>
                    </Col>
                    <Col xs={12} sm={12} md={5} className='item-center'>
                        <div className='img-container-itb item-center'>
                            <img src={itBootcamp} alt='' className='w-100' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className='itb-capability'>
            <Container>
                <h3>IT Capabilities</h3>
                <Row xs={1} sm={1} md={1} className='justify-content-center align-items-center g-3'>
                    <Col><FaJava size={40} /><h5>JAVA DEVELOPER</h5></Col>
                    <Col><DiDotnet size={40} /><h5>.NET DEVELOPER</h5></Col>
                    <Col><FaPhp size={40} /><h5>PHP DEVELOPER</h5></Col>
                    <Col><FaMobileAlt size={40} /><h5>MOBILE DEVELOPER</h5></Col>
                    <Col><SiPowerbi size={40} /><h5>BI DEVELOPER</h5></Col>
                </Row>
            </Container>
        </section>
        <ContactUs />
        <Footer />
    </div>
  )
}

export default ItBootcamp