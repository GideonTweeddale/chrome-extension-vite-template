// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: ["index.html", "./src/background.ts"],
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
})

