import React from "react";

const BankCard = ({
  account: { accountNumber, balance, bankName, customAccountName, currency },
}) => {
  return (
    <div className="flex h-[250px] w-[400px] flex-col justify-between rounded-2xl bg-gradient-to-r from-orange-500 to-primary px-6 py-8 transition-all hover:scale-105 hover:bg-gradient-to-l hover:from-orange-500 hover:to-primary">
      <label htmlFor="">**** {accountNumber % 1000000000000} </label>
      <div>
        <p>Balance</p>
        <label className="text-5xl font-bold" htmlFor="">
          $1000
        </label>
      </div>
    </div>
  );
};

export default BankCard;
