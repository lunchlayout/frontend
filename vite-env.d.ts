/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SERVER_HOST: string
    readonly VITE_SERVER_PORT: number
    readonly VITE_SERVER_PROTOCOL: string
    readonly VITE_CLIENT_HOST: string
    readonly VITE_CLIENT_PORT: number
    readonly VITE_CLIENT_PROTOCOL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
