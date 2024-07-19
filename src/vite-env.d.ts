/// <reference types="vite/client" />

import.meta.env.BASE_URL


interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}