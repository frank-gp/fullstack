class Activity {
  constructor(id, title, description, imgUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}

class Repository {
  constructor() {
    this.activities = [];
    this.id = 0;
  }

  getAllActivities() {
    return this.activities;
  }

  createActivity(title, description, imgUrl) {
    const id = this.id++;
    const newActivity = new Activity(id, title, description, imgUrl);
    this.activities.push(newActivity);
  }

  deleteActivity(id) {
    this.activities = this.activities.filter((activity) => activity.id !== id);
  }
}

// ========== ACTIVIDAD 01... ==========
const activityRepository = new Repository();
// ========== ACTIVIDAD 01. ==========
// activityRepository.createActivity("correr", "saludable", "https://source.unsplash.com/301x301?run");
// activityRepository.createActivity("correr", "saludable", "https://i.postimg.cc/WbQv8DD7/html.png");
// activityRepository.createActivity("correr", "saludable", "https://i.postimg.cc/cCzNVCF0/css.png");
activityRepository.createActivity("correr", "saludable", "https://i.postimg.cc/5yzhqJWr/bg.webp");

// ========== ACTIVIDAD 02 createCard... ==========
function createCard(activity) {
  // Extraer propiedades utilizando destructuring
  const { id, title, description, imgUrl } = activity;

  // Crear elementos HTML
  const cardDiv = document.createElement("div");
  const titleElement = document.createElement("h3");
  const descriptionElement = document.createElement("p");
  const imageElement = document.createElement("img");
  const deleteButton = document.createElement("button");

  // Asignar valores a las propiedades de los elementos
  titleElement.innerHTML = title;
  descriptionElement.innerHTML = description;
  imageElement.src = imgUrl;
  imageElement.alt = title; // Asignar el título como texto alternativo de la imagen
  deleteButton.innerHTML = "Delete";

  // Agregar clases CSS a los elementos
  cardDiv.classList.add("card_item");
  titleElement.classList.add("title");
  descriptionElement.classList.add("description");
  imageElement.classList.add("card_img");
  deleteButton.classList.add("btn", "buttonDelete");
  deleteButton.id = id;

  // Agregar un evento de clic al botón de eliminar
  deleteButton.addEventListener("click", function () {
    handleDeleteActivity(id);
  });

  // Appendear los elementos al nuevo div
  cardDiv.appendChild(imageElement);
  cardDiv.appendChild(titleElement);
  cardDiv.appendChild(descriptionElement);
  cardDiv.appendChild(deleteButton);

  // Asignar al div la clase CSS correspondiente
  cardDiv.classList.add("card_item");

  // Retornar el div finalizado con todos los elementos
  return cardDiv;
}
// ========== ACTIVIDAD 02 createCard. ==========

// ========== ACTIVIDAD 03 ... ==========

function updateCardContainer() {
  // Seleccionar el contenedor
  const cardContainer = document.getElementById("cardContainer");

  // Vaciar el contenido actual del contenedor
  cardContainer.innerHTML = "";

  // Obtener el listado completo de actividades
  const activities = activityRepository.getAllActivities();

  // Mapear el listado de actividades para convertirlos en elementos HTML
  const activityElements = activities.map((activity) => createCard(activity));

  // Appendear todos los elementos HTML al contenedor
  cardContainer.append(...activityElements);
}

// Llamada inicial para actualizar el contenedor con las actividades existentes
updateCardContainer();

// ========== ACTIVIDAD 03 . ==========

// ========== ACTIVIDAD 04... ==========

function handlerCreateActivity(event) {
  // Prevenir el comportamiento por defecto del formulario
  event.preventDefault();

  // Seleccionar los inputs de title, description e imgUrl
  const titleInput = document.getElementById("titleInput");
  const descriptionInput = document.getElementById("descriptionInput");
  const urlInput = document.getElementById("urlInput");

  // Tomar los valores ingresados en los inputs y guardarlos en variables
  const title = titleInput.value;
  const description = descriptionInput.value;
  const imgUrl = urlInput.value;

  // Validar que los valores estén completos
  if (!title || !description || !imgUrl) {
    alert("Por favor, complete todos los campos.");
    return; // Cortar el proceso si hay datos incompletos
  }

  // Llamar al método correspondiente de la instancia de Repository para crear una nueva actividad
  activityRepository.createActivity(title, description, imgUrl);

  // Invocar la función para refrescar el contenedor de actividades
  updateCardContainer();

  // Limpiar los campos del formulario después de agregar la actividad
  titleInput.value = "";
  descriptionInput.value = "";
  urlInput.value = "";
}

// ========== ACTIVIDAD 04. ==========

// ========== ACTIVIDAD 05... ==========

// Obtener el botón mediante su ID
const addActivityButton = document.getElementById("addActivity");

// Agregar un evento de clic al botón
addActivityButton.addEventListener("click", handlerCreateActivity);

// Función para manejar la eliminación de actividades
function handleDeleteActivity(activityId) {
  // Llamar al método correspondiente de la instancia de Repository para eliminar la actividad
  activityRepository.deleteActivity(activityId);

  // Invocar la función para refrescar el contenedor de actividades
  updateCardContainer();
}
// // Your JavaScript code here
// var buttonsDelete = document.querySelectorAll(".buttonDelete");

// buttonsDelete.forEach(function (button) {
//   button.addEventListener("click", function () {
//     var buttonId = parseInt(this.id);
//     var parent = this.parentNode;
//     // activityRepository.deleteActivity(1);
//     console.log(activityRepository.getAllActivities());
//     console.log("Button ID:", typeof buttonId);
//     // console.log("Button ID:", parseInt(buttonId));
//     handleDeleteActivity(buttonId);
//     // updateCardContainer();

//     // console.log("Button ID:", parent);
//     parent.remove(); // This will remove the parent element
//   });

// });

// ========== ACTIVIDAD 05. ==========

// ========== inspect ==========
// Obtener todos los elementos con la clase "buttonDelete"
var deleteButtons = document.querySelectorAll(".buttonDelete");

// Iterar sobre los botones y mostrar el código asociado
deleteButtons.forEach(function (button) {
  var clickEvent = button.onclick;
  console.log("Button ID:", button.id);
  console.log("Click Event Code:", clickEvent);
});
