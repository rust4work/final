import '../scss/styles-easy.scss'

// ===================== Показать ещё ==========================
document.addEventListener('DOMContentLoaded', function () {
  const toggleItems = (btnId, itemSelector, textId, iconId) => {
    const button = document.getElementById(btnId)
    const items = document.querySelectorAll(itemSelector)
    const buttonText = document.getElementById(textId)
    const icon = document.getElementById(iconId)

    if (!button || items.length === 0) return

    items.forEach((item) => {
      if (item.style.display === '') {
        item.style.display = 'none'
      }
    })

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
  }

  const showItemsOnSmallScreen = (selectors) => {
    const updateDisplay = () => {
      if (window.innerWidth < 768) {
        selectors.forEach((selector) => {
          const items = document.querySelectorAll(selector)
          items.forEach((item) => {
            item.style.display = 'flex'
          })
        })
      }
    }

    window.addEventListener('load', updateDisplay)
    window.addEventListener('resize', updateDisplay)
  }

  // Бренды
  toggleItems('hideBtn', '.slider__item.eshe', 'button__text', 'icon__less')
  toggleItems('hideBtn', '.slider__item.eshe768', 'button__text', 'icon__less')

  // Техника
  toggleItems(
    'hideBtn2',
    '.techs .slider__item2.eshe768',
    'button__text2',
    'icon__less2'
  )
  toggleItems(
    'hideBtn2',
    '.techs .slider__item2.eshe',
    'button__text2',
    'icon__less2'
  )

  // Автопоказ при узком экране
  showItemsOnSmallScreen([
    '.slider__item.eshe',
    '.slider__item.eshe768',
    '.techs .slider__item2.eshe768',
    '.techs .slider__item2.eshe'
  ])
})

// ===================== Бургер-меню ==========================
document.addEventListener('DOMContentLoaded', function () {
  const burger = document.getElementById('burger')
  const aside = document.querySelector('.aside')
  const main = document.querySelector('.main')
  const closeBtn = document.querySelector('.button-close-2')

  if (!burger || !aside || !main) return

  burger.addEventListener('click', (e) => {
    e.stopPropagation()
    aside.classList.toggle('actived')
    main.classList.toggle('blurred')
  })

  document.addEventListener('click', (event) => {
    const target = event.target
    const clickedInsideAside = aside.contains(target)
    const clickedBurger = burger.contains(target)
    const clickedInsideModalCall = modalCall?.contains(target)
    const clickedInsideModalMessage = modalElem?.contains(target)

    if (
      !clickedInsideAside &&
      !clickedBurger &&
      !clickedInsideModalCall &&
      !clickedInsideModalMessage &&
      aside.classList.contains('actived')
    ) {
      aside.classList.remove('actived')
      main.classList.remove('blurred')
    }
  })

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      aside.classList.remove('actived')
      main.classList.remove('blurred')
    })
  }
})

// ===================== Модалка "message" ==========================
const buttonElem = document.querySelector('.openModalMessage')
const modalElem = document.querySelector('.modal')
const closeModalBtn = document.querySelector('.closeModal')
const modalContent = document.querySelector('.modal-feedback')
const modalBlur = document.querySelector('.modal-blur')

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
  modalBlur.style.opacity = '0'
  modalBlur.style.visibility = 'hidden'

  modalElem.addEventListener(
    'transitionend',
    () => {
      modalElem.style.display = 'none'
    },
    { once: true }
  )
}

buttonElem?.addEventListener('click', openModal)
closeModalBtn?.addEventListener('click', closeModal)

modalElem?.addEventListener('click', (e) => {
  if (!modalContent.contains(e.target)) {
    closeModal()
  }
})

// ===================== Модалка "call" ==========================
// ===================== Модалка "call" ==========================
const openBtn2 = document.querySelector('.icon.button.call')
const closeBtn2 = document.querySelector('.closeModal2')
const modalCall = document.querySelector('.modal__call')
const modalBlur2 = document.querySelector('.modal__blur')
const modalCallContent = document.querySelector('.modal__call-content')

function closeModal2() {
  modalCall?.classList.remove('active')
  modalBlur2?.classList.remove('active')
}

openBtn2?.addEventListener('click', () => {
  modalCall?.classList.add('active')
  modalBlur2?.classList.add('active')
})

closeBtn2?.addEventListener('click', closeModal2)
modalBlur2?.addEventListener('click', closeModal2)

// Вот сюда добавляем stopPropagation:
if (modalCall && modalCallContent) {
  modalCall.addEventListener('click', (e) => {
    e.stopPropagation() // <-- Останавливаем всплытие события

    if (!modalCallContent.contains(e.target)) {
      closeModal2()
    }
  })
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal2()
  }
})

//less 768 swiper
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const targetWidth = 767

// Получаем элементы
const companiesSlider = document.querySelector('.companies')
const companiesWrapper = companiesSlider?.querySelector('.slider')
const companiesItems = companiesSlider?.querySelectorAll('.slider__item')

const techsSlider = document.querySelector('.techs__wrapper')
const techsWrapper = techsSlider?.querySelector('.slider-techs')
const techsItems = techsSlider?.querySelectorAll('.slider__item2')

let companiesSwiper = null
let techsSwiper = null

function initSwipers() {
  if (!companiesSwiper) {
    companiesSwiper = new Swiper('.companies.swiper', {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.companies .swiper-pagination',
        clickable: true
      }
    })
  }

  if (!techsSwiper) {
    techsSwiper = new Swiper('.techs__wrapper.swiper', {
      modules: [Navigation, Pagination],
      slidesPerView: 1,
      spaceBetween: 0,
      pagination: {
        el: '.techs__wrapper .swiper-pagination',
        clickable: true
      }
    })
  }
}

function destroySwipers() {
  if (companiesSwiper) {
    companiesSwiper.destroy(true, true)
    companiesSwiper = null
  }

  if (techsSwiper) {
    techsSwiper.destroy(true, true)
    techsSwiper = null
  }
}

function toggleSwiperClasses(add) {
  const method = add ? 'add' : 'remove'

  companiesSlider?.classList[method]('swiper')
  companiesWrapper?.classList[method]('swiper-wrapper')
  companiesItems?.forEach((item) => item.classList[method]('swiper-slide'))

  techsSlider?.classList[method]('swiper')
  techsWrapper?.classList[method]('swiper-wrapper')
  techsItems?.forEach((item) => item.classList[method]('swiper-slide'))
}

function checkScreenWidth() {
  if (window.innerWidth <= targetWidth) {
    toggleSwiperClasses(true)
    initSwipers()
  } else {
    destroySwipers()
    toggleSwiperClasses(false)
  }
}

window.addEventListener('load', checkScreenWidth)
window.addEventListener('resize', checkScreenWidth)

var swiper = new Swiper('.mySwiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 2,
  slidesPerGroup: 1,
  spaceBetween: 0,
  pagination: {
    el: '.prices768__wrapper .swiper-pagination',
    clickable: true
  }
})
