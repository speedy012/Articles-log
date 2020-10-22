import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Form from './components/Form.js';
import Home from './components/Home';
import Nav from './components/Nav';

function App(props) {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  const updateTitle = (e, article) => {
    let newTitle = e;
    let id = article._id;

    fetch(`http://localhost:3000/articles/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        title: newTitle,
        author: article.author,
        description: article.description,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let newUpdatedTitle = articles.map((oldTitle) => {
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

  const updateAuthor = (e, article) => {
    let newAuthor = e;
    let id = article._id;

    fetch(`http://localhost:3000/articles/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        title: article.title,
        author: newAuthor,
        description: article.description,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let newUpdatedAuthor = articles.map((oldAuthor) => {
          if (oldAuthor._id === id) {
            return data;
          } else {
            return oldAuthor;
          }
        });
        setArticles([...newUpdatedAuthor]);
      })
      .catch((err) => console.error(err));
  };

  const updateDescription = (e, article) => {
    let newDescription = e;
    let id = article._id;

    fetch(`http://localhost:3000/articles/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        title: article.title,
        author: article.author,
        description: newDescription,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let newUpdatedDesc = articles.map((oldDesc) => {
          if (oldDesc._id === id) {
            return data;
          } else {
            return oldDesc;
          }
        });
        setArticles([...newUpdatedDesc]);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    (async () => {
      fetch('http://localhost:3000/articles')
        .then((res) => res.json())
        .then((res) => setArticles(res));
    })();
  }, []);

  return (
    <>
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
                  updateAuthor={updateAuthor}
                  updateDescription={updateDescription}
                />
              );
            }}
          />
        </Switch>
      </div>
    </>
  );
}

export default App;
