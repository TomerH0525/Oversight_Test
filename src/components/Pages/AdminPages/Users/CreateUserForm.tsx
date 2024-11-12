import React from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { Control, FieldPath, useForm } from "react-hook-form";
import { z } from "zod";
import { FormControl, FormDescription, FormField, Form, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";


const formSchema = z.object({
    username: z.string().min(4, 'Username need to be atleast 4 charaters'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
  });


const CreateUserForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username:"",
            password:"",
        },
    });
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
      };
      
    return (
        <Form {...form} >
            <div className="h-full">
            <Card className="m-auto w-[300px] h-[300px]">
                <CardTitle>
                    Create User
                </CardTitle>
                
            <form onSubmit={form.handleSubmit(onSubmit)} >
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
                <Button>Create User</Button>
            </form>
            </Card>
            </div>
        </Form>
      );
    }
    
interface SignupFormFieldProps {
    name: FieldPath<z.infer<typeof formSchema>>;
    label: string;
    placeholder: string;
    description?: string;
    inputType?: string;
    formControl: Control<z.infer<typeof formSchema>, any>
}

const CreateUserFormField: React.FC<SignupFormFieldProps> = ({
    name, label, placeholder, description, inputType, formControl
}) => {
    return (
        <FormField
        control={formControl}
        name={name}
        render={({field}) =>(
            <FormItem>
                <FormLabel>{label}</FormLabel>
                <FormControl>
                    <Input
                     placeholder={placeholder} 
                     type={inputType || 'text'}
                     {...field}
                     />
                </FormControl>
                {description && <FormDescription>{description}</FormDescription>}
                <FormMessage />
            </FormItem>
        )}
        />
    )
}

export default CreateUserForm;



