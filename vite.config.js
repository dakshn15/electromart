import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// If deploying to GitHub Pages under a repository named "react-techzonix",
// Vite needs a base path like "/react-techzonix/" so assets resolve correctly.
// You can change this if your repository name differs.
export default defineConfig({
  base: '/react-techzonix/',
  plugins: [
    tailwindcss(),
  ],
})