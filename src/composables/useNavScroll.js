import { onMounted, onUnmounted } from 'vue'

export function useNavScroll(navRef) {
  let lastScroll = 0

  const handleScroll = () => {
    const current = window.scrollY
    const nav = navRef.value
    if (!nav) return

    if (current > lastScroll && current > 100) {
      nav.style.transform = 'translateY(-100%)'
    } else {
      nav.style.transform = 'translateY(0)'
    }
    lastScroll = current
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
}
