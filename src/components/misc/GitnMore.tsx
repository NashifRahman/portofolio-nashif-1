import { Github, Linkedin, Mail} from "lucide-react"
import { motion } from "framer-motion"

function GitnMore(){
    return(
        <div>
            <div className="flex gap-4 justify-center md:justify-normal">
            {[
              { icon: Github, href: "https://github.com/NashifRahman" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/nashif-rahman-a400b124b/" },
              { icon: Mail, href: "mailto:nashifrahman2004@gmail.com" },
            ].map(({ icon: Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-7 h-7" />
              </motion.a>
            ))}
          </div>
        </div>
    )
}

export default GitnMore