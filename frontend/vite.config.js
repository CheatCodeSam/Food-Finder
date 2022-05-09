import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import eslintPlugin from "vite-plugin-eslint"
import { VitePWA } from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: true,
        hmr: {
            port: 80,
        },
    },
    plugins: [react(), eslintPlugin(), VitePWA({})],
})
