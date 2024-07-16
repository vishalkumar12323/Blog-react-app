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
  }

  async login({ email, password }) {
    const user = await this.account.createEmailPasswordSession(email, password);
    return user;
  }

  async getSession() {
    const user = await this.account.get();
    if (!user) return null;
    return user;
  }

  async logout() {
    return await this.account.deleteSession("current");
  }

  async updateUserName(username) {
    const user = await this.account.updateName(username);
    return user.name;
  }
}

const authService = new AuthServices();

export { authService };
