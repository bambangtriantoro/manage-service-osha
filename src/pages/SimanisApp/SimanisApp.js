import './SimanisApp.css'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ContactUs, NavigationBar, Footer } from '../../components'
import { LogoOsha } from '../../components/NavigationBar/imports'
import { simanisBen } from './imports'  

const SimanisApp = () => {
  return (
    <div>
        <NavigationBar />
        <section className='simanis-app the-header'>
            <Container>
                <Row className='justify-content-center align-items-center gy-3'>
                    <Col md={4} className='app-desc'>
                        <div className='d-flex flex-wrap gap-3'>
                            <img src={LogoOsha} alt='' width={100} />
                            <div>
                                <h2>SIMANIS</h2>
                                <p>Document Tracker System</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={8} className='app-benefits'>
                        <img src={simanisBen} alt='simanis benefits' className='w-100'/>
                    </Col>
                </Row>
            </Container>
        </section>
        <ContactUs />
        <Footer />
    </div>
  )
}

export default SimanisApp