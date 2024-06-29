import React from "react";
import { CreditCardIcon } from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils";

const Logo = () => {
  return (
    <div className="flex gap-4 items-center justify-center px-4 py-2 mt-20">
      <CreditCardIcon className="h-10 w-10 " />
      <span className="text-white uppercase font-bold text-4xl flex-wrap">
        My Money.
      </span>
    </div>
  );
};

export default Logo;
