import './BusinessIntelligence.css'
import React from 'react'
import { ContactUs, NavigationBar, Footer } from '../../components'
import { Container, Row, Col } from 'react-bootstrap'
import { biPic, biPic1 } from './imports'

const BusinessIntelligence = () => {
  return (
    <div>
        <NavigationBar />
        <section className='business-intelligence'>
          <Container>
            <Row className='g=3'>
              <Col md={7}>
                <h2>Business Intelligence Solution</h2>
                <p>An application designed for data gathering, storing, analyzing and accessing to help Management make better business decisions. BI & Analytics’s Vision and Strategy are to improve organizations by providing business insights to all employees, leading to better, faster and more relevant decisions.</p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='bi-illustration'>
          <Container> 
            <img src={biPic} alt='bi illustration' />
          </Container>
        </section>
        <section className='bi-illustration1'>
          <Container> 
            <Row md={2} className='justify-content-center align-items-center'>
              <Col>
                <img src={biPic1} className='w-100' alt='bi illustration' />
              </Col>
              <Col className='item-center'>
                <ul className='custom-list'>
                  <li>Mobile</li>
                  <li>Desktop</li>
                  <li>Tablet</li>
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

export default BusinessIntelligence