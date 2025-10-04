# Bitcoin App Boilerplate

> A complete Next.js template for building Bitcoin SV applications with exchange functionality, smart contracts, and seamless ecosystem integration.

![Bitcoin App](https://via.placeholder.com/800x400/0d1f0f/00ff88?text=Bitcoin+App+Boilerplate)

## 🚀 Features

- **🏛️ Exchange Framework** - Built-in trading functionality with order books, market data, and transaction management
- **📜 Smart Contracts** - Deploy and manage Bitcoin Script smart contracts with an intuitive interface  
- **🪙 Token Management** - Create, distribute, and manage application tokens with built-in economics
- **🔧 Developer Tools** - Comprehensive developer sidebar with tasks, documentation, and GitHub integration
- **🖥️ Bitcoin OS Compatible** - Seamless integration with the Bitcoin OS ecosystem
- **🎨 Modern UI/UX** - Clean, responsive design with Bitcoin-themed styling
- **🔗 Ecosystem Integration** - Pre-configured links to Bitcoin Apps suite and dock integration

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Core Features](#core-features)
- [Customization](#customization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-github/bitcoin-app.git
   cd bitcoin-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional)
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
bitcoin-app/
├── components/                 # Shared components
│   ├── Dock.tsx               # Bitcoin OS dock integration
│   ├── Taskbar.tsx            # macOS-style menu bar
│   ├── DevSidebar.tsx         # Developer tools sidebar
│   ├── PocBar.tsx             # Proof of concept banner
│   └── ...
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── exchange/          # Trading interface
│   │   ├── contracts/         # Smart contract management
│   │   ├── token/             # Token information & actions
│   │   ├── docs/              # Documentation
│   │   └── ...
│   ├── components/            # App-specific components
│   ├── lib/                   # Utility functions & hooks
│   │   └── utils/
│   │       └── useBitcoinOS.ts # Bitcoin OS integration hook
│   └── ...
├── public/                    # Static assets
└── ...
```

## 🏛️ Core Features

### Exchange Framework

The built-in exchange provides:

- **Trading Pairs Management** - Support for multiple BSV and token pairs
- **Order Book Display** - Real-time buy/sell orders visualization  
- **Trade History** - Complete transaction records
- **Market Data** - Live price feeds and 24h statistics
- **Order Placement** - Buy/sell order interface (template)

**Location**: `/src/app/exchange/page.tsx`

### Smart Contracts

Comprehensive contract management system:

- **Contract Templates** - Pre-built templates for common use cases
- **Contract IDE** - In-browser editor with syntax highlighting
- **Deployment Tools** - One-click deployment to testnet/mainnet
- **Contract Browser** - View and interact with deployed contracts

**Location**: `/src/app/contracts/page.tsx`

### Token Management  

Complete token lifecycle management:

- **Token Statistics** - Supply, holders, market cap tracking
- **Distribution Visualization** - Pie charts and allocation breakdown
- **Utility Documentation** - Token use cases and benefits
- **Token Actions** - Transfer, stake, and reward claiming interfaces

**Location**: `/src/app/token/page.tsx`

### Developer Tools

Integrated development environment:

- **Task Management** - GitHub issue integration
- **Documentation Hub** - Centralized docs and guides  
- **Quick Actions** - Common development shortcuts
- **Status Monitoring** - Real-time app health indicators

**Component**: `DevSidebar.tsx`

## 🎨 Customization

### 1. App Branding

Update your app name and metadata in `/src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your App Name",
  description: "Your app description",
  // ... other metadata
};
```

### 2. Token Configuration

Modify token details in `/src/app/token/page.tsx`:

```javascript
const tokenStats = {
  name: '$YOURTOKEN',
  symbol: 'YOURTOKEN', 
  totalSupply: '1,000,000,000',
  // ... other properties
};
```

### 3. Trading Pairs

Configure available trading pairs in `/src/app/exchange/page.tsx`:

```javascript
const tradingPairs = [
  { pair: 'YOUR_TOKEN/BSV', price: '0.001', change: '+2.4%', volume: '1.2M' },
  // ... add your pairs
];
```

### 4. Theme Colors

Update the color scheme in `/src/app/globals.css`:

```css
:root {
  --color-primary: #your-primary-color;
  --color-accent: #your-accent-color;
  /* ... other variables */
}
```

### 5. GitHub Integration

Update repository links throughout the codebase:

- Replace `https://github.com/your-github/bitcoin-app` with your repository URL
- Update issue tracking links in `DevSidebar.tsx`
- Modify external documentation links

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Configure build settings**:
   - Build Command: `npm run build`
   - Output Directory: `.next`
3. **Set environment variables** in Vercel dashboard
4. **Deploy** - automatic deployments on git push

### Other Platforms

The app is compatible with any platform supporting Next.js:

- **Netlify** - Static export support
- **Railway** - Full-stack deployment  
- **AWS** - Using AWS Amplify
- **Self-hosted** - Docker support available

### Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server  
npm start

# Lint code
npm run lint
```

## 🧩 Bitcoin OS Integration

This boilerplate includes seamless Bitcoin OS integration:

- **Auto-detection** - Automatically adapts UI when running in Bitcoin OS
- **Theme synchronization** - Matches Bitcoin OS theme preferences
- **Message passing** - Communication with OS for notifications and navigation
- **App lifecycle** - Proper initialization and cleanup

The integration is handled by the `useBitcoinOS` hook in `/src/lib/utils/useBitcoinOS.ts`.

## 🔗 Ecosystem Integration

### Bitcoin Apps Dock

Your app automatically appears in the Bitcoin Apps ecosystem dock with:

- **App icon** and branding
- **Current app indicator** when active  
- **Quick navigation** to other Bitcoin apps
- **Status indicators** for connectivity and health

### TaskBar Integration

The taskbar provides:

- **Bitcoin Suite access** - Quick links to all ecosystem apps
- **Menu system** - Organized feature navigation
- **User status** - Authentication and connection indicators
- **Mobile responsiveness** - Adaptive mobile menu

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Code Style

- **TypeScript** for type safety
- **ESLint** for code linting
- **Prettier** for code formatting
- **Conventional Commits** for commit messages

## 📚 Documentation

- **[Getting Started Guide](src/app/docs/page.tsx)** - Complete setup instructions
- **[API Reference](docs/api.md)** - Detailed API documentation  
- **[Component Guide](docs/components.md)** - Reusable component library
- **[Deployment Guide](docs/deployment.md)** - Production deployment instructions

## 🆘 Support

- **[GitHub Issues](https://github.com/your-github/bitcoin-app/issues)** - Bug reports and feature requests
- **[Discussions](https://github.com/your-github/bitcoin-app/discussions)** - Community support and questions
- **[Documentation](src/app/docs)** - Comprehensive guides and tutorials

## 📄 License

This project is licensed under the **Open BSV License Version 5**.

See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[Bitcoin SV](https://bitcoinsv.com/)** - The blockchain powering this application
- **[Next.js](https://nextjs.org/)** - The React framework used
- **[HandCash](https://handcash.io/)** - Wallet integration capabilities
- **[Bitcoin Apps Suite](https://bitcoinapps.store/)** - Ecosystem integration

---

**Ready to build your Bitcoin app?** 🚀

Fork this repository and start building the future of Bitcoin applications!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-github/bitcoin-app)
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/your-template-id)

---

<p align="center">
  <a href="https://github.com/your-github/bitcoin-app">⭐ Star this repository</a> •
  <a href="https://github.com/your-github/bitcoin-app/fork">🍴 Fork this repository</a> •
  <a href="https://github.com/your-github/bitcoin-app/issues">🐛 Report issues</a>
</p>