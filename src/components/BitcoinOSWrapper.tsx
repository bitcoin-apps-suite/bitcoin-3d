'use client';

import React from 'react';
import { useBitcoinOS } from '@/lib/utils/useBitcoinOS';
import PocBar from './PocBar';

interface BitcoinOSWrapperProps {
  children: React.ReactNode;
}

export default function BitcoinOSWrapper({ children }: BitcoinOSWrapperProps) {
  const { isInOS } = useBitcoinOS();

  return (
    <>
      {!isInOS && <PocBar color="#00ff88" />}
      <div style={{ paddingTop: isInOS ? '0px' : '40px' }}>
        {children}
      </div>
    </>
  );
}