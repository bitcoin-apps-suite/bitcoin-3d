import React from 'react';
import { TrendingUp, BarChart3, Activity, Users, DollarSign, ArrowUpDown } from 'lucide-react';

export default function ExchangePage() {
  // Mock data for demonstration
  const tradingPairs = [
    { pair: 'BSV/USD', price: '$45.23', change: '+2.4%', volume: '1.2M' },
    { pair: 'TOKEN/BSV', price: '0.001', change: '-0.8%', volume: '245K' },
    { pair: 'TOKEN/USD', price: '$0.045', change: '+5.2%', volume: '890K' },
  ];

  const recentTrades = [
    { time: '14:32:01', pair: 'BSV/USD', type: 'BUY', amount: '10.5', price: '$45.23' },
    { time: '14:31:45', pair: 'TOKEN/BSV', type: 'SELL', amount: '1000', price: '0.001' },
    { time: '14:31:12', pair: 'BSV/USD', type: 'BUY', amount: '5.2', price: '$45.20' },
  ];

  return (
    <div style={{
      padding: '2rem',
      maxWidth: '1400px',
      margin: '0 auto',
      color: '#e8ffe8'
    }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '0.5rem',
          color: '#00ff88'
        }}>
          Exchange
        </h1>
        <p style={{ color: 'rgba(232, 255, 232, 0.7)', fontSize: '1.1rem' }}>
          Trade Bitcoin SV and application tokens with real-time market data
        </p>
      </div>

      {/* Stats Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
          <TrendingUp size={24} style={{ color: '#00ff88', marginBottom: '0.5rem' }} />
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#00ff88' }}>$2.4M</div>
          <div style={{ color: 'rgba(232, 255, 232, 0.7)' }}>24h Volume</div>
        </div>
        
        <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
          <Users size={24} style={{ color: '#00ff88', marginBottom: '0.5rem' }} />
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#00ff88' }}>1,247</div>
          <div style={{ color: 'rgba(232, 255, 232, 0.7)' }}>Active Traders</div>
        </div>
        
        <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
          <Activity size={24} style={{ color: '#00ff88', marginBottom: '0.5rem' }} />
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#00ff88' }}>3</div>
          <div style={{ color: 'rgba(232, 255, 232, 0.7)' }}>Trading Pairs</div>
        </div>
        
        <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
          <DollarSign size={24} style={{ color: '#00ff88', marginBottom: '0.5rem' }} />
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#00ff88' }}>$45.23</div>
          <div style={{ color: 'rgba(232, 255, 232, 0.7)' }}>BSV Price</div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        {/* Trading Pairs */}
        <div className="card" style={{ padding: '1.5rem' }}>
          <h2 style={{ 
            fontSize: '1.25rem', 
            marginBottom: '1rem',
            color: '#00ff88',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <BarChart3 size={20} />
            Trading Pairs
          </h2>
          
          <div style={{ overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(0, 255, 136, 0.2)' }}>
                  <th style={{ textAlign: 'left', padding: '0.5rem', color: 'rgba(232, 255, 232, 0.7)' }}>Pair</th>
                  <th style={{ textAlign: 'right', padding: '0.5rem', color: 'rgba(232, 255, 232, 0.7)' }}>Price</th>
                  <th style={{ textAlign: 'right', padding: '0.5rem', color: 'rgba(232, 255, 232, 0.7)' }}>Change</th>
                  <th style={{ textAlign: 'right', padding: '0.5rem', color: 'rgba(232, 255, 232, 0.7)' }}>Volume</th>
                </tr>
              </thead>
              <tbody>
                {tradingPairs.map((pair, index) => (
                  <tr key={index} style={{ borderBottom: '1px solid rgba(0, 255, 136, 0.1)' }}>
                    <td style={{ padding: '0.75rem 0.5rem', fontWeight: '500' }}>{pair.pair}</td>
                    <td style={{ padding: '0.75rem 0.5rem', textAlign: 'right' }}>{pair.price}</td>
                    <td style={{ 
                      padding: '0.75rem 0.5rem', 
                      textAlign: 'right',
                      color: pair.change.startsWith('+') ? '#00ff88' : '#ff4444'
                    }}>
                      {pair.change}
                    </td>
                    <td style={{ padding: '0.75rem 0.5rem', textAlign: 'right', color: 'rgba(232, 255, 232, 0.7)' }}>
                      {pair.volume}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Trades */}
        <div className="card" style={{ padding: '1.5rem' }}>
          <h2 style={{ 
            fontSize: '1.25rem', 
            marginBottom: '1rem',
            color: '#00ff88',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <ArrowUpDown size={20} />
            Recent Trades
          </h2>
          
          <div style={{ overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(0, 255, 136, 0.2)' }}>
                  <th style={{ textAlign: 'left', padding: '0.5rem', color: 'rgba(232, 255, 232, 0.7)' }}>Time</th>
                  <th style={{ textAlign: 'left', padding: '0.5rem', color: 'rgba(232, 255, 232, 0.7)' }}>Type</th>
                  <th style={{ textAlign: 'right', padding: '0.5rem', color: 'rgba(232, 255, 232, 0.7)' }}>Amount</th>
                  <th style={{ textAlign: 'right', padding: '0.5rem', color: 'rgba(232, 255, 232, 0.7)' }}>Price</th>
                </tr>
              </thead>
              <tbody>
                {recentTrades.map((trade, index) => (
                  <tr key={index} style={{ borderBottom: '1px solid rgba(0, 255, 136, 0.1)' }}>
                    <td style={{ padding: '0.75rem 0.5rem', color: 'rgba(232, 255, 232, 0.7)' }}>{trade.time}</td>
                    <td style={{ 
                      padding: '0.75rem 0.5rem',
                      color: trade.type === 'BUY' ? '#00ff88' : '#ff4444'
                    }}>
                      {trade.type}
                    </td>
                    <td style={{ padding: '0.75rem 0.5rem', textAlign: 'right' }}>{trade.amount}</td>
                    <td style={{ padding: '0.75rem 0.5rem', textAlign: 'right' }}>{trade.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Trading Interface Placeholder */}
      <div className="card" style={{ padding: '2rem', marginTop: '2rem', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#00ff88' }}>
          Trading Interface
        </h3>
        <p style={{ color: 'rgba(232, 255, 232, 0.7)', marginBottom: '1.5rem' }}>
          Implement your trading interface here with order books, chart widgets, and order placement forms.
        </p>
        <button className="btn-primary" style={{ margin: '0 0.5rem' }}>
          Place Buy Order
        </button>
        <button className="btn-primary" style={{ margin: '0 0.5rem' }}>
          Place Sell Order
        </button>
      </div>
    </div>
  );
}