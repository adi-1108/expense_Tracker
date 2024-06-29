import CustomCarousel from "@/components/CustomCarousel";
import CustomTabs from "@/components/CustomTabs";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabs } from "@/constants";
import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="px-10">
      {/* Heading */}
      <div className="flex items-center justify-between mt-20 sticky top-0">
        <h1 className="text-4xl font-bold">DashBoard</h1>
        <Input
          type="text"
          className="flex-[0.3] bg-primary-foreground"
          placeholder="Search"
        />
      </div>

      {/* Cards Carasouel */}
      <CustomCarousel />

      {/* Analysis Header */}
      <div className="flex items-center justify-between my-6">
        <h1 className="text-2xl">Analysis</h1>
        <Link className="hover:text-primary hover:underline" to="/details">
          View Details
        </Link>
      </div>


      {/* Charts */}
      <CustomTabs />
    </div>
  );
};
export default Dashboard;
