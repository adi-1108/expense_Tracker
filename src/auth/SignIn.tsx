import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

const SignIn = () => {
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      <div className='px-10 py-8 bg-accent rounded-2xl w-[calc(100vw-50%)] max-h-[calc(100vh-400px)]'>
        <h1 className='text-7xl font-semibold mb-10'>
          Sign <span className='text-primary hover:text-secondary-foreground'>In</span>
        </h1>
        <form className='flex flex-col gap-10 '>
          <div className='flex gap-3 flex-col  justify-center'>
            <label className='text-xl w-20'>Email</label>
            <Input className=' py-6 text-lg' type='email' name='email' />
          </div>
          <div className='flex justify-center flex-col gap-3'>
            <label className='flex-1 w-20 text-xl'>Password</label>
            <Input type='password' className='py-6 text-lg' name='password' />
          </div>
          <Button className='font-semibold uppercase' type='submit'>
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
