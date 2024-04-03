import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import externalize from 'vite-plugin-externalize-dependencies'
// import Unimport from 'unimport/unplugin'
// import Components from 'unplugin-vue-components/vite'
// import createExternal from 'vite-plugin-external';
// https://vitejs.dev/config/
export default defineConfig({
  // 'root': 'src',
  plugins: [
    vue(),
    externalize({
      externals: [/^socket:.*/],
    }),
  ],
  build: {
    outDir: 'dist',
    'target': 'esnext',
    rollupOptions: {
      external: [/^socket:.*/],
    },
  },
})
