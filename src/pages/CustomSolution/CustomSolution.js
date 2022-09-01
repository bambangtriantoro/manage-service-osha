import './CustomSolution.css'
import React from 'react'
import { ContactUs, NavigationBar, Footer } from '../../components'
import { Container, Row, Col } from 'react-bootstrap'
import { customPic } from './imports'

const CustomSolution = () => {
  return (
    <div>
        <NavigationBar />
        <section className='custom the-header'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} sm={12} md={7}>
                        <h2>Custom Solutions</h2>
                        <p>Develop various kinds of applications including web, cloud, single-page, mobile, and integration solutions. We delivered supporting programs according to your business needs</p>
                        <ul className='custom-list'>
                            <li>Custom .NET Software development</li>
                            <li>Custom PHP Software development</li>
                            <li>Custom iOS development</li>
                            <li>Custom Android development</li>
                            <li>Etc.</li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={12} md={5}>
                        <img src={customPic} alt='custom illustration' className='w-100' />
                    </Col>
                </Row>
            </Container>
        </section>
        <ContactUs />
        <Footer />
    </div>
  )
}

export default CustomSolution