import CustomCarousel from "@/components/CustomCarousel";
import CustomTabs from "@/components/CustomTabs";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PlusIcon } from "@heroicons/react/24/outline";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "@/components/Modal";
import AccountAddForm from "@/components/ui/AccountAddForm";

const Dashboard = () => {
  const [addAccountModal, setAddAccountModal] = useState(false);

  return (
    <div className='px-10'>
      {/* Heading */}
      <div className='flex items-center justify-between mt-20 sticky top-0'>
        <h1 className='text-4xl font-bold'>DashBoard</h1>
        <Input type='text' className='flex-[0.3] bg-primary-foreground' placeholder='Search' />
      </div>

      <Card
        onClick={() => setAddAccountModal(!addAccountModal)}
        className='px-8 hover:bg-primary-foreground font-semibold cursor-pointer py-10 w-1/3 my-10 flex items-center gap-10'
      >
        Add a Account
        <PlusIcon className='h-6 w-6 text-gray-500' />
      </Card>

      <Modal onClose={() => setAddAccountModal(false)} show={addAccountModal}>
        <AccountAddForm />
      </Modal>

      {/* Analysis Header */}
      <div className='flex items-center justify-between my-6'>
        <h1 className='text-2xl'>Analysis</h1>
        <Link className='hover:text-primary hover:underline' to='/details'>
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
