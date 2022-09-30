import './Contact.css'
import React, { useRef } from 'react'
import { Footer, NavigationBar } from '../../components'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { indo } from './imports'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { RiWhatsappLine } from 'react-icons/ri'
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser'
import Swal from "sweetalert2";  

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    sendEmail();  
  }

  const form = useRef();

  function sendEmail() {
    emailjs.sendForm('service_rra8cyh', 'osha_contact_2022', form.current, 'RYQUd_Td28qmEEJlL')
    .then((result) => {
        console.log(result.text);
        HandleClickAutoclose()
    }, (error) => {
        console.log(error.text);
    });

    form.current.reset()
  }

  function onlyNumberKey(evt) {
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)){
        evt.preventDefault()
    }
    console.log(evt.which)
    console.log(evt.keyCode)
  }

  function HandleClickAutoclose() {  
    let timerInterval  
    Swal.fire({  
      title: 'Email Sent!',  
      timer: 3000,  
      timerProgressBar: true,
      confirmButtonColor: "#FF7A00",  
      onBeforeOpen: () => {  
        Swal.showLoading()  
        timerInterval = setInterval(() => {  
          const content = Swal.getContent()  
          if (content) {  
            const b = content.querySelector('b')  
            if (b) {  
              b.textContent = Swal.getTimerLeft()  
            }  
          }  
        }, 100)  
      },  
      onClose: () => {  
        clearInterval(timerInterval)  
      }  
    }).then((result) => {  
      if (result.dismiss === Swal.DismissReason.timer) {  
        console.log('I was closed by the timer')  
      }  
    })  
  }

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
                <a rel='noreferrer' href="https://wa.me/6287817700088?text=Halo%20Admin" target="_blank" className='item-center contact-wa'>          
                  <p className='color-wa mt-3'><RiWhatsappLine color='#00bb45' size={30} /> Message via Whatsapp</p>
                </a>
                <Row className='justify-content-center align-items-center'>
                    <Col xs={12} sm={12} md={12}>
                        <div className='form'>
                        <Form ref={form} onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" size="sm" placeholder="Name" name='name'  {...register("name", { required: true })} />
                                {errors.name && <small className='text-danger'>Name is required</small>}
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="email" size="sm" placeholder="Email" name='email' {...register("email", { required: true })} />
                                {errors.email && <small className='text-danger'>Email is required</small>}
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" size="sm" placeholder="Contact Number" name='contact' onKeyDown={(evt) => {onlyNumberKey(evt)}} {...register("contact", { required: true , pattern: { value: /^[0-9]*$/, message: 'Only Numbers Allowed'}})} />
                                {errors.contact && <small className='text-danger'>Contact Number is required</small>}
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type="text" size="sm" placeholder="Company" name='company' {...register("company", { required: true })} />
                                {errors.company && <small className='text-danger'>Company Name is required</small>}
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Message"
                                    size="sm"
                                    name='message' {...register("message", { required: true })}
                                />
                                {errors.message && <small className='text-danger'>Message is required</small>}
                            </Form.Group>
                            <Button type='submit' className='w-100 btn-primary'>
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