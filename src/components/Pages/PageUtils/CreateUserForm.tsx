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

const registerFormSchema = z.object({
  username: z.string().min(4, "Username need to be atleast 4 charaters"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

const loginFormSchema = z.object({
  username: z.string().min(2, "Username is required"),
  password: z.string().min(2, "Password is required"),
});

export const CreateUserForm = () => {
    
    const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const registerSubmit = (values: z.infer<typeof registerFormSchema>) => {
    authService.registerUser(values.username,values.password)
    .then(() => toast({
      title:"Status code 200",
      description:"User created successfully",
      duration:2000
    }))
    .catch((err) => (toast({
      title:"Error",
      description:err.message,
      duration:2000
    })))
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(registerSubmit)}>
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
              "Create User"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export const LoginUserForm = () => {
  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loggingSubmit = (values: z.infer<typeof loginFormSchema>) => {
    setIsLoading(true);
    authService
      .login(values.username, values.password)
      .then((promise) => setIsLoading(false))
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

interface formFieldProps {
  name: FieldPath<z.infer<typeof registerFormSchema>>;
  label: string;
  placeholder: string;
  description?: string;
  inputType?: string;
  formControl: Control<z.infer<typeof registerFormSchema>, any>;
}

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
            <Input className=""
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
