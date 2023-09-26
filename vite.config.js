import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    base: "/portfolio",
    plugins: [react()],
    build: {
        chunkSizeWarningLimit: 500 * 1024,
        rollupOptions: {
            external: ['lodash-es'],
        },
    },
})