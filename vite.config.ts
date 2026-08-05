import { fileURLToPath } from 'url'
import path from 'path'

import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { tanstackRouter } from '@tanstack/router-plugin/vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
      routesDirectory: 'src/app/routes',
    }),

    react(),

    babel({
      presets: [reactCompilerPreset()],
    }),
  ],

  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
})
