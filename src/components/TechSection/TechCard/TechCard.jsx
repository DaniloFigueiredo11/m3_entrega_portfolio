import Styles from "./style.module.css"


const TechCard = ({title, img}) => {
    
    return (
        <>
            <li className={Styles.listItem}>

                <img src={img} alt={title} />
                <h3>{title}</h3>

            </li>
        </>
    )

}

export default TechCard