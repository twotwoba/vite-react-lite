/// <reference types="vite/client" />

// env variables tip
interface ImportMetaEnv {
    readonly VITE_OUTPUT_PATH: string
    readonly VITE_ROUTER_BASENAME: string
    readonly VITE_PROXY_URL: string
}
