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
        {/* Bitcoin-Drive Style Header */}
        <div style={{
          borderBottom: '1px solid rgba(255, 20, 147, 0.2)',
          background: 'rgba(0, 0, 0, 0.2)',
          backdropFilter: 'blur(10px)'
        }}>
          {/* App Title Bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '0.5rem 1rem',
            borderBottom: '1px solid rgba(255, 20, 147, 0.1)'
          }}>
            <span style={{
              fontSize: '1rem',
              fontWeight: '600',
              background: 'linear-gradient(135deg, #ff1493, #ff69b4)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}>
              Bitcoin 3D • $b3D
            </span>
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{
                fontSize: '0.75rem',
                color: 'rgba(255, 232, 247, 0.6)',
                background: 'rgba(255, 20, 147, 0.1)',
                padding: '0.25rem 0.5rem',
                borderRadius: '4px',
                border: '1px solid rgba(255, 20, 147, 0.2)'
              }}>
                $b3D Not Connected
              </span>
            </div>
          </div>
          
          {/* Menu Bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '0 1rem',
            fontSize: '0.875rem',
            fontWeight: '500'
          }}>
            {['File', 'Edit', 'View', '3D', 'Model', 'Tools', 'Share', 'Window', 'Help'].map((menu, index) => (
              <button
                key={menu}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'rgba(255, 232, 247, 0.8)',
                  padding: '0.5rem 0.75rem',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  transition: 'all 0.2s ease',
                  fontSize: '0.875rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 20, 147, 0.1)';
                  e.currentTarget.style.color = '#ff1493';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'rgba(255, 232, 247, 0.8)';
                }}
              >
                {menu}
              </button>
            ))}
            
            <div style={{ marginLeft: 'auto' }}>
              <a 
                href="https://chili3d.pages.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: 'rgba(255, 232, 247, 0.6)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  fontSize: '0.75rem',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  transition: 'color 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#ff1493';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 232, 247, 0.6)';
                }}
              >
                <ExternalLink size={12} />
                Full Screen
              </a>
            </div>
          </div>
        </div>

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