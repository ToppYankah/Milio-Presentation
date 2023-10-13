import React from 'react';
import { DocumentText1, Calendar, Location, Tag, Box} from 'iconsax-react';
import ContentCard from '../../../components/global/content-card';

const reportStatus = {
    failed: -1,
    pending: 0,
    passed: 1,
}

const recentReports = [
    {
        status: reportStatus.pending,
        clientName: "Wenli",
        service: "Pre-Shipment Inspection",
        details: {
            dateIssued: "15th October 2023",
            location: "Guandong, CN",
            totalProducts: 15,
            packingType: "Freight Packing",
        }
    },
    {
        status: reportStatus.passed,
        clientName: "Sandbox",
        service: "Pre-Shipment Inspection",
        details: {
            dateIssued: "15th October 2023",
            location: "Guandong, CN",
            totalProducts: 15,
            packingType: "Freight Packing",
        }
    },
    {
        status: reportStatus.passed,
        clientName: "Yankeys",
        service: "Pre-Shipment Inspection",
        details: {
            dateIssued: "15th October 2023",
            location: "Guandong, CN",
            totalProducts: 15,
            packingType: "Freight Packing",
        }
    },
    {
        status: reportStatus.failed,
        clientName: "Valinette",
        service: "Pre-Shipment Inspection",
        details: {
            dateIssued: "15th October 2023",
            location: "Guandong, CN",
            totalProducts: 15,
            packingType: "Freight Packing",
        }
    },
]



export default function RecentReports() {
    return <ContentCard
        className="col-span-2"
        title={"Recent Reports"}
        icon={DocumentText1}
        tag={"1 Unread"}
        headerTrailing={{ link: "", label: "View All Reports" }}
    >
        <div className="flex p-5 gap-5 flex-wrap">
            {recentReports.map((report, index) => <RecentReportItem key={index} report={report} />)}
        </div>
    </ContentCard>;
}


function RecentReportItem({ report }) {
    return <div className="flex-1 rounded-xl border border-1 border-gray-200 py-5 px-3" style={{ minWidth: "40%", maxWidth: "50%" }}>
        <div className="flex">
            <div className="flex-1">
                <h5 className="font-bold">Weinli</h5>
                <p className="text-sm text-gray-500" >Pre-Shipment Inspection</p>
            </div>
            <StatusTag status={report.status} />
        </div>
        <div className="border-b border-gray-100 my-3" />
        <div className="flex items-center gap-3">
            <Calendar size={18} />
            <span className="text-sm text-gray-600">{report.details.dateIssued}</span>
        </div>
        <div className="my-2"/>
        <div className="flex items-center gap-3">
            <Location size={18} />
            <span className="text-sm text-gray-600">{report.details.location}</span>
        </div>
        <div className="border-b border-gray-100 my-3" />
        <div className="flex items-center gap-3">
            <Tag size={18} />
            <span className="text-sm text-gray-600">Products ({report.details.totalProducts})</span>
        </div>
        <div className="my-2"/>
        <div className="flex items-center gap-3">
            <Box size={18} />
            <span className="text-sm text-gray-600">{report.details.packingType}</span>
        </div>
        <div className="bg-black text-white text-center p-2 rounded-lg mt-5">View Report</div>
    </div>;
}

function StatusTag({ status }) {
    let border = "";
    let label = "";
    let background = "";
    let textColor = "";
    
    switch (status) {
        case reportStatus.failed:
            background = "bg-red-400";
            border = " border-red-200";
            textColor = "text-red-300";
            label = "Failed";
            break;

        case reportStatus.passed:
            background = "bg-green-400";
            border = " border-green-200";
            textColor = "text-green-500";
            label = "Passed";
            break;
    
        default:
            background = "bg-yellow-400";
            border = " border-orange-200";
            textColor = "text-orange-300";
            label = "Pending";
            break;
    }

    return <div className={`rounded-md border border-1 py-1 px-3 text-xs ${background} ${border} ${textColor} bg-opacity-20 self-start`}><span>{label}</span></div>;
}