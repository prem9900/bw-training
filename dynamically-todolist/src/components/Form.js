import React, { useState } from "react";

const Form = () => {
  // State to hold the list of items
  const [items, setItems] = useState([]);

  // State to hold the current input value
  const [inputValue, setInputValue] = useState("");

  // Function to handle input change
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add new item to the list
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div>
      <h1>Dynamic List Example</h1>

      {/* Form to add new items */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter an item"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>

      {/* Display the list of items */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Form;
