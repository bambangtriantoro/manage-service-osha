import './CareerForm.css'   
import React, { Component, useState } from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
// import { saveAs } from 'file-saver'
import { AxiosCustom } from '../../config'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";  

class CareerForm extends Component {
  state = {
    name: '-',
    email: '-',
    position: '-',
    birthPlace: '-',
    birthDate: '-',
    gender: '-',
    status: '-',
    education: '-',
    edufrom: '-',
    eduto: '-',
    workingexp: '-',
    workfrom: '-',
    workto: '-',
    workingpos: '-',
    workingdesc: '-',
    capabilities: '-'
  }

  handleChange = ({target: {value,name}}) => this.setState({ [name]: value })

  // createAndDownloadPdf = () => {
  //   AxiosCustom.post('/create-pdf', this.state)
  //   .then(() => AxiosCustom.get('fetch-pdf', {responseType: 'blob'}))
  //   .then((res) => {
  //     const pdfBlob = new Blob([res.data], { type:'application/pdf' })
  //     saveAs(pdfBlob, 'newPdf.pdf')
  //   })
  // }

  createAndDownloadPdf = () => {
    AxiosCustom.post('/create-pdf', this.state)
    .then(() => AxiosCustom.get('fetch-pdf', {responseType: 'blob'}))
    .then(() => {
      this.HandleClickAutoclose()
    })
  }
  
  // createAndDownloadPdf = () => {
  //   AxiosCustom.post('/create-pdf', this.state)
  //   .then(() => AxiosCustom.get('fetch-pdf', {responseType: 'blob'}))
  //   .then((res) => {
  //     const pdfBlob = new Blob([res.data], { type:'application/pdf' })
  //     saveAs(pdfBlob, 'newPdf.pdf')
  //   })
  // }

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

  HandleClickAutoclose() {  
    let timerInterval  
    Swal.fire({  
      title: 'Email Sent!',  
      timer: 3000,  
      timerProgressBar: true,
      confirmButtonColor: "#FF7A00",  
      onBeforeOpen: () => {  
        Swal.showLoading()  
        timerInterval = setInterval(() => {  
          const content = Swal.getContent()  
          if (content) {  
            const b = content.querySelector('b')  
            if (b) {  
              b.textContent = Swal.getTimerLeft()  
            }  
          }  
        }, 100)  
      },  
      onClose: () => {  
        clearInterval(timerInterval)  
      }  
    }).then((result) => {  
      if (result.dismiss === Swal.DismissReason.timer) {  
        console.log('I was closed by the timer')  
      }  
    })  
  }

  onlyNumberKey(evt) {
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)){
        evt.preventDefault()
    }
    console.log(evt.which)
    console.log(evt.keyCode)
  }

  render() {
    return (
      <div>
        <section className='career-form'  ref={this.props.careerRef}>      
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
                  <option value="Java Developer">Java Developer</option>
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
                <div className='d-flex gap-3 mt-3'>
                  <Form.Control type="text" placeholder="Period From (Year)" name='edufrom' onChange={this.handleChange} onKeyDown={this.onlyNumberKey} pattern="[0-9]*"/>
                  <Form.Control type="text" placeholder="Period To (Year)" name='eduto' onChange={this.handleChange} onKeyDown={this.onlyNumberKey} pattern="[0-9]*"/>
                </div>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Working Experience</Form.Label>
                <Form.Control type="text" placeholder="Latest Working Place" name='workingexp' onChange={this.handleChange} />
                <div className='d-flex gap-3 mt-3'>
                  <Form.Control type="text" placeholder="Period From (Year)" name='workfrom' onChange={this.handleChange} onKeyDown={this.onlyNumberKey} />
                  <Form.Control type="text" placeholder="Period To (Year)" name='workto' onChange={this.handleChange} onKeyDown={this.onlyNumberKey} />
                </div>
                <Form.Control className='mt-3' type="text" placeholder="Position" name='workingpos' onChange={this.handleChange} />
                <Form.Control className='mt-3' type="text" placeholder="Job Description" name='workingdesc' onChange={this.handleChange}/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>IT Capabilities</Form.Label>
                <Form.Control as="textarea"
                  placeholder="Your IT Capabilities such as programming language, frameworks and all" 
                  name='capabilities' 
                  size="md"
                  onChange={this.handleChange} />
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