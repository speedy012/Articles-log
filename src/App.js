import 'materialize-css/dist/css/materialize.min.css';

import React, { useState } from 'react';

import Form from './components/Form.js';

function App() {
  const [articles, setArticles] = useState([]);
  return (
    <div className="App">
      <Form articles={articles} />
    </div>
  );
}

export default App;
