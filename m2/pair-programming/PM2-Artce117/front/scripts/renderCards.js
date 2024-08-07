//Seleccionar contenedor donde se van a mostrar las cards
const cardsContainer = document.getElementById("card-deck");

// * Succes Handler
const setCardHandler = function (data) {
  //Convertir objetos de la API a tarjetas HTML
  const renderCards = data.map(function (card) {
    const newCard = document.createElement("div");
    //Insertar a la tarjeta cada objeto del API
    newCard.innerHTML = `<div class="card border-light shadow mb-5">
      <img class="card-img-center" src="${card.poster}">
      <div class="card-body text-center">
      <h5><a class="card-title text-secondary font-weight-bold" href="#">${
        card.title
      }</a></h5>
      <p class="card-text"><span class="font-weight-bold">Year: </span>${
        card.year
      }<br>
      <span class="font-weight-bold">Director: </span>${card.director}<br>
      <span class="font-weight-bold">Duration: </span>${card.duration}<br>
      <span class="font-weight-bold">Genre: </span>${card.genre.join(", ")}<br>
      <span class="font-weight-bold">Rate: </span>${card.rate}</p>
      </div>
      </div>`;
    //Appendear cards a contenedor
    cardsContainer.appendChild(newCard);
  });
  return renderCards;
};

// ! Error Handler
const errorHandler = (err) => {
  const showError = document.createElement("h5");

  showError.innerHTML = `<h5 class="text-danger">
  ${"!Error al cargar la información solicitada¡"}<br>
  </h5>`;

  cardsContainer.appendChild(showError);
};

module.exports = {
  setCardHandler,
  errorHandler,
};
