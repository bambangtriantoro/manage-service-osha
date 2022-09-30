import './Hero.css'
import React, { useRef } from 'react'
import { Carousel, Row, Col, Form, Button } from 'react-bootstrap'
import { easybi, lemon, LogoOsha, oranye } from '../../components/NavigationBar/imports'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'  
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";  

AOS.init({
    once: true,
    duration: 600,
});

const Hero = (props) => {
    const { register, handleSubmit } = useForm();
  
    const onSubmit = (data) => {
        console.log(data);
        sendEmail();  
    }
    
    const onError = (errors) => {
        console.log(errors);
        HandleClickWarning()
    }

    function onlyNumberKey(evt) {
        var ASCIICode = (evt.which) ? evt.which : evt.keyCode
        if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)){
            evt.preventDefault()
        }
        console.log(evt.which)
        console.log(evt.keyCode)
    }

    const form = useRef()

    function sendEmail() {
        emailjs.sendForm('service_rfp1ari', 'template_dre4jkb', form.current, 'o1LgoXRuLV7xMthcP')
        .then((result) => {
            console.log(result.text);
            HandleClickAutoclose()
        }, (error) => {
            console.log(error.text);
        });
    
        form.current.reset()
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
                console.log('I was closed by the timer')  
            }  
        })  
    }

    return(
        <>  
            <div className='hero'>
                <div className='carousel-container'>
                    <Carousel variant='dark' interval={5000} controls={false}>
                        <Carousel.Item>
                            <div                            
                                className="d-block w-100 carousel-img"
                            />
                            <Carousel.Caption>
                                <Row xs="1" sm="1" md="2" className='justify-content-between'>
                                    <Col data-aos="fade-up">
                                        <div className='d-flex '>
                                            <div className='logo-img'>
                                                <img src={LogoOsha} alt='simanis' className='w-75' />
                                            </div>
                                            <div className='logo-img'>
                                                <img src={oranye} alt='oranye' className='w-100' />
                                            </div>
                                            <div className='logo-img'>
                                                <img src={lemon} alt='lemon' className='w-100' />
                                            </div>
                                            <div className='logo-img'>
                                                <img src={easybi} alt='easybi' className='w-100' />
                                            </div>
                                        </div>
                                        <h2>Very Useful Products</h2>
                                        <p>We have products that is very useful to help your works, easy to use also.</p>
                                        <Link to='/productsolution'><Button className='btn-primary mt-3' size='lg'>Learn More</Button></Link>
                                    </Col>
                                    <Col>
                                        <h4>Contact Us</h4>
                                        <p>Try Our Products</p>
                                    </Col>
                                </Row>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div
                            className="d-block w-100 carousel-img"
                            />

                            <Carousel.Caption>
                                <Row xs="1" sm="1" md="2">
                                    <Col data-aos="fade-up">
                                        <h2>Great Quality Projects</h2>
                                        <p>We provide project solution services in various platform with advanced technology.</p>
                                        <div onClick={props.scrollToElement}><Button className='btn-primary mt-3' size='lg'>Learn More</Button></div>
                                    </Col>
                                    <Col>
                                        <h4>Contact Us</h4>
                                        <p>We will do the best to make your projects done perfectly</p>
                                    </Col>
                                </Row>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div
                            className="d-block w-100 carousel-img"
                            />

                            <Carousel.Caption>
                                <Row xs="1" sm="1" md="2">
                                    <Col data-aos="fade-up">
                                        <h2>Manage Services</h2>
                                        <p>We have a really good manage service system.</p>
                                        <Link to='/manageservice'><Button className='btn-primary mt-3' size='lg'>Learn More</Button></Link>
                                    </Col>
                                    <Col>
                                        <h4>Contact Us</h4>
                                        <p>Cooperate With Us</p>
                                    </Col>
                                </Row>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className='hero-absolute-item'>
                    <Form ref={form} onSubmit={handleSubmit(onSubmit,onError)}>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" size="sm" placeholder="Name" name='name'  {...register("name", { required: true })} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="email" size="sm" placeholder="Email" name='email' {...register("email", { required: true })} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" size="sm" placeholder="Contact Number" name='contact' onKeyDown={(evt) => {onlyNumberKey(evt)}} {...register("contact", { required: true , pattern: { value: /^[0-9]*$/, message: 'Only Numbers Allowed'}})} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" size="sm" placeholder="Company" name='company' {...register("company", { required: true })} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control
                                as="textarea"
                                placeholder="Message"
                                size="sm"
                                name='message' {...register("message", { required: true })}
                            />
                        </Form.Group>
                        <Button type='submit' className='w-100 btn-primary'>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Hero