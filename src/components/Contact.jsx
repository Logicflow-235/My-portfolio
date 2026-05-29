import '../styles/Contact.css'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
function Contact(){
    return(
        <section className="contact" id='contact'>
            <h2 className="contact-title">Contact Me</h2>
            <p className="contact-text">Let's build something beautiful together! Feel free to reach out!! 🩷</p>
            <div className="contact-links">
                <a className="contact-email" href="mailto:theurilinet8@gmail.com">Email: theurilinet8@gmail.com</a>
                <a href="https://www.linkedin.com/in/theuri-linet-09434630b"title='linkedin' target='_blank'><img className="contact-icon" src={linkedin}/></a>
                <a href="https://github.com/Logicflow-235" title='github' target='_blank'><img className="contact-icon" src={github}/></a>
            </div>
        </section>
    );
}
export default Contact