export default function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 bg-myhovershade text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
    >
      ↑
    </button>
  )
}
