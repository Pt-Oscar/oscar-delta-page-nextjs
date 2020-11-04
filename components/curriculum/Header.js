const Header = () => {

    return (
        <div className="curriculum-header">
            <div className="curriculum-name-container">
                <div>
                   <h2> Oscar García Juárez </h2>
            <p>Front-end developer</p>
                </div>
                <div>
                   <a href="https://www.github.com/choskas"> <p className="curriculum-p"><img src="/logo/github.png" className="curriculum-logos"  /> Github</p> </a>
                   <a href="https://www.linkedin.com/in/oscardelta/">   <p className="curriculum-p"><img src="/logo/linkedin.png" className="curriculum-logos"/> Linkedin</p> </a>
                    <p><img src="/logo/email.png" className="curriculum-logos"/> choskasdelta@gmail.com</p>
                </div>
            </div>
            Graduated from IronHack México. Enthusiastic about the new technologies and how they relate to human relationships. Creative, i like
            to solve problems and improve my skills. I'm always learning. 
        </div>
    )
}

export default Header;