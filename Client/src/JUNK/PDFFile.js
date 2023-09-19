import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import products from './products.json';
const PDFFile = () => {
  const pdfExportComponent = React.useRef(null);
  const exportPDFWithMethod = () => {
    let element = document.querySelector('.k-grid') || document.body;
    savePDF(element, {
      paperSize: 'A4'
    });
  };
  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };
  return <div>
      <div className="example-config">
        <button className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" onClick={exportPDFWithComponent}>Export to PDF with component</button>
              &nbsp;
        <button className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base" onClick={exportPDFWithMethod}>Export to PDF with method</button>
      </div>

      <PDFExport ref={pdfExportComponent} paperSize="A4">
        <Grid style={{
        maxHeight: '400px'
      }} data={products}>
        id
Name
Age
Contact
Expenditure
Experience
lens Taken
lelts Marks
Qualification
          <Column field="ProductID" title="ID" width="40px" />
          <Column field="ProductName" title="Name" width="250px" />
          <Column field="Category.CategoryName" title="CategoryName" />
          <Column field="UnitPrice" title="Price" width="80px" />
          <Column field="UnitsInStock" title="In stock" width="80px" />
        </Grid>
      </PDFExport>
    </div>;
};


export default PDFFile