import React from 'react'

function RenderForm({ formData }) {
  
  const dob = new Date(formData.dob);
  const formattedDob = dob.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  })

  return (
    <div>
      <h1>Rendered Data:</h1>
      <p>First Name: {formData.firstName}</p>

    </div>
  )
}

export default RenderForm
