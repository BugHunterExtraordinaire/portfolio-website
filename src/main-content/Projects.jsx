import Project from './projects-components/Project.jsx'
import { projects } from './projects-components/ProjectsArray.jsx'

export default function Projects() {
  return (
    <article aria-label='My Projects'
      id='projects'
      className='w-full flex flex-col items-center pt-15'>
      <h2 className='text-6xl font-bold'>My Projects</h2>
      <div className='flex flex-wrap gap-10 justify-between w-[90%] pt-5'>
        {projects.map(project => <Project key={project.id}
          name={project.name}
          siteUrl={project.siteUrl}
          imageUrl={project.imageUrl}
          description={project.description}
          gitHubUrl={project.gitHubUrl} />)}
      </div>
    </article>
  );
}