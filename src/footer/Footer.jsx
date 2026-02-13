export default function Footer() {
  return (
    <footer className="w-full flex flex-col mt-15 border-t py-5" id="contact">
      <h2 className="text-6xl text-center font-bold">Have a project in mind? Contact Me!</h2>
      <nav aria-label="Social Contacts" className="pt-5">
        <ul className="flex justify-evenly text-2xl">
          <li>
            <a href="tel:+201067297886" 
               className="hover:text-(--theme-color) duration-100 ease-in">
              <i className="fa-solid fa-phone" 
                 aria-hidden="true" /> Phone me
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/tarek-mohamed-6261ab368/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BdsG90pybTPGx%2F3ksJ34uNQ%3D%3D" 
               target="_blank" 
               className="hover:text-(--theme-color) duration-100 ease-in">
              <i className="fa-brands fa-linkedin" 
                 aria-hidden='true' /> Message me on LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:tarek.mohamed.bughunter@gmail.com"
               target="_blank"
               className="hover:text-(--theme-color) duration-100 ease-in">
                <i className="fa-solid fa-envelope" 
                   aria-hidden="true" /> Email me
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}