import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { stat } from "fs";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { redirect, useNavigate } from "react-router-dom";

const SignIn = () => {
  const user = useSelector((state: any) => state.user.user);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(user);
    if (user.uid) navigate("/");
  }, []);
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="max-h-[calc(100vh-400px)] w-[calc(100vw-50%)] rounded-2xl bg-accent px-10 py-8">
        <h1 className="mb-10 text-7xl font-semibold">
          Sign{" "}
          <span className="text-primary hover:text-secondary-foreground">
            In
          </span>
        </h1>
        <form className="flex flex-col gap-10">
          <div className="flex flex-col justify-center gap-3">
            <label className="w-20 text-xl">Email</label>
            <Input className="py-6 text-lg" type="email" name="email" />
          </div>
          <div className="flex flex-col justify-center gap-3">
            <label className="w-20 flex-1 text-xl">Password</label>
            <Input type="password" className="py-6 text-lg" name="password" />
          </div>
          <Button className="font-semibold uppercase" type="submit">
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
