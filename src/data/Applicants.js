import Applicant from "./Applicant"

const Applicants = ({applicants, onDetail, onUpdate, onDelete}) => {
  return (
    <>
        {applicants.map((applicant, index)=>(
            <Applicant key={index} applicant={applicant} onDetail={onDetail} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
    </>
  )
}

export default Applicants