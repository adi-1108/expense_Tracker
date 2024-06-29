import React, { useEffect, useState } from "react";

export const tabs = [
  {
    title: "Income",
    id: 2,
    component: () => <div>Income</div>,
  },
  {
    title: "Expenses",
    id: 3,
    component: () => <div>Expenses</div>,
  },
  {
    title: "Tab 3",
    id: 3,
    component: () => <div>Tab3</div>,
  },
  {
    title: "TAB 4",
    id: 3,
    component: () => <div>Tab4</div>,
  },
  {
    title: "TAB 5",
    id: 3,
    component: () => <div>tab5</div>,
  },
];

const CustomTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };
  return (
    <>
      <div className="bg-primary-foreground w-fit px-4 py-2 rounded-xl">
        <div className="flex items-center justify-start gap-4">
          {tabs.map((tab, i) => (
            <button onClick={() => handleTabChange(i)}>{tab.title}</button>
          ))}
        </div>

        {tabs[activeTab].component()}
      </div>
    </>
  );
};

export default CustomTabs;
