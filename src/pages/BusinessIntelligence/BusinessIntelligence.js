import './BusinessIntelligence.css'
import React from 'react'
import { ContactUs, NavigationBar, Footer } from '../../components'
import { Container, Row, Col } from 'react-bootstrap'
import { biPic, biPic1 } from './imports'

const BusinessIntelligence = () => {
  return (
    <div>
        <NavigationBar />
        <section className='business-intelligence the-header'>
          <Container>
            <Row className='align-items-center g-5'>
              <Col xs={12} sm={12} md={7}>
                <h2>Business Intelligence Solution</h2>
                <p>An application designed for data gathering, storing, analyzing and accessing to help Management make better business decisions. BI & Analytics’s Vision and Strategy are to improve organizations by providing business insights to all employees, leading to better, faster and more relevant decisions.</p>
                <img src={biPic} alt='bi illustration' className='w-100 mt-3'/>
              </Col>
              <Col xs={12} sm={12} md={5}>
                  <ul className='d-flex justify-content-center align-items-center custom-list'>
                    <li>Mobile</li>
                    <li>Desktop</li>
                    <li>Tablet</li>
                  </ul>
                <img src={biPic1} className='w-100' alt='bi illustration' />
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