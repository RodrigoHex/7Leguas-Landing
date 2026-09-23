/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly REFERENCE_ASSETS_MODE?: 'placeholder' | 'licensed';
  readonly SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
