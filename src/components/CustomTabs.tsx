import { cn } from "@/lib/utils";
import { title } from "process";
import React, { useEffect, useState } from "react";
import BankCard from "./BankCard";

export const tabs = [
  {
    title: "Income",
    id: 0,
    component: () => <div>Income</div>,
  },
  {
    title: "Expenses",
    id: 1,
    component: () => <div>expense</div> 
  },

];

const CustomTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };
  return (
    <div>
      <div className="w-fit rounded-2xl bg-primary-foreground px-4 py-3">
        <div className="flex items-center justify-start gap-4">
          {tabs.map((tab, i) => (
            <button
              key={i}
              className={cn(
                "rounded-md px-4 py-3 transition-all hover:bg-primary",
                {
                  "bg-primary": activeTab === tab.id,
                },
              )}
              onClick={() => handleTabChange(i)}
            >
              <span>{tab.title}</span>
            </button>
          ))}
        </div>
      </div>

      <div>{tabs[activeTab].component()}</div>
    </div>
  );
};

export default CustomTabs;
