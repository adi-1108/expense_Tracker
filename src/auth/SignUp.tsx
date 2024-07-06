import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../features/user/userSlice.js";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignupUser = async (e: React.FormEvent) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password);
    const user = auth.currentUser;
    await updateProfile(auth.currentUser, {
      displayName: name,
    });
    const newUser = {
      name: name,
      email: user?.email,
      password: password,
      createdAt : new Date().toISOString(),
      uid: user?.uid,
    };
    console.log(newUser);
    dispatch(signin(newUser));
    navigate("/");
  };

  const user = useSelector((state: any) => state.user.user);
  useEffect(() => {
    console.log(user);
    if (user?.uid) navigate("/");
  }, []);

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className=" w-[calc(100vw-50%)] rounded-2xl bg-accent px-10 py-8">
        <h1 className="mb-10 text-7xl font-semibold">
          Sign{" "}
          <span className="text-primary hover:text-secondary-foreground">
            Up
          </span>
        </h1>
        <form onSubmit={handleSignupUser} className="flex flex-col gap-10">
          <div className="flex flex-col justify-center gap-3">
            <label className="w-20 text-xl">Name</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="py-6 text-lg"
              type="name"
              name="name"
            />
          </div>
          <div className="flex flex-col justify-center gap-3">
            <label className="w-20 text-xl">Email</label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-6 text-lg"
              type="email"
              name="email"
            />
          </div>
          <div className="flex flex-col justify-center gap-3">
            <label className="w-20 flex-1 text-xl">Password</label>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="py-6 text-lg"
              name="password"
            />
          </div>
          <Link to="/signin">
            Already a user?{" "}
            <span className="bg-primary underline">Sign in here</span>
          </Link>
          <Button
            onClick={handleSignupUser}
            className="font-semibold uppercase"
            type="submit"
          >
            Sign Up
          </Button>

          
        </form>
      </div>
    </div>
  );
};

export default SignUp;
