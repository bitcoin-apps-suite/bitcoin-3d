import React from 'react';
import { DollarSign, TrendingUp, Users, PieChart, Award, Send, Gift } from 'lucide-react';

export default function TokenPage() {
  const tokenStats = {
    name: '$TOKEN',
    symbol: 'TOKEN',
    totalSupply: '1,000,000,000',
    circulating: '650,000,000',
    price: '$0.045',
    marketCap: '$29.25M',
    holders: '1,247',
    change24h: '+5.2%'
  };

  const distribution = [
    { category: 'Public Sale', percentage: 40, amount: '400,000,000', color: '#00ff88' },
    { category: 'Development', percentage: 25, amount: '250,000,000', color: '#00cc66' },
    { category: 'Marketing', percentage: 15, amount: '150,000,000', color: '#009944' },
    { category: 'Team', percentage: 10, amount: '100,000,000', color: '#007722' },
    { category: 'Reserve', percentage: 10, amount: '100,000,000', color: '#005500' }
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
          {tokenStats.name} Token
        </h1>
        <p style={{ color: 'rgba(232, 255, 232, 0.7)', fontSize: '1.1rem' }}>
          Native utility token for your Bitcoin application ecosystem
        </p>
      </div>

      {/* Token Stats Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
          <DollarSign size={24} style={{ color: '#00ff88', marginBottom: '0.5rem' }} />
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#00ff88' }}>
            {tokenStats.price}
          </div>
          <div style={{ color: 'rgba(232, 255, 232, 0.7)' }}>Current Price</div>
          <div style={{ 
            color: tokenStats.change24h.startsWith('+') ? '#00ff88' : '#ff4444',
            fontSize: '0.9rem',
            marginTop: '0.25rem'
          }}>
            {tokenStats.change24h} (24h)
          </div>
        </div>

        <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
          <TrendingUp size={24} style={{ color: '#00ff88', marginBottom: '0.5rem' }} />
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#00ff88' }}>
            {tokenStats.marketCap}
          </div>
          <div style={{ color: 'rgba(232, 255, 232, 0.7)' }}>Market Cap</div>
        </div>

        <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
          <Users size={24} style={{ color: '#00ff88', marginBottom: '0.5rem' }} />
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#00ff88' }}>
            {tokenStats.holders}
          </div>
          <div style={{ color: 'rgba(232, 255, 232, 0.7)' }}>Token Holders</div>
        </div>

        <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
          <PieChart size={24} style={{ color: '#00ff88', marginBottom: '0.5rem' }} />
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#00ff88' }}>
            {tokenStats.circulating}
          </div>
          <div style={{ color: 'rgba(232, 255, 232, 0.7)' }}>Circulating Supply</div>
          <div style={{ fontSize: '0.8rem', color: 'rgba(232, 255, 232, 0.5)', marginTop: '0.25rem' }}>
            of {tokenStats.totalSupply} total
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        {/* Token Distribution */}
        <div className="card" style={{ padding: '1.5rem' }}>
          <h2 style={{ 
            fontSize: '1.25rem', 
            marginBottom: '1rem',
            color: '#00ff88',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <PieChart size={20} />
            Token Distribution
          </h2>
          
          <div style={{ marginBottom: '1rem' }}>
            {distribution.map((item, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.75rem 0',
                borderBottom: index < distribution.length - 1 ? '1px solid rgba(0, 255, 136, 0.1)' : 'none'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{
                    width: '12px',
                    height: '12px',
                    backgroundColor: item.color,
                    borderRadius: '2px'
                  }} />
                  <span>{item.category}</span>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: '600' }}>{item.percentage}%</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(232, 255, 232, 0.7)' }}>
                    {item.amount}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Distribution Bar */}
          <div style={{
            height: '20px',
            borderRadius: '10px',
            overflow: 'hidden',
            display: 'flex',
            marginTop: '1rem'
          }}>
            {distribution.map((item, index) => (
              <div
                key={index}
                style={{
                  width: `${item.percentage}%`,
                  backgroundColor: item.color,
                  height: '100%'
                }}
                title={`${item.category}: ${item.percentage}%`}
              />
            ))}
          </div>
        </div>

        {/* Token Utility */}
        <div className="card" style={{ padding: '1.5rem' }}>
          <h2 style={{ 
            fontSize: '1.25rem', 
            marginBottom: '1rem',
            color: '#00ff88',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <Award size={20} />
            Token Utility
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{
              padding: '1rem',
              border: '1px solid rgba(0, 255, 136, 0.1)',
              borderRadius: '8px'
            }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#00ff88' }}>
                Exchange Fees
              </h3>
              <p style={{ color: 'rgba(232, 255, 232, 0.7)', fontSize: '0.9rem' }}>
                Use tokens to pay reduced trading fees on the exchange
              </p>
            </div>

            <div style={{
              padding: '1rem',
              border: '1px solid rgba(0, 255, 136, 0.1)',
              borderRadius: '8px'
            }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#00ff88' }}>
                Governance Voting
              </h3>
              <p style={{ color: 'rgba(232, 255, 232, 0.7)', fontSize: '0.9rem' }}>
                Participate in protocol governance and feature proposals
              </p>
            </div>

            <div style={{
              padding: '1rem',
              border: '1px solid rgba(0, 255, 136, 0.1)',
              borderRadius: '8px'
            }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#00ff88' }}>
                Staking Rewards
              </h3>
              <p style={{ color: 'rgba(232, 255, 232, 0.7)', fontSize: '0.9rem' }}>
                Stake tokens to earn rewards and support network security
              </p>
            </div>

            <div style={{
              padding: '1rem',
              border: '1px solid rgba(0, 255, 136, 0.1)',
              borderRadius: '8px'
            }}>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: '#00ff88' }}>
                Premium Features
              </h3>
              <p style={{ color: 'rgba(232, 255, 232, 0.7)', fontSize: '0.9rem' }}>
                Access advanced features and analytics tools
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Token Actions */}
      <div className="card" style={{ padding: '2rem', marginTop: '2rem', textAlign: 'center' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#00ff88' }}>
          Token Actions
        </h3>
        <p style={{ color: 'rgba(232, 255, 232, 0.7)', marginBottom: '1.5rem' }}>
          Manage your tokens and participate in the ecosystem
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn-primary" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <Send size={18} />
            Transfer Tokens
          </button>
          <button className="btn-primary" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <Award size={18} />
            Stake Tokens
          </button>
          <button className="btn-primary" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <Gift size={18} />
            Claim Rewards
          </button>
        </div>
      </div>
    </div>
  );
}