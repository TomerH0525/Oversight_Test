import { Button } from "@/components/ui/button";
import { faPersonWalkingArrowLoopLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Navigate, useNavigate } from "react-router-dom";

function NotFound404(): JSX.Element {
    
  return (
    <div className="flex flex-col gap-2 text-center h-[60%]">
         <img className="sm:w-[25%] m-auto pr-5" src="../../../public/NotFound404.png" alt="404notfoundimage"></img>
      <div className="m-auto w-fit ">
        <div className="text-4xl p-5">
          The page you are looking for was{" "}
          <span className=" underline font-bold">NOT FOUND</span>{" "}
        </div>

        <div className="underline transition ease-in-out delay-100 hover:scale-110 duration-300 w-fit m-auto ml-5 inline-block">
          <Link to={"/"} className="w-fit">
            <Button variant={"outline"} size={"lg"} className="text-2xl bg-secondary">
              Return Home
            </Button>
          </Link>
          
        </div>
        <FontAwesomeIcon className="h-7 ml-3" icon={faPersonWalkingArrowLoopLeft} />
      </div>
    </div>
  );
}

export default NotFound404;
