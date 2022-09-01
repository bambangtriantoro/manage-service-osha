import './MobileSolution.css'
import React from 'react'
import { ContactUs, Footer, NavigationBar } from '../../components'
import { Container, Row, Col } from 'react-bootstrap'
import { DiAndroid, DiApple } from 'react-icons/di'
import { mobilePic } from './imports'

const MobileSolution = () => {
  return (
    <div>
        <NavigationBar />
        <section className='mobile the-header'>
            <Container>
                <Row className='align-items-center gy-3'>
                    <Col md={7}>
                        <h2>Mobile Solutions</h2>
                        <p>Creating mobile apps for your business purpose, equipped with the latest technology. It is suitable tools to integrate your applications into the mobile technology.</p>
                        <Row className='justify-content-start align-items-center pt-3'>
                            <Col xs='auto' sm='auto' md='auto'><DiAndroid size={30} /></Col>
                            <Col xs='auto' sm='auto' md='auto'><DiApple size={30} /></Col>
                        </Row>
                    </Col>
                    <Col md={5}>
                        <img src={mobilePic} alt='mobile lllustration' className='w-100'/>
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