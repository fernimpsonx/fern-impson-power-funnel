#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Files to copy into dist
const filesToCopy = [
  'affirmations.html',
  'links.html',
  'letsgrowtogether.html',
  'thankyou.html',
  '404.html',
  '_redirects'
];

const distDir = path.join(__dirname, 'dist');

// Create dist directory if it doesn't exist
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy each file
filesToCopy.forEach(file => {
  const src = path.join(__dirname, file);
  const dest = path.join(distDir, file);
  
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`✓ Copied ${file} to dist/`);
  } else {
    console.warn(`⚠ File not found: ${file}`);
  }
});

console.log('✓ Build complete: All static files copied to dist/');
