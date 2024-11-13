import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import NavigationTabs from "./NavigationTabs";
import { useEffect, useState } from "react";
import { authStore, logout } from "@/stores/AuthStore";
import ClientType from "@/models/enum/ClientType";
import UserCreationForm from "@/components/Pages/AdminPages/Users/UserCreationForm";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";

export function Header(): JSX.Element {
  const [parentState, setParentState] = useState(0);

  console.log("navbar updated");

  const handleChildUpdate = () => {
    setParentState(parentState + 1);
  };


  useEffect(() => {

    const unsubscribe = authStore.subscribe(() =>{
      setParentState(parentState + 1)
    });

    return () => unsubscribe();

  },[parentState])

  function handleLogout():void {
    authStore.dispatch(logout());
    setParentState(parentState + 1)
    toast({
      title:"Logout",
      description:"Logged out successfully!",
      duration:2000,
    })
  }

  return (
    <div className="inline-flex w-full justify-between sm:px-20 px-5 py-3 border-b ">
      <div className="sm:mx-5 m-0 border-x content-center w-fit shrink-0 px-2">
        <Link to={"/home"}>
          <h1 className="sm:text-4xl text-xl m-auto font-bold ">Coupon site</h1>
        </Link>
      </div>

      <div className="w-full flex flex-row justify-between">
        <div className="">
          <div className="hidden md:flex flex-row gap-2"></div>
          <NavigationTabs onUpdate={handleChildUpdate} />
        </div>
        <div className="flex gap-2 ">
          <div>
            {authStore.getState().user?.clientType ? authStore.getState().user?.clientType === ClientType.Administrator ? 
                <div className="flex flex-row-reverse gap-2">
                  <Button className="text-md" variant={"destructive"} onClick={handleLogout}>
                    Logout
                  </Button>
                  <Separator orientation="vertical" className="w-[1px] h-[full]" />
                  <UserCreationForm/>
                </div>
              :
              <Button className="text-md" variant={"destructive"} onClick={handleLogout}>
              Logout
              </Button>
            
              : 
              <Link to={"/login"}>
                <Button className="text-md bg-secondary hover:bg-secondary/70" variant={"ghost"}>
                  Login
                </Button>
              </Link>
            }
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
