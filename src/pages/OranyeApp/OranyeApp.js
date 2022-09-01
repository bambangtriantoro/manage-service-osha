import './OranyeApp.css'
import React from 'react'
import { oranye } from '../../components/NavigationBar/imports'
import { Container, Row, Col } from 'react-bootstrap'
import { ContactUs, NavigationBar, Footer } from '../../components'
import { oranyeBen } from '../SimanisApp/imports'

const OranyeApp = () => {
  return (
    <div>
        <NavigationBar />
        <section className='oranye-app the-header'>
            <Container>
                <Row className='justify-content-center align-items-center gy-3'>
                    <Col md={4} className='app-desc'>
                        <div className='d-flex flex-wrap gap-3'>
                            <img src={oranye} alt='' width={100} />
                            <div>
                                <h2>Oranye</h2>
                                <p>HR Information System</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={8} className='app-benefits'>
                        <img src={oranyeBen} alt='oranye benefits' className='w-100'/>
                    </Col>
                </Row>
            </Container>
        </section>
        <ContactUs />
        <Footer />
    </div>
  )
}

export default OranyeApp