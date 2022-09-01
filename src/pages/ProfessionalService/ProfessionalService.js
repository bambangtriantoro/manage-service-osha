import './ProfessionalService.css'
import React from 'react'
import { ContactUs, Footer, NavigationBar } from '../../components'
import { Col, Container, Row } from 'react-bootstrap'
import proService from '../../assets/Flaticon/professional-services.png'

const ProfessionalService = () => {
  return (
    <div>
        <NavigationBar />
        <section className='professional-service the-header'>
            <Container>
                <Row className='align-items-center gy-3'>
                    <Col xs={12} sm={12} md={7}>
                        <h2>Professional Services</h2>
                        <p><span>Professional Experience Hiring</span></p>
                        <p>Professional services is one of the managed services programs that includes professional workers who have experience in their fields. </p>
                    </Col>
                    <Col xs={12} sm={12} md={5} className='item-center'>
                        <div className='img-container-pros'>
                            <img src={proService} alt='' className='w-100' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className='pros-capability'>
            <Container>
                <h3 className='text-center fw-bold mb-5'>IT Capabilities</h3>
                <Row className='justify-content-center align-items-center text-center g-3'>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <div className='pros-cap-list'>
                            <h5>PROJECT MANAGEMENT</h5>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={4}>
                        <div className='pros-cap-list'>
                            <h5>BUSINESS ANALYST</h5>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={4}>
                        <div className='pros-cap-list'>
                            <h5>SYSTEM ANALYST</h5>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={4}>
                        <div className='pros-cap-list'>
                            <h5>FUNCTIONAL CONSULTANT</h5>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <div className='pros-cap-list'>
                            <h5>SOFTWARE ARCHITECT</h5>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={3}>
                        <div className='pros-cap-list'>
                            <h5>SOFTWARE DEVELOPER</h5>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={3}>
                        <div className='pros-cap-list'>
                            <h5>BI CONSULTANT</h5>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={3}>
                        <div className='pros-cap-list'>
                            <h5>MIDDLEWARE CONSULTANT</h5>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={3}>
                        <div className='pros-cap-list'>
                            <h5>TECHNICAL CONSULTANT</h5>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <div className='pros-cap-list'>
                            <h5>QUALITY ASSURANCE</h5>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={12}>
                        <div className='pros-cap-list'>
                            <h5>APPLICATION SUPPORT</h5>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <ContactUs />
        <Footer />
    </div>
  )
}

export default ProfessionalService