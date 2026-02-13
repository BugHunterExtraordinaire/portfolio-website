import './Socials.css'

export default function Socials() {
  return (
    <section aria-label='My Socials' className='pt-12 w-full flex gap-6'>
      <a href='https://www.linkedin.com/in/tarek-mohamed-6261ab368/'
         target='_blank'
         className='text-[35px] border-2 w-12.5 rounded-lg text-center x hover:duration-100 ease-in'
         aria-label='My Twitter (X)'>
          <i class="fa-brands fa-x-twitter" aria-hidded="true"></i>
      </a>
      <a href='https://www.facebook.com/tarek.abdelhamid.5437/'
         target='_blank'
         className='text-[35px] border-2 w-12.5 rounded-lg text-center facebook hover:duration-100 ease-in'
         aria-label='My facebook'>
          <i className="fa-brands fa-facebook-f" aria-hidden='true' />
      </a>
      <a href='https://www.instagram.com/tar.ek271/'
         target='_blank'
         className='text-[35px] border-2 w-12.5 rounded-lg text-center instagram hover:duration-100 ease-in'
         aria-label='My Instagram'>
          <i className="fa-brands fa-instagram" aria-hidden='true' />
      </a>
      <a href='https://github.com/BugHunterExtraordinaire'
         target='_blank'
         className='text-[35px] border-2 w-12.5 rounded-lg text-center x hover:duration-100 ease-in'
         aria-label='My GitHub'>
          <i class="fa-brands fa-github" aria-hidden='true' />
      </a>
    </section>
  );
}