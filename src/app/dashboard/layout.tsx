import React from 'react';
import { SidebarContextProvider } from './components/sidebar/context';
import DashboardSidebar from './components/sidebar/sidebar';
import ContentHeader from './components/header/content-header';

export default function DashboardLayout({children}: {
  children: React.ReactNode
}){
    return <SidebarContextProvider> 
      <div className='h-screen w-screen flex bg-gray-bg-100' style={{ height: "100vh" }}>
      <DashboardSidebar />
        <div className="flex-1 flex flex-col">
            <ContentHeader />
            <div className="flex-1 overflow-y-auto">
                {children}
            </div>
        </div>
      </div>
    </SidebarContextProvider>
}