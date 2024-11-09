import { Route, Routes } from "react-router-dom";
import HomePage from "../HomePage";
import NotFound404 from "../ErrorPages/NotFound404";


function Routing(): JSX.Element {
    return(
        <div className="h-full w-auto">

            <Routes>
                <Route index path="/" element={<HomePage />} />


                <Route path="*" element={<NotFound404/>} />
            </Routes>



        </div>
    )
}

export default Routing