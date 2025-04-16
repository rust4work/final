import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Инициализация
const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,

  // Навигация
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },

  // Пагинация
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})
