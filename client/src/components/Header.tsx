import type { MenuProps } from "antd";
import { FloatButton, Menu } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DrawerContent from "./Drawer";

const Header = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("/");

  type MenuItem = Required<MenuProps>["items"][number];

  const items: MenuItem[] = [
    {
      label: "Home",
      key: "/",
    },
    {
      label: "About",
      key: "/about",
    },
  ];
  const onChangeTab: MenuProps["onClick"] = (e) => {
    navigate(e.key);
    setCurrent(e.key);
  };
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Menu
        mode="horizontal"
        items={items}
        selectedKeys={[current]}
        onClick={onChangeTab}
      />
      <div>
        <FloatButton.Group trigger="hover">
          <FloatButton onClick={showDrawer} />
        </FloatButton.Group>
        <DrawerContent onClose={onClose} open={open} />
      </div>
    </div>
  );
};

export default Header;
