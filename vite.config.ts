import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';

let httpsConfig = null;
if (process.env.NODE_ENV === 'production') {
  const key = fs.readFileSync('./cert/localhost.decrypted.key');
  const cert = fs.readFileSync('./cert/localhost.crt');
  
  httpsConfig = {
    key,
    cert
  }
}


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    },
  },
  // optimizeDeps: {
  // exclude: ['js-big-decimal']
  // }
  server: {
    https: httpsConfig
  }
});