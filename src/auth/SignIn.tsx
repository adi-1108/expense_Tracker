import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signin } from "@/features/user/userSlice";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state: any) => state.user.user);
  const navigate = useNavigate();
  const auth = getAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user?.uid) navigate("/");
  }, []);

  const handleSignin = (e: any) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        const newUser = {
          name: user.displayName,
          email: user?.email,
          createdAt: new Date().toISOString(),
          uid: user?.uid,
        };
        dispatch(signin(newUser));
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="max-h-[calc(100vh-400px)] w-[calc(100vw-50%)] rounded-2xl bg-accent px-10 py-8">
        <h1 className="mb-10 text-7xl font-semibold">
          Sign{" "}
          <span className="text-primary hover:text-secondary-foreground">
            In
          </span>
        </h1>
        <form onSubmit={handleSignin} className="flex flex-col gap-10">
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
          <Button
            onClick={() => handleSignin}
            className="font-semibold uppercase"
            type="submit"
          >
            Sign In
          </Button>

          <Link to="/signup">
            New Memeber?{" "}
            <span className="cursor-pointer text-blue-700 hover:underline">
              Sign Up here
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
