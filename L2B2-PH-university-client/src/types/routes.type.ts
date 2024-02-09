export type TRoute = {
    path: string;
    element: React.ReactNode;
  };
  
 export type TUserPath = {
    name: string;
    element?: React.ReactNode;
    path?: string;
    children?: TUserPath[];
  };
  