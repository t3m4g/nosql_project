import React from "react";

export default function spinner() {
  return (
    <div className="flex items-center my-20 justify-center h-12">
      <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
}
