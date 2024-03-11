import React from 'react'

function RenderForm({ formData }) {
  
   const dob = new Date(formData.dob);
  const formattedDob = dob.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div>
      <h1>Rendered Data</h1>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Gender: { formData.gender }</p>
      <p>Phone Number: +91{formData.phone} </p>
      <p>DOB: {formattedDob}</p>
      <p>Tech stack: { formData.techStack.map((item) => item.name).join( ', ') }</p>
    </div>
  )
}

export default RenderForm
