"use client";
import React, { useState, useEffect } from 'react';
import './contracts.css';
import WalletButton from '@/components/WalletButton';
import { useWalletUser } from '@/lib/wallet';

interface Contract {
  id: string;
  githubIssueNumber: number;
  githubIssueUrl: string;
  title: string;
  description: string;
  reward: string;
  estimatedHours: number;
  priority: 'Critical' | 'High' | 'Medium' | 'Low';
  status: 'available' | 'claimed' | 'in_progress' | 'submitted' | 'completed' | 'expired';
  category: '3d-modeling' | 'animation' | 'rendering';
  assignee?: {
    githubUsername: string;
    identityKey?: string;
    claimedAt: string;
    deadline: string;
  };
  pullRequest?: {
    number: number;
    url: string;
    status: 'open' | 'closed' | 'merged';
  };
  skills: string[];
  deliverables: string[];
}

const ContractsPage: React.FC = () => {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedContract, setSelectedContract] = useState<Contract | null>(null);
  const [showClaimModal, setShowClaimModal] = useState(false);
  const walletUser = useWalletUser();
  const [activeTab, setActiveTab] = useState<'3d-modeling' | 'animation' | 'rendering'>('3d-modeling');
  const [devSidebarCollapsed, setDevSidebarCollapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('devSidebarCollapsed');
      return saved === 'true';
    }
    return false;
  });
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);
  
  // Form state for claim modal
  const [claimForm, setClaimForm] = useState({
    githubUsername: '',
        estimatedDays: 7
  });

  useEffect(() => {
    fetchContracts();
    
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


  const fetchContracts = async () => {
    try {
      // Fetch GitHub issues for Bitcoin 3D
      const response = await fetch('https://api.github.com/repos/bitcoin-apps-suite/bitcoin-3d/issues?state=all&per_page=100');
      
      if (!response.ok) {
        console.warn('GitHub API response not OK:', response.status);
        throw new Error(`GitHub API error: ${response.status}`);
      }
      
      const issues = await response.json();
      
      if (issues.message && issues.message.includes('rate limit')) {
        console.warn('GitHub API rate limited');
        throw new Error('Rate limited');
      }
      
      if (!Array.isArray(issues)) {
        throw new Error('Invalid response format');
      }
      
      // Also fetch pull requests to match with issues
      const prsResponse = await fetch('https://api.github.com/repos/bitcoin-apps-suite/bitcoin-3d/pulls?state=all&per_page=100');
      const pullRequests = prsResponse.ok ? await prsResponse.json() : [];
      
      // Map issues to contracts for 3D creators
      const mappedContracts: Contract[] = issues.map((issue: any) => {
        const body = issue.body || '';
        
        // Handle both old and new format - updated for new GitHub issue format
        let priorityMatch = body.match(/\*\*Priority:\*\*\s*(Critical|High|Medium|Low)/i);
        let hoursMatch = body.match(/\*\*Estimated (?:Hours|Effort):\*\*\s*([\d,]+)/i);
        let rewardMatch = body.match(/\*\*Reward:\*\*\s*([\d,]+)\s*\$?B3D/i);
        let categoryMatch = body.match(/\*\*Category:\*\*\s*([^\n]+)/i);
        
        // Also check for the format at the top of issues: **Reward: 8,000,000 $B3D**
        if (!rewardMatch) {
          rewardMatch = body.match(/Reward:\s*([\d,]+)\s*\$?B3D/i);
        }
        
        // Find matching PR if exists
        const matchingPR = pullRequests.find((pr: any) => 
          pr.body && pr.body.includes(`#${issue.number}`)
        );
        
        // Extract description
        let description = '';
        const descMatch = body.match(/##\s*(?:📋\s*)?Description\s*\n([\s\S]*?)(?=##|$)/i);
        if (descMatch) {
          description = descMatch[1].trim().split('\n\n')[0];
        } else {
          description = body.split('## Requirements')[0].replace('## Description', '').trim();
        }
        
        // Parse requirements section for skills
        let skills: string[] = ['Blender', '3D Modeling'];
        const requirementsMatch = body.match(/##\s*(?:🎯\s*)?Requirements\s*\n([\s\S]*?)(?=##|$)/i);
        if (requirementsMatch) {
          const requirements = requirementsMatch[1];
          if (requirements.includes('Animation')) skills.push('Animation');
          if (requirements.includes('Rigging')) skills.push('Rigging');
          if (requirements.includes('Texturing')) skills.push('Texturing');
          if (requirements.includes('Lighting')) skills.push('Lighting');
          if (requirements.includes('Rendering')) skills.push('Rendering');
          if (requirements.includes('Maya')) skills.push('Maya');
          if (requirements.includes('Cinema 4D')) skills.push('Cinema 4D');
          if (requirements.includes('Houdini')) skills.push('Houdini');
          if (requirements.includes('ZBrush')) skills.push('ZBrush');
          if (requirements.includes('Substance')) skills.push('Substance Painter');
        }
        
        // Handle bounty format from older issues
        if (!rewardMatch) {
          const bountyMatch = body.match(/([\d.]+)%\s*(?:of\s+tokens|Bounty)/i);
          if (bountyMatch) {
            const percentage = parseFloat(bountyMatch[1]);
            const tokens = Math.round(percentage * 10000000);
            rewardMatch = ['', tokens.toLocaleString()];
          }
        }
        
        // Extract deliverables
        const deliverables: string[] = [];
        const criteriaMatch = body.match(/##\s*(?:✅\s*)?Acceptance Criteria\s*\n([\s\S]*?)(?=##|$)/i);
        if (criteriaMatch) {
          const criteria = criteriaMatch[1];
          const items = criteria.match(/- \[ \] .*/g) || [];
          items.forEach((item: string) => {
            deliverables.push(item.replace('- [ ] ', '').trim());
          });
        }
        
        // Determine contract status
        let status: Contract['status'] = 'available';
        if (issue.state === 'closed') {
          status = 'completed';
        } else if (matchingPR) {
          if (matchingPR.state === 'closed' && matchingPR.merged_at) {
            status = 'completed';
          } else if (matchingPR.state === 'open') {
            status = 'submitted';
          }
        } else if (issue.assignee) {
          status = 'in_progress';
        }
        
        // Determine category based on title, labels, and content for 3D work
        let category: '3d-modeling' | 'animation' | 'rendering' = '3d-modeling';
        const titleLower = issue.title.toLowerCase();
        const bodyLower = body.toLowerCase();
        
        // Check for animation-related keywords
        if (titleLower.includes('animation') || titleLower.includes('animate') || 
            titleLower.includes('rigging') || titleLower.includes('keyframe') ||
            titleLower.includes('motion') || titleLower.includes('sequence') ||
            titleLower.includes('timeline') ||
            bodyLower.includes('animation') || bodyLower.includes('character rigging') ||
            bodyLower.includes('motion graphics') || bodyLower.includes('keyframe animation') ||
            bodyLower.includes('timeline editor') || bodyLower.includes('animationmixer')) {
          category = 'animation';
        }
        
        // Check for rendering-related keywords
        if (titleLower.includes('render') || titleLower.includes('lighting') || 
            titleLower.includes('material') || titleLower.includes('shader') ||
            titleLower.includes('texture') || titleLower.includes('pbr') ||
            titleLower.includes('optimization') || titleLower.includes('performance') ||
            bodyLower.includes('rendering') || bodyLower.includes('post-processing') ||
            bodyLower.includes('lighting setup') || bodyLower.includes('material creation') ||
            bodyLower.includes('pbr material') || bodyLower.includes('physically based rendering') ||
            bodyLower.includes('performance optimization') || bodyLower.includes('lod system')) {
          category = 'rendering';
        }
        
        // Check labels if available
        if (issue.labels && Array.isArray(issue.labels)) {
          const labelNames = issue.labels.map((label: any) => 
            typeof label === 'string' ? label : label.name
          ).join(' ').toLowerCase();
          
          if (labelNames.includes('animation') || labelNames.includes('motion') ||
              labelNames.includes('rigging') || labelNames.includes('character')) {
            category = 'animation';
          } else if (labelNames.includes('render') || labelNames.includes('lighting') ||
                     labelNames.includes('material') || labelNames.includes('shader')) {
            category = 'rendering';
          }
        }
        
        // Get contract from localStorage if it exists
        const storedContract = localStorage.getItem(`contract-${issue.number}`);
        const contractData = storedContract ? JSON.parse(storedContract) : null;
        
        return {
          id: `contract-${issue.number}`,
          githubIssueNumber: issue.number,
          githubIssueUrl: issue.html_url,
          title: issue.title,
          description: description,
          reward: rewardMatch ? `${rewardMatch[1]} $B3D` : '1,000,000 $B3D',
          estimatedHours: hoursMatch ? parseInt(hoursMatch[1].replace(/,/g, '')) : 8,
          priority: (priorityMatch ? priorityMatch[1] : 'Medium') as Contract['priority'],
          category: category,
          status,
          assignee: contractData?.assignee || (issue.assignee ? {
            githubUsername: issue.assignee.login,
            claimedAt: issue.assigned_at || new Date().toISOString(),
            deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
          } : undefined),
          pullRequest: matchingPR ? {
            number: matchingPR.number,
            url: matchingPR.html_url,
            status: matchingPR.state
          } : undefined,
          skills: Array.from(new Set(skills)), // Remove duplicates
          deliverables: deliverables.length > 0 ? deliverables.slice(0, 8) : ['See issue for details']
        };
      });
      
      setContracts(mappedContracts);
      setLoading(false);
    } catch (error) {
      console.error('Failed to fetch contracts:', error);
      
      // Show a message directing users to GitHub
      setContracts([
        {
          id: 'github-redirect',
          githubIssueNumber: 0,
          githubIssueUrl: 'https://github.com/bitcoin-apps-suite/bitcoin-3d/issues',
          title: '📋 View Contracts on GitHub',
          description: 'Unable to load contracts from GitHub API. This may be due to rate limiting or network issues. Click below to view all available contracts directly on GitHub.',
          priority: 'Low' as const,
          reward: 'Various',
          status: 'available' as const,
          category: '3d-modeling' as const,
          estimatedHours: 0,
          skills: ['Visit GitHub'],
          deliverables: ['View and claim contracts on GitHub', 'Create new issues', 'Discuss bounties']
        }
      ]);
      setLoading(false);
    }
  };

  const handleClaimContract = async () => {
    if (!selectedContract || !claimForm.githubUsername || !walletUser) {
      alert('Sign in with bWalletX and enter your GitHub username');
      return;
    }
    
    // Calculate deadline
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + claimForm.estimatedDays);
    
    // Store contract claim locally (in production, this would go to backend)
    const contractClaim = {
      assignee: {
        githubUsername: claimForm.githubUsername,
        identityKey: walletUser.identityKey,
        claimedAt: new Date().toISOString(),
        deadline: deadline.toISOString()
      }
    };
    
    localStorage.setItem(`contract-${selectedContract.githubIssueNumber}`, JSON.stringify(contractClaim));
    
    // Update local state
    const updatedContracts = contracts.map(c => 
      c.id === selectedContract.id 
        ? { ...c, status: 'claimed' as Contract['status'], assignee: contractClaim.assignee }
        : c
    );
    setContracts(updatedContracts);
    
    // Close modals
    setShowClaimModal(false);
    setSelectedContract(null);
    
    alert(`Claim saved on this device. Comment on the GitHub issue to make it official. You have ${claimForm.estimatedDays} days.`);
  };

  const getStatusColor = (status: Contract['status']) => {
    switch (status) {
      case 'available': return '#ff1493';
      case 'claimed': return '#f59e0b';
      case 'in_progress': return '#3b82f6';
      case 'submitted': return '#8b5cf6';
      case 'completed': return '#6b7280';
      case 'expired': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const getTimeRemaining = (deadline: string) => {
    const now = new Date();
    const end = new Date(deadline);
    const diff = end.getTime() - now.getTime();
    
    if (diff <= 0) return 'Expired';
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    if (days > 0) return `${days} days remaining`;
    if (hours > 0) return `${hours} hours remaining`;
    return 'Less than 1 hour';
  };

  return (
    <div className="App">
      <div className={`contracts-page ${!isMobile && !devSidebarCollapsed ? 'with-sidebar-expanded' : ''} ${!isMobile && devSidebarCollapsed ? 'with-sidebar-collapsed' : ''}`}>
        <div className="contracts-container">
          {/* Hero Section */}
          <section className="contracts-hero">
            <h1>Bitcoin 3D <span style={{color: '#ffffff'}}>Contracts</span></h1>
            <p className="contracts-tagline">
              {activeTab === '3d-modeling' 
                ? 'Create 3D models, deliver assets, earn B3D tokens'
                : activeTab === 'animation'
                ? 'Animate characters and objects, bring designs to life, get paid in B3D'
                : 'Render stunning visuals, create materials, earn B3D rewards'}
            </p>
            <div className="contracts-badge">3D CONTRACTS</div>
          </section>

          {/* Tab Navigation */}
          <section className="contracts-tabs-section">
            <div className="contracts-tabs">
              <button 
                className={activeTab === '3d-modeling' ? 'active' : ''}
                onClick={() => setActiveTab('3d-modeling')}
              >
                3D Modeling Contracts
              </button>
              <button 
                className={activeTab === 'animation' ? 'active' : ''}
                onClick={() => setActiveTab('animation')}
              >
                Animation Contracts
              </button>
              <button 
                className={activeTab === 'rendering' ? 'active' : ''}
                onClick={() => setActiveTab('rendering')}
              >
                Rendering Contracts
              </button>
            </div>
          </section>

      <div className="contracts-stats">
        <div className="stat-card">
          <span className="stat-value">{contracts.filter(c => c.category === activeTab && c.status === 'available').length}</span>
          <span className="stat-label">Available</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{contracts.filter(c => c.category === activeTab && (c.status === 'in_progress' || c.status === 'claimed')).length}</span>
          <span className="stat-label">In Progress</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{contracts.filter(c => c.category === activeTab && c.status === 'submitted').length}</span>
          <span className="stat-label">Under Review</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">{contracts.filter(c => c.category === activeTab && c.status === 'completed').length}</span>
          <span className="stat-label">Completed</span>
        </div>
      </div>

      {loading ? (
        <div className="contracts-loading">Loading contracts...</div>
      ) : (
        <div className="contracts-grid">
          {contracts.filter(c => c.category === activeTab).map(contract => (
            <div 
              key={contract.id} 
              className={`contract-card ${contract.status !== 'available' ? 'contract-unavailable' : ''}`}
              onClick={() => contract.status === 'available' && setSelectedContract(contract)}
            >
              <div className="contract-header">
                <h3>{contract.title}</h3>
                <span 
                  className="contract-status"
                  style={{ background: getStatusColor(contract.status) }}
                >
                  {contract.status.replace('_', ' ').toUpperCase()}
                </span>
              </div>
              
              <p className="contract-description">{contract.description}</p>
              
              <div className="contract-meta">
                <span className="contract-priority priority-{contract.priority.toLowerCase()}">
                  {contract.priority}
                </span>
                <span className="contract-reward">{contract.reward}</span>
                <span className="contract-time">{contract.estimatedHours}h</span>
              </div>

              {contract.assignee && (
                <div className="contract-assignee">
                  <span className="assignee-label">Assigned to:</span>
                  <span className="assignee-name">@{contract.assignee.githubUsername}</span>
                  {contract.status === 'in_progress' && (
                    <span className="assignee-deadline">
                      {getTimeRemaining(contract.assignee.deadline)}
                    </span>
                  )}
                </div>
              )}

              {contract.pullRequest && (
                <div className="contract-pr">
                  <a 
                    href={contract.pullRequest.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    PR #{contract.pullRequest.number} ({contract.pullRequest.status})
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Contract Details Modal */}
      {selectedContract && (
        <div className="contract-modal" onClick={() => setSelectedContract(null)}>
          <div className="contract-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedContract(null)}>×</button>
            
            <h2>{selectedContract.title}</h2>
            
            <div className="contract-modal-meta">
              <span className="priority-badge priority-{selectedContract.priority.toLowerCase()}">
                {selectedContract.priority} Priority
              </span>
              <span className="reward-badge">{selectedContract.reward}</span>
              <span className="time-badge">{selectedContract.estimatedHours} hours</span>
            </div>

            <div className="contract-modal-section">
              <h3>Description</h3>
              <p>{selectedContract.description}</p>
            </div>

            <div className="contract-modal-section">
              <h3>Required Skills</h3>
              <div className="skills-list">
                {selectedContract.skills.map(skill => (
                  <span key={skill} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>

            <div className="contract-modal-section">
              <h3>Deliverables</h3>
              <ul className="deliverables-list">
                {selectedContract.deliverables.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="contract-modal-section">
              <h3>{walletUser ? 'Claim this contract' : 'Sign in to Claim'}</h3>
              <div className="auth-options">
                {walletUser ? (
                  <button className="auth-button" onClick={() => setShowClaimModal(true)}>Claim as {walletUser.displayName}</button>
                ) : (
                  <WalletButton />
                )}
              </div>
            </div>

            <div className="contract-actions">
              <a 
                href={selectedContract.githubIssueUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="github-button"
              >
                View on GitHub →
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Claim Contract Modal */}
      {showClaimModal && (
        <div className="claim-modal" onClick={() => setShowClaimModal(false)}>
          <div className="claim-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setShowClaimModal(false)}>×</button>
            
            <h2>Claim Contract</h2>
            <p>By claiming this contract, you agree to deliver the work within the specified timeframe.</p>
            
            <form onSubmit={(e) => { e.preventDefault(); handleClaimContract(); }}>
              <div className="form-group">
                <label>GitHub Username *</label>
                <input
                  type="text"
                  value={claimForm.githubUsername}
                  onChange={(e) => setClaimForm({...claimForm, githubUsername: e.target.value})}
                  placeholder="your-github-username"
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Paid to your wallet</label>
                <input type="text" value={walletUser ? walletUser.identityKey : 'Sign in with bWalletX first'} readOnly />
              </div>
              
              <div className="form-group">
                <label>Estimated Days to Complete *</label>
                <select
                  value={claimForm.estimatedDays}
                  onChange={(e) => setClaimForm({...claimForm, estimatedDays: parseInt(e.target.value)})}
                >
                  <option value={3}>3 days</option>
                  <option value={5}>5 days</option>
                  <option value={7}>7 days (default)</option>
                  <option value={14}>14 days</option>
                  <option value={30}>30 days</option>
                </select>
              </div>
              
              <div className="claim-terms">
                <h4>Terms & Conditions:</h4>
                <ul>
                  <li>You must submit work within the agreed timeframe</li>
                  <li>Assets must meet all acceptance criteria</li>
                  <li>Token rewards are distributed upon approval</li>
                  <li>Inactive contracts may be reassigned after deadline</li>
                </ul>
              </div>
              
              <button type="submit" className="submit-claim-button">
                Accept & Claim Contract
              </button>
            </form>
          </div>
        </div>
      )}
        </div>
      </div>
    </div>
  );
};

export default ContractsPage;