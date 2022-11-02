import './index.css'
import React from 'react'
import  { Container, Table } from 'react-bootstrap'
import { FaUser, FaGraduationCap, FaSuitcase } from 'react-icons/fa'
import { BsFillGearFill } from 'react-icons/bs'

const index = ({componentRef, applicant, experience, jobdesc, projects, tools, capabilities}) => {
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
            <Container>
                <table className='w-100'>
                    <thead><tr><td>
                        <div class="header-space"> </div>
                    </td></tr></thead>
                    <tbody><tr><td>
                        <div class="content">
                            <div className='page-body'>
                                <Table bordered>
                                    <tbody>
                                        <tr>
                                            <th colSpan='2' className='text-light bg-dark'>
                                                <div className='d-flex justify-content-between align-items-center w-100'>
                                                    <h5 className='table-title'>PERSONAL DETAILS</h5> 
                                                    <FaUser size={25} />
                                                </div>
                                            </th>
                                        </tr>
                                        <tr>
                                            <td>Candidate Name</td>
                                            <td className='capitalize'>{ applicant.name }</td>
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
                                            <td className='capitalize'>{ applicant.birthPlace }, { applicant.birthDate }</td>
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
                                            <th colSpan='2' className='text-light bg-dark'><div className='d-flex justify-content-between align-items-center'><h5 className='table-title'>FORMAL EDUCATION</h5> <FaGraduationCap size={35} /></div></th>
                                        </tr>
                                        <tr>
                                            <td>{ applicant.education_period }</td>
                                            <td className='capitalize'>{ applicant.latest_education }</td>
                                        </tr>
                                    </tbody>
                                </Table>

                            
                                <Table bordered>
                                    <tbody>
                                        <tr>
                                            <th colSpan='2' className='text-light bg-dark'>
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <h5 className='table-title'>WORKING EXPERIENCES</h5>
                                                    <FaSuitcase size={25} /> 
                                                </div>
                                            </th>
                                        </tr>
                                        {experience.map((item,i)=>(
                                            <>
                                                <tr>
                                                    <td><b>Period</b></td>
                                                    <td><b>{ item.work_period }</b></td>
                                                </tr>
                                                <tr>
                                                    <td><b>Company</b></td>
                                                    <td className='capitalize'><b>{ item.work_place }</b></td>
                                                </tr>
                                                <tr>
                                                    <td>Position</td>
                                                    <td className='capitalize'>{ item.work_position }</td>
                                                </tr>
                                                <tr>
                                                    <td>Projects</td>
                                                    <td>
                                                        <ul className='jobdesc-list'>
                                                            { projects.map((itempr,i)=>{return itempr.map((iteminpr,i)=>{return iteminpr.experience_id===item.id ? <li className='capitalize'>{iteminpr.work_project}</li> : ''})}) }
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Tools</td>
                                                    <td>
                                                        <ul className='jobdesc-list'>
                                                            { tools.map((itemtl,i)=>{return itemtl.map((itemintl,i)=>{return itemintl.experience_id===item.id ? <li className='capitalize'>{itemintl.work_tool}</li> : ''})}) }
                                                        </ul>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Job Desc</td>
                                                    <td>
                                                        <ul className='jobdesc-list'>
                                                            { jobdesc.map((itemjd,i)=>{return itemjd.map((iteminjd,i)=>{return iteminjd.experience_id===item.id ? <li className='capitalize'>{iteminjd.work_description}</li> : ''})}) }
                                                        </ul>
                                                    </td>
                                                </tr>
                                            </>
                                        ))}
                                    </tbody>
                                </Table>

                            
                                <Table bordered>
                                    <tbody>
                                        <tr>
                                            <th colSpan='2' className='text-light bg-dark'>
                                                <div className='d-flex justify-content-between align-items-center'>
                                                    <h5 className='table-title'>TECHNICAL SKILLS</h5>
                                                    <BsFillGearFill size={25} />
                                                </div>
                                            </th>
                                        </tr>
                                        <tr>
                                            <td>IT Capabilities</td>
                                            <td>{ capabilities.map((item,i)=>{return i===0 ? <span>{item.capability}</span> : <span>, {item.capability}</span> }) }</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </td></tr></tbody>

                    <tfoot><tr><td>
                        <div class="footer-space"> </div>
                    </td></tr></tfoot>
                </table>
            </Container>

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