export const config = {
  appwrite_url: String(import.meta.VITE_APPWRITE_API_URL),
  appwrite_project_id: String(import.meta.VITE_APPWRITE_PROJECT_ID),
  appwrite_database_id: String(import.meta.VITE_APPWRITE_DATABASE_ID),
  appwrite_collection_id: String(import.meta.VITE_APPWRITE_COLLECTION_ID),
  appwrite_bucket_id: String(import.meta.VITE_APPWRITE_BUCKET_ID),
};
