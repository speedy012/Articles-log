import EasyEdit, { Types } from 'react-easy-edit';
import React, { useState } from 'react';

import { Button } from 'react-materialize';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ArticleCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const save = (value) => {
    alert(value);
  };
  // const cancel = () => {
  //   alert('Cancelled');
  // };

  const [editMode, setEditMode] = useState(false);

  // const deleteArticleFromList = () => {
  //   const { removeArticle, article } = props;
  //   removeArticle(article);
  // };

  return (
    <>
      <button className="article-card" onClick={openModal}>
        <div className="container">
          <h3> {props.article.title}</h3>
        </div>

        <Button
          onClick={() => props.removeArticle(props.article)}
          node="button"
          style={{
            marginRight: '5px',
          }}
          waves="light"
        >
          Delete
        </Button>
      </button>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <h2>
          <EasyEdit
            type={Types.TEXT}
            value={props.article.title}
            onSave={(e) => props.updateTitle(e, props.article._id)}
          />
        </h2>
        <h4>
          Written By:
          <EasyEdit
            type={Types.TEXT}
            value={props.article.author}
            onSave={save}
          />
        </h4>
        <p>
          <EasyEdit
            type={Types.TEXTAREA}
            value={props.article.description}
            onSave={save}
          />
        </p>
        <button className="modal-btn" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </>
  );
};

export default ArticleCard;

//  <button className="article-card">
//       <div className="container">
//         <div className="header"> {props.article.title}</div>
//       </div>
//       <div className="extra content"></div>
//     </button>

//     <button
//       type="button"
//       onClick={() => props.removeArticle(props.article)}
//       style={{ zIndex: 2 }}
//     >
//       Remove
//     </button>
