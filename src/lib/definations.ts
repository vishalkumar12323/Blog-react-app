import { type Models } from "appwrite";

export interface IBlogProps extends Models.Document {
  id: string;
  heading: string;
  content: string;
  coverImage: string;
  slug: string;
  userId: string;
  status?: string;
}

export interface IBlogsResponse {
  isFetching: boolean;
  documents: IBlogProps[];
  total: number;
  error: string | null;
}

export interface IBlogResponse {
  isFetching: boolean;
  document: IBlogProps;
  error: string | null;
}

export type TUserProps = {
  name: string;
  email: string;
  password: string;
};

export type LoginProps = Omit<TUserProps, "name">;

export interface IUserProps extends Models.User<Models.Preferences> {
  name: string;
  email: string;
  profileImageId: string;
}

export interface IAuthResponse {
  loading: boolean;
  status: boolean;
  user: IUserProps;
}
