import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import IstanbulPlugin from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
  },
  plugins: [
    react(),
    ...(process.env.USE_BABEL_PLUGIN_ISTANBUL ? [IstanbulPlugin({
      include: 'src/*',
      exclude: ['node_modules', 'test/'],
      extension: [ '.js', '.ts','.tsx' ],
    })] : [])
  ],
});
