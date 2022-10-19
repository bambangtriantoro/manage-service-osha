import React, {useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateField = () => {
    const [startDate, setStartDate] = useState(null);

    const handleChangeDate = (date) => {
      const thedate = new Date(date);
      const formattedDate = thedate.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      const valueOfInput = formattedDate;
      this.setState({ birthDate: valueOfInput });
    };

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
      />
    );
}

export default DateField