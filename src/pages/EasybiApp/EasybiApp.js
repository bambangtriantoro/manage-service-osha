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
        <section className='easybi-app'>
            <Container>
                <Row className='justify-content-center align-items-center'>
                    <Col md={8} className='app-desc'>
                        <div className='d-flex gap-3 align-items-center'>
                            <img src={easybi} alt='' width={200} height={100} />
                            <div>
                                <h2>Easy BI</h2>
                                <p>Dashboard Analytic and Monitoring</p>
                                <p>
                                    <b>Increase your business acceleration, efficient and accurate</b> <br/> 
                                    Start with your data to visualize and get your business information accurately,thus helping you in making business strategy decisions -EasyBI
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} className='app-benefits'>
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