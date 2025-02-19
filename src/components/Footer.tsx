import { Github, Linkedin, Mail} from "lucide-react"

function Footer(){
    return(
        <footer className="bg-slate-900 pb-8 px-4 md:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-slate-500 font-semibold mb-4 md:mb-0">&copy; 2025 Nashif Rahman. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://github.com/NashifRahman" target="_blank" className="text-slate-500 hover:text-slate-700">
            <Github size={24} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/nashif-rahman-a400b124b/" target="_blank" className="text-slate-500 hover:text-slate-700">
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:nashifrahman2004@gmail.com" target="_blank" className="text-slate-500 hover:text-slate-700">
            <Mail size={24} />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
    )
}

export default Footer;