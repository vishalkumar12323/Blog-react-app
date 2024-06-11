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

  async createBlog({ title, content, articleimage, userid, status, slug }) {
    try {
      return await this.databases.createDocument(
        config.appwrite_database_id,
        config.appwrite_collection_id,
        slug,
        {
          title,
          content,
          articleimage,
          userid,
          status,
        }
      );
    } catch (error) {
      console.log("Database services :: create document errors", error);
      throw error;
    }
  }

  async updateBlog(slug, { title, content, articleimage, status }) {
    try {
      return await this.databases.updateDocument(
        config.appwrite_database_id,
        config.appwrite_collection_id,
        slug,
        {
          title,
          content,
          articleimage,
          status,
        }
      );
    } catch (error) {
      console.log("Database services :: update document errors", error);
      throw error;
    }
  }

  async deleteBlog(slug) {
    try {
      return await this.databases.deleteDocument(
        config.appwrite_database_id,
        config.appwrite_collection_id,
        slug
      );
    } catch (error) {
      console.log("Database services :: delete document errors", error);
      throw error;
    }
  }
}

const db = new DatabaseService();
export { db };
