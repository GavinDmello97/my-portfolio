import { MenuProps } from "antd";

export const formattingPhone = (phone_country_code: string, phone: string) => {
  return `${phone_country_code} (${phone.substring(0, 3)}) ${phone.substring(
    3,
    6
  )}-${phone.substring(6)}`;
};

type MenuItem = Required<MenuProps>["items"][number];

export const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem => {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
};

export const openInNewTab = (link: string) => {
  window.open(link, "_blank", "noreferrer");
};
