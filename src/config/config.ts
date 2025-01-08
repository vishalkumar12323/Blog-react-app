/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly env: {
    readonly VITE_APPWRITE_API_URL: string;
    readonly VITE_APPWRITE_PROJECT_ID: string;
    readonly VITE_APPWRITE_DATABASE_ID: string;
    readonly VITE_APPWRITE_COLLECTION_ID: string;
    readonly VITE_APPWRITE_IMAGE_BUCKET_ID: string;
    readonly VITE_TINYMCE_API_KEY: string;
  };
}

export interface ImportMeta {
  readonly env: ImportMetaEnv;
}
export const config = {
  appwrite_url: String(import.meta.env.VITE_APPWRITE_API_URL),
  appwrite_project_id: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwrite_database_id: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwrite_collection_id: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwrite_image_bucket_id: String(
    import.meta.env.VITE_APPWRITE_IMAGE_BUCKET_ID
  ),
  tinymce_api_key: String(import.meta.env.VITE_TINYMCE_API_KEY),
};
