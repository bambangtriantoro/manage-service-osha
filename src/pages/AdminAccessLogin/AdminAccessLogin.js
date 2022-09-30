import './AdminAccessLogin.css'
import React, { useRef } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useForm } from "react-hook-form"
import AuthUser from '../../config/AuthUser'

const AdminAccessLogin = () => {
    
    const { AxiosAuth, setToken } = AuthUser()

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const form = useRef();

    const onSubmit = (data) => {
        AxiosAuth.post('api/admin_access/login', {username:data.username, password:data.password})
        .then((res)=>{
            setToken(res.data.data[0], res.data.data[1].token)
            console.log('login success')
        })
    }
 
    return (
        <section className='login'>
            <Container>
                 <Form ref={form} onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className='mb-3'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control name='username' placeholder='Enter Username' {...register("username", { required: true })} />
                        {errors.username && <small className='text-warning'>Fill Username field</small>}
                    </Form.Group>   
                    <Form.Group className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' placeholder='Enter Password' {...register("password", { required: true })} />
                        {errors.username && <small className='text-warning'>Fill Password field</small>}
                    </Form.Group>
                    <Button type='submit' className='mt-3 w-100'>Login</Button> 
                </Form>
            </Container>
        </section> 
    )
} 

export default AdminAccessLogin