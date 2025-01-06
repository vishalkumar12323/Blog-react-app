import { config } from "../config/config.js";
import { LoginProps, TUserProps, IUserProps } from "../lib/definations.ts";
import { Client, Account, ID } from "appwrite";

class AuthServices {
  client = new Client();
  account: Account;

  constructor() {
    this.client
      .setEndpoint(config.appwrite_url)
      .setProject(config.appwrite_project_id);
    this.account = new Account(this.client);
  }

  async createAccount({ name, email, password }: TUserProps) {
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

  async login({ email, password }: LoginProps) {
    const user = await this.account.createEmailPasswordSession(email, password);
    return user;
  }

  async getSession() {
    const user = await this.account.get();
    if (!user) return null;
    return user as IUserProps;
  }

  async logout() {
    return await this.account.deleteSession("current");
  }

  async updateUserName(username: string) {
    const user = await this.account.updateName(username);
    return user.name;
  }
}

const authService = new AuthServices();

export { authService };
