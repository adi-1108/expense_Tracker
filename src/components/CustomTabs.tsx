import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const tabs = [
  {
    title: "Income",
    id: 0,
    component: () => <div>Income</div>,
  },
  {
    title: "Expenses",
    id: 1,
    component: () => <div>Expenses</div>,
  },
];

const CustomTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };
  return (
    <div>
      <div className="bg-primary-foreground w-fit px-4 py-3 rounded-2xl">
        <div className="flex items-center justify-start gap-4">
          {tabs.map((tab, i) => (
            <button
              className={cn(
                "hover:bg-primary px-4 py-3 rounded-md transition-all",
                {
                  "bg-primary": activeTab === tab.id,
                }
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
