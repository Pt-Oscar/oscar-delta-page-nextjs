import Card from '../components/myprojects/Card'

const Projects = () => {

    return (
        <div className="container-project">   
            <Card
            title="Delta sales-point"
            content="un contenido"
            bottomImg="/logo/github.png"
            mainImage="/projects/sales-point-logo.png"
             />
            <Card 
            cardClass="card-project-right"
            title="The gaming couple"
            content="contenido gaming"
            bottomImg="/logo/github.png"
            />
            <Card 
            title="Phantom ninja Ulta DOM Edition"  
            content="conteniido" 
            bottomImg="/logo/github.png" 
            />
            <Card 
            cardClass="card-project-right"
            title="Teach and learn"
            content="otro contenido"
            bottomImg="/logo/github.png"
            />
        </div>
    )
}

export default Projects;