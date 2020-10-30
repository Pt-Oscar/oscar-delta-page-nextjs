const MyCV = (props) => {

    return (
        <div className="my-cv-container">
            <h2>
                My CV
            </h2>
            <div className="education-work-container">
                <div className="education-container">
                    <h4>Education</h4>
                    <ul class="list-group">
                        <li class="list-group-item">Cras justo odio</li>
                        <li class="list-group-item">Dapibus ac facilisis in</li>
                        <li class="list-group-item">Morbi leo risus</li>
                        <li class="list-group-item">Porta ac consectetur ac</li>
                        <li class="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>

                <div className="work-container">
                    <h4>Work experience</h4>
                </div>
            </div>
            <div className="logos-container">
                <div className="first-logo-container">
                    <img src="/logo/react.png"/>
                    <img src="/logo/nodejs.png" className="second-img-logo"/>
                    <img src="/logo/next-js.png" />
                </div>
                <div className="second-logo-container">
                    <img src="/logo/mongodb.png"/>
                    <img src="/logo/npm.png" />
                    <img src="/logo/github.png" />
                </div>
            </div>
        </div>
    )
}

export default MyCV;