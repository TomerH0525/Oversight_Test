import { BrowserRouter } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import Routing from "../Routing";



function Layout(): JSX.Element{
    return (
        <BrowserRouter>

            <div className="flex flex-col h-[100vh] text-center flex-shrink-0 sticky">

                <header className="h-[10%] grow-0">
                    <Header/>
                </header>

                <main className="grow p-0 m-0">
                    <Routing/>
                </main>

                <footer className="h-[5%] grow-0">
                    <Footer/>
                </footer>

            </div>
        </BrowserRouter>
    )
}

export default Layout