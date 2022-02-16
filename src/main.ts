import 'normalize.css/normalize.css'
import './style.css'
import './css/btn.css'
import './css/nav.css'
import './css/overlay.css'

const handlerForBackOverlay = () => {
  const overlayEl = document.querySelector<HTMLDivElement>('[data-js-overlay]')!
  const overlayInnerLastEl = document.querySelector<HTMLDivElement>('[data-js-last-on-overlay]')!
  const { y, height } = overlayInnerLastEl.getBoundingClientRect()
  overlayEl.setAttribute('style', `--height:${y + height}px`)
}

addEventListener('load', handlerForBackOverlay)
addEventListener('resize', handlerForBackOverlay)

document.querySelectorAll('[data-scrollable-link]').forEach(link => link.addEventListener('click', function (e) {
  e.preventDefault()
  e.stopPropagation()
  const href = this.getAttribute('href')
 
  const currentScroll = document.documentElement.scrollTop || document.body.scrollTop

  const targetScroll = currentScroll + document.querySelector(href).getBoundingClientRect().y + 20

  window.scroll(0, targetScroll)
}))

const scrollHandler = () => {
  const links = document.querySelectorAll('[data-active-link]')
  links.forEach(link => {
    const target = document.querySelector(link.getAttribute('href')!)!
    const { y, height } = target.getBoundingClientRect()
    console.log(target, y, height)
    if (y <= 0 && y + height >= 100) {
      if (!link.classList.contains('current')) link.classList.add('current')
    } else {
      if (link.classList.contains('current')) link.classList.remove('current')
    }
  })
}
let scrollTimeout: any
addEventListener('scroll', () => {
  clearTimeout(scrollTimeout)
  scrollTimeout = setTimeout(scrollHandler, 100)
})
addEventListener('load', scrollHandler)