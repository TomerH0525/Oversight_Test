import { Link, Navigate, useNavigate } from "react-router-dom";


function NotFound404(): JSX.Element{

    return(
        <div className="flex flex-col gap-2 text-center w-auto min-h-full">
            <div className="m-auto w-fit  ">
                <div className="text-4xl p-5">The page you are looking for was <span className="text-primary">NOT FOUND</span> </div>
                <div className="text-2xl p-5">try returning to the <Link className="hover:cursor-pointer text-primary underline" to={"/"}>Home</Link> page and try again!</div>
            </div>
        </div>

    )
}

export default NotFound404;