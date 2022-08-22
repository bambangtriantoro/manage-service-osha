import './CustomSolution.css'
import React from 'react'
import { ContactUs, NavigationBar, Footer } from '../../components'
import { Container, Row, Col } from 'react-bootstrap'
import { customPic } from './imports'

const CustomSolution = () => {
  return (
    <div>
        <NavigationBar />
        <section className='custom'>
            <Container>
                <Row>
                    <Col md={7}>
                        <h2>Custom Solution</h2>
                        <p>Develop various kinds of applications including web, cloud, single-page, mobile, and integration solutions. We delivered supporting programs according to your business needs</p>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className='custom-illustration'>
            <Container>
                <Row className='justify-content-center align-items-center'>
                    <Col>
                        <img src={customPic} alt='custom illustration' />
                    </Col>
                    <Col>
                        <ul className='custom-list'>
                            <li>Custom .NET Software development</li>
                            <li>Custom PHP Software development</li>
                            <li>Custom iOS development</li>
                            <li>Custom Android development</li>
                            <li>Etc.</li>
                        </ul>
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