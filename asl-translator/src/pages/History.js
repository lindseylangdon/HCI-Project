import React from 'react';

function History() {
  return (
    <div class="overflow-x-auto container mx-auto">
        <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead class="ltr:text-left rtl:text-right">
            <tr>
            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                id
            </th>
            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                translation
            </th>
            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                time
            </th>
            </tr>
        </thead>
    
        <tbody class="divide-y divide-gray-200">
            <tr class="odd:bg-gray-50">
            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                cpnuvm9yu
            </td>
            <td class="whitespace-nowrap px-4 py-2 text-gray-700">hello</td>
            <td class="whitespace-nowrap px-4 py-2 text-gray-700">20:57:00</td>
            </tr>
    
            <tr class="odd:bg-gray-50">
            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                dzqo7t71y
            </td>
            <td class="whitespace-nowrap px-4 py-2 text-gray-700">no thanks</td>
            <td class="whitespace-nowrap px-4 py-2 text-gray-700">06:54:02</td>
            </tr>
    
            <tr class="odd:bg-gray-50">
            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                urkmulgq8
            </td>
            <td class="whitespace-nowrap px-4 py-2 text-gray-700">goodbye</td>
            <td class="whitespace-nowrap px-4 py-2 text-gray-700">13:39:41</td>
            </tr>
        </tbody>
        </table>
    </div>
  );
}

export default History;