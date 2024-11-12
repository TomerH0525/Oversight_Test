import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export function LoginForm() {
  return (
    <Card className="mx-auto max-w-sm sm:max-w-md ">
      <CardHeader>
        <CardTitle className="text-2xl sm:text-3xl">Login</CardTitle>
        <CardDescription>
          Please enter your username and password below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent className="">
        <div className="grid gap-4 m-auto sm:w-[300px]">
          <div className="grid gap-2">
            <Label className="mr-auto" htmlFor="email">
              Username
            </Label>
            <Input
              id="username"
              type="username"
              placeholder="Username"
              required
              className="font-semibold"
            />
          </div>
          <div className="grid gap-2 ">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link to="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              required
              placeholder="Password"
              className="font-semibold"
            />
          </div>
          <Button type="submit" variant={"secondary"} className="w-full">
            Login
          </Button>
        </div>
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
