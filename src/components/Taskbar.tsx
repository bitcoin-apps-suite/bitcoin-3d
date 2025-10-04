'use client'

import { useState, useRef, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

interface DropdownItem {
  label?: string
  action?: () => void
  href?: string
  divider?: boolean
  shortcut?: string
  target?: string
}

interface DropdownMenu {
  label: string
  items: DropdownItem[]
}

export default function Taskbar() {
  const session = null // Removed NextAuth for now
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [showBitcoinSuite, setShowBitcoinSuite] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleOpenExchange = () => {
    window.location.href = '/exchange'
  }

  const handleOpenContracts = () => {
    window.location.href = '/contracts'
  }

  const menus: DropdownMenu[] = [
    {
      label: 'Bitcoin 3D',
      items: [
        { label: 'Home', shortcut: '⌘H', action: () => window.location.href = '/' },
        { divider: true },
        { label: 'About Bitcoin 3D', action: () => alert(
          'Bitcoin 3D v1.0.0\n\n' +
          'Bitcoin SV Application Template\n\n' +
          '© 2025 Your Company Name\n\n' +
          'Built with:\n' +
          '• Next.js 15.5\n' +
          '• Bitcoin SV (BSV) Blockchain\n' +
          '• HandCash Connect Integration\n' +
          '• Exchange Framework\n' +
          '• Smart Contracts\n\n' +
          'License: Open BSV License Version 5\n\n' +
          'Customize this boilerplate for your Bitcoin app!'
        ) },
        { divider: true },
        { label: 'Preferences...', shortcut: '⌘,', action: () => console.log('Preferences') },
        { divider: true },
        { label: 'Sign In', shortcut: '⌘Q', action: () => console.log('Sign in clicked') }
      ]
    },
    {
      label: 'File',
      items: [
        { label: 'New Model', shortcut: '⌘N', action: () => console.log('New Model') },
        { label: 'Open...', shortcut: '⌘O', action: () => console.log('Open') },
        { label: 'Save', shortcut: '⌘S', action: () => console.log('Save') },
        { label: 'Save As...', shortcut: '⇧⌘S', action: () => console.log('Save As') },
        { divider: true },
        { label: 'Import...', action: () => console.log('Import') },
        { label: 'Export...', action: () => console.log('Export') }
      ]
    },
    {
      label: 'Edit',
      items: [
        { label: 'Undo', shortcut: '⌘Z', action: () => console.log('Undo') },
        { label: 'Redo', shortcut: '⇧⌘Z', action: () => console.log('Redo') },
        { divider: true },
        { label: 'Cut', shortcut: '⌘X', action: () => console.log('Cut') },
        { label: 'Copy', shortcut: '⌘C', action: () => console.log('Copy') },
        { label: 'Paste', shortcut: '⌘V', action: () => console.log('Paste') },
        { divider: true },
        { label: 'Select All', shortcut: '⌘A', action: () => console.log('Select All') }
      ]
    },
    {
      label: 'View',
      items: [
        { label: 'Zoom In', shortcut: '⌘+', action: () => console.log('Zoom In') },
        { label: 'Zoom Out', shortcut: '⌘-', action: () => console.log('Zoom Out') },
        { label: 'Fit to Window', shortcut: '⌘0', action: () => console.log('Fit to Window') },
        { divider: true },
        { label: 'Wireframe', action: () => console.log('Wireframe') },
        { label: 'Solid', action: () => console.log('Solid') },
        { label: 'Textured', action: () => console.log('Textured') }
      ]
    },
    {
      label: '3D',
      items: [
        { label: 'Rotate', shortcut: 'R', action: () => console.log('Rotate') },
        { label: 'Scale', shortcut: 'S', action: () => console.log('Scale') },
        { label: 'Move', shortcut: 'G', action: () => console.log('Move') },
        { divider: true },
        { label: 'Add Cube', action: () => console.log('Add Cube') },
        { label: 'Add Sphere', action: () => console.log('Add Sphere') },
        { label: 'Add Cylinder', action: () => console.log('Add Cylinder') }
      ]
    },
    {
      label: 'Model',
      items: [
        { label: 'Extrude', action: () => console.log('Extrude') },
        { label: 'Inset', action: () => console.log('Inset') },
        { label: 'Bevel', action: () => console.log('Bevel') },
        { divider: true },
        { label: 'Mirror', action: () => console.log('Mirror') },
        { label: 'Array', action: () => console.log('Array') },
        { label: 'Subdivide', action: () => console.log('Subdivide') }
      ]
    },
    {
      label: 'Tools',
      items: [
        { label: 'Measure', action: () => console.log('Measure') },
        { label: 'Snap Settings', action: () => console.log('Snap Settings') },
        { label: 'Grid Settings', action: () => console.log('Grid Settings') },
        { divider: true },
        { label: 'Preferences', action: () => console.log('Preferences') }
      ]
    },
    {
      label: 'Share',
      items: [
        { label: 'Export as STL', action: () => console.log('Export STL') },
        { label: 'Export as OBJ', action: () => console.log('Export OBJ') },
        { label: 'Export as FBX', action: () => console.log('Export FBX') },
        { divider: true },
        { label: 'Mint as NFT', action: () => window.location.href = '/exchange' },
        { label: 'Share Link', action: () => console.log('Share Link') }
      ]
    },
    {
      label: 'Window',
      items: [
        { label: 'Minimize', shortcut: '⌘M', action: () => console.log('Minimize') },
        { label: 'Full Screen', shortcut: '⌘F', action: () => window.open('https://chili3d.pages.dev', '_blank') },
        { divider: true },
        { label: 'Reset Layout', action: () => console.log('Reset Layout') }
      ]
    },
    {
      label: 'Exchange',
      items: [
        { label: 'Open Exchange', shortcut: '⌘E', action: handleOpenExchange },
        { label: 'Trading Pairs', action: () => console.log('Trading pairs') },
        { divider: true },
        { label: 'Order Book', action: () => console.log('Order book') },
        { label: 'Trade History', action: () => console.log('Trade history') },
        { divider: true },
        { label: 'Market Data', action: () => console.log('Market data') }
      ]
    },
    {
      label: 'Contracts',
      items: [
        { label: 'Deploy Contract', shortcut: '⌘D', action: handleOpenContracts },
        { label: 'Browse Contracts', action: () => console.log('Browse contracts') },
        { divider: true },
        { label: 'Smart Contract IDE', action: () => console.log('Contract IDE') },
        { label: 'Contract Templates', action: () => console.log('Contract templates') }
      ]
    },
    {
      label: 'Token',
      items: [
        { label: 'Token Info', action: () => window.location.href = '/token' },
        { label: 'Mint Tokens', action: () => console.log('Mint tokens') },
        { divider: true },
        { label: 'Distribution', action: () => console.log('Token distribution') },
        { label: 'Staking', action: () => console.log('Token staking') }
      ]
    },
    {
      label: 'Developer',
      items: [
        { label: 'API Documentation', href: '/api/docs', target: '_blank' },
        { label: 'SDK Documentation', href: 'https://docs.bsvblockchain.org', target: '_blank' },
        { divider: true },
        { label: 'GitHub Repository', href: 'https://github.com/your-github/bitcoin-app', target: '_blank' },
        { label: 'Report Issue', href: 'https://github.com/your-github/bitcoin-app/issues', target: '_blank' }
      ]
    },
    {
      label: 'Help',
      items: [
        { label: 'Getting Started', shortcut: '⌘?', action: () => alert(
          'Bitcoin 3D Help\n\n' +
          'Quick Start:\n' +
          '1. Fork this repository\n' +
          '2. Customize the app name and branding\n' +
          '3. Configure your exchange parameters\n' +
          '4. Deploy your smart contracts\n' +
          '5. Launch your Bitcoin app!\n\n' +
          'Features:\n' +
          '• Exchange framework\n' +
          '• Smart contract integration\n' +
          '• Token management\n' +
          '• Bitcoin OS compatibility\n' +
          '• Developer tools\n\n' +
          'Support:\n' +
          '• Documentation: /docs\n' +
          '• GitHub Issues: github.com/your-github/bitcoin-app/issues'
        ) },
        { label: 'Documentation', href: '/docs', target: '_blank' },
        { divider: true },
        { label: 'Contact Support', href: 'https://github.com/your-github/bitcoin-app/issues', target: '_blank' }
      ]
    }
  ]

  const bitcoinApps = [
    { name: 'Bitcoin Auth', color: '#ef4444', url: '#' },
    { name: 'Bitcoin Chat', color: '#ff6500', url: '#' },
    { name: 'Bitcoin Domains', color: '#eab308', url: '#' },
    { name: 'Bitcoin Draw', color: '#10b981', url: '#' },
    { name: 'Bitcoin Drive', color: '#22c55e', url: 'https://bitcoin-drive.vercel.app' },
    { name: 'Bitcoin Email', color: '#06b6d4', url: '#' },
    { name: 'Bitcoin Exchange', color: '#3b82f6', url: '/exchange' },
    { name: 'Bitcoin Music', color: '#8b5cf6', url: '#' },
    { name: 'Bitcoin Paint', color: '#a855f7', url: '#' },
    { name: 'Bitcoin Pics', color: '#ec4899', url: '#' },
    { name: 'Bitcoin Registry', color: '#f43f5e', url: '#' },
    { name: 'Bitcoin Shares', color: '#f43f5e', url: '#' },
    { name: 'Bitcoin Spreadsheets', color: '#3b82f6', url: 'https://bitcoin-spreadsheet.vercel.app' },
    { name: 'Bitcoin Video', color: '#65a30d', url: '#' },
    { name: 'Bitcoin Wallet', color: '#f59e0b', url: '#' },
    { name: 'Bitcoin Writer', color: '#ff9500', url: 'https://bitcoin-writer.vercel.app' },
    { name: 'Bitcoin 3D', color: '#ff1493', url: '/', current: true }
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null)
        setShowBitcoinSuite(false)
        setShowMobileMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div 
      ref={menuRef}
      className="taskbar"
      style={{
        position: 'fixed',
        top: '40px',
        left: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '28px',
        background: 'linear-gradient(180deg, rgba(60, 60, 60, 0.95) 0%, rgba(40, 40, 40, 0.95) 100%)',
        borderBottom: '1px solid rgba(255, 20, 147, 0.2)',
        fontSize: '13px',
        fontWeight: '500',
        color: '#ffffff',
        userSelect: 'none',
        zIndex: 10000
      }}
    >
      {/* Left side - Bitcoin Logo and menus */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Mobile Bitcoin Logo (no dropdown) */}
        <div className="sm:hidden" style={{ 
          padding: '0 12px',
          fontSize: '18px',
          fontWeight: 'bold',
          color: '#ff1493'
        }}>
          ₿
        </div>

        {/* Bitcoin Logo container - Desktop only with dropdown */}
        <div className="hidden sm:block" style={{ position: 'relative' }}>
          <button
            onClick={() => {
              setShowBitcoinSuite(!showBitcoinSuite)
              setActiveMenu(null)
            }}
            onDoubleClick={() => {
              window.location.href = '/'
            }}
            style={{
              padding: '0 12px',
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#ff1493',
              display: 'flex',
              alignItems: 'center',
              height: '28px',
              background: showBitcoinSuite ? 'rgba(0, 255, 136, 0.1)' : 'transparent',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 0.15s ease'
            }}
            title="Bitcoin Suite Apps (double-click for home)"
          >
            ₿
          </button>

          {/* Bitcoin Suite Dropdown */}
          {showBitcoinSuite && (
            <div style={{
              position: 'absolute',
              top: '28px',
              left: 0,
              minWidth: '220px',
              background: '#1a1a1a',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '8px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.8)',
              padding: '8px 0',
              zIndex: 1000
            }}>
            <div style={{
              padding: '8px 16px',
              fontSize: '12px',
              color: '#ff1493',
              fontWeight: '600',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              marginBottom: '4px'
            }}>
              Bitcoin 3D
            </div>
            
            {bitcoinApps.map((app) => (
              <a
                key={app.name}
                href={app.url}
                target={app.url.startsWith('http') ? '_blank' : undefined}
                rel={app.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '6px 16px',
                  color: app.current ? '#ffffff' : '#ffffff',
                  background: 'transparent',
                  textDecoration: 'none',
                  fontSize: '13px',
                  transition: 'background 0.15s ease',
                  cursor: 'pointer',
                  fontWeight: app.current ? '600' : '400'
                }}
                onClick={() => setShowBitcoinSuite(false)}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <span 
                  style={{ 
                    color: app.color,
                    marginRight: '12px',
                    fontSize: '16px',
                    fontWeight: 'bold'
                  }}
                >
                  ₿
                </span>
                <span>
                  {app.name}
                  {app.current && <span style={{ marginLeft: '8px', fontSize: '11px', opacity: 0.6 }}>(current)</span>}
                </span>
              </a>
            ))}
          </div>
        )}
        </div>

        {/* Menu Items - Hidden on mobile */}
        <div className="hidden sm:flex" style={{ alignItems: 'center', height: '100%' }}>
        {menus.map((menu) => (
          <div key={menu.label} style={{ position: 'relative' }}>
            <button
              onClick={() => {
                setActiveMenu(activeMenu === menu.label ? null : menu.label)
                setShowBitcoinSuite(false)
              }}
              onMouseEnter={() => activeMenu && setActiveMenu(menu.label)}
              style={{
                padding: '0 12px',
                height: '24px',
                background: activeMenu === menu.label ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                border: 'none',
                color: '#ffffff',
                fontSize: '13px',
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'background 0.15s ease'
              }}
            >
              {menu.label}
            </button>

            {/* Dropdown Menu */}
            {activeMenu === menu.label && (
              <div style={{
                position: 'absolute',
                top: '28px',
                left: 0,
                minWidth: '200px',
                background: '#1a1a1a',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '8px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.8)',
                padding: '4px 0',
                zIndex: 9999,
                overflow: 'hidden'
              }}>
                {menu.items.map((item, index) => (
                  item.divider ? (
                    <div 
                      key={index}
                      style={{
                        height: '1px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        margin: '4px 0'
                      }}
                    />
                  ) : item.href ? (
                    <a
                      key={index}
                      href={item.href}
                      target={item.target || '_blank'}
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '4px 12px',
                        color: '#ffffff',
                        textDecoration: 'none',
                        fontSize: '13px',
                        cursor: 'pointer',
                        transition: 'background 0.15s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(0, 255, 136, 0.2)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent'
                      }}
                    >
                      <span>{item.label}</span>
                      {item.shortcut && (
                        <span style={{ opacity: 0.6, fontSize: '12px' }}>{item.shortcut}</span>
                      )}
                    </a>
                  ) : (
                    <button
                      key={index}
                      onClick={() => {
                        item.action?.()
                        setActiveMenu(null)
                      }}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        padding: '4px 12px',
                        background: 'transparent',
                        border: 'none',
                        color: '#ffffff',
                        fontSize: '13px',
                        cursor: 'pointer',
                        fontFamily: 'inherit',
                        textAlign: 'left',
                        transition: 'background 0.15s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(0, 255, 136, 0.2)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent'
                      }}
                    >
                      <span>{item.label}</span>
                      {item.shortcut && (
                        <span style={{ opacity: 0.6, fontSize: '12px' }}>{item.shortcut}</span>
                      )}
                    </button>
                  )
                ))}
              </div>
            )}
          </div>
        ))}
        </div>
      </div>

      {/* Mobile: Center title */}
      <button 
        className="sm:hidden flex-1 text-center" 
        onClick={() => {
          window.location.href = '/'
        }}
        style={{ 
          fontSize: '14px',
          fontWeight: '600',
          color: '#ff1493',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          height: '28px'
        }}
        title="Return to home"
      >
        Bitcoin 3D
      </button>

      {/* Mobile Menu Button */}
      <button
        className="block sm:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        style={{
          padding: '0 12px',
          height: '28px',
          background: 'transparent',
          border: 'none',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer'
        }}
      >
        {showMobileMenu ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Right side - Status items */}
      <div className="hidden sm:flex" style={{
        marginLeft: 'auto',
        alignItems: 'center',
        gap: '16px',
        paddingRight: '16px',
        fontSize: '12px',
        color: 'rgba(255, 255, 255, 0.8)'
      }}>
        <button
          onClick={() => window.location.href = '/token'}
          style={{
            background: 'linear-gradient(90deg, #ff1493, #ff69b4)',
            color: '#000',
            border: 'none',
            padding: '4px 12px',
            borderRadius: '100px',
            fontSize: '11px',
            fontWeight: '500',
            letterSpacing: '0.5px',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-1px)'
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 255, 136, 0.3)'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = 'none'
          }}
          title="View Token Information"
        >
          $TOKEN
        </button>
        {session ? (
          <>
            <span>{session.user?.email || 'Connected'}</span>
            <span style={{ color: '#00ff88' }}>●</span>
          </>
        ) : (
          <>
            <span>Not Connected</span>
            <span style={{ color: '#ff4444', opacity: 0.6 }}>●</span>
          </>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {showMobileMenu && (
        <div 
          className="sm:hidden"
          style={{
            position: 'fixed',
            top: '28px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(16px)',
            zIndex: 9999,
            overflowY: 'auto'
          }}
        >
          <div style={{ padding: '16px' }}>
            {/* User Status */}
            <div style={{
              padding: '12px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '8px',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              {session ? (
                <>
                  <span style={{ color: '#ffffff', fontSize: '14px' }}>{session.user?.email || 'Connected'}</span>
                  <span style={{ color: '#00ff88' }}>●</span>
                </>
              ) : (
                <>
                  <span style={{ color: '#ffffff', fontSize: '14px' }}>Not Connected</span>
                  <span style={{ color: '#ff4444', opacity: 0.6 }}>●</span>
                </>
              )}
            </div>

            {/* Menu Sections */}
            {menus.map((menu) => (
              <div key={menu.label} style={{
                marginBottom: '16px',
                background: 'rgba(255, 255, 255, 0.03)',
                borderRadius: '8px',
                overflow: 'hidden'
              }}>
                <div style={{
                  padding: '12px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#ffffff',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                  {menu.label}
                </div>
                <div style={{ padding: '8px' }}>
                  {menu.items.map((item, index) => (
                    item.divider ? (
                      <div 
                        key={index}
                        style={{
                          height: '1px',
                          background: 'rgba(255, 255, 255, 0.1)',
                          margin: '8px 0'
                        }}
                      />
                    ) : item.href ? (
                      <a
                        key={index}
                        href={item.href}
                        target={item.target || '_blank'}
                        rel="noopener noreferrer"
                        onClick={() => setShowMobileMenu(false)}
                        style={{
                          display: 'block',
                          padding: '10px 12px',
                          color: '#ffffff',
                          textDecoration: 'none',
                          fontSize: '13px',
                          borderRadius: '4px',
                          transition: 'background 0.15s ease'
                        }}
                        onTouchStart={(e) => {
                          e.currentTarget.style.background = 'rgba(0, 255, 136, 0.2)'
                        }}
                        onTouchEnd={(e) => {
                          e.currentTarget.style.background = 'transparent'
                        }}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <button
                        key={index}
                        onClick={() => {
                          item.action?.()
                          setShowMobileMenu(false)
                        }}
                        style={{
                          display: 'block',
                          width: '100%',
                          textAlign: 'left',
                          padding: '10px 12px',
                          background: 'transparent',
                          border: 'none',
                          color: '#ffffff',
                          fontSize: '13px',
                          cursor: 'pointer',
                          borderRadius: '4px',
                          transition: 'background 0.15s ease'
                        }}
                        onTouchStart={(e) => {
                          e.currentTarget.style.background = 'rgba(0, 255, 136, 0.2)'
                        }}
                        onTouchEnd={(e) => {
                          e.currentTarget.style.background = 'transparent'
                        }}
                      >
                        {item.label}
                      </button>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}