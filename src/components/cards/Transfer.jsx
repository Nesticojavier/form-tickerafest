import React from "react";

const Transfer = () => {
  return (
    <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
      <dl className="space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex items-center justify-between">
          <dt className="text-sm">Banco</dt>
          <dd className="text-sm font-medium text-gray-900">Banco Mercantil</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="text-sm">Número de cuenta</dt>
          <dd className="text-sm font-medium text-gray-900">0105XXXXXXXXXXXX</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="text-sm">RIF</dt>
          <dd className="text-sm font-medium text-gray-900">J-26946571</dd>
        </div>
      </dl>
    </div>
  );
};

export default Transfer;
