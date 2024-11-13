
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { LoginUserForm } from "../PageUtils/CreateUserForm";

export default function LoginForm() {
  return (
    <Card className="mx-auto max-w-sm sm:max-w-md ">
      <CardHeader>
        <CardTitle className="text-2xl sm:text-3xl">Login</CardTitle>
        <CardDescription>
          Please enter your username and password below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <LoginUserForm/>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account and need one?
          <div>
            Please{" "}
            <Link to="#" className="underline">
              contact support
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
