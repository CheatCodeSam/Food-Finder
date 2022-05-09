import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import eslintPlugin from "vite-plugin-eslint"
import { VitePWA } from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: true,
    },
    publicDir: "publicDir",
    plugins: [
        react(),
        eslintPlugin(),
        VitePWA({
            includeAssets: ["apple-touch-icon.png"],
            manifest: {
                name: "Food Finder",
                short_name: "Food Finder",
                description: "Find Local Food!",
                theme_color: "#F6C74E",
                icons: [
                    {
                        src: "pwa-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "pwa-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                    {
                        src: "pwa-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "any maskable",
                    },
                ],
            },
        }),
    ],
})
