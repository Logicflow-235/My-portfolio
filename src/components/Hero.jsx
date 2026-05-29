import '../styles/Hero.css'
import portfolioimage from '../assets/portfolioimage.jpeg'
function Hero(){
    return(
        <div className="device-frame" id="home">
    <div className="hero-content">      
        <span className="greeting">Hi I am</span>
        <h1 className="hero-name">Linet Theuri</h1>
        <p className="hero-title">Frontend Developer</p>
       <a className="hire-btn" href="mailto:theurilinet8@gmail.com">Hire Me</a>    </div>
    <img className="hero-image" src={portfolioimage} alt='Linet Theuri'/>
</div>
    );
}
export default Hero