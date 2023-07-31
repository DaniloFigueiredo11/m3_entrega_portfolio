import ProjectCard from "./ProjectsCard/ProjectCards"
import Styles from "./ProjectsCard/style.module.css"
import {projects} from "../../data/projects.js"

const ProjectSection = () => {
    return (
        <>
            <section>
                <div className="container">
                    
                        <h2 className="title3">Projetos</h2>
                        
                            <ul className={Styles.listContainer}>
                                {projects.map((project)=> (
                                    <ProjectCard key={project.id} name={project.name} description={project.description}/>
                                ))
                                }
                                
                            </ul>
                        
                    </div>
                
            </section >
        </>
    )

}

export default ProjectSection