interface ChildMenuItem {
  childtitle: string;
  childlink: string;
}

export interface MenuItems {
  id: string;
  icon: string;
  title: string;
  child?: ChildMenuItem[];
}
