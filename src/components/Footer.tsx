import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: '#1a1a1a',
      color: '#888',
      padding: '2rem 0',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      marginTop: 'auto',
      fontSize: '14px',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <div style={{ marginBottom: '1rem' }}>
          <p>© 2025 Your Company Name</p>
          <p>Bitcoin SV Application Template</p>
        </div>
        
        <div style={{ 
          display: 'flex', 
          gap: '2rem', 
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '1rem'
        }}>
          <Link href="/terms" style={{ color: '#888', textDecoration: 'none' }}>
            Terms of Service
          </Link>
          <Link href="/privacy" style={{ color: '#888', textDecoration: 'none' }}>
            Privacy Policy
          </Link>
          <Link href="/license" style={{ color: '#888', textDecoration: 'none' }}>
            License
          </Link>
          <a 
            href="https://github.com/your-github/bitcoin-app" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: '#888', textDecoration: 'none' }}
          >
            GitHub
          </a>
        </div>
        
        <div style={{ fontSize: '12px', opacity: 0.7 }}>
          <p>Licensed under the Open BSV License Version 5</p>
          <p>Built on the Bitcoin SV blockchain</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;