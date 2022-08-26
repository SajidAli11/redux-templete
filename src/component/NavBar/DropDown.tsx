import { Menu } from "antd";

const menu = (
  <Menu
    selectable
    defaultSelectedKeys={["3"]}
    items={[
      {
        key: "1",
        label: "English",
      },
      {
        key: "2",
        label: "Chinese",
      },
      {
        key: "3",
        label: "Spanish",
      },
      {
        key: "4",
        label: "German",
      },
    ]}
  />
);

const SignUpDropDown = (
  <Menu
    selectable
    defaultSelectedKeys={["3"]}
    items={[
      {
        key: "1",
        label: "Log In",
      },
      {
        key: "2",
        label: "Log Out",
      },
    ]}
  />
);
export { menu, SignUpDropDown };
