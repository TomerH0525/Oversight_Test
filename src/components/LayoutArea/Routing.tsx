import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage";


function Routing(): JSX.Element {
    return(
        <div className="Routing">

            <Routes>
                <Route index path="/" element={<HomePage />}/>


            </Routes>



        </div>
    )
}

export default Routing