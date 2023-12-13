import React from 'react';
import "../Cards/Cards.components.css"
import {Link} from "react-router-dom"

export const cardData = [
  {
    id: "1",
    title: "Torta de Chocolate",
    desc: "Una torta de chocolate elaborada con capas suaves de bizcocho de chocolate rico y cremoso, intercaladas con una exquisita crema de chocolate. Glaseado con chocolate, aportando un sabor intenso y satisfactorio que cautiva a los amantes del cacao. ¡Es una verdadera tentación para los sentidos!",
    image: "../../../resouces/tortaDeChocolate.jpg",
    categoryId: "Chocolate",
    cardClass: "card",
    titleClass: "card-title",
    imageClass: "card-image",
    descClass: "card-description",
  },
  {
    id: "2",
    title: "Cheesecake",
    desc: "Un postre exquisito y cremoso que combina una base de galletas trituradas con una suave y sedosa mezcla de queso crema, huevos, azúcar y vainilla. Su textura es delicadamente densa y aterciopelada, ofreciendo un contraste perfecto con la base crujiente. ¡Un deleite para los amantes de los postres suaves y deliciosamente indulgentes!",
    image: "../../../resouces/cheesecake.jpg",
    categoryId: "Frutas",
    cardClass: "card",
    titleClass: "card-title",
    imageClass: "card-image",
    descClass: "card-description",
  },
  {
    id: "3",
    title: "Mousse de Chocolate",
    desc: "Un postre celestial y ligero que combina la cremosidad del chocolate con una textura aireada y suave. Su sabor intenso a cacao se combina con una sensación suave al paladar, creando una experiencia indulgente y satisfactoria para los amantes del chocolate.",
    image: "../../../resouces/mousseDeChocolate.jpg",
    categoryId: "Chocolate",
    cardClass: "card",
    titleClass: "card-title",
    imageClass: "card-image",
    descClass: "card-description",
  },
  {
    id: "4",
    title: "Pasta Frola",
    desc: "Un postre tradicional de la cocina argentina.Caracterizada por su sabor delicado y la combinación entre la masa que se deshace en la boca y el dulzor de su relleno frutal.",
    image: "../../../resouces/pastaFrola.jpg",
    categoryId: "Frutas",
    cardClass: "card",
    titleClass: "card-title",
    imageClass: "card-image",
    descClass: "card-description",
  },
  {
    id: "5",
    title: "Red Velvet",
    desc: "Un postre icónico reconocido por su suave textura y su distintivo color granate, que contrasta con su frosting de queso crema. El equilibrio entre la esponjosidad del bizcocho y la suavidad del frosting hacen de la Red Velvet una exquisitez para cualquier ocasión especial.",
    image: "../../../resouces/redVelvet.jpg",
    categoryId: "Frutas",
    cardClass: "card",
    titleClass: "card-title",
    imageClass: "card-image",
    descClass: "card-description",
  },
  {
    id: "6",
    title: "Selva Negra",
    desc: "Un clásico postre originario de Alemania, El bizcocho de chocolate es esponjoso y se empapa tradicionalmente con licor de cerezas (Kirsch) para realzar su sabor. Entre las capas de bizcocho se intercala una generosa cantidad de cerezas, ya sean frescas, en almíbar o en compota, agregando un toque frutal y ácido. ",
    image: "../../../resouces/selvaNegra.jpg",
    categoryId: "Chocolate",
    cardClass: "card",
    titleClass: "card-title",
    imageClass: "card-image",
    descClass: "card-description",
  },
];

function Cards() {
  return (
    <div className="cards-container">
      {cardData.map((card) => (
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

export default Cards;