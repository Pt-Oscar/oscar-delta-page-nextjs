import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Presentation from '../components/index/Presentation';
import MyCV from '../components/index/MyCV';
import ProjectsSection from '../components/index/ProjectsSection';
import LogosCV from '../components/index/LogosCV';
import Whatsapp from '../components/Whatsapp';

const Index = (props) => {

    return (
        <div>
         <Presentation />
         <MyCV />
         <LogosCV />
         <ProjectsSection />
        </div>
    )
}

export default Index;