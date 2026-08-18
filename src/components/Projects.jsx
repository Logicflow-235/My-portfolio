import ProjectCard from "./ProjectCards"
import ironpeak from '../assets/ironpeak.png'
import Pomodoro from '../assets/Pomodoro.png'
import creme from "../assets/creme.png"
import '../styles/Projects.css'
import Trackpesa from '../assets/Trackpesa.png'
function Projects(){
    const projects =[
         {id:"p1",
        title:'Trackpesa',
        image:Trackpesa,
        description:"A personal finance tracker built for helping users log transactions, budget there money and see exactly where their money goes. Built full-stack with React, Redux Toolkit and TypeScript on the frontend and a Node.js/Express/MongoDB backend with JWT authentication for secure, multi-user accounts.",
        link:" https://track-pesa.vercel.app/"},
        {
            id:"p2",
            title:"Creme and Crown",
            image:creme,
            description:" A luxury cake shop e-commerce web app featuring a multi-page shopping experience with product browsing, category filtering, cart management, and order checkout. Built with React, Redux Toolkit, and Tailwind CSS.",
            link:"https://creme-and-crown.vercel.app/"
        },
   
       {id:"p3",
        title:'IronPeak Gym',
        image:ironpeak,
        description:"A responsive gym website with a bold, energetic dark theme, built mobile-first. Built with: HTML5, CSS3, Vanilla JavaScript. Features a slide-out sidebar navigation, full-screen hero with dark overlay, and an interactive pricing section with hover-based plan highlighting",
        link:" https://logicflow-235.github.io/Ironpeak-gym/"
    },
    
    {id:"p4",
        title:'Pomodoro  StudyTimer',
        image:Pomodoro,
        description:"A Pomodoro timer web app designed to improve productivity by helping users manage focused work sessions and break intervals efficiently.",
        link:" https://Logicflow-235.github.io/Pomodoro-Timer"
    },
]
   return (
   <section className="projects" id="projects">
    <h2 className="projects-title">My Projects</h2>
    <p className="projects-hint">✨ Tap a polaroid to reveal the project details!</p>
    <div className="projects-wall">
        {projects.map((project) => (
            <ProjectCard
                key={project.id}
                title={project.title}
                image={project.image}
                description={project.description}
                link={project.link}
            />
        ))}
    </div>
</section>
   );
}
export default Projects
