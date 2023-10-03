import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

const vitePWA = VitePWA({
  registerType: 'autoUpdate',
  includeAssets: ['images/*.png', '*.svg'],
  outDir: 'dist',
  manifest: {
    name: 'Weather with earthquakes',
    short_name: 'WeatherQuakes',
    description: 'Weather with earthquakes calculations',
    theme_color: '#000000',
    icons: [
      {
        src: 'assets/images/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'assets/images/android-chrome-384x384.png',
        sizes: '384x384',
        type: 'image/png',
      },
    ],
  },
});
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  plugins: [vue(), vitePWA],
});
