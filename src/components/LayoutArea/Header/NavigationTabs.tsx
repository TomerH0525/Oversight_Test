import { Button } from "@/components/ui/button";
import User from "@/models/User";
import { authStore } from "@/stores/AuthStore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ClientType from "@/models/enum/ClientType";


export interface NavigationButton {
  tabTitle: string;
  navigateTo: string;
  permissions: ClientType[];
}

const navigationButtons:NavigationButton[] = [
  { tabTitle: "Coupon Reports", navigateTo: "/admin/reports/coupons", permissions: [ClientType.Administrator]},
  { tabTitle: "Your Coupons", navigateTo: "/users/coupons",permissions: [ClientType.User]},
];

export default function NavigationTabs({ onUpdate }: { onUpdate: () => void }) {
  const [loggedUser, setLoggedUser] = useState<User | null>(
    () => authStore.getState().user || null
  );

  const [tabs, setTabs] = useState<NavigationButton[]>([]);

  useEffect(() => {
  
    
    const unsubscribe = authStore.subscribe(() => {
      console.log("blah");
      const updatedUser = authStore.getState().user;
      setLoggedUser(updatedUser);

      const filteredTabs = navigationButtons.filter((tab) =>{
        if (updatedUser) {
          return tab.permissions.includes(updatedUser?.clientType)
          
        }else return false;
        
      });
      console.log(filteredTabs);
      
      setTabs(filteredTabs);
      onUpdate();
    });

    return () => unsubscribe();
  }, [navigationButtons]);

  return (
    <div>
      {tabs?.map((button) => (
        <Link key={button.navigateTo} to={button.navigateTo}>
          <Button className="text-md" variant={"ghost"}>
            {button.tabTitle}
          </Button>
        </Link>
      ))}
    </div>
  );

}
