import { useEffect, useState } from 'react'

// Vite's history fallback returns HTML for missing files; never offer that as a resume.
export function useVerifiedAsset(assetPath: string) {
  const [verified, setVerified] = useState('')
  useEffect(() => {
    if (!assetPath || !assetPath.startsWith('/') || assetPath.startsWith('//')) return
    const controller = new AbortController()
    void fetch(assetPath, { method: 'HEAD', signal: controller.signal })
      .then(response => {
        const type = response.headers.get('content-type') ?? ''
        if (response.ok && type && !type.includes('text/html')) setVerified(assetPath)
      })
      .catch(() => { /* A missing or unavailable asset is intentionally hidden. */ })
    return () => controller.abort()
  }, [assetPath])
  return verified === assetPath ? verified : ''
}
