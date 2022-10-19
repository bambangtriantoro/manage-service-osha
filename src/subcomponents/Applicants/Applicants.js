import Applicant from "./Applicant"

const Applicants = ({applicants, onDetail, onEdit, onDelete}) => {
  return (
    <tbody>
      {applicants.map((applicant, index)=>(
          <Applicant key={index} index={index+1} applicant={applicant} onDetail={onDetail} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </tbody>
  )
}

export default Applicants