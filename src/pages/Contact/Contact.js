import './Contact.css'
import React from 'react'
import { Footer, NavigationBar } from '../../components'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { indo } from './imports'
import { HiOutlineLocationMarker } from 'react-icons/hi'

const Contact = () => {
  return (
    <div>
        <NavigationBar />
        <section className='the-contact the-header'>
          <Container>
            <h2>Contact Us</h2>
            <p>Get in touch with us</p>
          </Container>
        </section>
        <section className='the-contact-item'>
          <Container>
            <Row xs={1} sm={1} md={2} className='align-items-center g-3'>
              <Col className='whereweare'>
                <Row xs={1} sm={1} md={1}>
                    <Col>
                        <img src={indo} alt='map indo' className='w-100'/>
                    </Col>
                    <Col>
                        <div className='location'>
                            <h5><HiOutlineLocationMarker size={30} color='#FF7A00' /> BANDUNG</h5>
                            <div className='d-flex flex-column'>
                                <p>Griya Cikutra Blok-B No.08, Cibeunying, Bandung, Jawa Barat</p>
                                <p><b>Phone</b> : +62 878 1770 0088</p>
                                <p><b>Email</b> : info@oshatechnology.com</p>
                            </div>
                        </div>
                    </Col>
                </Row>
              </Col>

              <Col className='contact'>
                <p>Send Us Message</p>
                <p>+62 888 888 888</p>
                <Row className='justify-content-center align-items-center gy-5'>
                    <Col xs={12} sm={12} md={12}>
                        <div className='form'>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" size="sm" placeholder="Name" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control type="email" size="sm" placeholder="Email" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" size="sm" placeholder="Contact Number" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" size="sm" placeholder="Company" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control
                                        as="textarea"
                                        placeholder="Message"
                                        size="sm"
                                    />
                                </Form.Group>
                                <Button type="submit" className='w-100 btn-primary'>
                                    Submit
                                </Button>
                                
                            </Form>
                        </div>
                    </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <Container>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0205649259997!2d107.64631491424363!3d-6.888139869316168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e73745a3daf5%3A0xf6fd5ac9115ff3a3!2sOSHA%20Technology!5e0!3m2!1sen!2sid!4v1661409955389!5m2!1sen!2sid" title='osha-a' className='w-100 mb-5' height="450" style={{ border:0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </Container>
        <Footer />
    </div>
  )
}

export default Contact