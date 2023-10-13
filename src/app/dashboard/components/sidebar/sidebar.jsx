"use client";
import React, {useMemo, useContext} from 'react';
import { SidebarContext } from "./context";
import { ChevronDoubleRight, ChevronDoubleLeft,  } from "heroicons-react";
import { Category, Calendar, Tag, Buildings, TaskSquare, DocumentText1, ArrowDown2, Chart, PenTool } from 'iconsax-react';
import { usePathname } from 'next/navigation'
import Link from 'next/link';

export default function DashboardSidebar() {
    const { isOpen } = useContext(SidebarContext);
  
    return <div
        className={` bg-dark-bg relative transition duration-500 ease-out  flex flex-col`}
        style={{ height: "100vh", minWidth: isOpen ? "20%" : "" }}
    >
        <div className="flex flex-col h-full">
        <SidebarLogo />
        <div className="flex-1 px-5 flex overflow-y-auto flex-col ">
          <ListHeading name="MENU" />
          <div className="flex-1 ">
            <ul className="list-disc flex flex-col gap-2 items-stretch">
              <TabItem active icon={Category} label="Dashboard" combination="⌘D" route='' />
              <TabItem icon={Calendar} label="Bookings" combination="⌘B" route='/bookings' />
              <TabItem icon={Tag} label="Products" combination="⌘P" route='/products'/>
              <TabItem icon={Buildings} label="Suppliers" combination="⌘F" route='/suppliers' />
              <TabItem icon={TaskSquare} label="Checklists" combination="⌘C" route='checklists' />
              <TabItem icon={DocumentText1} label="Reports" combination="⌘R" route='reports' />
            </ul>
          </div>
          <div className="border-t border-gray-900 my-10"></div>
          <div className="flex-1">
          <ListHeading name="COMING SOON" />
            <TabItem icon={Chart} label="Analytics" />
            <TabItem icon={PenTool} label="Integrations" />
          </div>
        </div>
        <ProfileTab />
      </div>
      <SidebarToggler />
    </div>;
}
  
function ListHeading({ name }) {
    const { isOpen } = useContext(SidebarContext);
    return isOpen ? <p className="pb-5 text-gray-400 text-sm">{name}</p> : <></>
}
  
function SidebarLogo() {
  const { isOpen } = useContext(SidebarContext);
  return <div className="py-5 align-middle text-center">
    <h1 className="text-white text-4xl">{ isOpen ? "Milio"  : "M"}</h1>
  </div>;
}
  
function ProfileTab() {
    const { isOpen } = useContext(SidebarContext);
    return <div className="flex px-7 py-5 gap-5 text-white justify-center">
      <img 
      alt='user-profile'
      src='https://source.unsplash.com/random' 
      className={`${isOpen ? "w-10 h-10" : "w-9 h-9"} rounded-full bg-white bg-opacity-30`} 
      />
      {isOpen ? <>
      <div className="flex-1">
        <p className="text-white ">Username</p>
        <p className="text-gray-100 text-sm text-opacity-40">user@email.com</p>
      </div>
      <ArrowDown2 />
      </> : <></>}
    </div>;
  }
  
function SidebarToggler() {
    const { isOpen, setIsOpen } = useContext(SidebarContext);
    
    const RenderIcon = useMemo((old) => { 
      return isOpen ? ChevronDoubleLeft : ChevronDoubleRight;
    }, [isOpen]);
  
    const toggle = () =>  setIsOpen(!isOpen);
  
    return <div onClick={toggle} className="absolute top-3/4 right-0 transform translate-x-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center place-content-center">
      <RenderIcon className="h-6 w-6 text-gray-500" />
    </div>;
  }
  
function TabItem({ icon: Icon, label, combination, route }) {
    const pathName = usePathname();
    const path = `/dashboard${route}`;
    const isActive = pathName == path;
    const {isOpen} = useContext(SidebarContext);
  
    return <li className={`${isActive ? 'bg-primary-dark-color' : ''} py-2 px-2 flex rounded-xl`}>
      <Link className={`text-white flex flex-1 ${isOpen ? "gap-5" : ''}`} href={path}>
        <div className="bg-white bg-opacity-30 p-2 flex items-center content-center rounded-lg">
          <Icon size={20} />
        </div>
        {isOpen ? <>
        <span className='flex-1 self-center text-sm'>{label}</span>
          {combination ?
            <span className='text-sm px-2 flex items-center content-center bg-white bg-opacity-10 rounded-md'>{combination}</span> : <></>}
        </> : <></>}
      </Link>
    </li>;
  }