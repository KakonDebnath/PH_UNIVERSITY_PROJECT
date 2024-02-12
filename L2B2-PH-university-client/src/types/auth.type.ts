export type TUserInfo = {
  userId: string;
  role: string;
  iat: number;
  exp: number;
};

export type TAuthInitialState = {
  user: null | TUserInfo;
  token: null | string;
};
