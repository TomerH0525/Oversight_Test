import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import NavigationTabs from "./NavigationTabs";
import { useState } from "react";



export function Header(): JSX.Element {

  const [parentState, setParentState] = useState(0);

  const handleChildUpdate = () => {
    setParentState(parentState + 1);
  };

  return (
    <div className="inline-flex w-full justify-between sm:px-20 px-5 py-3 border-b ">
      <div className="sm:mx-5 m-0 border-x content-center w-fit shrink-0 px-2">
        <Link to={"/home"}>
          <h1 className="sm:text-4xl text-xl m-auto font-bold ">Coupon site</h1>
        </Link>
      </div>

      <div className="w-full flex flex-row justify-between">
        <div className="">
          <div className="hidden md:flex flex-row gap-2">
            </div> 
            <NavigationTabs onUpdate={handleChildUpdate} />
        </div>
        <div className="flex gap-2 ">
          <div>
            <Link to={"/login"}>
              <Button className="text-md" variant={"ghost"}>
                Login
              </Button>
            </Link>
          </div>

          <div>
            <Link to={"/"}>
              <Button variant={"ghost"}>
                <FontAwesomeIcon icon={faCartShopping} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
