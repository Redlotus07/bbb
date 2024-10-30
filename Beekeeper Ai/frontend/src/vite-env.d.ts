/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_API_URL: string; // Define your API URL
  VITE_OTHER_ENV_VARIABLE: string; // Add other environment variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}