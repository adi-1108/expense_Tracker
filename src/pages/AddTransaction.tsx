import Modal from "@/components/Modal";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AddTransaction = () => {
  const accounts = useSelector((state: any) => state.user.accounts);
  const [currentSelectedAccount, setcurrentSelectedAccount] = useState(
    accounts[0].account_id,
  );

  const accountOptions = accounts.map((account: any) => ({
    account_id: account.account_id,
    accountType: account.accountType,
    accountName: account.bankName,
  }));
  const accountIndex = accounts.findIndex(
    (accounts: any) => accounts.account_id === currentSelectedAccount,
  );

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 backdrop-blur">
      <div className="w-full max-w-md overflow-hidden rounded-lg bg-secondary shadow-lg">
        <div className="px-4 py-2">
          <form action="">
            <div className="mb-4 flex flex-col gap-4">
              <label htmlFor="title" className="block text-sm font-medium">
                Account
              </label>
              <select
                className="flex-1 rounded-xl bg-secondary-foreground px-4 py-2 font-semibold text-muted transition-all"
                name=""
                id="account-type"
                value={currentSelectedAccount}
                onChange={(e) => setcurrentSelectedAccount(e.target.value)}
              >
                {accountOptions.map((account: any) => (
                  <option
                    className="text-md flex flex-col rounded-xl px-4 py-2 font-semibold capitalize"
                    value={account.account_id}
                  >
                    <label className="font-semibold capitalize">
                      {account.accountType} {"-->"} {account.accountName}{" "}
                    </label>
                  </option>
                ))}
              </select>
              <label className="flex gap-4 font-medium" htmlFor="">
                Bank Balance
                <span className="font-semibold">
                  {accounts[accountIndex]?.currency}{" "}
                  {accounts[accountIndex]?.balance}
                </span>
              </label>
            </div>
            <div className="mb-4">
              <label htmlFor="amount" className="block text-sm font-medium">
                Amount
              </label>
              <input
                type="number"
                name="amount"
                id="amount"
                placeholder="Amount"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <div className="w-full px-4 py-5 bg-white rounded-2xl">

              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Date
              </label>
              <input
                type="date"
                name="date"
                id="date"
                placeholder="Date"
                className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="note"
                className="block text-sm font-medium text-gray-700"
              >
                Note
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTransaction;
