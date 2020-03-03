export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  badge: string;
  badgeClass: string;
  isExternalLink: boolean;
  submenu: RouteInfo[];
}

export const ROUTES: RouteInfo[] = [
  {
    path: "",
    title: "Dashboard",
    icon: "ft-home",
    class: "has-sub",
    badge: "2",
    badgeClass: "badge badge-pill badge-danger float-right mr-1 mt-1",
    isExternalLink: false,
    submenu: [
      {
        path: "/dashboard/dashboard1",
        title: "Dashboard1",
        icon: "",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: []
      },
      {
        path: "/dashboard/dashboard2",
        title: "Dashboard2",
        icon: "",
        class: "",
        badge: "",
        badgeClass: "",
        isExternalLink: false,
        submenu: []
      }
    ]
  }
];
