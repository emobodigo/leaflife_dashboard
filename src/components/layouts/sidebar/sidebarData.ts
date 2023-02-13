import { MdDashboard, MdOutlineAdminPanelSettings } from 'react-icons/md';
import { ISidebarItem } from './SidebarItem';

export const sidebarList: ISidebarItem[] = [
  { name: 'Dashboard', icon: MdDashboard, link: '/dashboard' },
  {
    name: 'Admin',
    icon: MdOutlineAdminPanelSettings,
    link: '/admin',
  },
];
