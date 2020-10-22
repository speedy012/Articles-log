import Articles from './Articles';
import React from 'react';

const Home = (props) => {
  return (
    <div>
      <Articles
        articles={props.articles}
        removeArticle={props.removeArticle}
        updateTitle={props.updateTitle}
      />
    </div>
  );
};

export default Home;
