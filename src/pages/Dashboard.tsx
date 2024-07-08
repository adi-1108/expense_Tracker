import CustomCarousel from "@/components/CustomCarousel";
import CustomTabs from "@/components/CustomTabs";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PlusIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "@/components/Modal";
import AccountAddForm from "@/components/ui/AccountAddForm";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addAccount } from "@/features/user/userSlice";
import BankCard from "@/components/BankCard";

const Dashboard = () => {
  const user = useSelector((state: any) => state.user);
  const [addAccountModal, setAddAccountModal] = useState(false);
  const dispatch = useDispatch();

  const fetchAccountsForUser = async () => {
    const q = query(
      collection(db, "accounts"),
      where("user_id", "==", user.user.uid),
    );

    const querySnapshot = await getDocs(q);
    const accountArr = [];
    querySnapshot.forEach((doc) => {
      accountArr.push(doc.data());
    });
    dispatch(addAccount(accountArr));
  };

  useEffect(() => {
    fetchAccountsForUser();
  }, [addAccountModal]);
  return (
    <div className="px-10">
      {/* Heading */}
      <div className="sticky top-0 mt-20 flex items-center justify-between">
        <h1 className="text-4xl font-bold">DashBoard</h1>
        <Input
          type="text"
          className="flex-[0.3] bg-primary-foreground"
          placeholder="Search"
        />
      </div>

      {user.accounts.length > 0 ? (
        user.accounts.map((item : any) => (
          <BankCard  />
        ))
      ) : ()}
      <Card
        onClick={() => setAddAccountModal(!addAccountModal)}
        className="my-10 flex w-1/3 cursor-pointer items-center gap-10 px-8 py-10 font-semibold hover:bg-primary-foreground"
      >
        Add a Account
        <PlusIcon className="h-6 w-6 text-gray-500" />
      </Card>

      <Modal onClose={() => setAddAccountModal(false)} show={addAccountModal}>
        <AccountAddForm />
      </Modal>

      {/* Analysis Header */}
      <div className="my-6 flex items-center justify-between">
        <h1 className="text-2xl">Analysis</h1>
        <Link className="hover:text-primary hover:underline" to="/details">
          View Details
        </Link>
      </div>

      {/* Charts */}
      <CustomTabs />

      {/* Overview Cards */}
    </div>
  );
};
export default Dashboard;
