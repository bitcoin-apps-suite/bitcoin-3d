'use client'
import { useState } from 'react'
import { signIn, signOut, useWalletUser } from '@/lib/wallet'

/** Sign in with bWalletX (any BRC-100 wallet). Shows the short identity key once connected. */
export default function WalletButton({ floating = false }: { floating?: boolean }) {
  const user = useWalletUser()
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')

  const connect = async () => {
    setBusy(true)
    setError('')
    try {
      await signIn()
    } catch (e) {
      setError(e instanceof Error && e.message ? 'No BRC-100 wallet found. Open this in bWalletX.' : 'Sign-in failed')
    } finally {
      setBusy(false)
    }
  }

  const style: React.CSSProperties = {
    background: user ? 'rgba(255,255,255,0.08)' : '#e6b325',
    color: user ? '#fff' : '#000',
    border: 'none',
    borderRadius: 999,
    padding: '4px 12px',
    fontSize: 12,
    fontWeight: 600,
    cursor: 'pointer',
    ...(floating ? { position: 'fixed', top: 8, right: 8, zIndex: 10000, padding: '8px 14px', fontSize: 13 } : {}),
  }

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
      {user ? (
        <button style={style} onClick={signOut} title={`Signed in: ${user.identityKey}. Click to sign out.`}>
          ● {user.displayName}
        </button>
      ) : (
        <button style={style} onClick={connect} disabled={busy}>
          {busy ? 'Connecting…' : 'Sign in with bWalletX'}
        </button>
      )}
      {error && !floating && <span style={{ color: '#ff8080', fontSize: 11 }}>{error}</span>}
      {error && floating && (
        <span style={{ position: 'fixed', top: 48, right: 8, zIndex: 10000, color: '#ff8080', fontSize: 12, background: '#000', padding: '4px 8px', borderRadius: 6 }}>{error}</span>
      )}
    </span>
  )
}
