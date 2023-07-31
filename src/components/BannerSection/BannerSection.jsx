import Banner from "../../assets/banner-img.png"
import Styles from "./style.module.css"
import { user } from "../../data/user.js"
const BannerSection = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className={Styles.bannerContainer}>

                        <div className={Styles.bannerBox}>
                            <h4 className="title3">{user}</h4>
                            <h2 className="title2">Bem vindo ao meu portfolio</h2>
                            <div className={Styles.bannerSection}>
                                <p className="paragraph">Uma frase interessante sobre mim</p>

                                <button className="btn-about paragraph">Saiba Mais</button>
                            </div>

                        </div>
                        <img src={Banner} alt="Banner" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default BannerSection 