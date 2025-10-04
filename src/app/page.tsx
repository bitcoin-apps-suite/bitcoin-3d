"use client";
import React from 'react';
import { ExternalLink } from 'lucide-react';
import Dock from '../../components/Dock';

export default function HomePage() {
  const handleIframeLoad = () => {
    // Try to communicate with the iframe to trigger new document creation
    const iframe = document.querySelector('iframe');
    if (iframe && iframe.contentWindow) {
      try {
        // Attempt to send a message to trigger new document creation
        iframe.contentWindow.postMessage({ action: 'newDocument' }, 'https://chili3d.pages.dev');
      } catch (error) {
        console.log('Cross-origin restrictions prevent iframe communication');
      }
    }
  };


  return (
    <>
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #2d0a1f 0%, #1a0512 100%)',
        color: '#ffe8f7',
        display: 'flex',
        flexDirection: 'column'
      }}>

        {/* Full-Page 3D CAD Editor */}
        <div style={{
          flex: 1,
          padding: '0',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{
            flex: 1,
            width: '100%',
            minHeight: 'calc(100vh - 160px)', // Account for header and dock
            background: '#000',
            position: 'relative'
          }}>
            <iframe
              src="https://chili3d.pages.dev/#newdocument"
              width="100%"
              height="100%"
              onLoad={handleIframeLoad}
              style={{
                border: 'none',
                display: 'block',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                filter: 'contrast(1.1) saturate(1.2)'
              }}
              title="Bitcoin 3D - Professional 3D Modeling & Design"
              allowFullScreen
              sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-pointer-lock allow-downloads"
            />
          </div>
        </div>
      </div>
      <Dock />
    </>
  );
}