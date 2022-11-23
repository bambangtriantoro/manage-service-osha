import './ContactUs.css'
import React, { useRef, useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { RiWhatsappLine } from 'react-icons/ri'
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser'
import Swal from "sweetalert2";  
import contactImg from '../../assets/illustration/contact.png'
import Loading from '../../subcomponents/Loading/Loading' 

const ContactUs = () => {
  const [ loading, setLoading ] = useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log(form.current);
    setLoading(true)
    sendEmail() 
  }

  const onError = (errors) => {
    console.log(errors);
    HandleClickWarning()
  }

  const form = useRef();

  function sendEmail() {
    emailjs.sendForm('service_rfp1ari', 'template_dre4jkb', form.current, 'o1LgoXRuLV7xMthcP')
    .then((result) => {
        setLoading(false)
        console.log(result.text);
        HandleClickAutoclose()
    }, (error) => {
        console.log(error.text);
    });
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

  function HandleClickWarning() {
    Swal.fire({
        title: "Please fill in all fields",
        type: "warning",
        confirmButtonColor: '#FF7A00',
        confirmButtonText: 'Okay',
        closeOnConfirm: true
    });
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
        reset()
      } else {
        reset()
      } 
    })  
  }

  return (
    <section className='contact'>
            <Row className='justify-content-center align-items-start gy-5'>
                <Col xs={12} sm={12} md={6} className='col-contact-1'>
                    <p>Need Solutions?</p>
                    <h2>Contact Us</h2>
                    <div className='form'>
                        <Form ref={form} onSubmit={handleSubmit(onSubmit, onError)}>
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
                              { loading ? <Loading size='small' /> : 'Submit' }
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