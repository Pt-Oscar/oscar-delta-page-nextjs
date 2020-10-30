import Link from 'next/link';

const ProjectsSection = (props) => {

    return (
        <div className="projects-section-container">
            <h2>My projects</h2>
            <div className="projects-cards-container">
                <div class="card" style={{ width: '18rem' }}>
                <div className="image-card-container">
                    <img src="/projects/videogame-logo.png" class="card-img-top" alt="img" />
                    </div>
                    <div class="card-body">
                    <h4>Video game project</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link href="/projects"><a>View more</a></Link>
                    </div>
                </div>
                <div class="card" style={{ width: '18rem' }}>
                <div className="image-card-container">
                    <img src="/projects/teachandlearn-logo.png" class="card-img-top" alt="img" />
                    </div>
                    <div class="card-body">
                    <h4>Back-end project</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link href="/projects"><a>View more</a></Link>
                    </div>
                </div>
                <div class="card" style={{ width: '18rem' }}>
                <div className="image-card-container">
                    <img src="/projects/thegamingcouple-logo.png" class="card-img-top" alt="img" />
                    </div>
                    <div class="card-body">
                    <h4>Front-end and back-end project</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link href="/projects"><a>View more</a></Link>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ProjectsSection;