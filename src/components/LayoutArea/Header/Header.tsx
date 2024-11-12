import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import NavigationTabs from "./NavigationTabs";
import { useEffect, useState } from "react";
import User from "@/models/User";
import authStore, { login } from "@/stores/AuthStore";

const tabsWithContent: { tabTitle: string; navigateTo: string }[] = [
  { tabTitle: "Home", navigateTo: "/" },
  { tabTitle: "About", navigateTo: "/about" },
];

export function Header(): JSX.Element {
  const [loggedUser, setLoggedUser] = useState<User | null>(null);

  useEffect(() => {
    if (loggedUser == undefined || null) {
      const user = authStore.getState().user;
      if (user == null || undefined) {
        console.log("state empty");
      } else {
        setLoggedUser(user);
      }
    }

    authStore.subscribe(() => {
      setLoggedUser(authStore.getState().user)
    })
  }, [loggedUser]);

  return (
    <div className="inline-flex w-full justify-between sm:px-20 px-5 py-3 border-b ">
      <div className="sm:mx-5 m-0 border-x content-center w-fit shrink-0 px-2">
        <Link to={"/home"}>
          <h1 className="sm:text-4xl text-xl m-auto font-bold ">Coupon site</h1>
        </Link>
      </div>

      <div className="w-full flex flex-row justify-between">
        <div className="md:ml-16">

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
