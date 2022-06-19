import React from 'react';
import { Outlet } from 'react-router-dom';
import SidebarComponent from './Components/Sidebar/SidebarComponent';

export default function DashboardPage() {
  return (
    <div className='flex'>
      <SidebarComponent />
      <div className='w-full'>
        <Outlet />
      </div>
    </div>
  );
}
