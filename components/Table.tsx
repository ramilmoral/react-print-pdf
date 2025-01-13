'use client';
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

export default function Table() {
  const contentRef = useRef<HTMLTableElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <h1 className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-gray-700">
        NextJS react-to-pint
      </h1>
      <h4 className="text-center mb-3 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-gray-700">
        by Ramil Moral
      </h4>
      <table
        className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        ref={contentRef}
      >
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 light:bg-gray-700 light:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Color
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white odd:light:bg-gray-900 even:bg-gray-50 even:light:bg-gray-800 border-b light:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap light:text-white"
            >
              Apple MacBook Pro 17"
            </th>
            <td className="px-6 py-4">Silver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className="odd:bg-white odd:light:bg-gray-900 even:bg-gray-50 even:light:bg-gray-800 border-b light:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap light:text-white"
            >
              Microsoft Surface Pro
            </th>
            <td className="px-6 py-4">White</td>
            <td className="px-6 py-4">Laptop PC</td>
            <td className="px-6 py-4">$1999</td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="font-medium text-blue-600 light:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className="odd:bg-white odd:light:bg-gray-900 even:bg-gray-50 even:light:bg-gray-800 border-b light:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap light:text-white"
            >
              Magic Mouse 2
            </th>
            <td className="px-6 py-4">Black</td>
            <td className="px-6 py-4">Accessories</td>
            <td className="px-6 py-4">$99</td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="font-medium text-blue-600 light:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className="odd:bg-white odd:light:bg-gray-900 even:bg-gray-50 even:light:bg-gray-800 border-b light:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap light:text-white"
            >
              Google Pixel Phone
            </th>
            <td className="px-6 py-4">Gray</td>
            <td className="px-6 py-4">Phone</td>
            <td className="px-6 py-4">$799</td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="font-medium text-blue-600 light:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className="odd:bg-white odd:light:bg-gray-900 even:bg-gray-50 even:light:bg-gray-800 border-b light:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap light:text-white"
            >
              Apple Watch 5
            </th>
            <td className="px-6 py-4">Red</td>
            <td className="px-6 py-4">Wearables</td>
            <td className="px-6 py-4">$999</td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="font-medium text-blue-600 light:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="text-center">
        <button
          onClick={() => reactToPrintFn()}
          type="button"
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-10 py-2.5 text-center me-2 mb-2"
        >
          PRINT
        </button>
      </div>
    </div>
  );
}
