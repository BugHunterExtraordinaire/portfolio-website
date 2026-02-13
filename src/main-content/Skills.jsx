import Skill from './skills-components/Skill.jsx'
import { skills } from './skills-components/skills.js';

export default function Skills() {
  return (
    <article aria-label='My skills' className='flex flex-col justify-center items-center w-full pt-15' id='skills'>
      <h2 className='text-6xl font-bold'>My Skills</h2>
      <div className='flex flex-wrap gap-y-2 justify-between w-[94%] pt-5'>
        {skills.map((skill, index) => <Skill key={skill.id}
                                             name={skill.name}
                                             level={skill.level}
                                             number={index + 1} />)}
      </div>
    </article>
  );
}