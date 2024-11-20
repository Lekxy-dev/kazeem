"use client"


import { useState } from "react";

import Heading from "@/app/Component/Heading";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "@/app/Component/Input/Input";
import Link from "next/link";
import { AiOutlineGoogle } from "react-icons/ai";
import Button from "@/app/Component/Button";



const Loginform = () => {
    const [isLoading, setIsLoading] = useState(false);

    const {register,handleSubmit, formState:{errors}} = useForm<FieldValues>({
      defaultValues: {
        email: "",
        password: "",
      }
    })
    const onsubmit:SubmitHandler<FieldValues> = (data) => {
      setIsLoading(true)
      console.log(data)
    }
    return (
        <>
         <Heading title="Login to Dsquare"/>
         <Button  outline label="Continue with Google" icon={AiOutlineGoogle} onclick={() => {}}/>
         <hr className="bg-slate-300 w-full h-px" />
         <div className="mt-6 w-full space-y-4"> 
      
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      />
      <Button label= {isLoading ? "Loading" : 'Login'} onclick={handleSubmit(onsubmit)} />
    </div>
    <p>
    dont have an account? <Link className="underline" href="/register">Sign up</Link>
    </p>
        </>
    );
}
 
export default Loginform;