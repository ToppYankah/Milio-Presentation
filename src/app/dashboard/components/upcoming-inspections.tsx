import React from 'react';
import { DocumentText1 } from 'iconsax-react';
import ContentCard from '@/components/global/content-card';

export default function UpcomingInspections() {
    return <ContentCard
    className="col-span-2 self-start"
    title="Upcoming Inspections"
    icon={DocumentText1}
    headerTrailing={{ link: "", label: "View All Bookings" }}
>
    <div className="p-5">
        <AppTable />
    </div>
</ContentCard>;
}

function AppTable(){
    return <table className="table-auto w-full">
        <thead>
        <tr className="p-10 text-left font-normal text-gray-600">
          <th className="font-normal pb-5" colSpan={3}>Type</th>
          <th className="font-normal pb-5" >Target Date</th>
          <th className="font-normal pb-5"  colSpan={3.5}>Status</th>
          <th className="font-normal pb-5"  colSpan={3}>Items</th>
        </tr>
      </thead>
      <tbody>
        <InspectionTableRow />
        <InspectionTableRow />
        <InspectionTableRow />
        <InspectionTableRow />
      </tbody>
    </table>;
}

function InspectionTableRow () {
    return <tr className="table-row py-5  border-t border-1 border-gray-200">
    <td colSpan={3} className="table-cell py-4">
        <p className='font-medium'>Pre-Shipment Inspection</p>
    </td>
    <td className="table-cell py-4"><span>23/09/23</span></td>
    <td className="table-cell py-4" colSpan={3}>
        <InspectionStatus value={InspectionStatusValue.confirmed} />
    </td>
    <td className="table-cell py-4" colSpan={3}>
        <InspectionItems />
    </td>
</tr>;
}

export function InspectionItems() {
    return <div className="flex items-center gap-2">
        <div className='flex '>
            <div
            className={`border-4 rounded-xl border-white bg-red-500 -mr-3 z-30`}
            style={{width: 50, height: 50}}
            ></div>
            <div
            className={`border-4 rounded-xl border-white bg-yellow-500 -mx-3 -mr-7 z-20`}
            style={{width: 50, height: 50}}
            ></div>
            <div
            className={`border-4 rounded-xl border-white bg-green-500 z-10`}
            style={{width: 50, height: 50}}
            ></div>
        </div>
        <p>+2</p>
    </div>;
}

export enum InspectionStatusValue {
    draft = "Draft",
    booked = "Booked",
    confirmed = "Confirmed",
    inProgress = "In Progress",
    done = "Done",
}

export function InspectionStatus({value}: {value: InspectionStatusValue}) {
    const index: number = Object.values(InspectionStatusValue).indexOf(value);
    return <div className="flex items-center gap-3">
        <p className='font-bold'>{value}</p>
        <StatusRange range={index + 1} />
    </div>;
}

export function StatusRange({range}: {range: number}) {
  const numOfCircles = 5;
  const circleElements = [];

  for (let i = 1; i <= numOfCircles; i++) {
    const markActive = i <= range;
    circleElements.push(
    <div key={i} className={`rounded-full ${ markActive ? "bg-green-500" : "bg-gray-200"}`} style={{width: 6, height: 6}}></div>);
  }

    return <div className="flex gap-2">{circleElements}</div>
}