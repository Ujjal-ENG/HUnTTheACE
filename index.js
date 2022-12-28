const cacrdObjectDefinations = [
  { id: 1, imagePath: "./images/card-KingHearts.png" },
  { id: 2, imagePath: "./images/card-JackClubs.png" },
  { id: 3, imagePath: "./images/card-QueenDiamonds.png" },
  { id: 4, imagePath: "./images/card-AceSpades.png" },
];

const cardBackImgPath = "./images/card-back-blue.png";

const createCard = (cardItem) => {
  //create div element that make up a card
  const cardEl = document.createElement("div");
  const cardInnerEl = createElement("div");
  const cardFrontEl = createElement("div");
  const cardBackEl = createElement("div");

  //create front and back image elements for a card

  const cardFrontImg = createElement("img");
  const cardBackImg = createElement("img");

  //add class and id to card element
  addClassToElement(cardEl, "card");
  addIdToElement(cardEl, cardItem.id);

  //add class to inner card element
  addClassToElement(cardInnerEl, "card-inner");

  //add class to front card element
  addClassToElement(cardFrontEl, "card-front");

  //add class to back card element
  addClassToElement(cardBackEl, "card-back");

  //add src attribute and appropriate value to img element
  addSrcToImageEl(cardBackEl, cardBackImgPath);

  //add src attribute
  addSrcToImageEl(cardFrontEl, cardItem.imagePath);

  //assign class to back image element of back of card
  addClassToElement(cardBackEl, "card-img");
  addClassToElement(cardFrontEl, "card-img");
};

const createElement = (elType) => {
  return document.createElement(elType);
};

const addClassToElement = (el, className) => {
  el.classList.add(className);
};

const addIdToElement = (el, id) => {
  el.id = id;
};

const addSrcToImageEl = (imgEl, src) => {
  imgEl.src = src;
};

const addChildElement = (parentEl, childEl) => {
  parentEl.appendChild(childEl);
};


