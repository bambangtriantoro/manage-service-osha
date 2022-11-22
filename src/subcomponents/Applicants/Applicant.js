import React from 'react'
import { Button } from 'react-bootstrap'
import { BsTrash, BsSearch } from 'react-icons/bs'

const Applicant = ({index, applicant, onDetail, onEdit, onDelete}) => {
  return (
    <tr className={`applicant`}>
        <td>{index}</td>
        <td>{applicant.name}</td>
        <td>{applicant.email}</td>
        <td>{applicant.position}</td>
        <td>{applicant.latest_education}</td>
        <td>{applicant.latest_work}</td>
        <td>{`${applicant.birthPlace}, ${applicant.birthDate}`}</td>
        <td>{parseInt(applicant.total_exp) < 1 ? '< 1 Years' : parseInt(applicant.total_exp) > 1 ? `${applicant.total_exp} Years` : `${applicant.total_exp} Year`}</td>
        <td><Button onClick={()=>{onDetail(applicant.applicantID)}}><BsSearch /></Button></td>
        {/* <td><Button onClick={()=>{onEdit(applicant.applicantID)}}><BsPencilSquare /></Button></td> */}
        <td><Button onClick={()=>{onDelete(applicant.applicantID)}}><BsTrash /></Button></td>
    </tr>
  )
}

export default Applicant