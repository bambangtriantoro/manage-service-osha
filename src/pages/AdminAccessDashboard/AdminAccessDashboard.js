import './AdminAccessDashboard.css' 
import React, { useEffect, useState, useRef } from 'react'
import { AxiosCustom } from '../../config'
import AuthUser from '../../config/AuthUser'
import AdminAccessLogin from '../AdminAccessLogin/AdminAccessLogin'
import Applicants from '../../subcomponents/Applicants/Applicants'
import Loading from '../../subcomponents/Loading/Loading'
import PDFTemplate from '../../pdfTemplate'
import { Button, Container, Table, Modal } from 'react-bootstrap'
import { useReactToPrint } from 'react-to-print';
import Swal from "sweetalert2";  
import ApplicantEdit from '../../subcomponents/Applicants/ApplicantEdit'

const AdminAccessDashboard = () => {
    const [applicants, setApplicants] = useState([])
    const [applicant, setApplicant] = useState([])
    const [experience, setExperience] = useState([])
    const [jobdesc, setJobdesc] = useState([])
    const [projects, setProjects] = useState([])
    const [tools, setTools] = useState([])
    const [capabilities, setCapabilities] = useState([])
    
    const [loading, setLoading] = useState(true)
    const [modalLoading, setModalLoading] = useState(false)
    const [experienceLoading, setExperienceLoading] = useState(false)
    const [error, setError] = useState(null)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showEdit, setShowEdit] = useState(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const { getToken, token, logout } = AuthUser()
    
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        pageStyle: () => {''}
    });

    // Fetch Data
    const fetchData = React.useCallback(async () => {
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

    // Applicant's Experience
    const fetchDataExperience = async (id) => {
        setExperienceLoading(true)
        await AxiosCustom.get(`/api/experience/show/${id}`)
        .then(res => {
            setExperience(res.data)
            setLoading(false)

            res.data.map((item, index)=>{
                return (fetchDataJobdesc(item.id), fetchDataProject(item.id), fetchDataTool(item.id))
            })
            
            setExperienceLoading(false)
        },
        error => {
            console.error('Error Fetching Data : ',error)
            setError(error)
        })
    }

    const fetchDataJobdesc = async (id) => {
        await AxiosCustom.get(`/api/jobdesc/show/${id}`)
        .then(res => {
            setJobdesc(jobdesc => [...jobdesc, res.data])
        },
        error => {
            console.error('Error Fetching Data : ',error)
            setError(error)
        })
    }

    const fetchDataProject = async (id) => {
        await AxiosCustom.get(`/api/projects/show/${id}`)
        .then(res => {
            setProjects(projects => [...projects, res.data])
        },
        error => {
            console.error('Error Fetching Data : ',error)
            setError(error)
        })
    }

    const fetchDataTool = async (id) => {
        await AxiosCustom.get(`/api/tools/show/${id}`)
        .then(res => {
            setTools(tools => [...tools, res.data])
        },
        error => {
            console.error('Error Fetching Data : ',error)
            setError(error)
        })
    }

    // Capabilities
    const fetchDataCapabilities = async (id) => {
        await AxiosCustom.get(`/api/capabilities/show/${id}`)
        .then(res => {
            setCapabilities(res.data)
            setLoading(false)
        },
        error => {
            console.error('Error Fetching Data : ',error)
            setError(error)
        })
    }

    // Use Effect
    useEffect(()=>{
        fetchData()
    },[fetchData]) 

    // Detail
    const detailApplicant = async (id) => {
        handleShow()
        setModalLoading(true)
        setJobdesc([])
        setProjects([])
        setTools([])

        await AxiosCustom.get(`/api/applicant/show/${id}`).then(res => {
            setApplicant(res.data.data[0])
            setModalLoading(false)
            fetchDataExperience(id)
            fetchDataCapabilities(id)
        },
        error => {
            console.error('Error Fetching Data : ',error)
            setError(error)
        })
    }
    
    // Edit
    const editApplicant = async (id) => {
        handleShowEdit()
        setModalLoading(true)
        await AxiosCustom.get(`/api/applicant/show/${id}`).then(res => {
            setApplicant(res.data.data[0])
            setModalLoading(false)
        },
        error => {
            console.error('Error Fetching Data : ',error)
            setError(error)
        })
    }

    // Delete
    const deleteApplicant = async (id) => {
        await 
        Swal.fire({
            title: 'Delete applicant?',
            showDenyButton: true,
            confirmButtonText: 'Yes',
            confirmButtonColor: '#FF7A00',
        }).then((result) => {
            if (result.isConfirmed) {
                AxiosCustom.delete(`/api/applicant/destroy/${id}`)
                setApplicants(applicants.filter((applicant) => applicant.id !== id))
            }
        })
    }

    // Logout
    const logoutClick = () => {
        Swal.fire({
            title: 'Logout?',
            showDenyButton: true,
            confirmButtonText: 'Yes',
            confirmButtonColor: '#FF7A00',
        }).then((result) => {
            if (result.isConfirmed) {
                if(token != null) {
                    logout()
                }
            }
        })
    }

    if(!getToken()) {
        return <AdminAccessLogin />
    }

    return (
        <div>
            <Container>
                <div className='d-flex justify-content-between mt-5'>
                    <h3>Applicant CV</h3>
                    <Button onClick={logoutClick}>Logout</Button>    
                </div>
                <Table striped bordered hover responsive className='mt-5 text-center centered-table-content'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Applied Position</th>
                            <th>Latest Education</th>
                            <th>Latest Workplace</th>
                            <th>Birth Place & Date</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                    </thead>
                    
                    {loading ? <tbody><tr><td colSpan={8}><Loading/></td></tr></tbody> : 
                    error ? <tbody><tr><td colSpan={8}>`Error : ${error}`</td></tr></tbody> : 
                    applicants.length > 0 ? <Applicants applicants={applicants} onDetail={detailApplicant} onEdit={editApplicant} onDelete={deleteApplicant} /> : 
                    <tbody><tr><td colSpan={8}><p className='mb-0'>No Applicant</p></td></tr></tbody>}
                    
                </Table>
            </Container>

            <div style={{ display: "none" }}><PDFTemplate componentRef={componentRef} applicant={applicant} experience={experience} jobdesc={jobdesc} projects={projects} tools={tools} capabilities={capabilities}/></div>

            {/* Modal Detail */}
            <Modal size="lg" show={show} onHide={handleClose}>
            {modalLoading ? <Loading /> :
                applicant.length < 1 ? <p className='w-100 text-center'>Get Data Failed</p> :
                <>
                    <Modal.Header closeButton>
                        <Modal.Title>Data Applicant {applicant.id}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Table striped hover responsive className='w-75 mx-auto detail-table toped-table-content'>
                            <tr><td colSpan={3} className='text-center pt-3'><b>Data</b></td></tr>
                            <tr>
                                <th>Name</th>
                                <td className='text-center pe-5'>:</td>
                                <td>{applicant.name}</td>
                            </tr>
                            <tr >
                                <th>Email</th>
                                <td className='text-center pe-5'>:</td>
                                <td>{applicant.email}</td>
                            </tr>
                            <tr >
                                <th>Applied Position</th>
                                <td className='text-center pe-5'>:</td>
                                <td>{applicant.position}</td>
                            </tr>
                            <tr >
                                <th>Birth Place & Birth Date</th>
                                <td className='text-center pe-5'>:</td>
                                <td>{applicant.birthPlace + ', ' + applicant.birthDate}</td>
                            </tr>
                            <tr >
                                <th>Gender</th>
                                <td className='text-center pe-5'>:</td>
                                <td>{applicant.gender}</td>
                            </tr>
                            <tr >
                                <th>Status</th>
                                <td className='text-center pe-5'>:</td>
                                <td>{applicant.status}</td>
                            </tr>
                            <tr >
                                <th>Latest Education</th>
                                <td className='text-center pe-5'>:</td>
                                <td>{applicant.latest_education+' ('+applicant.education_period+')'}</td>
                            </tr>
                            <tr><td colSpan={3} className='text-center pt-3'><b>Working Experience</b></td></tr>
                            {experienceLoading === true ? <tr><td colSpan={3}><Loading/></td></tr> : experience.length > 0 ? 
                            experience.map((item, index)=>(
                                <>
                                    <tr >
                                        <th>Working Place</th>
                                        <td className='text-center pe-5'>:</td>
                                        <td>{item.work_place+' ('+item.work_period+')'}</td>
                                    </tr>
                                    <tr >
                                        <th>Position</th>
                                        <td className='text-center pe-5'>:</td>
                                        <td>{item.work_position}</td> 
                                    </tr>
                                    <tr >
                                        <th>Work project</th>
                                        <td className='text-center pe-5'>:</td>
                                        <td>
                                            <ul>
                                                {projects.length > 0 ? 
                                                projects.map((itempr, index)=>{
                                                    return itempr.map((iteminpr, index)=>
                                                    {   
                                                        return iteminpr.experience_id === item.id ? <li>{iteminpr.work_project}</li> : ''
                                                    })
                                                }):'-'
                                                } 
                                            </ul>
                                        </td> 
                                    </tr>
                                    <tr >
                                        <th>Work tool</th>
                                        <td className='text-center pe-5'>:</td>
                                        <td>
                                            <ul>
                                                {tools.length > 0 ? 
                                                tools.map((itemtl, index)=>{
                                                    return itemtl.map((itemintl, index)=>
                                                    {   
                                                        return itemintl.experience_id === item.id ? <li>{itemintl.work_tool}</li> : ''
                                                    })
                                                }):'-'
                                                } 
                                            </ul>
                                        </td> 
                                    </tr>
                                    <tr >
                                        <th>Work description</th>
                                        <td className='text-center pe-5'>:</td>
                                        <td>
                                            <ul>
                                                {jobdesc.length > 0 ? 
                                                jobdesc.map((itemjd, index)=>{
                                                    return itemjd.map((iteminjd, index)=>
                                                    {   
                                                        return iteminjd.experience_id === item.id ? <li>{iteminjd.work_description}</li> : ''
                                                    })
                                                }):<Loading size='small'/> 
                                                } 
                                            </ul>
                                        </td> 
                                    </tr>
                                </>
                            )): ''}
                            <tr><td colSpan={3} className='text-center pt-3'><b>IT Capabilities</b></td></tr>
                            <tr >
                                <th>IT Capabilities</th>
                                <td className='text-center pe-5'>:</td>
                                <td>
                                    {capabilities.length > 0 ? 
                                    capabilities.map((item, index)=>{
                                        return index===0 ? <span>{item.capability}</span> : <span>, {item.capability}</span>  
                                    }):<Loading size='small'/>}
                                </td>
                            </tr>
                        </Table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handlePrint}>
                            Export to PDF
                        </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </>
            }
            </Modal>
            
            {/* Modal Edit */}
            <Modal size="lg" show={showEdit} onHide={handleCloseEdit}>
            {modalLoading ? <Loading /> :
                applicant.length < 1 ? <p className='w-100 text-center'>Get Data Failed</p> :
                <>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Data Applicant {applicant.id}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ApplicantEdit applicants={applicants} setApplicants={setApplicants} applicant={applicant} closeModal={handleCloseEdit} fetchData={fetchData}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseEdit}>
                            Close
                        </Button>
                    </Modal.Footer>
                </>
            }
            </Modal>
        </div>
    )
}

export default AdminAccessDashboard