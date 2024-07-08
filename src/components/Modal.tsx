import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
const Modal = ({ children, show, onClose }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 backdrop-blur">
      <div className=" rounded-lg shadow-lg overflow-hidden w-full bg-secondary max-w-md">
        <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
          <h2 className=" font-semibold text-3xl">Add a Account</h2>
          <button
            className="text-gray-400 hover:text-gray-500"
            onClick={onClose}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
