import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    pin: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
//FORM ERROR 
  const validate = () => {
    let newErrors = {};
    if (formData.firstName.length < 3) {
      newErrors.firstName = "First name should have at least 3 characters";
    }
    if (formData.lastName.length < 1) {
      newErrors.lastName = "Last name should have at least 1 character";
    }
    if (!formData.email.includes("@")) {
      newErrors.email = "Email should contain @";
    }
    if (formData.pin.length !== 10) {
      newErrors.pin = "Pin number should have 10 digits";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  //POPUP - Completed Process
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form Submitted Successfully ✅");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        pin: "",
      });
    }
  };

  
  return (
    <div>
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          name="firstName"
          placeholder="Enter your First Name"
          value={formData.firstName}
          onChange={handleChange}
        style={{ width: "300px", padding: "8px" }}

        />
        <p style={{ color: "red", }}>{errors.firstName}</p>

        <input
          type="text"
          name="lastName"
          placeholder="Enter your Last Name"
          value={formData.lastName}
          onChange={handleChange}
          style={{ width: "300px", padding: "8px" }}
        />
        <p style={{ color: "red", width:"300px", }}>{errors.lastName}</p>

        <input
          type="text"
          name="email"
          placeholder="Enter your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ width: "300px", padding: "8px" }}

        />
        <p style={{ color: "red" }}>{errors.email}</p>

        <input
          type="text"
          name="pin"
          placeholder="Enter your PIN"
          value={formData.pin}
          onChange={handleChange}
          style={{ width: "300px", padding: "8px" }}

        />
        <p style={{ color: "red"  }}>{errors.pin}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
