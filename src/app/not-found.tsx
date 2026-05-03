import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#151B54] text-white px-6">
      <div className="text-center flex flex-col items-center gap-6">
        <h1 className="text-7xl md:text-8xl font-extrabold tracking-widest text-white/90">404</h1>
        <p className="text-lg md:text-xl text-white/70">Oops... the page you're looking for doesn't exist.</p>
        <div className="w-24 h-[2px] bg-white/30" />
        <Link
          href="/"
          className="mt-2 px-6 py-3 rounded-xl bg-white text-[#151B54] font-semibold hover:scale-105 transition-transform duration-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
