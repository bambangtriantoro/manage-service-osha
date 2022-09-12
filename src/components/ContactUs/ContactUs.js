import './ContactUs.css'
import React, { useRef } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { RiWhatsappLine } from 'react-icons/ri'
import contactImg from '../../assets/images/Get in touch-bro.png' 
import emailjs from '@emailjs/browser'

const ContactUs = () => {
  const form = useRef();

  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_rra8cyh', 'osha_contact_2022', form.current, 'RYQUd_Td28qmEEJlL')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    form.current.reset()
  }
    
  return (
    <section className='contact'>
            <Row className='justify-content-center align-items-start gy-5'>
                <Col xs={12} sm={12} md={6} className='col-contact-1'>
                    <p>Need Solutions?</p>
                    <h2>Contact Us</h2>
                    <div className='form'>
                        <Form ref={form} onSubmit={sendEmail}>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" size="sm" placeholder="Name" name='name' />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="email" size="sm" placeholder="Email" name='email' />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" size="sm" placeholder="Contact Number" name='contact' />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" size="sm" placeholder="Company" name='company'/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Message"
                                    size="sm"
                                    name='message'
                                />
                            </Form.Group>
                            <Button type='submit' className='w-100 btn-primary'>
                                Submit
                            </Button>
                        </Form>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={6} className='col-contact-2'>
                    <div>
                        <p>For faster response</p>
                        <h2>Click the link below</h2>
                        <div className='d-flex justify-content-evenly align-items-center mb-3'>
                            <a rel='noreferrer' href="https://wa.me/6287817700088?text=Halo%20Admin" target="_blank" className='item-center'>          
                                <p className='color-wa mt-3'><RiWhatsappLine color='#00bb45' size={30} /> Message via Whatsapp</p>
                            </a>
                        </div>
                        <div className='item-center'>
                            <img src={contactImg} alt='' className='contact-img'/>
                        </div>
                    </div>
                </Col>
            </Row>
    </section>
  )
}

export default ContactUs