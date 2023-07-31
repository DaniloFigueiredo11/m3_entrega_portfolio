import styles from "./style.module.css"
import GitHub from "../../../assets/git-icon.png"

const ProjectCard = ({ name, description}) =>{
    return(
        <li className={styles.listItem}>
        <div className={styles.projectTitle}>
          <h3 className="title3">{name}</h3>
          <img src={GitHub} alt="Logo GitHub" />
        </div>
        <p className="paragraph">{description}</p>
        <a href="#" className="link">Saiba mais</a>
      </li>
    )
}

export default ProjectCard