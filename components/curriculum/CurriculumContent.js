import Education from './Education'
import PersonalProjects from './PersonalProjects'
import Skills from './Skills'
import WorkExperience from './WorkExperience'

const CurriculumContent = () => {

    return(
        <div className="curriculum-content">
        <div className="curriculum-content-first-line">
            <Education />
            <WorkExperience />
            </div>
            <div className="curriculum-content-second-line">
                <Skills />
                <PersonalProjects />
            </div>
        </div>
    )
}

export default CurriculumContent;