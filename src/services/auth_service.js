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
        const data = { email, password };
        // call to login method for login the user.
        return await this.login(data);
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      const user = await this.account.createEmailPasswordSession(
        email,
        password
      );
      return user;
    } catch (error) {
      throw error;
    }
  }

  async getSession() {
    try {
      const user = await this.account.get();
      if (!user) return null;
      return user;
    } catch (error) {
      throw error;
    }
  }

  async logout() {
    try {
      return await this.account.deleteSession("current");
    } catch (error) {
      throw error;
    }
  }

  async updateUserName(username) {
    try {
      const user = await this.account.updateName(username);
      return user.name;
    } catch (error) {
      throw error;
    }
  }
}

const authService = new AuthServices();

export { authService };
