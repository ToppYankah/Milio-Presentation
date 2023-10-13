import React from 'react';
import InspectionPerformance from './components/insight-performance';
import ProductPerformance from './components/product-performance';
import RecentReports from './components/recent-reports';
import UpcomingInspections from './components/upcoming-inspections';

export default function DashboardViewPage() {
    return <div className=" py-10 px-10">
        <div className="pb-8">
            <h1 className="text-4xl font-bold ">Dashboard</h1>
        </div>
        <div className="grid grid-cols-3 grid-rows-1 gap-5">
            <RecentReports />
            <InspectionPerformance />
            <UpcomingInspections />
            <ProductPerformance />
        </div>
    </div>;
}

