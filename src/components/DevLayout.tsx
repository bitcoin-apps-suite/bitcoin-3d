'use client';

import React, { useState, useEffect } from 'react';
import DevSidebar from './DevSidebar';
import Taskbar from './Taskbar';
import { useBitcoinOS } from '@/lib/utils/useBitcoinOS';

interface DevLayoutProps {
  children: React.ReactNode;
}

const DevLayout: React.FC<DevLayoutProps> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { isInOS, setTitle } = useBitcoinOS();

  useEffect(() => {
    // Check if sidebar is collapsed from localStorage on mount
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('devSidebarCollapsed');
      setIsCollapsed(saved === 'true');
    }
    
    // Set app title when running in Bitcoin OS
    if (isInOS) {
      setTitle('Bitcoin App');
    }
  }, [isInOS, setTitle]);

  const handleCollapsedChange = (collapsed: boolean) => {
    setIsCollapsed(collapsed);
  };

  return (
    <>
      {!isInOS && <Taskbar />}
      {!isInOS && <DevSidebar onCollapsedChange={handleCollapsedChange} />}
      <div className={`app-container ${isInOS ? '' : (isCollapsed ? 'with-dev-sidebar-collapsed' : 'with-dev-sidebar')}`}>
        {children}
      </div>
    </>
  );
};

export default DevLayout;