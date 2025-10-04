import React from 'react';
import Link from 'next/link';
import { TrendingUp, FileText, DollarSign, Github, ExternalLink, Box } from 'lucide-react';
import Dock from '../../components/Dock';

export default function HomePage() {
  return (
    <>
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0d1f0f 0%, #081209 100%)',
        color: '#e8ffe8',
        padding: '2rem'
      }}>
        {/* Hero Section */}
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center',
          paddingTop: '4rem'
        }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #00ff88, #00cc66)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
          }}>
            Bitcoin 3D
          </h1>
          
          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(232, 255, 232, 0.8)',
            marginBottom: '3rem',
            maxWidth: '600px',
            margin: '0 auto 3rem auto'
          }}>
            Bitcoin SV applications with integrated 3D CAD editor powered by CHILI3D. 
            Design, model, and prototype directly in your browser with professional CAD tools.
          </p>

          {/* CHILI3D CAD Editor */}
          <div style={{
            background: 'rgba(0, 255, 136, 0.05)',
            border: '1px solid rgba(0, 255, 136, 0.2)',
            borderRadius: '12px',
            padding: '2rem',
            margin: '4rem 0',
            textAlign: 'left'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '1rem'
            }}>
              <Box size={24} style={{ color: '#00ff88' }} />
              <h2 style={{ fontSize: '1.5rem', margin: 0, color: '#00ff88' }}>
                3D CAD Editor
              </h2>
            </div>
            <p style={{ 
              color: 'rgba(232, 255, 232, 0.8)', 
              marginBottom: '1rem',
              fontSize: '1rem'
            }}>
              Professional 3D modeling and CAD design powered by CHILI3D WebAssembly engine. 
              No downloads required - full CAD capabilities right in your browser.
            </p>
            
            <div style={{
              width: '100%',
              height: '600px',
              border: '1px solid rgba(0, 255, 136, 0.3)',
              borderRadius: '8px',
              overflow: 'hidden',
              background: '#000'
            }}>
              <iframe
                src="https://chili3d.pages.dev"
                width="100%"
                height="100%"
                style={{
                  border: 'none',
                  borderRadius: '8px'
                }}
                title="CHILI3D CAD Editor"
                allowFullScreen
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-pointer-lock"
              />
            </div>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '1rem',
              fontSize: '0.875rem',
              color: 'rgba(232, 255, 232, 0.6)'
            }}>
              <span>Powered by CHILI3D - Open Source WebAssembly CAD</span>
              <a 
                href="https://chili3d.pages.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: '#00ff88',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }}
              >
                Open in Full Screen <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Quick Actions */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            margin: '4rem 0'
          }}>
            <Link href="/exchange" style={{ textDecoration: 'none' }}>
              <div className="card" style={{
                padding: '2rem',
                textAlign: 'left',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 255, 136, 0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <TrendingUp size={32} style={{ color: '#00ff88', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#00ff88' }}>
                  Exchange Framework
                </h3>
                <p style={{ color: 'rgba(232, 255, 232, 0.7)' }}>
                  Built-in trading functionality with order books, market data, and transaction management.
                </p>
              </div>
            </Link>

            <Link href="/contracts" style={{ textDecoration: 'none' }}>
              <div className="card" style={{
                padding: '2rem',
                textAlign: 'left',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 255, 136, 0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <FileText size={32} style={{ color: '#00ff88', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#00ff88' }}>
                  Smart Contracts
                </h3>
                <p style={{ color: 'rgba(232, 255, 232, 0.7)' }}>
                  Deploy and manage Bitcoin Script smart contracts with an intuitive interface.
                </p>
              </div>
            </Link>

            <Link href="/token" style={{ textDecoration: 'none' }}>
              <div className="card" style={{
                padding: '2rem',
                textAlign: 'left',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 255, 136, 0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <DollarSign size={32} style={{ color: '#00ff88', marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#00ff88' }}>
                  Token Management
                </h3>
                <p style={{ color: 'rgba(232, 255, 232, 0.7)' }}>
                  Create, distribute, and manage your application tokens with built-in economics.
                </p>
              </div>
            </Link>
          </div>

          {/* Getting Started */}
          <div style={{
            background: 'rgba(0, 255, 136, 0.05)',
            border: '1px solid rgba(0, 255, 136, 0.2)',
            borderRadius: '12px',
            padding: '2rem',
            margin: '4rem 0',
            textAlign: 'left'
          }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#00ff88' }}>
              Getting Started
            </h2>
            <ol style={{ listStyle: 'decimal', paddingLeft: '1.5rem', color: 'rgba(232, 255, 232, 0.8)' }}>
              <li style={{ marginBottom: '0.5rem' }}>Fork this repository and clone it to your local machine</li>
              <li style={{ marginBottom: '0.5rem' }}>Customize the app name, branding, and metadata in layout.tsx</li>
              <li style={{ marginBottom: '0.5rem' }}>Configure your exchange parameters and trading pairs</li>
              <li style={{ marginBottom: '0.5rem' }}>Deploy your smart contracts using the contracts framework</li>
              <li style={{ marginBottom: '0.5rem' }}>Set up your token economics and distribution</li>
              <li style={{ marginBottom: '0.5rem' }}>Launch your Bitcoin application!</li>
            </ol>
          </div>

          {/* Links */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <a 
              href="https://github.com/your-github/bitcoin-app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                textDecoration: 'none'
              }}
            >
              <Github size={18} />
              View on GitHub
            </a>
            
            <Link href="/docs" className="btn-primary" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              textDecoration: 'none'
            }}>
              <FileText size={18} />
              Documentation
            </Link>
          </div>
        </div>
      </div>
      <Dock />
    </>
  );
}