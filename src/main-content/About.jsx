import PersonalPic from '../assets/my-image.png'

export default function About() {
  return (
    <section className="flex justify-between w-full" aria-label='About section' id='about'>
      <section className='flex flex-col w-[50%] pt-[8%] h-fit pl-[3%]' aria-label='Brief Description'>
        <p className='text-[2.5rem] font-semibold' aria-label='Name'>Hi, I am Tarek Abdelhamid!</p>
        <p className='text-[5rem] font-bold' aria-label='Job title'>Web <span className='text-[#009900]'>Developer</span></p>
        <p className='text-[18px]' aria-label='About me'>I am a passionate and creative Web Developer who specializes in creating dynamic and responsive web pages using modern development stacks to transform ideas into beautiful functional web experience.</p>
      </section>
      <img src={PersonalPic} alt='My Picture' className='w-[45%]'/>
    </section>
  );
}