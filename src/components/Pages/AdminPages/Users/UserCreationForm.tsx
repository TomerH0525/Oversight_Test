
import { Link } from "react-router-dom";
import { CreateUserForm } from "../../PageUtils/CreateUserForm";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function UserCreationForm() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Create User</Button>
      </DialogTrigger>
      <DialogContent aria-describedby={"registerForm"} className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Create user</DialogTitle>
        </DialogHeader>
        <div className="min-h-[300px] content-center">
          <div>
            <CreateUserForm />
          </div>
        </div>
        <DialogFooter>
          <div className="mt-4 text-center text-sm m-auto">
            if you have encountered any problems
            <div>
              Please{" "}
              <Link to="#" className="underline">
                contact support
              </Link>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
