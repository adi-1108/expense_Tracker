import { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import BankCard from "./BankCard";
import { useSelector } from "react-redux";

function BankCardScroller() {
  const user = useSelector((state: any) => state.user);
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="scrollbar-hide flex w-[950px] space-x-4 overflow-x-auto p-4"
      >
        {user.accounts.map((item: any, index: number) => (
          <BankCard key={index} account={item} />
        ))}
      </div>
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2  rounded-full bg-white p-2 shadow-md"
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-500" />
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2  rounded-full bg-white p-2 shadow-md"
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-500" />
      </button>
    </div>
  );
}

export default BankCardScroller;
