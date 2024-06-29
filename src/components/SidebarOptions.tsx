import { cn } from "@/lib/utils";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarOptions = ({
  item,
  Logo,
}: {
  item: {
    id: number;
    route: string;
    title: string;
    logo: string;
  };
  Logo: any;
}) => {

  
  const path = useLocation().pathname;
  const isActive = path === item.route;

  return (
    <Link
      to={item.route}
      className={cn(
        "flex items-center justify-center gap-5 cursor-pointer hover:bg-primary px-8 py-4 rounded-full transition-all hover:scale-110",
        {
          "bg-primary": isActive,
          "bg-inherit": !isActive,
        }
      )}
    >
      {Logo}
      <div>
        <span className="font-semibold">{item.title}</span>
      </div>
    </Link>
  );
};

export default SidebarOptions;
