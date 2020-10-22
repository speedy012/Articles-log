import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Form from './components/Form.js';
import Home from './components/Home';
import Nav from './components/Nav';

function App() {
  const [articles, setArticles] = useState([]);

  const postArticle = (newArticle) => {
    fetch('http://localhost:3000/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify({
        title: newArticle.title,
        author: newArticle.writer,
        description: newArticle.description,
      }),
    })
      .then((res) => res.json())
      .then((art) => {
        let newState = [...articles, art];
        setArticles(newState);
      })
      .catch((err) => console.error(err));
  };

  const removeArticle = (selectedArticle) => {
    const filteredArticles = articles.filter(
      (article) => article.title !== selectedArticle.title
    );

    setArticles(filteredArticles);

    let id = selectedArticle._id;

    fetch(`http://localhost:3000/articles/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        id: id,
      }),
    });
  };

  const updateTitle = (e, articleId) => {
    console.log(articles);
    console.log(articleId);
    console.log('e', e);
    console.log('nt', articleId);

    let newTitle = e;
    let id = articleId;

    fetch(`http://localhost:3000/articles/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        title: newTitle,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        let newUpdatedTitle = articles.map((oldTitle) => {
          console.log(oldTitle._id);
          console.log(id);
          if (oldTitle._id === id) {
            return data;
          } else {
            return oldTitle;
          }
        });
        setArticles([...newUpdatedTitle]);
      })
      .catch((err) => console.error(err));
  };

  const updateAuthor = (e) => {
    console.log(e.target.value);
  };

  useEffect(() => {
    (async () => {
      fetch('http://localhost:3000/articles')
        .then((res) => res.json())
        .then((res) => setArticles(res));
    })();
  }, []);

  console.log(articles);

  return (
    <>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route
              exact
              path="/create"
              render={(props) => {
                return <Form postArticle={postArticle} {...props} />;
              }}
            />
            <Route
              exact
              path="/"
              render={(props) => {
                return (
                  <Home
                    articles={articles}
                    removeArticle={removeArticle}
                    updateTitle={updateTitle}
                  />
                );
              }}
            />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
