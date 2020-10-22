import React, { useState } from 'react';

import { Redirect } from 'react-router-dom';

const Form = (props) => {
  const initialInputState = { title: '', writer: '', description: '' };
  const [eachEntry, setEachEntry] = useState(initialInputState);
  const { title, writer, description } = eachEntry;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.postArticle(eachEntry);
    props.history.push('/');
  };

  const handleInputChange = (e) => {
    setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>
          Article Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Arthur:
          <input
            type="text"
            name="writer"
            value={writer}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Body:
          <input
            type="text"
            name="description"
            value={description}
            onChange={handleInputChange}
          />
        </label>
        <button className="form-btn" type="submit" value="Submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
