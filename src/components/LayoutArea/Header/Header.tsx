import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";

export function Header(): JSX.Element {
    return (
        <div className="inline-flex w-full justify-between px-20 py-3 border-b ">

            <div className="px-5 border-x content-center">
                <Link to={"/home"}>
			        <h1 className="sm:text-4xl text-xl m-auto font-bold ">Coupon site</h1>
                </Link>
            </div>

            <div className="flex gap-2 ">

                <div>
                    <Button className="text-md" variant={"ghost"}>Login</Button>
                </div>

                <div>
                    <Link to={"/"}>
                        <Button variant={"ghost"}>
                            <FontAwesomeIcon icon={faCartShopping}/> 
                        </Button>

                    </Link>
                </div>



            </div>
        </div>
    );
}
