import { useState } from "react";
import '../styles/ProjectCard.css'
function ProjectCard({title, image, description, link }){
  const [isFlipped, setIsFlipped] = useState(false); 
  function Toggle(){
    setIsFlipped(!isFlipped)
  }
  return (
<div className="polaroid" onClick={Toggle}>
    <div className={isFlipped ? "front hidden" : "front visible"}>
        <img className="polaroid-image" src={image} alt={title}/>
        <h3 className="polaroid-title">{title}</h3>
    </div>
    <div className={isFlipped ? "back visible" : "back hidden"}>
        <p className="polaroid-description">{description}</p>
        <a className="polaroid-link" href={link} target="_blank" rel="noreferrer">View Project</a>    </div>
</div>
  );

}
export default ProjectCard

