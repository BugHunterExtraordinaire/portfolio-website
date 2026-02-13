import About from './About.jsx'
import Skills from './Skills.jsx'

export default function MainContent() {
  return (
    <main id="home" className='flex flex-col w-[95dvw]'>
      <About />
      <Skills />
    </main>
  );
}