import React from 'react'
import { Button } from 'react-bootstrap'
import { BsTrash, BsPencilSquare, BsSearch } from 'react-icons/bs'

const Applicant = ({index, applicant, onDetail, onEdit, onDelete}) => {
  return (
    <tr className={`applicant`}>
        <td>{index}</td>
        <td>{applicant.name}</td>
        <td>{applicant.email}</td>
        <td>{applicant.latest_education}</td>
        <td>{applicant.latest_work}</td>
        <td>{`${applicant.birthPlace}, ${applicant.birthDate}`}</td>
        <td><Button onClick={()=>{onDetail(applicant.id)}}><BsSearch /></Button></td>
        <td><Button onClick={()=>{onEdit(applicant.id)}}><BsPencilSquare /></Button></td>
        <td><Button onClick={()=>{onDelete(applicant.id)}}><BsTrash /></Button></td>
    </tr>
  )
}

export default Applicant