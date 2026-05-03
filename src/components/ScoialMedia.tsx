import { FaWhatsappSquare, FaInstagramSquare, FaLinkedin, FaGithubSquare } from 'react-icons/fa'

const socials = [
  {
    href: 'https://www.linkedin.com/in/bagasadytia/',
    icon: <FaLinkedin />,
  },
  {
    href: 'https://github.com/rosechill',
    icon: <FaGithubSquare />,
  },
  {
    href: 'https://www.instagram.com/bagas_adytia/',
    icon: <FaInstagramSquare />,
  },
  {
    href: 'https://wa.me/+6281254079880',
    icon: <FaWhatsappSquare />,
  },
]

const SocialMedia = () => {
  return (
    <nav className="w-full flex">
      <ul
        className="
          w-full font-extrabold flex gap-5 text-4xl z-50
          text-mynavy max-lg:hidden
          lg:text-mynavy
          max-lg:bg-red-600 max-lg:text-white
          max-lg:justify-center max-lg:items-center max-lg:py-2
        "
      >
        {socials.map((item, index) => (
          <li key={index} className="cursor-pointer hover:text-myhovershade">
            <a href={item.href} target="_blank" rel="noopener noreferrer">
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default SocialMedia
