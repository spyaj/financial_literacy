// CancelModel.jsx

import React from "react";

const CancelModel = ({ onCancel, onConfirm }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-5 rounded-md shadow-lg max-w-md text-black">
        <h2 className="text-lg font-bold mb-3">Cancel Quiz?</h2>
        <p className="mb-4">Are you sure you want to cancel the quiz?</p>
        <div className="flex justify-end">
          <button
            onClick={onCancel}
            className="bg-gray-400 text-white px-4 py-2 mr-2 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelModel;
