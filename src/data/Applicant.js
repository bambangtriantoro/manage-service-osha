import React from 'react'
import { Button } from 'react-bootstrap'
import { BsTrash, BsPencilSquare, BsSearch } from 'react-icons/bs'

const Applicant = ({applicant, onDetail, onUpdate, onDelete}) => {
  return (
    <tr className={`applicant`}>
        <td>{applicant.id}</td>
        <td>{applicant.name}</td>
        <td>{applicant.email}</td>
        <td>{applicant.latest_education}</td>
        <td>{applicant.latest_work}</td>
        <td>{`${applicant.birthPlace}, ${applicant.birthDate}`}</td>
        <td><Button><BsSearch /></Button></td>
        <td><Button><BsPencilSquare /></Button></td>
        <td><Button><BsTrash /></Button></td>
    </tr>
  )
}

export default Applicant