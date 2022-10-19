import './index.css'
import React from 'react'
import  { Container, Table } from 'react-bootstrap'

const index = ({componentRef, applicant}) => {
  return (
    <div ref={componentRef}>
        <div className="print-container" style={{ margin: "0", padding: "0" }}> 
            {/* Header */}
            <div className='page-header'>
                <img src='https://oshatechnology.com/CV Header.png' alt='header img' className='w-100'/>
                <div className='my-3 py-3'>
                    <h1 className='text-center name'>{ applicant.name }</h1>
                    <h3 className='text-center position'>{ applicant.position }</h3>
                </div>
            </div>
            
            {/* Page Break */}
            <div className="page-break" />
            
            {/* Body */}
            <div className='page-body'>
                <Container>
                    <Table bordered>
                        <tbody>
                            <tr>
                                <th colSpan='2' className='text-warning bg-dark'>
                                    <div className='d-flex-between w-100'>
                                        <span className='pt-c'>Personal Details</span>
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <td>Candidate Name</td>
                                <td>{ applicant.name }</td>
                            </tr>
                            <tr>
                                <td>Candidate Email</td>
                                <td>{ applicant.email }</td>
                            </tr>
                            <tr>
                                <td>Candidate Position</td>
                                <td>{ applicant.position }</td>
                            </tr>
                            <tr>
                                <td>Place & Date of Birth</td>
                                <td>{ applicant.birthPlace }, { applicant.birthDate }</td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>{ applicant.gender }</td>
                            </tr>
                            <tr>
                                <td>Marital Status</td>
                                <td>{ applicant.status }</td>
                            </tr>
                            <tr>
                                <th colSpan='2' className='text-warning bg-dark'>Formal Education</th>
                            </tr>
                            <tr>
                                <td>{ applicant.education_period }</td>
                                <td>{ applicant.latest_education }</td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>

                <div className='container'>
                    <Table bordered>
                        <tbody>
                            <tr>
                                <th colSpan='2' className='text-warning bg-dark'>
                                    <div className='d-flex-between'>
                                        Latest Working Experience
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <td>Period</td>
                                <td>{ applicant.work_period }</td>
                            </tr>
                            <tr>
                                <td>Company</td>
                                <td>{ applicant.latest_work }</td>
                            </tr>
                            <tr>
                                <td>Position</td>
                                <td>{ applicant.work_position }</td>
                            </tr>
                            <tr>
                                <td>Job Desc</td>
                                <td>{ applicant.work_description }</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <div className='container'>
                    <Table bordered>
                        <tbody>
                            <tr>
                                <th colSpan='2' className='text-warning bg-dark'>
                                    <div className='d-flex-between'>
                                        Technical Skills
                                    </div>
                                </th>
                            </tr>
                            <tr>
                                <td>IT Capabilities</td>
                                <td>{ applicant.it_capabilities }</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>

            {/* Footer */}
            <div id="pageFooter" className="page-footer">
                <div className="footer-text">
                    <p className='bold'>PT. OSHA TEKNOLOGI INDONESIA</p>
                    <p>Komp. Griya Cikutra, Blok B, No. 8, Cibeunying, Bandung, Jawa Barat, 40191</p>
                    <p>0878 1770 0088 - www.oshatechnology.com</p>
                </div>
                <img src='https://oshatechnology.com/CV Footer.png' className='w-100 footerimg' alt='footer img' />
            </div>
        </div>
    </div>
  )
}

export default index