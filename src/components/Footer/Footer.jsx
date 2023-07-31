import Whatsapp from "../../assets/whatsapp-icon.png"
import Linkedin from "../../assets/linkedin-icon.png"
import Github from "../../assets/git-icon.png"
import Styles from "./style.module.css"
import { user } from "../../data/user.js"

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className={Styles.footer}>
                        <div>
                            <h2 className="title3">Contato</h2>
                            <div>
                                <img src={Whatsapp} alt="Whatsapp logo" className="btn__social" />
                                <img src={Linkedin} alt="Linkedin Logo" className="btn__social" />
                                <img src={Github} alt="GitHub Logo" className="btn__social" />
                            </div>
                        </div>
                        <span className="paragraph">
                            Todos os direitos reservados - {user}
                        </span>
                    </div>
                </div>
            </footer>
        </>

    )
}

export default Footer