import { useEffect, useState } from 'react';
import Skill from './skills-components/Skill.jsx'

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch('./skills-components/skills.json');
        
        const data = await response.json();

        setSkills(data);
      }
      catch (err) {;
        throw new Error(`Error: ${err}`);
      }
    }

    fetchSkills();
  }, []);
  return (
    <article aria-label='My skills'>
      {skills.map((skill) => <Skill key={skill.id} 
                                    name={skill.name}
                                    level={skill.level}
                                    description={skill.description}/>)}
    </article>
  );
}