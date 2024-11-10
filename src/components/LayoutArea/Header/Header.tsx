import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";

export function Header(): JSX.Element {
    return (
        <div className="inline-flex w-full justify-between px-20 py-3 shadow-sm">

            <div>
                <Link to={"/"}>
			        <h1 className="text-4xl">Coupon site</h1>
                </Link>
            </div>

            <div className="flex gap-2 ">

                <div>
                    <Button className="text-md" variant={"ghost"}>Login</Button>
                </div>

                <div>
                    <Link to={"/cart"}>
                        <Button variant={"ghost"}>
                            <FontAwesomeIcon icon={faCartShopping}/> 
                        </Button>

                    </Link>
                </div>



            </div>
        </div>
    );
}
