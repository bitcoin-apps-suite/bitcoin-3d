"use client";
import React from 'react';
import { BookOpen, Code, Zap, FileText, ExternalLink } from 'lucide-react';

export default function DocsPage() {
  const sections = [
    {
      title: 'Getting Started',
      icon: <Zap size={20} />,
      items: [
        'Installation & Setup',
        'Environment Configuration',
        'Running the Development Server',
        'Building for Production'
      ]
    },
    {
      title: 'Core Features',
      icon: <FileText size={20} />,
      items: [
        'Exchange Framework',
        'Smart Contracts',
        'Token Management',
        'Bitcoin OS Integration'
      ]
    },
    {
      title: 'API Reference',
      icon: <Code size={20} />,
      items: [
        'REST API Endpoints',
        'WebSocket Events',
        'SDK Documentation',
        'Authentication'
      ]
    }
  ];

  return (
    <div style={{
      padding: '2rem',
      maxWidth: '1200px',
      margin: '0 auto',
      color: '#e8ffe8'
    }}>
      {/* Header */}
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '0.5rem',
          color: '#00ff88'
        }}>
          Documentation
        </h1>
        <p style={{ color: 'rgba(232, 255, 232, 0.7)', fontSize: '1.1rem' }}>
          Complete guide to building and deploying your Bitcoin application
        </p>
      </div>

      {/* Quick Start */}
      <div className="card" style={{ padding: '2rem', marginBottom: '2rem' }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          marginBottom: '1rem',
          color: '#00ff88',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <Zap size={24} />
          Quick Start
        </h2>
        
        <div style={{
          background: 'rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(0, 255, 136, 0.2)',
          borderRadius: '8px',
          padding: '1.5rem',
          fontFamily: 'monospace',
          fontSize: '0.9rem',
          marginBottom: '1rem'
        }}>
          <div style={{ color: '#888', marginBottom: '0.5rem' }}># Clone the repository</div>
          <div style={{ marginBottom: '1rem' }}>git clone https://github.com/your-github/bitcoin-app.git</div>
          
          <div style={{ color: '#888', marginBottom: '0.5rem' }}># Install dependencies</div>
          <div style={{ marginBottom: '1rem' }}>npm install</div>
          
          <div style={{ color: '#888', marginBottom: '0.5rem' }}># Start development server</div>
          <div>npm run dev</div>
        </div>

        <p style={{ color: 'rgba(232, 255, 232, 0.7)' }}>
          Your Bitcoin app will be running at <code style={{ 
            background: 'rgba(0, 255, 136, 0.1)', 
            padding: '0.25rem 0.5rem', 
            borderRadius: '4px',
            fontFamily: 'monospace'
          }}>
            http://localhost:3000
          </code>
        </p>
      </div>

      {/* Documentation Sections */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '1.5rem',
        marginBottom: '2rem'
      }}>
        {sections.map((section, index) => (
          <div key={index} className="card" style={{ padding: '1.5rem' }}>
            <h3 style={{ 
              fontSize: '1.25rem', 
              marginBottom: '1rem',
              color: '#00ff88',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              {section.icon}
              {section.title}
            </h3>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} style={{ marginBottom: '0.75rem' }}>
                  <a href="#" style={{
                    color: 'rgba(232, 255, 232, 0.8)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.5rem',
                    borderRadius: '4px',
                    transition: 'background 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 255, 136, 0.1)';
                    e.currentTarget.style.color = '#00ff88';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = 'rgba(232, 255, 232, 0.8)';
                  }}>
                    <FileText size={16} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* External Resources */}
      <div className="card" style={{ padding: '2rem' }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          marginBottom: '1rem',
          color: '#00ff88',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <BookOpen size={24} />
          External Resources
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1rem'
        }}>
          <a href="https://docs.bsvblockchain.org" target="_blank" rel="noopener noreferrer" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '1rem',
            border: '1px solid rgba(0, 255, 136, 0.2)',
            borderRadius: '8px',
            textDecoration: 'none',
            color: 'rgba(232, 255, 232, 0.8)',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.borderColor = 'rgba(0, 255, 136, 0.4)';
            e.currentTarget.style.background = 'rgba(0, 255, 136, 0.05)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.borderColor = 'rgba(0, 255, 136, 0.2)';
            e.currentTarget.style.background = 'transparent';
          }}>
            <ExternalLink size={20} style={{ color: '#00ff88' }} />
            <div>
              <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>BSV SDK Documentation</div>
              <div style={{ fontSize: '0.9rem', color: 'rgba(232, 255, 232, 0.6)' }}>
                Official Bitcoin SV SDK documentation
              </div>
            </div>
          </a>

          <a href="https://docs.handcash.io" target="_blank" rel="noopener noreferrer" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '1rem',
            border: '1px solid rgba(0, 255, 136, 0.2)',
            borderRadius: '8px',
            textDecoration: 'none',
            color: 'rgba(232, 255, 232, 0.8)',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.borderColor = 'rgba(0, 255, 136, 0.4)';
            e.currentTarget.style.background = 'rgba(0, 255, 136, 0.05)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.borderColor = 'rgba(0, 255, 136, 0.2)';
            e.currentTarget.style.background = 'transparent';
          }}>
            <ExternalLink size={20} style={{ color: '#00ff88' }} />
            <div>
              <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>HandCash Connect</div>
              <div style={{ fontSize: '0.9rem', color: 'rgba(232, 255, 232, 0.6)' }}>
                Integrate wallet functionality
              </div>
            </div>
          </a>

          <a href="https://github.com/your-github/bitcoin-app" target="_blank" rel="noopener noreferrer" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            padding: '1rem',
            border: '1px solid rgba(0, 255, 136, 0.2)',
            borderRadius: '8px',
            textDecoration: 'none',
            color: 'rgba(232, 255, 232, 0.8)',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.borderColor = 'rgba(0, 255, 136, 0.4)';
            e.currentTarget.style.background = 'rgba(0, 255, 136, 0.05)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.borderColor = 'rgba(0, 255, 136, 0.2)';
            e.currentTarget.style.background = 'transparent';
          }}>
            <ExternalLink size={20} style={{ color: '#00ff88' }} />
            <div>
              <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>GitHub Repository</div>
              <div style={{ fontSize: '0.9rem', color: 'rgba(232, 255, 232, 0.6)' }}>
                Source code and issue tracking
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}