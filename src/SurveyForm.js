import React, { useState } from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer';

const SurveyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    // Add more survey fields here
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a PDF document
    const pdfDocument = (
      <Document>
        <Page style={styles.page}>
          <View>
            <Text>Name: {formData.name}</Text>
            <Text>Email: {formData.email}</Text>
            {/* Add more Text components for other survey fields */}
          </View>
        </Page>
      </Document>
    );

    // Generate a blob from the PDF document
    const pdfBlob = new Blob([pdfDocument], { type: 'application/pdf' });

    // Create a URL for the blob
    const pdfUrl = URL.createObjectURL(pdfBlob);

    // Display or provide a download link for the PDF
    window.open(pdfUrl);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
        </div>
        {/* Add more form fields here */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default SurveyForm;
