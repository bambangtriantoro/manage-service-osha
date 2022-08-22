import './MobileSolution.css'
import React from 'react'
import { ContactUs, Footer, NavigationBar } from '../../components'
import { Container, Row, Col } from 'react-bootstrap'
import { FaReact } from 'react-icons/fa'
import { DiAndroid, DiApple } from 'react-icons/di'
import { mobilePic } from './imports'

const MobileSolution = () => {
  return (
    <div>
        <NavigationBar />
        <section className='mobile'>
            <Container>
                <Row>
                    <Col md={7}>
                        <h2>Mobile Solution</h2>
                        <p>Creating mobile apps for your business purpose, equipped with the latest technology. It is suitable tools to integrate your applications into the mobile technology.</p>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className='mobile-illustration'>
            <Container>
                <Row className='align-items-center'>
                    <Col md={7}>
                        <img src={mobilePic} alt='mobile lllustration'/>
                    </Col>
                    <Col md={5}>
                        <h2>Platform</h2>
                        <Row md={2} className='justify-content-center align-items-center'>
                            <Col className='item-center'><DiAndroid size={70} /></Col>
                            <Col className='item-center'><DiApple size={70} /></Col>
                            <Col className='item-center'><FaReact size={70} /></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
        <ContactUs />
        <Footer />
    </div>
  )
}

export default MobileSolution