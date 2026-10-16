'use client'
import { WalletClient } from '@bsv/sdk'
import { useEffect, useState } from 'react'

/**
 * BRC-100 wallet connection (bWalletX first; any BRC-100 wallet works).
 * Auto mode: XDM when framed inside bWalletX, otherwise window.CWI, otherwise a local wallet on localhost (3321).
 * We only ever hold the user's PUBLIC identity key. No keys, no custody, no server-side balances.
 */
export interface WalletUser {
  identityKey: string
  displayName: string
}

const STORAGE_KEY = 'bwx_wallet_user'
let client: WalletClient | null = null

export function getWallet(): WalletClient {
  if (!client) client = new WalletClient('auto', typeof window !== 'undefined' ? window.location.host : undefined)
  return client
}

export function shortKey(k: string): string {
  return `${k.slice(0, 6)}…${k.slice(-4)}`
}

export async function signIn(): Promise<WalletUser> {
  const { publicKey } = await getWallet().getPublicKey({ identityKey: true })
  const user: WalletUser = { identityKey: publicKey, displayName: shortKey(publicKey) }
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(user)) } catch { /* private mode */ }
  window.dispatchEvent(new Event('bwx-wallet-change'))
  return user
}

export function signOut(): void {
  try { localStorage.removeItem(STORAGE_KEY) } catch { /* ignore */ }
  window.dispatchEvent(new Event('bwx-wallet-change'))
}

export function getStoredUser(): WalletUser | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as WalletUser) : null
  } catch {
    return null
  }
}

/** Current signed-in wallet user (null until the user connects their wallet). */
export function useWalletUser(): WalletUser | null {
  const [user, setUser] = useState<WalletUser | null>(null)
  useEffect(() => {
    const sync = () => setUser(getStoredUser())
    sync()
    window.addEventListener('bwx-wallet-change', sync)
    window.addEventListener('storage', sync)
    return () => {
      window.removeEventListener('bwx-wallet-change', sync)
      window.removeEventListener('storage', sync)
    }
  }, [])
  return user
}
