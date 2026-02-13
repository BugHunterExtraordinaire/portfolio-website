import './Description.css'

export default function Description() {
  return (
    <section className='flex flex-col w-full' aria-label='Brief Description'>
      <p className='text-[2.5rem] font-semibold' aria-label='Name'>Hi, I am Tarek Abdelhamid!</p>
      <p className='text-[5rem] font-bold' aria-label='Job title'>Web <span className='text-[#008000] border-r-2 pr-1.25 cursor'>Developer</span></p>
      <p className='text-[18px]' aria-label='About me'>I am a passionate and creative Web Developer who specializes in creating dynamic and responsive web pages using modern development stacks to transform ideas into beautiful functional web experience.</p>
    </section>
  );
}