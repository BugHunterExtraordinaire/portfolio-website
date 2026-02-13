import './Navigator.css'

export default function Navigator() {
  return (
    <nav className="w-fit">
      <ul className="flex flex-row justify-evenly gap-5 ">
        <li className="link-animation"><a href="#home">Home</a></li>
        <li className="link-animation"><a href="#about">About</a></li>
        <li className="link-animation"><a href="#skills">Skills</a></li>
        <li className="link-animation"><a href="#projects">Projects</a></li>
        <li className="link-animation"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}