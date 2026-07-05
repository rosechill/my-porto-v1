import DownloadResume from './DownloadResume'
import SocialMedia from './ScoialMedia'

const navItems = [
  { label: 'Home', id: 'section1' },
  { label: 'Project', id: 'section2' },
  { label: 'Certificate', id: 'section3' },
  { label: 'Contact', id: 'section4' },
]

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="w-full bg-mynavy text-white py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-4 pb-6">
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">Bagas Adytia</h3>
          <p className="text-sm opacity-70">Software Engineer</p>
        </div>
        <div className="flex gap-4 text-sm opacity-80 flex-col">
          <div className="grid sm:grid-cols-4 grid-cols-2 sm:gap-x-4 sm:gap-y-4 gap-x-8 gap-y-4 justify-center items-center">
            {navItems.map((item, index) => (
              <p
                key={index}
                onClick={() => scrollToSection(item.id)}
                className="group rounded-full cursor-pointer transition-all duration-300 hover:text-myblue-600 hover:scale-110 active:scale-95 sm:text-center"
              >
                <span className="transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(77,135,255,0.7)]">
                  {item.label}
                </span>
              </p>
            ))}
          </div>
        </div>
        <DownloadResume secondary />
      </div>
      <div className=" pt-6 border-t border-white/10 text-center text-xs opacity-60">© {new Date().getFullYear()}</div>
    </footer>
  )
}

export default Footer
