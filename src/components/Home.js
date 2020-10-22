import Articles from './Articles';
import React from 'react';

const Home = (props) => {
  return (
    <div>
      <Articles
        articles={props.articles}
        removeArticle={props.removeArticle}
        updateTitle={props.updateTitle}
        updateAuthor={props.updateAuthor}
        updateDescription={props.updateDescription}
      />
    </div>
  );
};

export default Home;
