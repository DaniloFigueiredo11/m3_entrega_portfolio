import TechCard from "./TechCard/TechCard.jsx"
import Styles from "./TechCard/style.module.css"
import { technologies } from "../../data/technologies.js"
import "../../styles/index.css"

const TechSection = () => {
    return (
        <>
            <section>
                <div className="container">
                    <h2 className="title3">Tecnologias</h2>
                    <ul className={Styles.listContainer}>
                        {technologies.map(technologie => {
                            console.log(technologie)
                            return (
                                <TechCard key={technologie.id} title={technologie.name} img={technologie.img} />
                            )
                        })}



                    </ul>
                </div>
            </section>
        </>
    )
}

export default TechSection