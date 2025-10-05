"use client";
import React, { useState, useEffect } from 'react';
import './exchange.css';

const ExchangePage: React.FC = () => {
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

  // Mock trading data
  const tradingPairs = [
    { pair: 'B3D/BSV', price: '0.00145', change: '+12.4%', volume: '2.4M', high24h: '0.00152', low24h: '0.00138' },
    { pair: 'B3D/USD', price: '$0.067', change: '+8.2%', volume: '1.8M', high24h: '$0.071', low24h: '$0.062' },
    { pair: 'BSV/USD', price: '$46.32', change: '+2.1%', volume: '845K', high24h: '$47.10', low24h: '$45.20' },
  ];

  const recentTrades = [
    { time: '14:52:18', pair: 'B3D/BSV', side: 'BUY', amount: '25,000', price: '0.00145', total: '36.25 BSV' },
    { time: '14:52:01', pair: 'B3D/USD', side: 'SELL', amount: '18,500', price: '$0.067', total: '$1,239.50' },
    { time: '14:51:45', pair: 'B3D/BSV', side: 'BUY', amount: '50,000', price: '0.00144', total: '72.00 BSV' },
    { time: '14:51:32', pair: 'BSV/USD', side: 'BUY', amount: '12.5', price: '$46.30', total: '$578.75' },
    { time: '14:51:18', pair: 'B3D/USD', side: 'BUY', amount: '75,000', price: '$0.066', total: '$4,950.00' },
  ];

  const orderBook = {
    bids: [
      { price: '0.00144', amount: '125,000', total: '180.00' },
      { price: '0.00143', amount: '89,500', total: '127.99' },
      { price: '0.00142', amount: '156,200', total: '221.80' },
      { price: '0.00141', amount: '203,400', total: '286.79' },
      { price: '0.00140', amount: '95,800', total: '134.12' },
    ],
    asks: [
      { price: '0.00145', amount: '98,600', total: '142.97' },
      { price: '0.00146', amount: '112,300', total: '163.96' },
      { price: '0.00147', amount: '87,400', total: '128.48' },
      { price: '0.00148', amount: '145,200', total: '214.90' },
      { price: '0.00149', amount: '76,800', total: '114.43' },
    ]
  };

  return (
    <div className="App">
      <div className={`exchange-page ${!isMobile && !devSidebarCollapsed ? 'with-sidebar-expanded' : ''} ${!isMobile && devSidebarCollapsed ? 'with-sidebar-collapsed' : ''}`}>
        <div className="exchange-container">
          {/* Hero Section */}
          <section className="exchange-hero">
            <h1><span style={{color: '#ffffff'}}>Bitcoin 3D</span> Exchange</h1>
            <p className="exchange-tagline">
              Trade B3D tokens and 3D assets with professional-grade tools and real-time market data
            </p>
            <div className="exchange-badge">B3D EXCHANGE</div>
          </section>

          {/* Market Overview Stats */}
          <section className="market-stats-section">
            <h2>Market Overview</h2>
            <div className="stats-grid">
              <div className="stat">
                <h3>24h Volume</h3>
                <p className="stat-value">$2.47M</p>
                <p className="stat-label">Total trading volume</p>
              </div>
              <div className="stat">
                <h3>Active Pairs</h3>
                <p className="stat-value">3</p>
                <p className="stat-label">Trading markets</p>
              </div>
              <div className="stat">
                <h3>B3D Price</h3>
                <p className="stat-value">$0.067</p>
                <p className="stat-label">24h +8.2%</p>
              </div>
              <div className="stat">
                <h3>Market Cap</h3>
                <p className="stat-value">$6.7M</p>
                <p className="stat-label">Circulating supply</p>
              </div>
            </div>
          </section>

          {/* Trading Pairs Section */}
          <section className="trading-pairs-section">
            <h2>Trading Pairs</h2>
            <div className="trading-pairs-table">
              <div className="table-header">
                <div className="col pair">Pair</div>
                <div className="col price">Last Price</div>
                <div className="col change">24h Change</div>
                <div className="col high">24h High</div>
                <div className="col low">24h Low</div>
                <div className="col volume">24h Volume</div>
                <div className="col action">Action</div>
              </div>
              {tradingPairs.map((pair, index) => (
                <div key={index} className="table-row">
                  <div className="col pair">
                    <strong>{pair.pair}</strong>
                  </div>
                  <div className="col price">
                    <span className="price-value">{pair.price}</span>
                  </div>
                  <div className={`col change ${pair.change.startsWith('+') ? 'positive' : 'negative'}`}>
                    {pair.change}
                  </div>
                  <div className="col high">
                    <span className="secondary-text">{pair.high24h}</span>
                  </div>
                  <div className="col low">
                    <span className="secondary-text">{pair.low24h}</span>
                  </div>
                  <div className="col volume">
                    <span className="secondary-text">{pair.volume}</span>
                  </div>
                  <div className="col action">
                    <button className="trade-btn">Trade</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Trading Interface Section */}
          <section className="trading-interface-section">
            <h2>Trading Interface</h2>
            <div className="trading-layout">
              {/* Order Book */}
              <div className="order-book-card">
                <h3>Order Book</h3>
                <div className="order-book">
                  <div className="order-book-section asks">
                    <div className="order-book-header">
                      <span>Price (BSV)</span>
                      <span>Amount (B3D)</span>
                      <span>Total (BSV)</span>
                    </div>
                    {orderBook.asks.reverse().map((ask, index) => (
                      <div key={index} className="order-row ask">
                        <span className="price">{ask.price}</span>
                        <span className="amount">{ask.amount}</span>
                        <span className="total">{ask.total}</span>
                      </div>
                    ))}
                  </div>
                  <div className="spread-indicator">
                    <span className="spread">Spread: 0.00001 (0.69%)</span>
                  </div>
                  <div className="order-book-section bids">
                    {orderBook.bids.map((bid, index) => (
                      <div key={index} className="order-row bid">
                        <span className="price">{bid.price}</span>
                        <span className="amount">{bid.amount}</span>
                        <span className="total">{bid.total}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Trade Form */}
              <div className="trade-form-card">
                <h3>Place Order</h3>
                <div className="trade-form">
                  <div className="order-type-tabs">
                    <button className="tab active">Market</button>
                    <button className="tab">Limit</button>
                    <button className="tab">Stop</button>
                  </div>
                  
                  <div className="order-side-tabs">
                    <button className="side-tab buy active">Buy B3D</button>
                    <button className="side-tab sell">Sell B3D</button>
                  </div>

                  <div className="form-group">
                    <label>Price (BSV)</label>
                    <input type="text" placeholder="0.00145" />
                  </div>

                  <div className="form-group">
                    <label>Amount (B3D)</label>
                    <input type="text" placeholder="10,000" />
                  </div>

                  <div className="form-group">
                    <label>Total (BSV)</label>
                    <input type="text" placeholder="14.5" />
                  </div>

                  <div className="percentage-buttons">
                    <button className="pct-btn">25%</button>
                    <button className="pct-btn">50%</button>
                    <button className="pct-btn">75%</button>
                    <button className="pct-btn">100%</button>
                  </div>

                  <button className="place-order-btn buy">
                    Place Buy Order
                  </button>

                  <div className="balance-info">
                    <div className="balance-row">
                      <span>Available BSV:</span>
                      <span>12.45623</span>
                    </div>
                    <div className="balance-row">
                      <span>Available B3D:</span>
                      <span>0</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Trades */}
              <div className="recent-trades-card">
                <h3>Recent Trades</h3>
                <div className="trades-list">
                  <div className="trades-header">
                    <span>Time</span>
                    <span>Pair</span>
                    <span>Side</span>
                    <span>Amount</span>
                    <span>Price</span>
                  </div>
                  {recentTrades.map((trade, index) => (
                    <div key={index} className="trade-row">
                      <span className="time">{trade.time}</span>
                      <span className="pair">{trade.pair}</span>
                      <span className={`side ${trade.side.toLowerCase()}`}>{trade.side}</span>
                      <span className="amount">{trade.amount}</span>
                      <span className="price">{trade.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Exchange Features */}
          <section className="features-section">
            <h2>Exchange Features</h2>
            <div className="features-grid">
              <div className="feature">
                <h3>Advanced Trading</h3>
                <p>Professional trading tools with real-time charts, advanced order types, and market analysis</p>
              </div>
              <div className="feature">
                <h3>Asset Tokenization</h3>
                <p>Convert your 3D models, animations, and designs into tradeable digital assets on BSV blockchain</p>
              </div>
              <div className="feature">
                <h3>Creator Royalties</h3>
                <p>Earn ongoing royalties from secondary sales of your tokenized 3D assets and creative work</p>
              </div>
              <div className="feature">
                <h3>Low Fees</h3>
                <p>Competitive trading fees starting at 0.1% with reduced rates for high-volume traders</p>
              </div>
              <div className="feature">
                <h3>Instant Settlement</h3>
                <p>Near-instant trade settlement powered by BSV blockchain infrastructure</p>
              </div>
              <div className="feature">
                <h3>Portfolio Tools</h3>
                <p>Track your 3D asset portfolio, trading performance, and revenue from creative work</p>
              </div>
            </div>
          </section>

          {/* Asset Marketplace Preview */}
          <section className="marketplace-section">
            <h2>3D Asset Marketplace</h2>
            <div className="marketplace-content">
              <p className="intro">
                Trade tokenized 3D assets, models, animations, and creative work from Bitcoin 3D creators worldwide.
              </p>
              
              <div className="asset-categories">
                <div className="category">
                  <h4>3D Models</h4>
                  <p>Characters, objects, environments</p>
                  <p className="price">Starting at 0.001 BSV</p>
                </div>
                <div className="category featured">
                  <h4>Animations</h4>
                  <p>Motion capture, rigged characters</p>
                  <p className="price">Starting at 0.01 BSV</p>
                </div>
                <div className="category">
                  <h4>Materials</h4>
                  <p>Textures, shaders, materials</p>
                  <p className="price">Starting at 0.0005 BSV</p>
                </div>
              </div>

              <div className="marketplace-cta">
                <button className="cta-btn primary">
                  Explore Marketplace
                </button>
                <button className="cta-btn secondary">
                  List Your Assets
                </button>
              </div>
            </div>
          </section>

          {/* API & Integration */}
          <section className="api-section">
            <h2>API & Integration</h2>
            <div className="api-content">
              <div className="api-info">
                <h3>REST API</h3>
                <ul>
                  <li>Real-time market data and price feeds</li>
                  <li>Order management and trade execution</li>
                  <li>Account balance and transaction history</li>
                  <li>Asset tokenization and metadata APIs</li>
                </ul>
              </div>
              
              <div className="api-info">
                <h3>WebSocket Streams</h3>
                <ul>
                  <li>Live order book updates</li>
                  <li>Real-time trade execution feeds</li>
                  <li>Price ticker and market data streams</li>
                  <li>Account event notifications</li>
                </ul>
              </div>
            </div>
            
            <div className="api-cta">
              <button className="cta-btn secondary">
                View API Documentation
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ExchangePage;