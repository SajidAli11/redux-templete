import { Menu } from "antd";
import { LoginMenuItems, LanguageMenuItems } from "../../utils/menuItems";

const menu = (
  <Menu selectable defaultSelectedKeys={["3"]} items={LanguageMenuItems} />
);

const SignUpDropDown = (
  <Menu selectable defaultSelectedKeys={["3"]} items={LoginMenuItems} />
);
export { menu, SignUpDropDown };
