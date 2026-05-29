import ProjectCard from "./ProjectCards"
import brume from '../assets/brume.png'
import ironpeak from '../assets/ironpeak.png'
import budget from '../assets/budget.png'
import Pomodoro from '../assets/Pomodoro.png'
import creme from "../assets/creme.png"
import '../styles/Projects.css'
import ToDo from '../assets/ToDo.png'
function Projects(){
    const projects =[
        {
            id:"p1",
            title:"Creme and Crown",
            image:creme,
            description:" A luxury cake shop e-commerce web app featuring a multi-page shopping experience with product browsing, category filtering, cart management, and order checkout. Built with React, Redux Toolkit, and Tailwind CSS.",
            link:"https://creme-and-crown.vercel.app/"
        },
         {id:"p2",
        title:'To-Do App',
        image:ToDo,
        description:"A to-do web app designed to help users organize tasks, manage daily activities, and improve productivity through a clean and responsive interface.",
        link:" https://to-do-app-coral-seven.vercel.app/"},
   
   {
        id:"p3",
        title:'Brume Cafe',
        image:brume,
        description:"A modern and cozy café website featuring a warm color scheme, responsive layout, elegant typography, and visually appealing food photography",
        link:"https://logicflow-235.github.io/BRUME-CAFE/"
    },
       {id:"p4",
        title:'IronPeak Gym',
        image:ironpeak,
        description:"A simple practice gym website built to showcase a modern fitness platform with responsive design, clean layouts, workout sections, membership plans, and trainer information using web development technologies",
        link:" https://logicflow-235.github.io/Ironpeak-gym/"
    },
    
       {id:"p5",
        title:'Budget Tracker',
        image:budget,
        description:"A budget tracker web app designed to help users manage expenses, track income, and monitor spending through a simple and responsive interface",
        link:" https://logicflow-235.github.io/budget-tracker/"},
    {id:"p6",
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
