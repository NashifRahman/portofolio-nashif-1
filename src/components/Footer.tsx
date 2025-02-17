import { Github, Linkedin, Mail} from "lucide-react"

function Footer(){
    return(
        <footer className="bg-slate-900 pb-8 px-4 md:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-slate-500 font-semibold mb-4 md:mb-0">&copy; 2025 Nashif Rahman. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="text-slate-500 hover:text-primary">
            <Github size={24} />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="#" className="text-slate-500 hover:text-primary">
            <Linkedin size={24} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="#" className="text-slate-500 hover:text-primary">
            <Mail size={24} />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </footer>
    )
}

export default Footer;