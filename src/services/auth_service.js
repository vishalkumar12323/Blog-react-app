import { config } from "../config/config.js";
import { Client, Account, ID } from "appwrite";

class AuthServices {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwrite_url)
      .setProject(config.appwrite_project_id);
    this.account = new Account(this.client);
  }

  async createAccount({ name, email, password }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        // call to login method for login the user.
        return this.login(email, password);
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      const user = this.account.createEmailPasswordSession(email, password);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async getSession() {
    try {
      const user = await this.account.get();
      return user;
    } catch (error) {
      throw error;
    }
    return null;
  }

  async logout() {
    try {
      return await this.account.deleteSession("current");
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthServices();

export { authService };
