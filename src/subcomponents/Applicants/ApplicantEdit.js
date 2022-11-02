import React, { Component, useState } from 'react'
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { AxiosCustom } from "../../config";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import Loading from "../../subcomponents/Loading/Loading";

class ApplicantEdit extends Component {
  initialValue = ''

  state = {
    name: this.props.applicant.name,
    email: this.props.applicant.email,
    position: this.props.applicant.position,
    birthPlace: this.props.applicant.birthPlace,
    birthDate: this.props.applicant.birthDate,
    gender: this.props.applicant.gender,
    status: this.props.applicant.status,
    education: this.props.applicant.latest_education,
    edufrom: this.props.applicant.education_period.slice(0, 4),
    eduto: this.props.applicant.education_period.slice(5, 11),
    // workingexp: this.props.applicant.latest_work,
    // workfrom: this.props.applicant.work_period.slice(0, 4),
    // workto: this.props.applicant.work_period.slice(5, 9),
    // workingpos: this.props.applicant.work_position,
    // workingdesc: this.props.applicant.work_description,
    // capabilities: this.props.applicant.it_capabilities,
    loading: false
  }

  // Form ref
  form = React.createRef();

  // Form input on change
  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value })
  };

  // Update Function
  updateApplicant = (id) => {
    this.setState({ loading: true })

    const validate = Object.keys(this.state).map((key) => {
      if (this.state[key] === this.initialValue) {
        return false
      }
      return true
    })

    if (!validate.includes(false)) {
      AxiosCustom.put(`/api/applicant/update/${id}`, this.state)
        .then((res) => {
          if (res.data.success === false) {
            this.HandleClickWarning(res.data.data.email[0]);
          } else {
            this.HandleClickAutoclose()
          }
        },
          error => {
            console.error('Error : ', error)
          });
    } else if (validate.includes(false)) {
      this.HandleClickWarning()
    } else {
      console.log(validate)
    }
  };

  // Date Input
  DateField = () => {
    const [startDate, setStartDate] = useState(null);

    const handleChangeDate = (date) => {
      const thedate = new Date(date);
      const formattedDate = thedate.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      const valueOfInput = formattedDate;
      this.setState({ birthDate: valueOfInput })
    }

    return (
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
          handleChangeDate(date);
        }}
        onKeyDown={(e) => {
          e.preventDefault();
        }}
        maxDate={new Date()}
        showYearDropdown
        scrollableYearDropdown
        yearDropdownItemNumber={80}
        placeholderText="Click to select a date"
        className="form-control"
        name="birthDate"
        value={this.state.birthDate}
      />
    );
  }

  // Alert warning
  HandleClickWarning(message = 'Please fill in all fields') {
    Swal.fire({
      title: message,
      type: "warning",
      confirmButtonColor: '#FF7A00',
      confirmButtonText: 'Okay',
      closeOnConfirm: true
    }).then((result) => {
      this.setState({ loading: false })
    });
  }

  // Alert auto close
  HandleClickAutoclose() {
    let timerInterval;
    Swal.fire({
      title: "Data Update Success!",
      timer: 3000,
      timerProgressBar: true,
      confirmButtonColor: "#FF7A00",
      onBeforeOpen: () => {
        Swal.showLoading();
        timerInterval = setInterval(() => {
          const content = Swal.getContent();
          if (content) {
            const b = content.querySelector("b");
            if (b) {
              b.textContent = Swal.getTimerLeft();
            }
          }
        }, 100);
      },
      onClose: () => {
        clearInterval(timerInterval);
      },
    }).then(() => {
        this.setState({ loading: false })
        this.props.closeModal()
        this.props.fetchData()
    });
  }

  render() {
    return (
      <div>
        <Container>
          <Form ref={this.form}>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Name"
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Your Email"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Position</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="position"
                onChange={this.handleChange}
                defaultValue={this.state.position}
              >
                <option value='-' disabled>
                  Select Position
                </option>
                <option value="Mobile Developer">Mobile Developer</option>
                <option value="Front-end Developer">
                  Front-end Developer
                </option>
                <option value="Java Developer">Java Developer</option>
                <option value="Golang Developer">Golang Developer</option>
                <option value="QA Engineer">QA Engineer</option>
                <option value="Product Manager">Product Manager</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              <Row xs={1} sm={1} md={2} className="gy-3">
                <Col>
                  <Form.Label>Place of Birth</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Place of Birth"
                    name="birthPlace"
                    onChange={this.handleChange}
                    value={this.state.birthPlace}
                  />
                </Col>
                <Col>
                  <Form.Label>Date of Birth</Form.Label>
                  <this.DateField />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Gender</Form.Label>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Male"
                    name="gender"
                    value="Male"
                    type={type}
                    onChange={this.handleChange}
                    id={`inline-${type}-1`}
                    defaultChecked={this.state.gender === "Male" ? true : false}
                  />
                  <Form.Check
                    inline
                    label="Female"
                    name="gender"
                    value="Female"
                    type={type}
                    onChange={this.handleChange}
                    id={`inline-${type}-2`}
                    defaultChecked={this.state.gender === "Female" ? true : false}
                  />
                </div>
              ))}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Marital Status</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="status"
                onChange={this.handleChange}
                defaultValue={this.state.status}
              >
                <option value='-' disabled>
                  Select Your Marital Status
                </option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Latest Formal Education</Form.Label>
              <Form.Control
                type="text"
                placeholder="Latest Formal Education"
                name="education"
                onChange={this.handleChange}
                value={this.state.education}
              />
              <div className="d-flex gap-3 mt-3">
                <Form.Control
                  type="text"
                  placeholder="Period From (Year)"
                  name="edufrom"
                  onChange={this.handleChange}
                  onKeyDown={this.onlyNumberKey}
                  pattern="[0-9]*"
                  value={this.state.edufrom}
                />
                <Form.Control
                  type="text"
                  placeholder="Period To (Year)"
                  name="eduto"
                  onChange={this.handleChange}
                  onKeyDown={this.onlyNumberKey}
                  pattern="[0-9]*"
                  value={this.state.eduto}
                />
              </div>
            </Form.Group>
            <Button
              type="button"
              className="mt-3 w-100"
              onClick={()=>{this.updateApplicant(this.props.applicant.id)}}
            >
              {this.state['loading'] ? <Loading size='small' /> : 'Save'}
            </Button>
          </Form>
        </Container>
      </div>
    )
  }
}

export default ApplicantEdit
