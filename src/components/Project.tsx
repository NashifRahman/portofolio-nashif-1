import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
// import ProfilePic from "../img/fotojas-copy.jpg"

const projects = [
  {
    title: "",
    description: "",
    image: "",
    tags: [],
    demoLink: "",
    codeLink: ""
  },
  // {
  //   title: "E-commerce Platform",
  //   description: "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
  //   image: ProfilePic,
  //   tags: ["React", "Node.js", "MongoDB"],
  //   demoLink: "#",
  //   codeLink: "#"
  // },
  // {
  //   title: "Task Management App",
  //   description: "A Kanban-style task management application built with Vue.js and Firebase.",
  //   image: ProfilePic,
  //   tags: ["Vue.js", "Firebase", "Vuex"],
  //   demoLink: "#",
  //   codeLink: "#"
  // },
  // {
  //   title: "Weather Dashboard",
  //   description: "A weather dashboard that displays current conditions and forecasts using a weather API.",
  //   image: ProfilePic,
  //   tags: ["JavaScript", "API", "CSS Grid"],
  //   demoLink: "#",
  //   codeLink: "#"
  // }
]

function Project(){
  const isEmpty = projects.length === 0 || projects.every(project =>
    !project.title && !project.description && !project.image && project.tags.length === 0 &&
    !project.demoLink && !project.codeLink
  );

  if(isEmpty){
    return(
      <section id="Project" className="bg-slate-900 px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <p className="text-center text-slate-400 text-xl font-semibold">~ Coming Soon ~</p>
      </section>
    );
  }
    return(
        <section id="projects" className="bg-slate-900 px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {projects.map((project, index) => (
          <Card key={index} className="bg-slate-800 border-none">
            <CardHeader>
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg " />
            </CardHeader>
            <CardContent>
              <CardTitle className="font-bold text-3xl text-white">{project.title}</CardTitle>
              <CardDescription className="text-slate-500">{project.description}</CardDescription>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary" className="bg-purple-600 text-white font-semibold hover:bg-slate-700 transition-colors">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" asChild>
                <a href={project.demoLink} className="bg-slate-950 text-purple-600 border-purple-600 hover:border-none">Demo</a>
              </Button>
              <Button variant="outline" asChild>
                <a href={project.codeLink} className="bg-slate-950 text-purple-600 border-purple-600 hover:border-none">Code</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
    )
}

export default Project;

