import { BrowserRouter } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import Routing from "../Routing";



function Layout(): JSX.Element{
    return (
        <BrowserRouter>

            <div className="flex flex-col flex-shrink-0 h-[100vh] text-center">

                <header className="h-[auto]">
                    <Header/>
                </header>

                <main className="flex-grow">
                    <Routing/>
                </main>

                <footer className="h-[5%]">
                    <Footer/>
                </footer>

            </div>
        </BrowserRouter>
    )
}

export default Layout