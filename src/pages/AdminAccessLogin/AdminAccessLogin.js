import './AdminAccessLogin.css'
import React, { useRef, useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useForm } from "react-hook-form"
import AuthUser from '../../config/AuthUser'
import Loading from '../../subcomponents/Loading/Loading'
import Swal from 'sweetalert2'

const AdminAccessLogin = () => {   
    const [ loading, setLoading ] = useState(false)

    const { AxiosAuth, setToken } = AuthUser()

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const form = useRef();
    
    const onSubmit = (data) => {
        setLoading(true)
        AxiosAuth.get('/sanctum/csrf-cookie').then(response => {
            console.log(response)
            AxiosAuth.post('api/admin_access/login', {username:data.username, password:data.password})
            .then((res)=>{
                setToken(res.data.data[0], res.data.data[1].token)
                console.log(res)   
            },
            error => {
                console.error('Error : ',error)
                // Alert warning
                HandleClickWarning('Username or Password False')
                setLoading(true)
            })
        });
    }

    const HandleClickWarning = (message) => {
        Swal.fire({
            title: message,
            type: "warning",
            confirmButtonColor: '#FF7A00',
            confirmButtonText: 'Okay',
            closeOnConfirm: true,
            onClose: () => {
                setLoading(false)
            },
        }).then((result) => {
            setLoading(false)
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
                        <Form.Control type='password' name='password' placeholder='Enter Password' {...register("password", { required: true })} />
                        {errors.username && <small className='text-warning'>Fill Password field</small>}
                    </Form.Group>
                    <Button type='submit' className='mt-3 w-100'>{loading ? <Loading size='small' /> : 'Login'}</Button> 
                </Form>
            </Container>
        </section> 
    )
} 

export default AdminAccessLogin