import type { MenuProps } from "antd";
import { Button, FloatButton, Menu } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DrawerContent from "./Drawer";

const Header = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("");
  type MenuItem = Required<MenuProps>["items"][number];

  const items: MenuItem[] = [
    {
      label: "Home",
      key: "/",
    },
    {
      label: "About",
      key: "about",
    },
  ];
  const onChangeTab: MenuProps["onClick"] = (e) => {
    navigate(e.key);
    setCurrent(e.key);
  };

  //Show Drawer
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="bg-slate-50">
      <div className="grid xs:grid-cols-2 grid-cols-3 gap-3 p-4 ">
        <div className="bg-slate-50">
          <Menu
            mode="horizontal"
            items={items}
            selectedKeys={[current]}
            onClick={onChangeTab}
            className="bg-slate-50"
          />
        </div>

        <div className="mx-auto  text-center">
          <h1
            className="font-medium text-2xl"
            style={{
              color: `#1890ff`,
            }}>
            BLOG APP
          </h1>
        </div>
        <div className="flex justify-end ">
          <Button
            type="primary"
            onClick={() => {
              setCurrent("");
              navigate("/sign-in");
            }}>
            Logins
          </Button>
        </div>
      </div>

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
