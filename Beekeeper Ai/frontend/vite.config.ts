import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // If you're using React

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], // Add any other plugins you may need
  server: {
    port: 3000, // Specify the port for the development server
    open: true, // Automatically open the browser when the server starts
  },
  build: {
    outDir: 'dist', // Specify the output directory for build
  },
  resolve: {
    alias: {
      '@': '/src', // Set up path aliasing for easier imports
    },
  },
});