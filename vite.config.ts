import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: './',
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          oferta: path.resolve(__dirname, 'oferta.html'),
          policy: path.resolve(__dirname, 'policy.html'),
        },
      },
    },
    plugins: [],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
