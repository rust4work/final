// import '../scss/styles-easy.scss'

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

// Swiper (убедись, что подключена библиотека и есть .mySwiper в HTML)
try {
  var swiper = new Swiper('.mySwiper', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
} catch (error) {
  console.error('Ошибка инициализации Swiper:', error)
}
