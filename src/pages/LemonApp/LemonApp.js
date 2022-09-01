import './LemonApp.css'
import React from 'react'
import { lemon } from '../../components/NavigationBar/imports'
import { Container, Row, Col } from 'react-bootstrap'
import { ContactUs, NavigationBar, Footer } from '../../components'
import { lemonBen } from '../SimanisApp/imports'

const LemonApp = () => {
  return (
    <div>
        <NavigationBar />
        <section className='lemon-app the-header'>
            <Container>
                <Row className='justify-content-center align-items-center gy-3'>
                    <Col md={4} className='app-desc'>
                        <div className='d-flex flex-wrap gap-3'>
                            <img src={lemon} alt='' width={100} />
                            <div>
                                <h2>Lemon</h2>
                                <p>Lemon “e - Learning System”</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={8} className='app-benefits'>
                        <img src={lemonBen} alt='lemon benefits' className='w-100'/>
                    </Col>
                </Row>
            </Container>
        </section>
        <ContactUs />
        <Footer />
    </div>
  )
}

export default LemonApp