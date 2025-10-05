"use client";
import React, { useState, useEffect } from 'react';
import './token.css';

const TokenPage: React.FC = () => {
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

  return (
    <div className="App">
      <div className={`token-page ${!isMobile && !devSidebarCollapsed ? 'with-sidebar-expanded' : ''} ${!isMobile && devSidebarCollapsed ? 'with-sidebar-collapsed' : ''}`}>
        <div className="token-container">
          {/* Hero Section */}
          <section className="token-hero">
            <h1><span style={{color: '#ffffff'}}>The</span> Bitcoin 3D <span style={{color: '#ffffff'}}>Token</span></h1>
            <p className="token-tagline">
              3D creativity meets sustainable economics on the BSV blockchain
            </p>
            <div className="token-badge">$B3D</div>
          </section>

          {/* Philosophy Section */}
          <section className="philosophy-section">
            <h2>Our 3D Creator Philosophy</h2>
            <div className="philosophy-content">
              <p>
                Bitcoin 3D is an <strong>open-source project</strong> licensed under MIT and BSV licenses. 
                Our mission is to empower 3D creators, animators, and designers with tools that enable 
                them to monetize their creativity directly on the blockchain.
              </p>
              <p>
                The $B3D token represents our approach to creating a sustainable economic model that 
                rewards 3D creators while fostering innovation in digital art, animation, and design.
              </p>
              <div className="philosophy-points">
                <div className="point">
                  <h3>Creator First</h3>
                  <p>MIT & BSV Licensed, creator-friendly, collaborative</p>
                </div>
                <div className="point">
                  <h3>Community Driven</h3>
                  <p>3D artists earn tokens through quality creative work</p>
                </div>
                <div className="point">
                  <h3>Value Aligned</h3>
                  <p>Success shared with those who create and build</p>
                </div>
              </div>
            </div>
          </section>

          {/* Token Model Section */}
          <section className="token-model-section">
            <h2>The $B3D Token Model</h2>
            <div className="model-card">
              <h3>How It Works</h3>
              <ul>
                <li>
                  <strong>Token Distribution:</strong> Tokens are allocated at our discretion to 3D creators, 
                  animators, and developers who contribute meaningful work that gets merged into production
                </li>
                <li>
                  <strong>Revenue Sharing:</strong> Bitcoin 3D Corporation intends to distribute 
                  dividends to token holders from marketplace fees, exchange commissions, and subscription revenues
                </li>
                <li>
                  <strong>Creation = Ownership:</strong> Build 3D assets, receive tokens, share in platform success
                </li>
                <li>
                  <strong>Transparent Allocation:</strong> All token grants are recorded on-chain via BSV blockchain
                </li>
              </ul>
            </div>

            <div className="model-card warning">
              <h3>Important Notices</h3>
              <ul>
                <li>
                  <strong>No Guarantees:</strong> Token allocation is entirely discretionary with no promises 
                  of distribution for any particular creative contribution
                </li>
                <li>
                  <strong>Not Employment:</strong> Contributing and receiving tokens does not constitute 
                  an employment relationship or contract
                </li>
                <li>
                  <strong>Not a Public Offering:</strong> This is not a solicitation for investment or 
                  capital raising. $B3D tokens are rewards for contribution, not investment instruments
                </li>
                <li>
                  <strong>Future Equity:</strong> Bitcoin 3D Corporation may incorporate and offer 
                  regulated equity shares separately from the token system
                </li>
              </ul>
            </div>
          </section>

          {/* Business Model Section */}
          <section className="business-section">
            <h2>Bitcoin 3D Corporation</h2>
            <div className="business-content">
              <p className="intro">
                Our vision is to create the world's premier platform for 3D creators through a hybrid model that 
                preserves creative freedom while generating sustainable value.
              </p>

              <div className="business-model">
                <h3>Revenue Model</h3>
                <div className="revenue-streams">
                  <div className="stream">
                    <h4>Free Tier</h4>
                    <p>Self-hosted, open-source CAD</p>
                    <p className="price">$0/month</p>
                  </div>
                  <div className="stream featured">
                    <h4>Pro Tier</h4>
                    <p>Cloud hosting, premium features</p>
                    <p className="price">$49/month</p>
                  </div>
                  <div className="stream">
                    <h4>Studio</h4>
                    <p>Team collaboration, enterprise tools</p>
                    <p className="price">$199/month</p>
                  </div>
                </div>
                
                <h3 style={{marginTop: '40px'}}>Marketplace Revenue</h3>
                <div className="revenue-streams">
                  <div className="stream">
                    <h4>Asset Sales</h4>
                    <p>3D models, animations, materials</p>
                    <p className="price">5% fee</p>
                  </div>
                  <div className="stream featured">
                    <h4>NFT Trading</h4>
                    <p>Collectible 3D art and designs</p>
                    <p className="price">2.5% fee</p>
                  </div>
                  <div className="stream">
                    <h4>Custom Work</h4>
                    <p>Commissioned 3D projects</p>
                    <p className="price">10% fee</p>
                  </div>
                </div>
              </div>

              <div className="value-flow">
                <h3>Value Flow</h3>
                <div className="flow-diagram">
                  <div className="flow-item">
                    <span>Subscriptions + Marketplace fees</span>
                    <span className="arrow">→</span>
                  </div>
                  <div className="flow-item">
                    <span>Revenue to Bitcoin 3D Corp</span>
                    <span className="arrow">→</span>
                  </div>
                  <div className="flow-item">
                    <span>Dividends to $B3D holders</span>
                    <span className="arrow">→</span>
                  </div>
                  <div className="flow-item">
                    <span>3D creators rewarded for building</span>
                  </div>
                </div>
                <p style={{textAlign: 'center', marginTop: '20px', fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)'}}>
                  The Bitcoin 3D Exchange enables creators to tokenize, sell shares, and trade their 3D work,
                  generating platform fees that contribute to the ecosystem's sustainability.
                </p>
              </div>
            </div>
          </section>

          {/* How to Contribute Section */}
          <section className="contribute-section">
            <h2>How to Earn $B3D Tokens</h2>
            <div className="contribute-steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Create & Build</h3>
                <p>Design 3D models, animations, or contribute code to the platform</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Submit Work</h3>
                <p>Share your 3D assets or code via GitHub pull requests</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Get Approved</h3>
                <p>Quality work that adds value gets merged into the platform</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Receive Tokens</h3>
                <p>Tokens allocated based on creative impact and technical quality</p>
              </div>
            </div>

            <div className="contribution-examples">
              <h3>What We Value</h3>
              <ul>
                <li>✅ High-quality 3D models and assets</li>
                <li>✅ Character rigging and animations</li>
                <li>✅ Material libraries and shaders</li>
                <li>✅ CAD tool improvements</li>
                <li>✅ UI/UX enhancements</li>
                <li>✅ Bug fixes and optimizations</li>
              </ul>
            </div>
          </section>

          {/* Token Stats Section */}
          <section className="stats-section">
            <h2>Token Statistics</h2>
            <div className="stats-grid">
              <div className="stat">
                <h3>Total Supply</h3>
                <p className="stat-value">100,000,000</p>
                <p className="stat-label">$B3D tokens</p>
              </div>
              <div className="stat">
                <h3>Distributed</h3>
                <p className="stat-value">0</p>
                <p className="stat-label">Tokens allocated</p>
              </div>
              <div className="stat">
                <h3>Contributors</h3>
                <p className="stat-value">1</p>
                <p className="stat-label">Active creators</p>
              </div>
              <div className="stat">
                <h3>Network</h3>
                <p className="stat-value">BSV</p>
                <p className="stat-label">Blockchain</p>
              </div>
            </div>
          </section>

          {/* 3D Creator Economics */}
          <section className="creator-economics-section">
            <h2>3D Creator Economics</h2>
            <div className="economics-content">
              <p className="intro">
                Our tokenomics are designed specifically for 3D creators, animators, and digital artists 
                working in the Bitcoin ecosystem.
              </p>

              <div className="economics-breakdown">
                <div className="breakdown-item">
                  <h3>Asset Tokenization</h3>
                  <p>Convert your 3D models, animations, and designs into tradeable NFTs on BSV blockchain</p>
                  <div className="economics-stats">
                    <span>Creator keeps 90% of sales</span>
                    <span>Platform fee: 10%</span>
                  </div>
                </div>

                <div className="breakdown-item">
                  <h3>Royalty System</h3>
                  <p>Earn ongoing royalties from secondary sales of your tokenized creative work</p>
                  <div className="economics-stats">
                    <span>Default royalty: 5%</span>
                    <span>Customizable: 0-15%</span>
                  </div>
                </div>

                <div className="breakdown-item">
                  <h3>Collaboration Rewards</h3>
                  <p>Team up with other creators and share token rewards from joint projects</p>
                  <div className="economics-stats">
                    <span>Smart contract splits</span>
                    <span>Automatic distribution</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Legal Section */}
          <section className="legal-section">
            <h2>Legal & Regulatory Notice</h2>
            <div className="legal-content">
              <p>
                <strong>Revenue Sharing Model:</strong> The $B3D token is designed to enable revenue 
                sharing with 3D creators through dividend distributions. Token holders may receive dividends 
                based on platform revenues from marketplace sales, subscriptions and exchange fees.
              </p>
              <p>
                <strong>Trading & Liquidity:</strong> The $B3D token is intended to be freely tradable 
                on the Bitcoin 3D Exchange and associated platforms. We encourage an active secondary 
                market to provide liquidity and price discovery for creators' work.
              </p>
              <p>
                <strong>$B3DSHARE Fundraising:</strong> Bitcoin 3D Corporation intends to issue $B3DSHARE 
                tokens as a fundraising mechanism. These tokens will represent participation in the platform's 
                success and may be offered through appropriate channels.
              </p>
              <p>
                By participating in the token ecosystem, you acknowledge that token allocation is discretionary, 
                regulatory frameworks may evolve, and you should conduct your own due diligence regarding 
                tax and legal implications in your jurisdiction.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="cta-section">
            <h2>Ready to Create the Future?</h2>
            <div className="cta-buttons">
              <a 
                href="https://github.com/bitcoin-apps-suite/bitcoin-3d" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cta-btn primary"
              >
                <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                View on GitHub
              </a>
              <a 
                href="/docs" 
                className="cta-btn secondary"
              >
                Read Creator Docs
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TokenPage;