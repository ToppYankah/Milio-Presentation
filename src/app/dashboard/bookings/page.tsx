'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactElement, useContext } from "react";
import ContentCard from "@/components/global/content-card";
import { CheckOutline } from "heroicons-react";
import { Add, CloseCircle, Copy, DirectboxNotif, Edit, Eye, Filter, SearchNormal1 } from "iconsax-react";
import { InspectionItems, InspectionStatus, InspectionStatusValue } from "../components/upcoming-inspections";
import DropdownButton from "@/components/global/dropdown-button";
import { SidebarContext } from "@/app/dashboard/components/sidebar/context";

export default function DashboardViewPage() {
    const { isOpen } = useContext(SidebarContext);

    return <div className=" py-10 px-10">
        <div className="pb-8">
            <h1 className="text-4xl font-bold ">Bookings</h1>
            <p className="mt-2 text-gray-500">View and manage your bookings</p>
        </div>
        <TabBar />
        <ContentCard className="mt-5 overflow-x-auto">
            <div className="text-left whitespace-nowrap text-sm table-res overflow-x-auto" style={{
                maxWidth: isOpen ? "75vw" : "90vw", overflow: "auto"}}>
                <table style={{minWidth: isOpen ? "75vw" : "90vw"}}>
                    <thead className="px-5">
                        <tr>
                            <th className="px-4 py-2 bg-gray-50 font-medium">
                                <div className="flex items-center gap-3">
                                    <Checkbox />
                                    <span>ID</span>
                                </div>
                            </th>
                            <th className="px-8 py-2 bg-gray-50 font-medium">Type</th>
                            <th className="px-2 py-2 bg-gray-50 font-medium">Supplier</th>
                            <th className="px-6 py-2 bg-gray-50 font-medium">Country</th>
                            <th className="px-12 py-2 bg-gray-50 font-medium">Target Date</th>
                            <th className="px-4 py-2 bg-gray-50 font-medium">Status</th>
                            <th className="px-8 py-2 bg-gray-50 font-medium">Items</th>
                            <th className="px-8 py-2 bg-gray-50 font-medium">User</th>
                            <th className="px-8 py-2 bg-gray-50 font-medium"></th>
                        </tr>
                    </thead>
                    <tbody>
                    {[...Array(10)].map((_, index) => (
                        <tr key={index} className="border-t font-light">
                            <td className="px-4 py-5">
                                <div className="flex items-center gap-3">
                                    <Checkbox />
                                    <span>#434634</span>
                                </div>
                            </td>
                            <td className="px-8 py-2 whitespace-nowrap">
                                <span className="px-2 py-1 border border-gray-400 rounded-md text-sm font-light">
                                    Pre-Shipment Inspection
                                </span>
                            </td>
                            <td className="px-2 py-2 whitespace-nowrap"><span>Weinli Electronics</span></td>
                            <td className="px-6 py-2 whitespace-nowrap">
                                <div className="flex items-center gap-3">
                                    <div className="w-7 h-7 rounded-xl bg-orange-600"></div>
                                    <span>CN</span>
                                </div>
                            </td>
                            <td className="px-12 py-2 whitespace-nowrap">
                                <span>23/08/23</span>
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap">
                                <InspectionStatus value={InspectionStatusValue.booked} />
                            </td>
                            <td className="px-4 py-2 whitespace-nowrap">
                                <InspectionItems />
                            </td>
                            <td className="px-8 py-2 whitespace-nowrap">
                                <div className="w-7 h-7 rounded-full bg-gray-200 text-gray-500 grid place-items-center font-medium">
                                    OR
                                </div>
                            </td>
                            <td className="px-8 py-2 whitespace-nowrap">
                                <DropdownButton options={[
                                    {
                                        label: "View Report",
                                        icon: Eye
                                    },
                                    {
                                        label: "Edit",
                                        icon: Edit,
                                    },
                                    {
                                        label: "Duplicate",
                                        icon: Copy,
                                    },
                                    {
                                        label: "View Invoice",
                                        icon: DirectboxNotif,
                                    },
                                    {
                                        label: "Cancel Booking",
                                        icon: CloseCircle,
                                        color: "#ff0000",
                                    },
                                ]} />
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </ContentCard>

    </div>;
}

const Checkbox = ({checked}: {checked?: boolean})=> {
    return <div className="border-2 w-7 h-7  rounded-lg grid place-items-center">
        {checked && <CheckOutline size={15} />}
    </div>
}

const AppButton = ({children, className, ...props}: {children: ReactElement, className?: string})=> {
    return <div {...props} className={`bg-black flex items-center px-3 gap-2 rounded-lg ${className}`}>
        {children}
    </div>
}

const FilterButton = () => {
    return <div className="rounded-lg py-2 px-3 flex gap-3 border items-center bg-white">
        <Filter size={18} />
        <span className="text-sm">Filter</span>
    </div>
}

const SearchButton = () => {
    return <div className="w-10 h-10 border rounded-lg flex items-center justify-center bg-white">
        <SearchNormal1 size={18} />
    </div>;
}

const TabItem = ({ label, route } :{label: string, route: string})=>{
    const pathName = usePathname();
    const path = `/dashboard/bookings${route}`;
    const isActive = pathName == path;
    const activeStyle = isActive ? "border-b-2" : "";
    const activeLabelStyle = isActive ? "text-black" : "text-gray-500";
    const tagActiveStyle = isActive ? "bg-black text-white" : "bg-gray-200 text-gray-500";

    return <Link href={path} className={`h-16 flex items-center gap-2 ${activeStyle} border-black`}>
    <span className={activeLabelStyle}>{label}</span>
    <span className={`px-2 text-sm rounded-full ${tagActiveStyle}`}>00</span>
</Link>;
}

const TabBar = ()=> {
    return <div className="flex border-b border-1">
        <div className="flex flex-1 gap-5 items-center">
            <TabItem label="All Bookings" route="" />
            <TabItem label="Completed" route="/completed" />
            <TabItem label="Open" route="/open" />
            <TabItem label="Drafts" route="/drafts" />
            <TabItem label="Cancelled" route="/cancelled" />
        </div>
        <TabActions />
    </div>;
}

const TabActions = ({})=> {
    return <div className="flex gap-3 self-center">
        <SearchButton />
        <FilterButton />
        <AppButton className="text-white">
            <div className="flex gap-2 items-center">
                <Add />
                <span className="text-sm">Create Booking</span>
            </div>
        </AppButton>
    </div>
}