/**
 * @copyright 2025 Payal Yadav
 * @license Apache-2.0
 */

type SubmenuItem = {
  href: string;
  icon: React.ReactNode;
  label: string;
  desc: string;
};

type MenuItem = {
  href: string;
  label: string;
  submenu?: SubmenuItem[];
};

export type { MenuItem, SubmenuItem };
