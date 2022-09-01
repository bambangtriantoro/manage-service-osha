import './EasybiApp.css'
import React from 'react'
import { easybi } from '../../components/NavigationBar/imports'
import { Container, Row, Col } from 'react-bootstrap'
import { ContactUs, NavigationBar, Footer } from '../../components'
import { easybiBen } from '../SimanisApp/imports'

const EasybiApp = () => {
  return (
    <div>
        <NavigationBar />
        <section className='easybi-app the-header'>
            <Container>
                <Row className='justify-content-center align-items-center gy-5'>
                    <Col xs={12} sm={12} md={8} className='app-desc'>
                        <div className='d-flex flex-wrap gap-3 align-items-center'>
                            <img src={easybi} alt='' width={150} height={70} />
                            <div>
                                <h2>Easy BI</h2>
                                <p className='mb-2 fw-bold'>Dashboard Analytic and Monitoring</p>
                                <p className='mb-2'>Increase your business acceleration, efficient and accurate</p>
                                <p> 
                                    Start with your data to visualize and get your business information accurately,thus helping you in making business strategy decisions -EasyBI
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={4} className='app-benefits'>
                        <img src={easybiBen} alt='easybi benefits' className='w-100'/>
                    </Col>
                </Row>
            </Container>
        </section>
        <ContactUs />
        <Footer />
    </div>
  )
}

export default EasybiApp