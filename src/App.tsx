import Header from './components/Header'
import Hero from './components/Hero'
import Project from './components/Project'
import Footer from './components/Footer'
import About from './components/About'
import Skills from './components/Skills'

function App() {
  return(
    <div className='min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-slate-200'>
    <Header/>
    <main>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
    </main>
    <Footer/>
    </div>  
  )
}

export default App