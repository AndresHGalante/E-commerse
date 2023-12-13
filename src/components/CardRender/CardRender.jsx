import React from 'react';
import { cardData } from '../Cards/Cards.jsx';
import {Link} from "react-router-dom"


function CardRender({ categoryId, id }) {
  let filteredCards = [];

  if (categoryId) {
    filteredCards = cardData.filter((card) => card.categoryId === categoryId);
  } else if (id) {
    filteredCards = cardData.filter((card) => card.id === id);
  } else {
    filteredCards = cardData;
  }

  return (
    <div className="cards-container">
      {filteredCards.map((card) => (
        <Link key={card.id} to={`/id/${card.id}`} className={card.cardClass}>
          <div id={`card-${card.id}`}>
            <h2 className={card.titleClass}>{card.title}</h2>
            <img className={card.imageClass} src={card.image} alt={`Foto de ${card.title}`} />
            <p className={card.descClass}>{card.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CardRender;