export type TBlogProps = {
  id: string;
  heading: string;
  content: string;
  coverImage: string;
  slug: string;
  userId: string;
  status?: string;
};

export type TUserProps = {
  name: string;
  email: string;
  password: string;
};

export type LoginProps = Omit<TUserProps, "name">;

export type TBlogResponse = {
  isFetching: boolean;
  documents: TBlogProps[];
  total: number;
  error: string | null;
};
