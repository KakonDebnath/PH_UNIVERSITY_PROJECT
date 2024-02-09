import { NavLink } from 'react-router-dom';
import { TSidebarMenuItem, TUserPath } from '../types';

export const sidebarItemGenerator = (items: TUserPath[], role: string) => {
  const sidebarMenuItems = items.reduce((acc: TSidebarMenuItem[], item) => {
    if (item.name && item.path) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }

    if (item.children && item.children.length) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }

    return acc;
  }, []);

  return sidebarMenuItems;
};
