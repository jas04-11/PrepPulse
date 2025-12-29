import React from "react";

const DeleteAlertContent = ({ content, onDelete }) => {
  return (
    <div className="p-4 sm:p-5">
      {/* Text */}
      <p className="text-[13px] sm:text-[14px] text-gray-800 leading-relaxed">
        {content}
      </p>

      {/* Action */}
      <div className="flex flex-col sm:flex-row sm:justify-end mt-6 gap-3">
        <button
          type="button"
          onClick={onDelete}
          className="
            w-full sm:w-auto
            h-11 sm:h-12
            flex items-center justify-center gap-3
            bg-linear-to-r from-[#B33791] to-[#C562AF]
            text-sm font-semibold text-white
            px-6 sm:px-7
            rounded-lg
            transition
            hover:bg-black hover:text-white
            hover:shadow-2xl hover:shadow-pink-300
            active:scale-95
          "
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteAlertContent;
