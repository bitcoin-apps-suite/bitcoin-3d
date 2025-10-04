"use client";
import React from 'react';
import { ExternalLink } from 'lucide-react';
import Dock from '../../components/Dock';

export default function HomePage() {
  return (
    <>
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #2d0a1f 0%, #1a0512 100%)',
        color: '#ffe8f7',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Thin Elegant Header */}
        <div style={{
          padding: '1rem 2rem',
          borderBottom: '1px solid rgba(255, 20, 147, 0.2)',
          background: 'rgba(0, 0, 0, 0.2)',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '100%'
          }}>
            <h1 style={{
              fontSize: '1.5rem',
              fontWeight: '200',
              margin: 0,
              letterSpacing: '0.05em',
              background: 'linear-gradient(135deg, #ff1493, #ff69b4)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}>
              Bitcoin 3D • $b3D
            </h1>
            
            <a 
              href="https://chili3d.pages.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: 'rgba(255, 232, 247, 0.6)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: '300',
                transition: 'color 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = '#ff1493';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = 'rgba(255, 232, 247, 0.6)';
              }}
            >
              Open in Full Screen <ExternalLink size={14} />
            </a>
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
            minHeight: 'calc(100vh - 80px)', // Account for header and dock
            background: '#000',
            position: 'relative'
          }}>
            <iframe
              src="https://chili3d.pages.dev/?newdoc=true"
              width="100%"
              height="100%"
              style={{
                border: 'none',
                display: 'block',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
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