
import React, { useState  } from "react";
function App (){
  let[counter, updateCounter] =useState (0)
  return(

      <>
      <h1>counter value :{counter}</h1>
      <button onClick={() => {
          updateCounter(++counter)
      }}>Change</button> 
      </>            
  )

  }   
  
  export default App

