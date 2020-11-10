import Card from '../components/myprojects/Card'

const Projects = () => {

    return (
        <div className="container-project">   
            <Card
            title="Delta sales-point"
            content={<div>
A sales point designed for small stores, mainly based on the requirements of the family business.
On this sales point you can find options such as:
<ul className="projects-list-options">
<li>
    Record
</li>
    <li>
    Graphs with information about your sales
    </li>
    <li>
    Ticket printing
    </li>
    <li>
    Purchases section
    </li>
    <li>
    Downloads in excel format of purchases, sales and warehouse
    </li>
</ul>
<p>For this project I use firebase and React</p>
<small>Repo is not available, is private</small>
</div>}
            bottomImg="/projects/sales-point-logo.png"
            mainImage="/projects/sales-point-logo.png"
            urlBottom="https://sales-point-a71be.web.app/"
             />
            <Card 
            cardClass="card-project-right"
            mainImage="/projects/thegamingcouple-jpg.jpg"
            title="The gaming couple"
            content={<div> 
            This is a project using:
            <ul className="projects-list-options">
                <li>Nodejs on the back end</li>
                <li>React on the front end</li>
                <li>Mongo as the database</li>
            </ul>
The purpose of this project was the search for e-sports teams.
The code can be viewed on github.
            </div>}
            bottomImg="/logo/github.png"
            urlBottom="https://github.com/choskas/thegamingcouple"
            isVisibleSecondAnchor={true}
            secondBottomImg="/projects/thegamingcouple-jpg.jpg"
            secondUrlButton="https://fervent-brown-6ab976.netlify.app/"
            />
            <Card 
            title="Phantom ninja Ulta DOM Edition"  
            content={
                <div> 
            This is a videogame using:
            <ul className="projects-list-options">
                <li>Javascript</li>
            </ul>

            This is a game made only with javascript and some assets, the main objective is to eliminate the monsters with the mouse while using the WASD keys to escape from them.
            </div>
            } 
            bottomImg="/logo/github.png"
            mainImage="/projects/videogame-project.PNG"
            urlBottom="https://github.com/choskas/phantomninja" 
            isVisibleSecondAnchor={true}
            secondBottomImg="/projects/DOM.png"
            secondUrlButton="https://choskas.github.io/phantomninja/"
            />
            <Card 
            cardClass="card-project-right"
            title="Teach and learn"
            mainImage="/projects/teachandlearn-logo.png"
            content={
                <div> 
            A platform made with
            <ul className="projects-list-options">
                <li>Nodejs</li>
                <li>Handlebars</li>
                <li>Css</li>
            </ul>

            
In this project I only use the back-end to obtain all the information that is on the screen. Mainly, this application serves to connect teachers with students.
            </div>
            }
            bottomImg="/logo/github.png"
            urlBottom="https://github.com/choskas/teachandlearn"
            />

            <Card 
            title="NPM"  
            content={
                <div> 
           
I have some components in NPM, you can take a look at them in the button that I will leave below
            </div>
            } 
            bottomImg="/logo/npm.png"
            mainImage="/logo/npm.PNG"
            urlBottom="https://github.com/choskas/phantomninja" 
            // style={{height: '250px'}}
            />
            
        </div>
    )
}

export default Projects;