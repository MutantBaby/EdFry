import React from 'react'

const Test = () => {
    const [user , setUserList ]  =useState("");
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
    const handleDeleteUser = async (userId) => {
        try {
          // Make a request to delete the user record from the database.
          await fetch(`/api/users/${userId}`, {
            method: 'DELETE',
          });
    
          // Update the state to remove the deleted user.
          setUserList((prevUserList) => prevUserList.filter((user) => user.id !== userId));
        } catch (error) {
          console.error('Error deleting user:', error);
        }
      };
  return (
    <>
    <h1>Test</h1>
    </>
  )
}

export default Test