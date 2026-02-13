import About from './About.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'

export default function MainContent() {
  return (
    <main id="home" className='flex flex-col w-full'>
      <About />
      <Skills />
      <Projects />
    </main>
  );
}