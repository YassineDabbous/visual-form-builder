import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' 
import path from "path"; 
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      insertTypesEntry: true, // Emits a single index.d.ts file for the whole library.
    })
  ],
  build: {
    // This is the part that configures the library build
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'), // Your library's entry point
      name: 'JsonFormBuilder', // The global variable name in UMD builds
      fileName: (format) => `index.${format === 'es' ? 'js' : 'umd.cjs'}`,
    },
    // This is crucial for not bundling react into your library
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        // Force all non-JS assets (like CSS) to have a predictable name.
        assetFileNames: (assetInfo) => {
          // Check if the file is a CSS file
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'style.css';
          }
          // Keep the original name for other assets (like fonts, images, etc.)
          return assetInfo.name || 'assets/[name]-[hash][extname]';
        }, 
      },
    },
  },
})
