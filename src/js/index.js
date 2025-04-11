import '../scss/styles-easy.scss'

// console.log('It works!')

document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('hideBtn')
  const esheItems = document.querySelectorAll('.slider__item.eshe')
  const buttonText = document.getElementById('button__text')
  const icon = document.getElementById('icon__less')

  // Устанавливаем начальное состояние (если не задано в CSS)
  esheItems.forEach((item) => {
    if (item.style.display === '') {
      // Проверяем, не задан ли стиль
      item.style.display = 'none' // Скрываем изначально
    }
  })

  // Проверяем, что кнопка найдена
  if (!button) {
    console.error('Кнопка с ID "hideBtn" не найдена!')
    return
  }

  button.addEventListener('click', function () {
    if (esheItems.length > 0) {
      const allHidden = Array.from(esheItems).every(
        (item) => item.style.display === 'none'
      )

      esheItems.forEach((item) => {
        item.style.display = allHidden ? 'flex' : 'none' // Используем flex вместо grid
      })

      buttonText.textContent = allHidden ? 'Скрыть' : 'Показать все'
      icon.src = allHidden ? 'img/expand-.svg' : 'img/expand+.svg'
    } else {
      console.warn('Элементы с классом .slider__item.eshe не найдены!')
    }
  })
})

//768

document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('hideBtn')
  const esheItems = document.querySelectorAll('.slider__item.eshe768')
  const buttonText = document.getElementById('button__text')
  const icon = document.getElementById('icon__less')

  // Устанавливаем начальное состояние (если не задано в CSS)
  esheItems.forEach((item) => {
    if (item.style.display === '') {
      // Проверяем, не задан ли стиль
      item.style.display = 'none' // Скрываем изначально
    }
  })

  // Проверяем, что кнопка найдена
  if (!button) {
    console.error('Кнопка с ID "hideBtn" не найдена!')
    return
  }

  button.addEventListener('click', function () {
    if (esheItems.length > 0) {
      const allHidden = Array.from(esheItems).every(
        (item) => item.style.display === 'none'
      )

      esheItems.forEach((item) => {
        item.style.display = allHidden ? 'flex' : 'none' // Используем flex вместо grid
      })

      buttonText.textContent = allHidden ? 'Скрыть' : 'Показать все'
      icon.src = allHidden ? 'img/expand-.svg' : 'img/expand+.svg'
    } else {
      console.warn('Элементы с классом .slider__item.eshe не найдены!')
    }
  })
})

// Swiper (убедись, что подключена библиотека и есть .mySwiper в HTML)
// try {
//   var swiper = new Swiper('.mySwiper', {
//     slidesPerView: 'auto',
//     spaceBetween: 30,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true
//     }
//   })
// } catch (error) {
//   console.error('Ошибка инициализации Swiper:', error)
// }

//techs

document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('hideBtn2')
  const items = document.querySelectorAll('.techs .slider__item2.eshe768')
  const buttonText = document.getElementById('button__text2')
  const icon = document.getElementById('icon__less2')

  if (!button || items.length === 0) return

  // Изначально скрываем
  items.forEach((item) => (item.style.display = 'none'))

  button.addEventListener('click', () => {
    const allHidden = Array.from(items).every(
      (item) => item.style.display === 'none'
    )

    items.forEach((item) => {
      item.style.display = allHidden ? 'flex' : 'none'
    })

    buttonText.textContent = allHidden ? 'Скрыть' : 'Показать все'
    icon.src = allHidden ? 'img/expand-.svg' : 'img/expand+.svg'
  })
})

//768

document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('hideBtn2')
  const items = document.querySelectorAll('.techs .slider__item2.eshe')
  const buttonText = document.getElementById('button__text2')
  const icon = document.getElementById('icon__less2')

  if (!button || items.length === 0) return

  // Изначально скрываем
  items.forEach((item) => (item.style.display = 'none'))

  button.addEventListener('click', () => {
    const allHidden = Array.from(items).every(
      (item) => item.style.display === 'none'
    )

    items.forEach((item) => {
      item.style.display = allHidden ? 'flex' : 'none'
    })

    buttonText.textContent = allHidden ? 'Скрыть' : 'Показать все'
    icon.src = allHidden ? 'img/expand-.svg' : 'img/expand+.svg'
  })
})

//burger 768

document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burger')
  const aside = document.querySelector('.aside')
  const main = document.querySelector('.main')
  const closeBtn = document.querySelector('.button-close-2')

  if (!burger || !aside || !main) {
    console.error('Бургер, aside или main не найдены')
    return
  }

  // Открытие / закрытие aside по клику на бургер
  burger.addEventListener('click', (e) => {
    e.stopPropagation()
    aside.classList.toggle('actived')
    main.classList.toggle('blurred')
  })

  // Закрытие aside при клике вне его
  document.addEventListener('click', (event) => {
    const target = event.target
    const clickedInsideAside = aside.contains(target)
    const clickedBurger = burger.contains(target)

    if (
      !clickedInsideAside &&
      !clickedBurger &&
      aside.classList.contains('actived')
    ) {
      aside.classList.remove('actived')
      main.classList.remove('blurred')
    }
  })

  // Закрытие aside при клике на кнопку закрытия
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      aside.classList.remove('actived')
      main.classList.remove('blurred')
    })
  }
})

//modal

const buttonElem = document.querySelector('.openModalMessage')
const modalElem = document.querySelector('.modal')
const closeModalBtn = document.getElementById('closeModal')
const modalContent = document.querySelector('.modal-feedback')
const modalBlur = document.querySelector('.modal-blur')

// Сброс стилей при загрузке
modalElem.style.cssText = `
  display: none;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease;
`
modalBlur.style.cssText = `
  opacity: 0;
  visibility: hidden;
  `
const openModal = () => {
  modalElem.style.display = 'flex'
  requestAnimationFrame(() => {
    modalBlur.style.opacity = '1'
    modalBlur.style.visibility = 'visible'
    modalElem.style.visibility = 'visible'
    modalElem.style.opacity = '1'
  })
}

const closeModal = () => {
  modalElem.style.opacity = '0'
  modalElem.style.visibility = 'hidden'
  modalElem.addEventListener(
    'transitionend',
    () => {
      modalElem.style.display = 'none'
    },
    { once: true }
  )
}

// Открытие по кнопке
buttonElem.addEventListener('click', openModal)

// Закрытие по ✖️
closeModalBtn.addEventListener('click', closeModal)

// Закрытие по фону (не по модальному контенту)
modalElem.addEventListener('click', (e) => {
  if (!modalContent.contains(e.target)) {
    closeModal()
  }
})
