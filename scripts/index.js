// @todo: Темплейт карточки
const placesList = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы

function createCard(name, link, deleteCard) {
    const placesItem = cardTemplate.querySelector('.places__item').cloneNode(true);
    // наполняем содержимым
    placesItem.querySelector('.card__title').textContent = name;
    const cardImage = placesItem.querySelector('.card__image');
    cardImage.src = link;
    cardImage.alt = ('На фотографии - ' + name);
    const deleteButton = placesItem.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', deleteCard); 
    return placesItem;
}
// @todo: Функция удаления карточки
function deleteCard(evt) {
    const eventTarget = evt.target;
    const placesItem = eventTarget.closest('.places__item');
    placesItem.remove();
}; 

// @todo: Вывести карточки на страницу
initialCards.forEach((element) => {
placesList.append(createCard (element.name, element.link, deleteCard));
  });