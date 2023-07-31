import Header from "../Header/header.jsx"
import Footer from "../Footer/Footer.jsx"

const DefaultTemplate = ({ children }) => {
    return (
        <>
            <Header />

            <main>

                {children}

            </main>

            <Footer />
        </>
    )
}

export default DefaultTemplate