import Portfolio from "../../assets/portfolio.png"
import styles from "./style.module.css"

const Header = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className={styles.header}>
                        <img src={Portfolio} alt="Portfólio" />

                        <nav>
                            <a href="" className={styles.nav} >Sobre</a>
                            <a href="" className={styles.nav}>Stack</a>
                            <a href="" className={styles.nav}>Projetos</a>
                        </nav>

                        <button className="btn-header paragraph">Contato</button>
                    </div>

                </div>
            </header>
        </>
    )
}

export default Header
