import React from "react";

export const buttonStyles = {
    normal: "bg-black text-gray-200 hover:text-white hover:bg-blue-900 focus:bg-blue-800 focus:shadow-outline-blue",
    green: "bg-green-600 text-white hover:bg-green-500 focus:bg-green-700",
    red: "bg-red-600 text-white hover:bg-red-500 focus:bg-red-700",
};

export const Button = ({ className = buttonStyles.normal, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
    <span className="mt-3 first:mt-0 flex w-full shadow-sm sm:ml-3 sm:mt-0 sm:w-auto">
        <button type="button" className={`inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 text-base leading-6 font-medium shadow-sm focus:outline-none  focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5 ${className || ''}`} {...props} />
    </span>
);
