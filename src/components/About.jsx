import '../styles/About.css'
function About (){
    return(
        <section className="about" id='about'>
    <h2 className="about-title">About Me</h2>
    <div className="about-container">
        <div className="about-bio">
            
            <p>I am a passionate Frontend Developer based in Nairobi, Kenya with a love for building beautiful and responsive web experiences. I am driven by curiosity and a strong willingness to learn and grow in the tech world. I believe in writing clean code and creating interfaces that are not only functional but visually stunning!</p>
        </div>
        <div className="about-skills">
            <h3>My Skills</h3>
            <div className="skills-container">
                <span className="skill-badge">HTML</span>
                <span className="skill-badge">CSS</span>
                <span className="skill-badge">JavaScript</span>
                <span className="skill-badge">React</span>
                <span className="skill-badge">Redux</span>
                <span className="skill-badge">Typescript</span>
                <span className="skill-badge">Tailwindcss</span>
                <span className="skill-badge">RestAPIs</span>

            </div>
        </div>
    </div>
</section>
    );
}
export default About