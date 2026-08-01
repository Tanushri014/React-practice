// // 🟡 Level 2 – Forms
// // Task 5: Student Registration Form



// // Fields:

// // First Name
// // Last Name
// // DOB
// // College ID
// // Email
// // Phone
// // Message

// // On Submit:

// // Print all values in console.

// // Concepts

// // Controlled Components
// // useState
// // Forms
// // onChange
// // onSubmit


// Task 6: Form Validation

// Validate:

// Empty fields
// Email format
// Phone = 10 digits
// Name cannot contain numbers

// Show error messages.

import { useState } from "react";

function StudentForm() {

    const initialFormData = {
  FirstName: "",
  LastName: "",
  DOB: "",
  CollegeID: "",
  Email: "",
  PhoneNumber: "",
  Message: "",
};

  const [formData, setFormData] = useState(initialFormData);

  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validation
  const validateData = () => {
    let newErrors = {};

    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    // First Name
    if (!formData.FirstName.trim()) {
      newErrors.FirstName = "First Name is required";
    } else if (!nameRegex.test(formData.FirstName)) {
      newErrors.FirstName = "Name cannot contain numbers";
    }

    // Last Name
    if (!formData.LastName.trim()) {
      newErrors.LastName = "Last Name is required";
    } else if (!nameRegex.test(formData.LastName)) {
      newErrors.LastName = "Last Name cannot contain numbers";
    }

    // DOB
    if (!formData.DOB) {
      newErrors.DOB = "Date of Birth is required";
    }

    // College ID
    if (!formData.CollegeID.trim()) {
      newErrors.CollegeID = "College ID is required";
    }

    // Email
    if (!formData.Email.trim()) {
      newErrors.Email = "Email is required";
    } else if (!emailRegex.test(formData.Email)) {
      newErrors.Email = "Invalid Email";
    }

    // Phone
    if (!formData.PhoneNumber.trim()) {
      newErrors.PhoneNumber = "Phone Number is required";
    } else if (!phoneRegex.test(formData.PhoneNumber)) {
      newErrors.PhoneNumber = "Phone Number must be 10 digits";
    }

    // Message
    if (!formData.Message.trim()) {
      newErrors.Message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateData()) {
      console.log(formData);
       setTimeout(() => {
      setFormData(initialFormData);
      setErrors({});
    }, 2000);
    }
   
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <label>First Name</label><br />
        <input
          type="text"
          name="FirstName"
          value={formData.FirstName}
          onChange={handleChange}
          placeholder="Enter First Name"
        />
        <p style={{ color: "red" }}>{errors.FirstName}</p>

        <label>Last Name</label><br />
        <input
          type="text"
          name="LastName"
          value={formData.LastName}
          onChange={handleChange}
          placeholder="Enter Last Name"
        />
        <p style={{ color: "red" }}>{errors.LastName}</p>

        <label>DOB</label><br />
        <input
          type="date"
          name="DOB"
          value={formData.DOB}
          onChange={handleChange}
        />
        <p style={{ color: "red" }}>{errors.DOB}</p>

        <label>College ID</label><br />
        <input
          type="number"
          name="CollegeID"
          value={formData.CollegeID}
          onChange={handleChange}
          placeholder="Enter College ID"
        />
        <p style={{ color: "red" }}>{errors.CollegeID}</p>

        <label>Email</label><br />
        <input
          type="email"
          name="Email"
          value={formData.Email}
          onChange={handleChange}
          placeholder="Enter Email"
        />
        <p style={{ color: "red" }}>{errors.Email}</p>

        <label>Phone Number</label><br />
        <input
          type="text"
          name="PhoneNumber"
          value={formData.PhoneNumber}
          onChange={handleChange}
          placeholder="Enter Phone Number"
        />
        <p style={{ color: "red" }}>{errors.PhoneNumber}</p>

        <label>Message</label><br />
        <textarea
          name="Message"
          value={formData.Message}
          onChange={handleChange}
          placeholder="Enter Message"
        />
        <p style={{ color: "red" }}>{errors.Message}</p>

        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default StudentForm;