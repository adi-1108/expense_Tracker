import { redirect, Route, Routes } from "react-router-dom";
import LeftSidebar from "./pages/LeftSidebar";
import { Dashboard, MyWallet, Statistics, Transfers, Settings } from "./pages";
import React, { useEffect } from "react";
import Details from "./pages/Details";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import { useSelector } from "react-redux";
import AddTransaction from "./pages/AddTransaction";

const App = () => {
  const user = useSelector((state: any) => state.user.user);

  useEffect(() => {
    if (!user) redirect("/signin");
  }, []);

  return (
    <div className="h-screen w-screen">
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<LeftSidebar />}>
          <Route path="addtransaction" element={<AddTransaction />} />
          <Route index element={<Dashboard />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="my-wallet" element={<MyWallet />} />
          <Route path="transfers" element={<Transfers />} />
          <Route path="settings" element={<Settings />} />
          <Route path="details" element={<Details />} />
        </Route>
      </Routes>
    </div>
  );
};
export default App;
