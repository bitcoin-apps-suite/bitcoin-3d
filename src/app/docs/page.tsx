"use client";
import React, { useState, useEffect } from 'react';
import { BookOpen, Code, Zap, FileText, ExternalLink } from 'lucide-react';
import './docs.css';

const DocsPage: React.FC = () => {
  const [devSidebarCollapsed, setDevSidebarCollapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('devSidebarCollapsed');
      return saved === 'true';
    }
    return false;
  });
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Listen for storage changes to detect sidebar collapse state
      const handleStorageChange = () => {
        const saved = localStorage.getItem('devSidebarCollapsed');
        setDevSidebarCollapsed(saved === 'true');
      };
      
      // Handle window resize
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
      
      window.addEventListener('storage', handleStorageChange);
      window.addEventListener('resize', handleResize);
      
      // Check for sidebar state changes via polling
      const checkSidebarState = setInterval(() => {
        const saved = localStorage.getItem('devSidebarCollapsed');
        setDevSidebarCollapsed(saved === 'true');
      }, 100);
      
      return () => {
        window.removeEventListener('storage', handleStorageChange);
        window.removeEventListener('resize', handleResize);
        clearInterval(checkSidebarState);
      };
    }
  }, []);

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
    <div className="App">
      <div className={`docs-page ${!isMobile && !devSidebarCollapsed ? 'with-sidebar-expanded' : ''} ${!isMobile && devSidebarCollapsed ? 'with-sidebar-collapsed' : ''}`}>
        <div className="docs-container">
          {/* Hero Section */}
          <section className="docs-hero">
            <h1><span style={{color: '#ffffff'}}>Bitcoin 3D</span> Documentation</h1>
            <p className="docs-tagline">
              Complete guide to building and deploying 3D assets on the Bitcoin blockchain
            </p>
            <div className="docs-badge">DOCUMENTATION</div>
          </section>

          {/* Quick Start Section */}
          <section className="quick-start-section">
            <h2>Quick Start</h2>
            <div className="quick-start-card">
              <div className="quick-start-header">
                <Zap size={24} style={{ color: '#ffa500' }} />
                <h3>Get Started in Minutes</h3>
              </div>
              
              <div className="code-block">
                <div className="code-comment"># Clone the repository</div>
                <div className="code-line">git clone https://github.com/bitcoin-apps-suite/bitcoin-3d.git</div>
                
                <div className="code-comment"># Install dependencies</div>
                <div className="code-line">npm install</div>
                
                <div className="code-comment"># Start development server</div>
                <div className="code-line">npm run dev</div>
              </div>

              <p>
                Your Bitcoin 3D app will be running at{' '}
                <span className="inline-code">http://localhost:3000</span>
              </p>
            </div>
          </section>

          {/* Documentation Sections */}
          <section>
            <h2>Documentation Sections</h2>
            <div className="docs-sections-grid">
              {sections.map((section, index) => (
                <div key={index} className="docs-section-card">
                  <div className="docs-section-header">
                    {section.icon}
                    <h3>{section.title}</h3>
                  </div>
                  
                  <ul className="docs-section-list">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="docs-section-item">
                        <a href="#" className="docs-section-link">
                          <FileText size={16} />
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* External Resources */}
          <section className="external-resources-section">
            <div className="external-resources-header">
              <BookOpen size={24} style={{ color: '#ffa500' }} />
              <h2>External Resources</h2>
            </div>

            <div className="external-resources-grid">
              <a 
                href="https://docs.bsvblockchain.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="external-resource-card"
              >
                <div className="external-resource-icon">
                  <ExternalLink size={20} />
                </div>
                <div className="external-resource-content">
                  <h4>BSV SDK Documentation</h4>
                  <p>Official Bitcoin SV SDK documentation and guides</p>
                </div>
              </a>

              <a 
                href="https://docs.handcash.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="external-resource-card"
              >
                <div className="external-resource-icon">
                  <ExternalLink size={20} />
                </div>
                <div className="external-resource-content">
                  <h4>HandCash Connect</h4>
                  <p>Integrate wallet functionality and payments</p>
                </div>
              </a>

              <a 
                href="https://github.com/bitcoin-apps-suite/bitcoin-3d" 
                target="_blank" 
                rel="noopener noreferrer"
                className="external-resource-card"
              >
                <div className="external-resource-icon">
                  <ExternalLink size={20} />
                </div>
                <div className="external-resource-content">
                  <h4>GitHub Repository</h4>
                  <p>Source code, issues, and contribution guidelines</p>
                </div>
              </a>

              <a 
                href="https://blender.org/download/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="external-resource-card"
              >
                <div className="external-resource-icon">
                  <ExternalLink size={20} />
                </div>
                <div className="external-resource-content">
                  <h4>Blender 3D</h4>
                  <p>Free and open-source 3D creation suite</p>
                </div>
              </a>

              <a 
                href="https://threejs.org/docs/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="external-resource-card"
              >
                <div className="external-resource-icon">
                  <ExternalLink size={20} />
                </div>
                <div className="external-resource-content">
                  <h4>Three.js Documentation</h4>
                  <p>JavaScript 3D library documentation and examples</p>
                </div>
              </a>

              <a 
                href="https://docs.bitcoin.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="external-resource-card"
              >
                <div className="external-resource-icon">
                  <ExternalLink size={20} />
                </div>
                <div className="external-resource-content">
                  <h4>Bitcoin Developer Docs</h4>
                  <p>Comprehensive Bitcoin development resources</p>
                </div>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;