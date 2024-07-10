import Modal from "@/components/Modal";
import AccountAddForm from "@/components/ui/AccountAddForm";
import React, { useState } from "react";

const AddAccount = () => {
  const [addAccountModal, setAddAccountModal] = useState(false);
  return (
    <Modal onClose={() => setAddAccountModal(false)} show={addAccountModal}>
      <AccountAddForm modalClose={() => setAddAccountModal(false)} />
    </Modal>
  );
};

export default AddAccount;
