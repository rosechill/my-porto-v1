import { 
    FaWhatsappSquare,
    FaInstagramSquare, 
    FaLinkedin,
    FaGithubSquare,
} from "react-icons/fa";

const index = () => {
  return (
    <nav className="w-full  flex  ">
      <ul className=" w-full font-extrabold  text-red-600 flex  gap-5 text-4xl z-50">
        <li className="cursor-pointer hover:text-red-900"><a href="https://www.linkedin.com/in/bagasadytia/" target="_blank"><FaLinkedin/></a></li>
        <li className="cursor-pointer hover:text-red-900"><a href="https://github.com/rosechill" target="_blank"><FaGithubSquare/></a></li>
        <li className="cursor-pointer hover:text-red-900"><a href="https://www.instagram.com/bagas_adytia/" target="_blank"><FaInstagramSquare/></a></li>
        <li className="cursor-pointer hover:text-red-900"><a href="https://wa.me/+6281254079880" target="_blank"><FaWhatsappSquare/></a></li>
      </ul>
    </nav>
  );
};

export default index;
