import React, { useState } from 'react';

const Form = (props) => {
  const initialInputState = { title: '', writer: '', body: '' };
  const [eachEntry, setEachEntry] = useState(initialInputState);
  const { title, writer, body } = eachEntry;

  const postArticle = (newArticle) => {
    fetch('http://localhost:3000/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        title: newArticle.title,
        author: newArticle.name,
        body: newArticle.body,
      }),
    })
      .then((res) => res.json())
      .then((newArticle) => {
        props.setArticles([...props.article, newArticle]);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postArticle(eachEntry);
  };

  const handleInputChange = (e) => {
    setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
  };

  return (
    <div className="Form">
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
            name="body"
            value={body}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
