import ArticleCard from './ArticleCard';
import React from 'react';

const Articles = (props) => {
  return (
    <div>
      <div className="articles-body">
        {props.articles === undefined
          ? null
          : props.articles.map((article) => {
              return (
                <ArticleCard
                  key={article._id}
                  article={article}
                  removeArticle={props.removeArticle}
                  updateTitle={props.updateTitle}
                />
              );
            })}
      </div>
    </div>
  );
};

export default Articles;
