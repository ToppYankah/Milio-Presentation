"use client"
import React from 'react';
import {  TrendUp, ArrowUp} from 'iconsax-react';
import ContentCard from '@/components/global/content-card';
import { BarChart } from '@mui/x-charts';

export default function InspectionPerformanceCard() {
    return <ContentCard title={"Inspection Performance"} icon={TrendUp} className="self-start">
        <div className="py-3 px-5 flex flex-col gap-3">
            <PerformanceChart />
            <PerformanceTile title={"Passed Reports"} value={23.2} />
            <PerformanceTile title={"Defect Rate"} value={3.2} />
            <PerformanceTile title={"Beyond AQL Rate"} value={10.2} />
        </div>
    </ContentCard>;
}

function PerformanceChart() {
    return <div className="py-3">
        <div className="flex gap-5">
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-orange-200"></div>
                <span className='text-sm text-gray-500'>Failed</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary-dark-color"></div>
                <span className='text-sm text-gray-500'>Passed</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                <span className='text-sm text-gray-500'>n/a</span>
            </div>
        </div>
        <div className="py-5">
        <BarChart
            colors={[ "#E34A13", "#FBD1AD", "#F4F4F5"]}
            series={[
                { data: [3, 8, 3, 4, 2, 9, 5], stack: 'A', label: 'Passed', },
                { data: [4, 5, 7, 3, 8, 3, 5], stack: 'A', label: 'Failed', },
                { data: [4, 2, 9, 5, 7, 3, 5], stack: 'A', label: 'n/a', },
            ]}
            slotProps={
                {
                    bar: {
                    width: "8%", 
                    radius: 20, 
                    alignmentBaseline: "middle"
                    }, 
                    axisLine: {display: "none"}, 
                    axisTickLabel: {color: "#ff0000"},
                }
            }
            margin={{top: 0, left: 0, right: 0, bottom: 20}}
            legend={{hidden: true}}
            height={200}
            
        />
        </div>
    </div>;
}

function PerformanceTile({title, value}) {
    return <div className="rounded-lg py-3 px-5 border border-1 bg-gray-100">
        <p className='text-sm text-gray-500'>{title}</p>
        <h3 className='text-2xl my-2'>{value}%</h3>
        <div className="flex gap-2">
            <div className="flex text-xs items-center text-gray-500">
                <ArrowUp size={15} />
                <span>23% Passed</span>
            </div>
            <div className="flex text-sm items-center text-gray-500">
                <ArrowUp size={15} />
                <span>23% Failed</span>
            </div>
            <div className="flex text-sm items-center text-gray-500">
                <ArrowUp size={15} />
                <span>23% n/a</span>
            </div>
        </div>
    </div>;
}
