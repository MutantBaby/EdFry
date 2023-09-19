// src/components/FeedbackForm.js
import React, { useState } from "react";
import html2pdf from "html2pdf.js";
import jsPDF from "jspdf";

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const generatePDF = () => {
    const pdfDoc = new jsPDF();
    const source = document.getElementById("pdf-content");
  
    html2pdf()
      .from(source)
      .set({ margin: 10, filename: "feedback.pdf", image: { type: "jpeg", quality: 0.98 } })
      .outputPdf()
      .then((pdf) => {
        pdf.save();
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    generatePDF()
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Feedback:</label>
        <textarea
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;


