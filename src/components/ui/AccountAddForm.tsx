import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./button";

const AccountAddForm = () => {
  const [accountType, setAccountType] = useState("savings");
  const [customAccountType, setcustomAccountType] = useState("");
  const [bankName, setBankName] = useState("");
  const [balance, setBalance] = useState(0);
  const [accountNumber, setAccountNumber] = useState(0);
  const [currency, setCurrency] = useState("INR");

  const handleAccountAdd = (e: any) => {
    e.preventDefault();
    console.log({
      accountType,
      customAccountType,
      bankName,
      balance,
      accountNumber,
      currency,
    });
  };

  return (
    <form onSubmit={handleAccountAdd} className='flex flex-col gap-10 px-4 py-2' action=''>
      <div className='flex justify-start gap-10 items-center'>
        <label className='flex font-semibold w-28' htmlFor=''>
          Account Type
        </label>
        <select
          className='bg-secondary-foreground transition-all rounded-xl px-4 py-2 font-semibold text-muted flex-1'
          name=''
          id='account-type'
          onChange={(e) => setAccountType(e.target.value)}
          value={accountType}
        >
          <option className='font-semibold text-md rounded-xl px-4 py-2' value='savings'>
            Savings
          </option>
          <option className='font-semibold text-md rounded-xl px-4 py-2' value='current'>
            Current
          </option>
          <option className='font-semibold text-md rounded-xl px-4 py-2' value='custom'>
            Custom
          </option>
        </select>
      </div>

      {accountType === "custom" && (
        <div className='mt-3 flex flex-col gap-2'>
          <label className='font-semibold ' htmlFor=''>
            Account Name
          </label>
          <input
            value={customAccountType}
            onChange={(e) => setcustomAccountType(e.target.value)}
            className='bg-secondary-foreground rounded-xl px-4 py-2 transition-all font-semibold text-muted w-full'
            type='text'
            name=''
            id=''
          />
        </div>
      )}

      <div className='flex justify-start gap-10 items-center'>
        <label className='flex font-semibold w-28 truncate' htmlFor=''>
          Initital Balance
        </label>
        <Input
          className='bg-secondary-foreground transition-all rounded-xl flex-1 px-4 py-2 font-semibold text-muted '
          type='number'
          placeholder='Enter the value'
          value={balance ? balance : ""}
          onChange={(e) => setBalance(parseFloat(e.target.value))}
        />
      </div>

      <div className='flex justify-start gap-10 items-center'>
        <label className='flex font-semibold w-28 truncate' htmlFor=''>
          Currency
        </label>
        <select
          className='bg-secondary-foreground transition-all rounded-xl px-4 py-2 font-semibold text-muted flex-1'
          name=''
          id='currency'
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option className='font-semibold text-md rounded-xl px-4 py-2' value='INR'>
            INR
          </option>
          <option className='font-semibold text-md rounded-xl px-4 py-2' value='USD'>
            USD
          </option>
        </select>
      </div>

      <div className='flex justify-start gap-10 items-center'>
        <label className='flex font-semibold w-28 ' htmlFor=''>
          Bank Name (Optional)
        </label>
        <Input
          className='bg-secondary-foreground transition-all rounded-xl flex-1 px-4 py-2 font-semibold text-muted '
          type='text'
          placeholder='Enter the bank Name'
          value={bankName}
          onChange={(e) => setBankName(e.target.value)}
        />
      </div>

      <div className='flex justify-start gap-10 items-center'>
        <label className='flex font-semibold w-28 text-sm  ' htmlFor=''>
          Account Number (Optional)
        </label>
        <Input
          className='bg-secondary-foreground transition-all rounded-xl flex-1 px-4 py-2 font-semibold text-muted '
          type='number'
          placeholder='Enter the Account Number'
          value={accountNumber}
          onChange={(e) => setAccountNumber(parseFloat(e.target.value))}
        />
      </div>

      <Button className='font-semibold'>Submit</Button>
    </form>
  );
};

export default AccountAddForm;
