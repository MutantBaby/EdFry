import React from 'react'

const Test = () => {
    const [data , setData ]  =useState("");
    const fetchData = async () =>{
        try {
            const response = await fetch(
              "https://edfry-backend.vercel.app/api/admission",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(formData), // Send formData directly
               
              }
            );
        }
        catch (error) {
            console.error("Error:", error);
          }
    }
  return (
    <>
    <h1>Test</h1>
    </>
  )
}

export default Test