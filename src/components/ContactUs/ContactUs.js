import './ContactUs.css'
import React from 'react'
import { Form, Button } from 'react-bootstrap'

const ContactUs = () => {
  return (
    <section className='contact'>
        <p>Need Solutions?</p>
        <h2>Contact Us</h2>
        <p>+62 888 888 888</p>
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
    </section>
  )
}

export default ContactUs