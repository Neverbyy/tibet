import './styles/main.scss'

// Получаем все изображения
const burger = document.querySelector('.burger');
const menu = document.getElementById('mobileNav');
const closeBtn = document.getElementById('menuClose');
const images = document.querySelectorAll('.photos__grid .item img');
const modal = document.getElementById('photoModal');
const modalImage = modal.querySelector('.modal__img');
const closeModal = modal.querySelector('.modal__close');


burger.addEventListener('click', () => {
  menu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('active');
});
// Функция для открытия модального окна
function openModal(event) {
  const imgSrc = event.target.src;  // Получаем источник изображения
  modalImage.src = imgSrc;  // Устанавливаем источник в модальном окне
  modal.classList.add('active');  // Добавляем класс active для отображения модального окна
}

// Функция для закрытия модального окна
function closeModalWindow() {
  modal.classList.remove('active');  // Убираем класс active для скрытия модального окна
}

// Добавляем обработчики событий для всех изображений
images.forEach(img => {
  img.addEventListener('click', openModal);
});

console.log("hi")
// Закрытие модального окна при нажатии на крестик
closeModal.addEventListener('click', closeModalWindow);

// Закрытие модального окна при клике вне его области
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModalWindow();
  }
});