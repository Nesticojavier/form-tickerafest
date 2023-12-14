import React from "react";
import Warning from "./icons/warning";


const ErrorMessage = ({message}) => {
  return (
    <div className="flex gap-2 mt-2">
      <Warning width={21} height={21} />
      <span className="text-red-500">{message}</span>
    </div>
  );
};

export default ErrorMessage;
