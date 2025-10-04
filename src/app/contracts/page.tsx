"use client";
import React from 'react';
import { FileText, Code, Play, Eye, Plus, Settings, Zap, Shield } from 'lucide-react';

export default function ContractsPage() {
  // Mock contract data
  const contracts = [
    {
      id: 1,
      name: 'Token Distribution',
      type: 'ERC-20 Style',
      status: 'Deployed',
      address: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
      lastActivity: '2 hours ago'
    },
    {
      id: 2,
      name: 'Escrow Service',
      type: 'Multi-Sig',
      status: 'Draft',
      address: null,
      lastActivity: '1 day ago'
    },
    {
      id: 3,
      name: 'Voting System',
      type: 'Governance',
      status: 'Testing',
      address: '3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy',
      lastActivity: '5 minutes ago'
    }
  ];

  const templates = [
    {
      name: 'Token Contract',
      description: 'Create fungible tokens with customizable properties',
      icon: <Zap size={24} />
    },
    {
      name: 'Escrow Contract',
      description: 'Secure multi-party transactions with release conditions',
      icon: <Shield size={24} />
    },
    {
      name: 'Voting Contract',
      description: 'Decentralized governance and decision making',
      icon: <FileText size={24} />
    },
    {
      name: 'Custom Contract',
      description: 'Start from scratch with a blank template',
      icon: <Code size={24} />
    }
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
          Smart Contracts
        </h1>
        <p style={{ color: 'rgba(232, 255, 232, 0.7)', fontSize: '1.1rem' }}>
          Deploy and manage Bitcoin Script smart contracts with an intuitive interface
        </p>
      </div>

      {/* Actions */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '2rem',
        flexWrap: 'wrap'
      }}>
        <button className="btn-primary" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <Plus size={18} />
          New Contract
        </button>
        <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <Eye size={18} />
          Browse Templates
        </button>
        <button style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <Settings size={18} />
          Settings
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        {/* Contract List */}
        <div className="card" style={{ padding: '1.5rem' }}>
          <h2 style={{ 
            fontSize: '1.25rem', 
            marginBottom: '1rem',
            color: '#00ff88',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <FileText size={20} />
            Your Contracts
          </h2>
          
          <div style={{ overflow: 'hidden' }}>
            {contracts.map((contract) => (
              <div key={contract.id} style={{
                padding: '1rem',
                border: '1px solid rgba(0, 255, 136, 0.1)',
                borderRadius: '8px',
                marginBottom: '1rem',
                transition: 'border-color 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 255, 136, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 255, 136, 0.1)';
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '600' }}>{contract.name}</h3>
                  <span style={{
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: '500',
                    backgroundColor: contract.status === 'Deployed' ? 'rgba(0, 255, 136, 0.2)' : 
                                   contract.status === 'Testing' ? 'rgba(255, 165, 0, 0.2)' : 
                                   'rgba(255, 255, 255, 0.1)',
                    color: contract.status === 'Deployed' ? '#00ff88' : 
                           contract.status === 'Testing' ? '#ffa500' : 
                           'rgba(232, 255, 232, 0.7)'
                  }}>
                    {contract.status}
                  </span>
                </div>
                
                <p style={{ color: 'rgba(232, 255, 232, 0.7)', marginBottom: '0.5rem' }}>
                  Type: {contract.type}
                </p>
                
                {contract.address && (
                  <p style={{ 
                    color: 'rgba(232, 255, 232, 0.6)', 
                    fontSize: '0.9rem',
                    fontFamily: 'monospace',
                    marginBottom: '0.5rem'
                  }}>
                    Address: {contract.address}
                  </p>
                )}
                
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  marginTop: '1rem'
                }}>
                  <span style={{ color: 'rgba(232, 255, 232, 0.6)', fontSize: '0.9rem' }}>
                    Last activity: {contract.lastActivity}
                  </span>
                  
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }}>
                      <Eye size={14} style={{ marginRight: '0.25rem' }} />
                      View
                    </button>
                    <button style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }}>
                      <Code size={14} style={{ marginRight: '0.25rem' }} />
                      Edit
                    </button>
                    {contract.status === 'Draft' && (
                      <button className="btn-primary" style={{ padding: '0.25rem 0.5rem', fontSize: '0.8rem' }}>
                        <Play size={14} style={{ marginRight: '0.25rem' }} />
                        Deploy
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contract Templates */}
        <div className="card" style={{ padding: '1.5rem' }}>
          <h2 style={{ 
            fontSize: '1.25rem', 
            marginBottom: '1rem',
            color: '#00ff88',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <Code size={20} />
            Templates
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {templates.map((template, index) => (
              <div key={index} style={{
                padding: '1rem',
                border: '1px solid rgba(0, 255, 136, 0.1)',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 255, 136, 0.3)';
                e.currentTarget.style.backgroundColor = 'rgba(0, 255, 136, 0.05)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 255, 136, 0.1)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}>
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.75rem',
                  marginBottom: '0.5rem'
                }}>
                  <div style={{ color: '#00ff88' }}>
                    {template.icon}
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: '600' }}>
                    {template.name}
                  </h3>
                </div>
                <p style={{ 
                  color: 'rgba(232, 255, 232, 0.7)', 
                  fontSize: '0.9rem',
                  lineHeight: '1.4'
                }}>
                  {template.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contract IDE Placeholder */}
      <div className="card" style={{ padding: '2rem', marginTop: '2rem' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#00ff88' }}>
          Contract IDE
        </h3>
        <div style={{
          background: 'rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(0, 255, 136, 0.2)',
          borderRadius: '8px',
          padding: '1.5rem',
          fontFamily: 'monospace',
          fontSize: '0.9rem',
          color: 'rgba(232, 255, 232, 0.8)'
        }}>
          <div style={{ color: '#00ff88', marginBottom: '1rem' }}>
            // Bitcoin Script Smart Contract Template
          </div>
          <div style={{ marginBottom: '0.5rem' }}>
            <span style={{ color: '#ff6b6b' }}>OP_DUP</span> <span style={{ color: '#4ecdc4' }}>OP_HASH160</span> <span style={{ color: '#ffe66d' }}>&lt;pubKeyHash&gt;</span>
          </div>
          <div style={{ marginBottom: '0.5rem' }}>
            <span style={{ color: '#4ecdc4' }}>OP_EQUALVERIFY</span> <span style={{ color: '#4ecdc4' }}>OP_CHECKSIG</span>
          </div>
          <div style={{ color: 'rgba(232, 255, 232, 0.5)', marginTop: '1rem' }}>
            // Implement your contract logic here...
          </div>
        </div>
        <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem' }}>
          <button className="btn-primary">
            Compile Contract
          </button>
          <button>
            Test Contract
          </button>
          <button>
            Deploy to Testnet
          </button>
        </div>
      </div>
    </div>
  );
}