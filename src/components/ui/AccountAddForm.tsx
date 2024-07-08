import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./button";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { faker } from "@faker-js/faker";
import { useSelector } from "react-redux";

const AccountAddForm = () => {
  const [accountType, setAccountType] = useState("savings");
  const [customAccountName, setcustomAccountName] = useState("");
  const [bankName, setBankName] = useState("");
  const [balance, setBalance] = useState(0);
  const [accountNumber, setAccountNumber] = useState(0);
  const [currency, setCurrency] = useState("INR");
  const user = useSelector((state: any) => state.user.user);

  const handleAccountAdd = async (e: any) => {
    e.preventDefault();
    const newAccount = {
      user_id: user.uid,
      customAccountName,
      bankName,
      balance,
      accountNumber,
      currency,
      accountType
    };
    await setDoc(doc(db, "accounts", faker.string.numeric(9)), newAccount);
    console.log("Account Added");
  };

  return (
    <form
      onSubmit={handleAccountAdd}
      className="flex flex-col gap-10 px-4 py-2"
      action=""
    >
      <div className="flex items-center justify-start gap-10">
        <label className="flex w-28 font-semibold" htmlFor="">
          Account Type
        </label>
        <select
          className="flex-1 rounded-xl bg-secondary-foreground px-4 py-2 font-semibold text-muted transition-all"
          name=""
          id="account-type"
          onChange={(e) => setAccountType(e.target.value)}
          value={accountType}
        >
          <option
            className="text-md rounded-xl px-4 py-2 font-semibold"
            value="savings"
          >
            Savings
          </option>
          <option
            className="text-md rounded-xl px-4 py-2 font-semibold"
            value="current"
          >
            Current
          </option>
          <option
            className="text-md rounded-xl px-4 py-2 font-semibold"
            value="custom"
          >
            Custom
          </option>
        </select>
      </div>

      {accountType === "custom" && (
        <div className="mt-3 flex flex-col gap-2">
          <label className="font-semibold" htmlFor="">
            Account Name
          </label>
          <input
            value={customAccountName}
            onChange={(e) => setcustomAccountName(e.target.value)}
            className="w-full rounded-xl bg-secondary-foreground px-4 py-2 font-semibold text-muted transition-all"
            type="text"
            name=""
            id=""
          />
        </div>
      )}

      <div className="flex items-center justify-start gap-10">
        <label className="flex w-28 truncate font-semibold" htmlFor="">
          Initital Balance
        </label>
        <Input
          className="flex-1 rounded-xl bg-secondary-foreground px-4 py-2 font-semibold text-muted transition-all"
          type="number"
          placeholder="Enter the value"
          value={balance ? balance : ""}
          onChange={(e) => setBalance(parseFloat(e.target.value))}
        />
      </div>

      <div className="flex items-center justify-start gap-10">
        <label className="flex w-28 truncate font-semibold" htmlFor="">
          Currency
        </label>
        <select
          className="flex-1 rounded-xl bg-secondary-foreground px-4 py-2 font-semibold text-muted transition-all"
          name=""
          id="currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option
            className="text-md rounded-xl px-4 py-2 font-semibold"
            value="INR"
          >
            INR
          </option>
          <option
            className="text-md rounded-xl px-4 py-2 font-semibold"
            value="USD"
          >
            USD
          </option>
        </select>
      </div>

      <div className="flex items-center justify-start gap-10">
        <label className="flex w-28 font-semibold" htmlFor="">
          Bank Name (Optional)
        </label>
        <Input
          className="flex-1 rounded-xl bg-secondary-foreground px-4 py-2 font-semibold text-muted transition-all"
          type="text"
          placeholder="Enter the bank Name"
          value={bankName}
          onChange={(e) => setBankName(e.target.value)}
        />
      </div>

      <div className="flex items-center justify-start gap-10">
        <label className="flex w-28 text-sm font-semibold" htmlFor="">
          Account Number (Optional)
        </label>
        <Input
        maxLength={16}
          className="flex-1 rounded-xl bg-secondary-foreground px-4 py-2 font-semibold text-muted transition-all"
          type="number"
          placeholder="Enter the Account Number"
          value={accountNumber}
          onChange={(e) => setAccountNumber(parseFloat(e.target.value))}
        />
      </div>

      <Button className="font-semibold">Submit</Button>
    </form>
  );
};

export default AccountAddForm;
