import { Link, Outlet, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import React, { useEffect } from "react";
import SidebarOptions from "@/components/SidebarOptions";
import {
  RectangleGroupIcon,
  ChartBarIcon,
  WalletIcon,
  ArrowsUpDownIcon,
  Cog6ToothIcon,
  ArrowsRightLeftIcon,
} from "@heroicons/react/24/solid";
import RightSidebar from "./RightSidebar";
import { useSelector } from "react-redux";

export const sidebarOptions = [
  {
    title: "Dashboard",
    id: 1,
    route: "/",
    logo: <RectangleGroupIcon className="h-8 w-8" />,
  },
  {
    title: "Statistics",
    id: 2,
    route: "/statistics",
    logo: <ChartBarIcon className="h-8 w-8" />,
  },
  {
    title: "My Wallets",
    id: 3,
    route: "/my-wallet",
    logo: <WalletIcon className="h-8 w-8" />,
  },
  {
    title: "Transfers",
    id: 4,
    route: "/transfers",
    logo: <ArrowsRightLeftIcon className="h-8 w-8" />,
  },
  {
    title: "Settings",
    id: 5,
    route: "/settings",
    logo: <Cog6ToothIcon className="h-8 w-8" />,
  },
];

const LeftSidebar = () => {
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.user.user);
  useEffect(() => {
    if (user === null) {
      navigate("/signin");
    }
  }, []);

  return (
    <div className="mx-auto flex w-[calc(100vw-5%)]">
      {/* Sidebar */}
      <div className="flex flex-[0.35] flex-col items-center gap-10">
        <Logo />
        <div className="flex flex-col items-start justify-start gap-5">
          {sidebarOptions.map((option) => (
            <SidebarOptions key={option.id} item={option} Logo={option.logo} />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <Outlet />
      </div>

      {/* Right sidebar */}
      <div className="flex-[0.4]">
        <RightSidebar />
      </div>
    </div>
  );
};
export default LeftSidebar;
