export interface INavigation {
  title: string;
  url: string;
  //iconClassName:string;
  underCategory: INavigationBase[];
}

export interface INavigationBase {
  title: string;
  url: string;
}
