import './AdminAccessDashboard.css' 
import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { AxiosCustom } from '../../config'
import Applicants from '../../data/Applicants'
import AuthUser from '../../config/AuthUser'
import AdminAccessLogin from '../AdminAccessLogin/AdminAccessLogin'

const AdminAccessDashboard = () => {
    const [applicants, setApplicants] = useState([])
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    // Get Data
    useEffect(()=>{
        AxiosCustom.get('/api/applicant')
        .then(res => {
            setApplicants(res.data)
            setLoading(false)
        },
        error => {
            console.error('Error Fetching Data : ',error)
            setError(error)
        })
    },[]) 

    if(loading) return "Loading..."
    if(error) return "Error..."

    // Detail
    const detailApplicant = async (id) => {
        const res = await AxiosCustom.get(`/api/applicant/show/${id}`)
        const data = await res.json()
    
        return data
    }
    
    // Update
    const updateApplicant = async  (id) => {
        const applicantToUpdate = await detailApplicant(id)
        const updateApplicant = {...applicantToUpdate}
        const res = await fetch(`/api/applicant/${id}`,{
          method:'PUT',
          headers:{
            'Content-type': 'application/json'
          },
          body: JSON.stringify(updateApplicant)
        })
        const data =  await res.json()
        setApplicants(applicants.map((applicant) => applicant.id === id ? {...applicant, data}:applicant))
    }

    // Delete
    const deleteApplicant = async (id) => {
        await fetch(`/api/applicant/delete/${id}`, {method:'DELETE'})
        setApplicants(applicants.filter((applicant) => applicant.id !== id))
    }

    const { getToken } = AuthUser()
    if(!getToken()) {
        return <AdminAccessLogin />
    }

    return (
        <div>
            <Container>
                <div className='d-flex justify-content-between mt-5'>
                    <h3>Applicant CV</h3>
                    <Button>Logout</Button>    
                </div>
                <Table striped bordered hover className='mt-5 text-center centered-table-content'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Latest Education</th>
                            <th>Latest Work</th>
                            <th>Birth Place & Date</th>
                            <th colSpan={3}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applicants.length > 0 ? <Applicants applicants={applicants} onDetail={detailApplicant} onUpdate={updateApplicant} onDelete={deleteApplicant} /> : 'No Applicant'}
                    </tbody>
                </Table>
            </Container> 
        </div>
    )
}

export default AdminAccessDashboard