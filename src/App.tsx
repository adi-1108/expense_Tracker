import { Route, Routes } from "react-router-dom";
import LeftSidebar from "./pages/LeftSidebar";
import { Dashboard, MyWallet, Statistics, Transfers, Settings } from "./pages";
import React from "react";
import Details from "./pages/Details";

const App = () => {
  return (
    <Routes>
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
