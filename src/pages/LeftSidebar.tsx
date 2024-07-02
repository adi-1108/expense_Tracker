import { Link, Outlet } from "react-router-dom";
import Logo from "../components/Logo";
import React from "react";
import { sidebarOptions } from "@/constants";
import SidebarOptions from "@/components/SidebarOptions";
import {
  RectangleGroupIcon,
  ChartBarIcon,
  WalletIcon,
  ArrowsUpDownIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import RightSidebar from "./RightSidebar";

const LeftSidebar = () => (
  <div className=" min-h-screen flex">
    {/* Sidebar */}
    <div className="flex-[0.3] flex flex-col gap-10 items-center ">
      <Logo />
      <div className="flex flex-col gap-5 items-start justify-start">
        <SidebarOptions
          item={sidebarOptions[0]}
          Logo={<RectangleGroupIcon className="h-8 w-8" />}
        />
        <SidebarOptions
          item={sidebarOptions[1]}
          Logo={<ChartBarIcon className="h-8 w-8" />}
        />
        <SidebarOptions
          item={sidebarOptions[2]}
          Logo={<WalletIcon className="h-8 w-8" />}
        />
        <SidebarOptions
          item={sidebarOptions[3]}
          Logo={<ArrowsUpDownIcon className="h-8 w-8" />}
        />
        <SidebarOptions
          item={sidebarOptions[4]}
          Logo={<Cog6ToothIcon  className="h-8 w-8" />}
        />
      </div>
    </div>

    {/* Main Content */}
    <div className="flex-1">
      <Outlet />
    </div>

    {/* Right sidebar */}
    <div className="flex-[0.3]">
      <RightSidebar /> 
    </div>
  </div>
);
export default LeftSidebar;
