import React, { useState } from "react";

const AccountAddForm = () => {
  const [accountType, setAccountType] = useState("");
  const [customChannelname, setCustomChannelname] = useState("");
  return (
    <form action="">
      <div className="flex justify-start gap-10 items-center">
        <label className="flex font-semibold" htmlFor="">
          Account Type
        </label>
        <select
          className="bg-secondary-foreground transition-all rounded-xl px-4 py-2 font-semibold text-muted flex-1"
          name=""
          id="account-type"
          onChange={(e) => setAccountType(e.target.value)}
          value={accountType}
        >
          <option className="font-semibold text-md rounded-xl px-4 py-2" value="savings">
            Savings
          </option>
          <option className="font-semibold text-md rounded-xl px-4 py-2" value="current">
            Current
          </option>
          <option className="font-semibold text-md rounded-xl px-4 py-2" value="custom">
            Custom
          </option>
        </select>
      </div>

      {accountType === "custom" && (
        <div className="mt-5 flex flex-col gap-2">
          <label className="font-semibold" htmlFor="">
            Account Name
          </label>
          <input
            value={customChannelname}
            onChange={(e) => setCustomChannelname(e.target.value)}
            className="bg-secondary-foreground rounded-xl px-4 py-2 transition-all font-semibold text-muted w-full"
            type="text"
            name=""
            id=""
          />
        </div>
      )}

      {/* <Input type="text" name="" id="" /> */}
    </form>
  );
};

export default AccountAddForm;
