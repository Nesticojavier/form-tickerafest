import React from "react";

const Zelle = () => {
  return (
    <div className="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
      <dl className="space-y-6 border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex items-center justify-between">
          <dt className="text-sm">Dato 1</dt>
          <dd className="text-sm font-medium text-gray-900">XXXXXX</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="text-sm">Dato 2</dt>
          <dd className="text-sm font-medium text-gray-900">XXXXX</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="text-sm">Dato 3</dt>
          <dd className="text-sm font-medium text-gray-900">XXXXXXX</dd>
        </div>
      </dl>
    </div>
  );
};

export default Zelle;
