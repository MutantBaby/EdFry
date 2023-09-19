// src/components/PDFTemplate.js
import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import PDFFile from "./PDFFile";

const PDFTemplate = ({ formData }) => {
  return (
   <>
    <PDFDownloadLink document={<PDFFile />} filename="FORM">
      {({loading}) => (loading ? <button>Loading Document...</button> : <button>Download</button> )}
      </PDFDownloadLink>
      {/* <PDFFile /> */}
   </>
  );
};

export default PDFTemplate;
