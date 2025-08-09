import React from 'react';

interface SelectInputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  description?: string;
  children: React.ReactNode;
}

export const SelectInput = ({ label, description, children, ...props }: SelectInputProps) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <select
      {...props}
      className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
    >
      {children}
    </select>
    {description && <p className="text-xs text-gray-500 mt-1">{description}</p>}
  </div>
);