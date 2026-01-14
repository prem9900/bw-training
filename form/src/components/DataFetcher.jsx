import React from "react";
import axios from "axios";

const DataFetcher = () => {
  const handleSubmit = (formData) => {
    axios
      .post("http://localhost:4000/posts", formData)
      .then((response) => {
        console.log("Form submitted successfully:", response.data);
        // Handle response data or set state as needed
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        // Handle error or set error state as needed
      });
  };

  return null; // Or you can return something meaningful
};

export default DataFetcher;
