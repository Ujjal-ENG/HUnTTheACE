const cacrdObjectDefinations = [
  { id: 1, imagePath: "./images/card-KingHearts.png" },
  { id: 2, imagePath: "./images/card-JackClubs.png" },
  { id: 3, imagePath: "./images/card-QueenDiamonds.png" },
  { id: 4, imagePath: "./images/card-AceSpades.png" },
];

const createCard = (cardItem) => {
  //create div element that make up a card
  const cardEl = document.createElement("div");
  const cardInnerEl = createElement("div");
  const cardFrontEl = createElement("div");
  const cardBackEl = createElement("div");

  //create front and back image elements for a card

  const cardFrontImg = createElement("img");
  const cardBackImg = createElement("img");
};

const createElement = (elType) => {
  return document.createElement(elType);
};

const addClassToElement = (el, className) => {
  el.classList.add(className);
};
