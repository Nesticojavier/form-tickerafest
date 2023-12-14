import React from "react";

const PaymentMethodCard = ({method}) => {
  return (
    <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
      <dl className="space-y-6 border-gray-200 px-4 py-6 sm:px-6">
        {method.map((data, index) => (
          <div key={index} className="flex items-center justify-between">
            <dt className="text-md font-bold">{data.name}</dt>
            <dd className="text-md font-medium text-black">{data.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default PaymentMethodCard;
