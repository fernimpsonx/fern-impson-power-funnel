#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Files to copy into dist
const filesToCopy = [
  'index.html',
  'affirmations.html',
  'links.html',
  'letsgrowtogether.html',
  'thankyou.html',
  '404.html',
  '_redirects'
];

const distDir = path.join(__dirname, 'dist');

// Remove dist directory if it exists
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
  console.log('✓ Cleaned dist directory');
}

// Create fresh dist directory
fs.mkdirSync(distDir, { recursive: true });
console.log('✓ Created dist directory');

// Copy each file
let copiedCount = 0;
filesToCopy.forEach(file => {
  const src = path.join(__dirname, file);
  const dest = path.join(distDir, file);
  
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`✓ Copied ${file} to dist/`);
    copiedCount++;
  } else {
    console.warn(`⚠ File not found: ${file}`);
  }
});

console.log(`\n✓ Build complete: ${copiedCount} files copied to dist/`);
console.log('✓ Ready for Netlify deployment');
