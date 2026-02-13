import { useRef } from "react";


export default function Project( {name, siteUrl, imageUrl, description, gitHubUrl} ) {
  const imageRef = useRef(null);
  
  const handleMouseHoverIn = () => {
    imageRef.current.classList.add("transform-[scale(1.05)]");
  };
  const handleMouseHoverOut = () => {
    imageRef.current.classList.remove("transform-[scale(1.05)]")
  }
  
  return (
    <section className="w-[48%] h-fit flex flex-col border rounded-2xl overflow-hidden" 
             onMouseOver={handleMouseHoverIn}
             onMouseLeave={handleMouseHoverOut}>
      <div className="overflow-hidden">
        <img src={imageUrl} 
           alt={`Picture of ${name}`} 
           ref={imageRef}
           className="duration-500 ease-in-out rounded-t-2xl overflow-hidden"/>
      </div>
      <h3 className="text-3xl text-center text-(--theme-color) border-b">{name}</h3>
      <p className="px-4 py-2">{description}</p>
      <nav aria-label={`Demo and GitHub links for ${name}`} className="w-full">
        <ul className="flex gap-10 pl-4 pb-2">
          <li><a href={gitHubUrl} 
                 target="_blank"
                 className="hover:text-(--theme-color) duration-100 ease-in"><i class="fa-brands fa-github" /> Code</a></li>
          <li><a href={siteUrl} 
                 target="_blank"
                 className="hover:text-(--theme-color) duration-100 ease-in"><i class="fa-solid fa-arrow-up-right-from-square" /> Demo</a></li>
        </ul>
      </nav>
    </section>
  );
}