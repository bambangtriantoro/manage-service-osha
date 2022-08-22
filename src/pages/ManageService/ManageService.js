import './ManageService.css'
import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import proService from '../../assets/Flaticon/professional-services.png'
import itBootcamp from '../../assets/Flaticon/itbootcamp.png'
import { ContactUs, Footer, NavigationBar } from '../../components'

const ManageService = () => {
  return (
    <div>
        <NavigationBar />
        <section className='manage-service'>
            <Container>
                <Row className='justify-content-between align-items-center'>
                    <Col md={7}>
                        <h2>Manage Services</h2>
                        <p>Managed Service is a service performed by a third party (other company) to manage the system or infrastructure which includes managing the security system on the server, performing the backup process and database management, monitoring the server, providing a CRM system for customer service, and others. </p>
                    </Col>
                    <Col md={5}>
                        <h4 className='text-center text-orange mb-3'>Manage Services Type</h4>
                        <div className='d-flex gap-3 justify-content-center align-items-center'>
                            <div className='manage-service-list'>
                                <div className='img-container-mng green d-flex justify-content-center align-items-center rounded-4'>
                                    <img src={proService} alt='' />
                                </div>
                                <h6>Professional Services</h6>
                                <Button>Detail</Button>
                            </div>
                            <div className='manage-service-list'>
                                <div className='img-container-mng orange d-flex justify-content-center align-items-center rounded-4'>
                                    <img src={itBootcamp} alt='' />
                                </div>
                                <h6>IT Bootcamp</h6>
                                <Button>Detail</Button>
                            </div>
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

export default ManageService