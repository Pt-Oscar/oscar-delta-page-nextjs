import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Presentation from '../components/index/Presentation';
import MyCV from '../components/index/MyCV';
import ProjectsSection from '../components/index/ProjectsSection';

const Index = (props) => {

    return (
        <div>
         <Presentation />
         <MyCV />
         <ProjectsSection />
        </div>
    )
}

export default Index;