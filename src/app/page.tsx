"use client";
import React from 'react';
import { ExternalLink, Box, Cube, TrendingUp, Users, Clock } from 'lucide-react';
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

  // Sample 3D objects data
  const objects3D = [
    { 
      name: 'Bitcoin Logo 3D', 
      type: 'Logo', 
      size: '2.4 MB', 
      shares: 1000, 
      price: '0.0001 BSV', 
      change: '+15.2%', 
      created: '2h ago',
      status: 'minted'
    },
    { 
      name: 'Crypto Coin Stack', 
      type: 'Model', 
      size: '1.8 MB', 
      shares: 500, 
      price: '0.0003 BSV', 
      change: '+8.7%', 
      created: '5h ago',
      status: 'minted'
    },
    { 
      name: 'Digital Wallet Case', 
      type: 'Product', 
      size: '3.2 MB', 
      shares: 250, 
      price: '0.0005 BSV', 
      change: '-2.1%', 
      created: '1d ago',
      status: 'trading'
    },
    { 
      name: 'Blockchain Cube', 
      type: 'Abstract', 
      size: '1.1 MB', 
      shares: 750, 
      price: '0.0002 BSV', 
      change: '+22.3%', 
      created: '3d ago',
      status: 'minted'
    },
    { 
      name: 'Mining Rig Model', 
      type: 'Hardware', 
      size: '4.7 MB', 
      shares: 100, 
      price: '0.0012 BSV', 
      change: '+5.8%', 
      created: '1w ago',
      status: 'trading'
    }
  ];

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

        {/* Main Content Area */}
        <div style={{
          flex: 1,
          display: 'flex',
          gap: '1rem',
          padding: '1rem'
        }}>
          {/* 3D Objects Listing */}
          <div style={{
            width: '400px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {/* Stats Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem'
            }}>
              <div style={{
                background: 'rgba(255, 20, 147, 0.05)',
                border: '1px solid rgba(255, 20, 147, 0.15)',
                borderRadius: '8px',
                padding: '1rem',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Box size={16} style={{ color: '#ff1493' }} />
                  <span style={{ fontSize: '0.875rem', color: 'rgba(255, 232, 247, 0.7)' }}>Total Objects</span>
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: '600', color: '#ff1493' }}>
                  {objects3D.length}
                </div>
              </div>
              
              <div style={{
                background: 'rgba(255, 20, 147, 0.05)',
                border: '1px solid rgba(255, 20, 147, 0.15)',
                borderRadius: '8px',
                padding: '1rem',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <TrendingUp size={16} style={{ color: '#ff1493' }} />
                  <span style={{ fontSize: '0.875rem', color: 'rgba(255, 232, 247, 0.7)' }}>Avg. Price</span>
                </div>
                <div style={{ fontSize: '1.5rem', fontWeight: '600', color: '#ff1493' }}>
                  0.0005 BSV
                </div>
              </div>
            </div>

            {/* 3D Objects Table */}
            <div style={{
              background: 'rgba(255, 20, 147, 0.05)',
              border: '1px solid rgba(255, 20, 147, 0.15)',
              borderRadius: '8px',
              padding: '1.5rem',
              backdropFilter: 'blur(10px)',
              flex: 1
            }}>
              <h2 style={{
                fontSize: '1.25rem',
                marginBottom: '1rem',
                color: '#ff1493',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <Cube size={20} />
                3D Objects Marketplace
              </h2>
              
              <div style={{ overflow: 'auto', maxHeight: 'calc(100vh - 300px)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid rgba(255, 20, 147, 0.2)' }}>
                      <th style={{ textAlign: 'left', padding: '0.5rem', color: 'rgba(255, 232, 247, 0.7)', fontSize: '0.875rem' }}>Object</th>
                      <th style={{ textAlign: 'right', padding: '0.5rem', color: 'rgba(255, 232, 247, 0.7)', fontSize: '0.875rem' }}>Price</th>
                      <th style={{ textAlign: 'right', padding: '0.5rem', color: 'rgba(255, 232, 247, 0.7)', fontSize: '0.875rem' }}>Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    {objects3D.map((obj, index) => (
                      <tr key={index} style={{ 
                        borderBottom: '1px solid rgba(255, 20, 147, 0.1)',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 20, 147, 0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}>
                        <td style={{ padding: '0.75rem 0.5rem' }}>
                          <div>
                            <div style={{ fontWeight: '500', color: '#ffe8f7', fontSize: '0.875rem' }}>{obj.name}</div>
                            <div style={{ fontSize: '0.75rem', color: 'rgba(255, 232, 247, 0.6)' }}>
                              {obj.type} • {obj.size} • {obj.shares} shares
                            </div>
                          </div>
                        </td>
                        <td style={{ padding: '0.75rem 0.5rem', textAlign: 'right', fontWeight: '500', color: '#ff1493' }}>
                          {obj.price}
                        </td>
                        <td style={{ 
                          padding: '0.75rem 0.5rem', 
                          textAlign: 'right', 
                          fontWeight: '500',
                          color: obj.change.startsWith('+') ? '#00ff88' : '#ff4444'
                        }}>
                          {obj.change}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 3D CAD Editor */}
          <div style={{
            flex: 1,
            background: '#000',
            borderRadius: '8px',
            border: '1px solid rgba(255, 20, 147, 0.15)',
            overflow: 'hidden',
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