# CHILI3D Integration Guide

## Overview
This guide explains how to integrate the self-hosted CHILI3D CAD engine into the Bitcoin 3D project, replacing the iframe with a fully branded Bitcoin 3D CAD application.

## Step 1: Clone CHILI3D Source
```bash
# In a temporary location (external drive or after clearing space)
git clone https://github.com/xiangechen/chili3d.git

# Copy the following directories to bitcoin-3d/src/chili3d/
- packages/
- src/
- public/
- scripts/
```

## Step 2: Update Package.json Dependencies
Add these CHILI3D dependencies to bitcoin-3d/package.json:

```json
{
  "dependencies": {
    "three": "^0.160.0",
    "@types/three": "^0.160.0"
  },
  "devDependencies": {
    "@rspack/cli": "^0.5.0",
    "@rspack/core": "^0.5.0"
  },
  "scripts": {
    "setup:wasm": "node scripts/setup-wasm.js",
    "build:wasm": "npm run setup:wasm && npm run build:chili",
    "build:chili": "rspack build --config chili.rspack.config.js"
  }
}
```

## Step 3: Create Rspack Config for CHILI3D
Create `chili.rspack.config.js`:

```javascript
const path = require('path');

module.exports = {
  entry: './src/chili3d/main.ts',
  output: {
    path: path.resolve(__dirname, 'public/chili3d'),
    filename: 'chili3d.bundle.js',
    publicPath: '/chili3d/'
  },
  resolve: {
    extensions: ['.ts', '.js', '.wasm']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      },
      {
        test: /\.wasm$/,
        type: 'webassembly/async'
      }
    ]
  },
  experiments: {
    asyncWebAssembly: true
  }
};
```

## Step 4: Create Bitcoin 3D Branded Component
Create `src/components/Bitcoin3DEditor.tsx`:

```tsx
'use client';
import { useEffect, useRef } from 'react';

export default function Bitcoin3DEditor() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize CHILI3D with Bitcoin branding
    if (containerRef.current) {
      // Load the built CHILI3D bundle
      import('/chili3d/chili3d.bundle.js').then((chili3d) => {
        chili3d.initialize(containerRef.current, {
          theme: 'bitcoin3d',
          colors: {
            primary: '#ff1493',
            secondary: '#ff69b4',
            background: '#2d0a1f'
          },
          branding: {
            name: 'Bitcoin 3D',
            logo: '/bitcoin-3d-logo.svg'
          }
        });
      });
    }
  }, []);

  return (
    <div 
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        background: '#000',
        position: 'relative'
      }}
    />
  );
}
```

## Step 5: Replace Iframe in Main Page
Update `src/app/page.tsx`:

```tsx
import Bitcoin3DEditor from '@/components/Bitcoin3DEditor';

// Replace the iframe with:
<Bitcoin3DEditor />
```

## Step 6: Custom Branding Files
1. **Logo**: Add Bitcoin 3D logo to `public/bitcoin-3d-logo.svg`
2. **Theme**: Create `src/chili3d/themes/bitcoin3d.css` with hot pink styling
3. **Strings**: Update all text strings in CHILI3D source to "Bitcoin 3D"

## Step 7: Build Process
```bash
# Setup WebAssembly
npm run setup:wasm

# Build CHILI3D bundle
npm run build:chili

# Build Next.js app
npm run build
```

## Benefits
- ✅ Complete Bitcoin 3D branding
- ✅ No iframe limitations
- ✅ Direct integration with exchange/NFT features
- ✅ Custom hot pink theme
- ✅ No cross-origin issues
- ✅ Better performance

## Next Steps
1. Clear disk space or use external drive
2. Clone CHILI3D repository
3. Follow integration steps above
4. Test and customize branding
5. Deploy to Vercel

## License Compliance (AGPL-3.0)
- Source code changes must be made available
- Perfect for open Bitcoin ecosystem
- Commercial use allowed with source disclosure