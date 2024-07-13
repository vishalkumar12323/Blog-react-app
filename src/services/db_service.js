import { config } from "../config/config.js";
import { Client, ID, Databases, Storage } from "appwrite";

class DatabaseService {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(config.appwrite_url)
      .setProject(config.appwrite_project_id);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createBlog({ heading, content, coverImage, userId, status, slug }) {
    try {
      return await this.databases.createDocument(
        config.appwrite_database_id,
        config.appwrite_collection_id,
        ID.unique(),
        {
          heading,
          content,
          coverImage,
          slug,
          userId,
          status,
        }
      );
    } catch (error) {
      console.log("Database services :: create document errors", error);
      throw error;
    }
  }

  async updateBlog(id, { heading, content, coverImage, status, slug }) {
    try {
      return await this.databases.updateDocument(
        config.appwrite_database_id,
        config.appwrite_collection_id,
        id,
        {
          heading,
          content,
          slug,
          coverImage,
          status,
        }
      );
    } catch (error) {
      console.log("Database services :: update document errors", error);
      throw error;
    }
  }

  async deleteBlog(id) {
    try {
      await this.databases.deleteDocument(
        config.appwrite_database_id,
        config.appwrite_collection_id,
        id
      );
      return true;
    } catch (error) {
      console.log("Database services :: delete document errors", error);
      return false;
    }
  }

  async getBlog(id) {
    try {
      const blog = await this.databases.getDocument(
        config.appwrite_database_id,
        config.appwrite_collection_id,
        id
      );
      return blog;
    } catch (error) {
      console.log("Database Services :: error fetching blog ", error);
      throw error;
    }
  }

  async getAllBlog() {
    try {
      return await this.databases.listDocuments(
        config.appwrite_database_id,
        config.appwrite_collection_id
      );
    } catch (error) {
      console.log("Database Services :: error fetching all blog ", error);
      throw error;
    }
  }

  // files uploads services

  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        config.appwrite_bucket_id,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Storage Services :: error uploading file ", error);
      throw error;
    }
  }

  filePreviewUrl(fileId) {
    return this.bucket.getFilePreview(config.appwrite_bucket_id, fileId);
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(config.appwrite_bucket_id, fileId);
      return true;
    } catch (error) {
      console.log("Storage Services :: error deleting file ", error);
      return false;
    }
  }
}

const db = new DatabaseService();
export { db };
