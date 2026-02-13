import Description from './about-components/Description.jsx'
import Socials from './about-components/Socials.jsx'
import PersonalPic from '../assets/my-image.png'

export default function About() {
  return (
    <article className="flex justify-between w-full" aria-label='About me' id='about'>
      <div className='w-[50%] pt-[8%] h-fit pl-[3%]'>
        <Description />
        <Socials />
      </div>
      <img src={PersonalPic} alt='My Picture' className='w-[45%]' />
    </article>
  );
}