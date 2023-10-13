import React from 'react';
import { Tag } from 'iconsax-react';
import { ChevronDown, TrendingUp } from 'heroicons-react';
import ContentCard from '../../../components/global/content-card';

export default function ProductPerformance() {
    return <ContentCard
        className="self-start"
        title={"Product Performance"}
        icon={Tag}
    >
        <div className="p-5">
            <SwitchTab />
            <div className="border-b border-1 my-5 border-gray-100"></div>
            <ProductPerformanceTable />
            <div className="pt-3 flex items-center gap-3 border-t border-1">
                <ChevronDown />
                <span>View More</span>
            </div>
        </div>
    </ContentCard>;
}

function SwitchTab(){
    return <div className='rounded-xl p-1 border border-1 bg-gray-100 w-full flex text-center'>
        <div className="flex-1 p-2 shadow-md bg-white rounded-lg">
            <span>Last 3 Months</span>
        </div>
        <div className="flex-1 p-2">
            <span>Last 12 Months</span>
        </div>
    </div>
}

function ProductPerformanceTable() {
    return <table className="table-auto w-full">
    <thead className=' border-gray-100'>
    <tr className="p-10 text-left font-normal text-gray-600">
      <th className="font-normal pb-5" colSpan={2}>Type</th>
      <th className="font-normal pb-5" colSpan={1} >Target Date</th>
    </tr>
  </thead>
  <tbody>
   <PerformanceTableItem />
   <PerformanceTableItem />
   <PerformanceTableItem />
  </tbody>
</table>;
}

function PerformanceTableItem () {
    return <tr className="table-row py-5 border-t border-1">
    <td colSpan={2} className="table-cell py-4">
        <div className="flex gap-3 items-center">
        <div className=" w-12 h-12 bg-red-500 rounded-xl"></div>
        <p className='font-medium'>T-Shirt</p>
        </div>
    </td>
    <td className="table-cell py-4" colSpan={1}>
        <div className="flex gap-3">
        <TrendingUp className='text-green-500' />
        <span>1.23%</span>

        </div>
    </td>
</tr>;
}