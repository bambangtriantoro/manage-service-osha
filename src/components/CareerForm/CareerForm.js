import './CareerForm.css'
import React, { Component, useState } from 'react'
import { Axios } from '../../config'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import { saveAs } from 'file-saver'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class CareerForm extends Component {
  state = {
    name: '-',
    email: '-',
    position: '-',
    birthPlace: '-',
    birthDate: '-',
    gender: '-',
    status: '-',
    education: '-'
  }

  handleChange = ({target: {value,name}}) => this.setState({ [name]: value })

  createAndDownloadPdf = () => {
    Axios.post('/create-pdf', this.state)
    .then(() => Axios.get('fetch-pdf', {responseType: 'blob'}))
    .then((res) => {
      const pdfBlob = new Blob([res.data], { type:'application/pdf' })
      saveAs(pdfBlob, 'newPdf.pdf')
    })
  }

  DateField = () => {
    const [startDate, setStartDate] = useState(null);
    
    const handleChangeDate = date => {
      const thedate = new Date(date);
      const formattedDate = thedate.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
      })
      const valueOfInput = formattedDate;
      alert('what the hell?'+ valueOfInput)
      this.setState({ birthDate: valueOfInput })
    };

    return (
      <DatePicker 
        selected={startDate} 
        onChange={(date) => {
                    setStartDate(date)
                    handleChangeDate(date)
                  }}     
        onKeyDown={(e) => {e.preventDefault()}}
        maxDate={new Date()}
        showYearDropdown 
        scrollableYearDropdown 
        yearDropdownItemNumber={80} 
        placeholderText="Click to select a date"
        className='form-control' 
        name='birthDate' />
    )
  }

  render() {
    return (
      <div>
        <section className='career-form'>      
          <Container>
            <h2>Registration Form</h2>
            <Form>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" name='name' onChange={this.handleChange} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Your Email" name='email' onChange={this.handleChange} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Position</Form.Label>
                <Form.Select aria-label="Default select example" name='position' onChange={this.handleChange}>
                  <option selected disabled>Select Position</option> 
                  <option value="Mobile Developer">Mobile Developer</option>
                  <option value="Front-end Developer">Front-end Developer</option>
                  <option value="Java Developers">Java Developers</option>
                  <option value="Golang Developer">Golang Developer</option>
                  <option value="QA Engineer">QA Engineer</option>
                  <option value="Product Manager">Product Manager</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Row xs={1} sm={1} md={2} className='gy-3'>
                  <Col>
                    <Form.Label>Place of Birth</Form.Label>
                    <Form.Control type="text" placeholder="Place of Birth" name='birthPlace' onChange={this.handleChange} />
                  </Col>
                  <Col>
                    <Form.Label>Date of Birth</Form.Label>
                    <this.DateField />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Gender</Form.Label>
                {['radio'].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="Male"
                      name="gender"
                      value="Male"
                      type={type}
                      onChange={this.handleChange}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      label="Female"
                      name="gender"
                      value="Female"
                      type={type}
                      onChange={this.handleChange}
                      id={`inline-${type}-2`}
                    />
                  </div>
                ))}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Marital Status</Form.Label>
                <Form.Select aria-label="Default select example" name='status' onChange={this.handleChange}>
                  <option selected disabled>Select Your Marital Status</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Latest Formal Education</Form.Label>
                <Form.Control type="text" placeholder="Latest Formal Education" name='education' onChange={this.handleChange}/>
              </Form.Group>

              <Button type='button' className='mt-3 w-100' onClick={this.createAndDownloadPdf}>Apply</Button>
            </Form>
          </Container>
        </section>
      </div>
    )
  }
}

export default CareerForm