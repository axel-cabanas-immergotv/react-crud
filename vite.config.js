import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.jsx'),
        // Entradas individuales para componentes principales
        'components/AffiliateMembers': resolve(__dirname, 'src/components/AffiliateMembers/index.jsx'),
        'components/DynamicModal': resolve(__dirname, 'src/components/DynamicModal/index.jsx'),
        'components/DynamicPage': resolve(__dirname, 'src/components/DynamicPage/index.jsx'),
        'components/EntityTable': resolve(__dirname, 'src/components/EntityTable/index.jsx'),
        'components/Navbar': resolve(__dirname, 'src/components/Navbar/index.jsx'),
        'components/Sidebar': resolve(__dirname, 'src/components/Sidebar/index.jsx'),
      },
      name: 'ReactCrud',
      fileName: (format, entryName) => {
        const ext = format === 'es' ? 'mjs' : 'cjs';
        return entryName === 'index' ? `index.${ext}` : `${entryName}.${ext}`;
      },
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-router-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-router-dom': 'ReactRouterDOM'
        }
      }
    },
    sourcemap: true,
    minify: false
  }
});