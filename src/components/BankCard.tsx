import React, { useState } from "react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { removeAccount } from "@/features/user/userSlice";
import { collection, deleteDoc, doc, query, where } from "firebase/firestore";
import { db } from "@/firebase";

const BankCard = ({
  account: {
    accountNumber,
    balance,
    bankName,
    customAccountName,
    currency,
    account_id,
  },
}) => {
  const dispatch = useDispatch();
  const [menu, setMenu] = useState(false);
  const [menuSelected, setMenuSelected] = useState(false);
  const handleRemoveAccount = (e: any) => {
    deleteDoc(doc(db, "accounts", e));
    dispatch(removeAccount(e));
  };
  return (
    <div
      onMouseEnter={() => setMenu(true)}
      onMouseLeave={() => {
        setMenu(false);
        setMenuSelected(false);
      }}
      className="flex h-[200px] w-[400px] flex-none flex-col justify-between rounded-2xl bg-gradient-to-r from-orange-500 to-primary px-6 py-8 transition-all hover:scale-105 hover:bg-gradient-to-l hover:from-orange-500 hover:to-primary"
    >
      <div className="flex items-center justify-between">
        <label htmlFor="">**** {accountNumber % 1000000000000} </label>
        {menu && (
          <div className="relative cursor-pointer rounded-full p-1 transition-all hover:bg-gray-600 hover:bg-opacity-45 hover:shadow-lg">
            <EllipsisVerticalIcon
              onClick={() => setMenuSelected(true)}
              className="h-6 w-6 text-white"
            />
            {menuSelected && (
              <div>
                <div className="absolute right-0 top-2 rounded-md bg-white px-2 py-2 shadow-lg">
                  <button
                    onClick={() => handleRemoveAccount(account_id)}
                    className="w-[200px] rounded-sm px-3 py-2 text-left text-sm text-gray-800 transition-all hover:bg-slate-200 hover:font-medium"
                  >
                    Remove Account
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <div>
        <p>Balance</p>
        <label className="text-5xl font-bold" htmlFor="">
          {currency} {balance}
        </label>
      </div>
    </div>
  );
};

export default BankCard;
