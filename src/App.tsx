import { redirect, Route, Routes } from "react-router-dom";
import LeftSidebar from "./pages/LeftSidebar";
import { Dashboard, MyWallet, Statistics, Transfers, Settings } from "./pages";
import React, { useEffect } from "react";
import Details from "./pages/Details";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state: any) => state.user.user);

  useEffect(() => {
    if (!user) redirect("/signin");
  }, []);

  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<LeftSidebar />}>
        <Route index element={<Dashboard />} />
        <Route path="statistics" element={<Statistics />} />
        <Route path="my-wallet" element={<MyWallet />} />
        <Route path="transfers" element={<Transfers />} />
        <Route path="settings" element={<Settings />} />
        <Route path="details" element={<Details />} />
      </Route>
    </Routes>
  );
};
export default App;
