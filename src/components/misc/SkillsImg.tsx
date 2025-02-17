import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { SiTailwindcss } from "react-icons/si";
import {faJs,faReact,faCss3,faNodeJs,faHtml5} from "@fortawesome/free-brands-svg-icons"
import {motion} from "framer-motion"

function SkillsImg(){

  return (
    <div className="flex justify-between">
        
      {[
        { icon: <FontAwesomeIcon icon={faHtml5} className=" text-orange-500" size='4x' />, href: "#" },
        { icon: <FontAwesomeIcon icon={faCss3} className=" text-blue-600" size='4x'/>, href: "#" },
        { icon: <SiTailwindcss className="h-16 w-16 text-blue-500" />, href: "#" },
        { icon: <FontAwesomeIcon icon={faJs} className=" text-yellow-300" size='4x'/>, href: "#" },
        { icon: <FontAwesomeIcon icon={faReact} className=" text-sky-300" size='4x'/>, href: "#" },
        { icon: <FontAwesomeIcon icon={faNodeJs} className=" text-green-400" size='4x'/>, href: "#" },
        ].map(({ icon, href }, index) => (
        <motion.a
          key={index}
          href={href}
          className="py-2 px-3 rounded-lg hover:bg-slate-800 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {icon}
        </motion.a>
      ))}
    </div>
  );
}

export default SkillsImg