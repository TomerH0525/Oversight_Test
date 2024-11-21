import { BrowserRouter } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/NavBar";
import Routing from "../Routing";
import { Toaster } from "@/components/ui/toaster";

function Layout(): JSX.Element {
  return (
    <BrowserRouter basename="/Oversight_Test">
      <div className="flex flex-col h-[100vh] text-center shrink-0 sticky w-[100vw] min-h-[565px]">
        <header className="h-[10%] grow-0">
          <Header />
        </header>

        <main className="grow p-0 m-0 shrink-0 w-[100vw]  ">
          <Routing />
        </main>

        <footer className="h-[5%] grow-0 shrink-0">
          <Footer />
        </footer>
      </div>
      <Toaster />
    </BrowserRouter>
  );
}

export default Layout;
