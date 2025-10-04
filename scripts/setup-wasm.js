// Setup WebAssembly files for Bitcoin 3D CAD
const fs = require('fs');
const path = require('path');

console.log('Setting up WebAssembly for Bitcoin 3D...');

// Create public/chili3d directory if it doesn't exist
const publicDir = path.join(__dirname, '..', 'public', 'chili3d');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
  console.log('Created public/chili3d directory');
}

// Copy WASM files from CHILI3D source
const wasmSourceDir = path.join(__dirname, '..', 'src', 'chili3d', 'public');
if (fs.existsSync(wasmSourceDir)) {
  console.log('Copying WASM files from CHILI3D source...');
  
  const copyRecursive = (src, dest) => {
    if (fs.statSync(src).isDirectory()) {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }
      fs.readdirSync(src).forEach(file => {
        copyRecursive(path.join(src, file), path.join(dest, file));
      });
    } else {
      fs.copyFileSync(src, dest);
    }
  };
  
  try {
    copyRecursive(wasmSourceDir, publicDir);
    console.log('WebAssembly setup complete!');
  } catch (error) {
    console.error('Error copying WASM files:', error);
  }
} else {
  console.log('CHILI3D public directory not found, skipping WASM setup');
}