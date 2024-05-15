/* eslint-disable @typescript-eslint/no-unsafe-call */
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import eslintPlugin from 'vite-plugin-eslint'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd()) // add the third params '', expected all variables in env files
    console.log('🌧  ~~~ env:', env)

    return {
        base: env.VITE_OUTPUT_PATH,
        plugins: [
            react(),
            eslintPlugin({
                include: ['src/**/*.ts', 'src/**/*.tsx']
            })
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src')
            }
        },
        build: {
            sourcemap: process.env.NODE_ENV !== 'production',
            rollupOptions: {
                outDir: path.join(__dirname, 'dist', env.VITE_OUTPUT_PATH),
                output: {
                    manualChunks(id) {
                        if (id.includes('node_modules')) {
                            return id.toString().split('node_modules/')[1].split('/')[0].toString()
                        }
                    },

                    chunkFileNames: 'assets/js/[name]-[hash].js',
                    entryFileNames: 'assets/js/[name]-[hash].js',
                    assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
                }
            }
        },
        server: {
            host: '0.0.0.0',
            port: 7788,
            cors: true,
            hmr: true,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            proxy: {
                '/api': {
                    target: 'http://0.0.0.0',
                    changeOrigin: true,
                    ws: false,
                    secure: false
                }
            }
        }
    }
})
