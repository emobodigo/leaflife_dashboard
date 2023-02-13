import { MdDashboard, MdOutlineAdminPanelSettings } from 'react-icons/md';
import { ISidebarItem } from './SidebarItem';

export const sidebarList: ISidebarItem[] = [
  { name: 'Dashboard', icon: MdDashboard, link: '/app' },
  {
    name: 'Admin',
    icon: MdOutlineAdminPanelSettings,
    link: '/app/admin',
  },
];
