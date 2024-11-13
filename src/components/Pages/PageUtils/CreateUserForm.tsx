import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Control, FieldPath, useForm } from "react-hook-form";
import { z } from "zod";
import {
  FormControl,
  FormDescription,
  FormField,
  Form,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import authService from "@/services/AuthService";
import { toast } from "@/hooks/use-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { authStore } from "@/stores/AuthStore";
import ClientType from "@/models/enum/ClientType";

//the schema for register form
const registerFormSchema = z.object({
  username: z.string().min(4, "Username need to be atleast 4 charaters"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

//the schema for login form
const loginFormSchema = z.object({
  username: z.string().min(2, "Username is required"),
  password: z.string().min(2, "Password is required"),
});

//the component form for creating (registering) a user
export const CreateUserForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //the default values in the inputs of the form and loads form with alot of functions from useForm
  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  //function for handling submited data from the register form
  const registerSubmit = (values: z.infer<typeof registerFormSchema>) => {
    setIsLoading(true);
    authService
      .registerUser(values.username, values.password)
      .then(() => {
        setIsLoading(false);
        form.reset();
        toast({
          title: "Status code 200",
          description: "User created successfully",
          duration: 2000,
          className: "bg-green-500/40",
        });
      })
      .catch((err) => {
        setIsLoading(false);
        form.reset();
        toast({
          title: "Status code 400",
          description: err.message,
          duration: 2000,
          variant: "destructive",
        });
      });
  };

  //the component structure in JSX
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(registerSubmit)}>
        <div className="flex flex-col gap-2 max-w-[300px] m-auto ">
          <CreateUserFormField
            name="username"
            label="Username"
            placeholder="Username"
            inputType="username"
            formControl={form.control}
          />
          <CreateUserFormField
            name="password"
            label="Password"
            placeholder="Password"
            inputType="password"
            formControl={form.control}
          />
          <Button
            className="m-auto w-[125px] "
            disabled={isLoading ? true : false}
          >
            {isLoading ? (
              <FontAwesomeIcon spinPulse={true} icon={faSpinner} />
            ) : (
              "Create User"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

//the login user form
export const LoginUserForm = () => {

  // the schema for the login user form
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const navigate = useNavigate();
  //helps know when the button should be in a loading state while data is being transfered though api and is waiting for a response
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //the logic to handle submit with the values recieved from the login form
  const loggingSubmit = (values: z.infer<typeof loginFormSchema>) => {
    setIsLoading(true);
    authService
      .login(values.username, values.password)
      .then(() => {
        setIsLoading(false);
        form.reset();
        toast({
          title: "Status code 200",
          description: "Login Succesfully",
          duration: 2000,
          className: "bg-green-600/80",
        });

        switch (authStore.getState().user?.clientType)  {
          case ClientType.User:
            navigate("/users/coupons")
            break;

          case ClientType.Administrator:
            navigate("/admin/reports/coupons")
            break;

          default:
            navigate("/")
            break;
        }

      })
      .catch((err) => {
        setIsLoading(false);
        toast({
          title: "Error",
          description: err.message,
          duration: 2000,
          variant: "destructive",
        });
      });
  };

  //the component structure in jsx
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(loggingSubmit)}>
        <div className="flex flex-col gap-2 max-w-[300px] m-auto">
          <CreateUserFormField
            name="username"
            label="Username"
            placeholder="Username"
            inputType="username"
            formControl={form.control}
          />
          <CreateUserFormField
            name="password"
            label="Password"
            placeholder="Password"
            inputType="password"
            formControl={form.control}
          />
          <Button
            className="m-auto w-[125px] "
            disabled={isLoading ? true : false}
          >
            {isLoading ? (
              <FontAwesomeIcon spinPulse={true} icon={faSpinner} />
            ) : (
              "Login"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

//interface determines which field props must be used or not necceseraly
interface formFieldProps {
  name: FieldPath<z.infer<typeof registerFormSchema>>;
  label: string;
  placeholder: string;
  description?: string;
  inputType?: string;
  formControl: Control<z.infer<typeof registerFormSchema>, any>;
}

//the template for creating fields in the form
const CreateUserFormField: React.FC<formFieldProps> = ({
  name,
  label,
  placeholder,
  description,
  inputType,
  formControl,
}) => {
  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem className="my-1">
          <FormLabel className="underline text-md">{label}</FormLabel>
          <FormControl className="">
            <Input
              className=""
              placeholder={placeholder}
              type={inputType || "text"}
              {...field}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
