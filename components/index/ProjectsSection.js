import Link from 'next/link';

const ProjectsSection = (props) => {

    return (
        <div className="projects-section-container">
            <h2>My projects</h2>
            <div className="projects-cards-container">
                <div className="card" style={{ width: '18rem' }}>
                <div className="image-card-container">
                    <img src="/projects/videogame-logo.png" className="card-img-top" alt="img" />
                    </div>
                    <div className="card-body">
                    <h4>Video game project</h4>
                        <p className="card-text">A javascript, css and HTML videogame made to help my son.</p>
                        <Link href="/projects"><a>View more</a></Link>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem' }}>
                <div className="image-card-container">
                    <img src="/projects/teachandlearn-logo.png" className="card-img-top" alt="img" />
                    </div>
                    <div className="card-body">
                    <h4>Back-end project</h4>
                        <p className="card-text">A back-end project to help students to contact teachers.</p>
                        <Link href="/projects"><a>View more</a></Link>
                    </div>
                </div>
                <div className="card" style={{ width: '18rem' }}>
                <div className="image-card-container">
                    <img src="/projects/thegamingcouple-logo.png" className="card-img-top" alt="img" />
                    </div>
                    <div className="card-body">
                    <h4>Front-end and back-end project</h4>
                        <p className="card-text">A full-stack project made to help gamers find a team</p>
                        <Link href="/projects"><a>View more</a></Link>
                    </div>
                </div>

            </div>
            <div className="projects-cards-container">
            <div class="card" style={{ width: '18rem' }}>
                <div className="image-card-container">
                    <img src="/projects/sales-point-logo.png" class="card-img-top" alt="img" />
                    </div>
                    <div class="card-body">
                    <h4>Delta sales-point</h4>
                        <p class="card-text">A firebase project based on a store sales point.</p>
                        <Link href="/projects"><a>View more</a></Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProjectsSection;