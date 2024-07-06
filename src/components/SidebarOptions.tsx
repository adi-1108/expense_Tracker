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
    logo: React.ReactNode;
  };
  Logo: any;
}) => {
  const path = useLocation().pathname;
  const isActive = path === item.route;

  return (
    <Link
      to={item.route}
      className={cn(
        "flex cursor-pointer items-center justify-center gap-5 rounded-full px-16 py-4 transition-all hover:scale-110 hover:bg-primary ",
        {
          "bg-primary": isActive,
          "bg-inherit": !isActive,
        },
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
