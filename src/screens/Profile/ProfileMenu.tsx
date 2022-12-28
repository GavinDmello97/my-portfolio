import { MenuProps, Menu, Space } from "antd";
import classNames from "classnames";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./Profile.scss";

const ProfileMenu = ({
  navMenu,
  references,
}: //   viewPortListeners,
{
  navMenu: any[];
  references: any;
  viewPortListeners?: any;
}) => {
  const state = useSelector((state: any) => {
    return { rootState: state.rootActionReducer };
  });
  const { isDark } = state.rootState;

  return (
    <div className=" sticky-top flex-1 d-flex flex-column justify-content-start align-items-start  ">
      <div
        className={`${
          isDark ? "bg-warning" : "bg-warning"
        } w-100 p-3 text-center `}
      >
        <b
          className={`${
            isDark ? "bg-warning" : "bg-warning"
          } d-none d-lg-block text-white`}
        >
          SCROLL TO
        </b>
        <i className="fa fa-map fa-lg d-block d-lg-none" />
      </div>
      <Menu
        defaultSelectedKeys={["profile"]}
        mode="inline"
        theme={isDark ? "dark" : "light"}
        style={{ flex: 1 }}
      >
        {navMenu.map((menu) => {
          return (
            <Menu.Item
              key={menu.key}
              className=" col-12 px-1 container menu-item"
              onClick={() => {
                references[menu.key].current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                });
              }}
              //   style={{ backgroundColor: "red" }}
            >
              <div
                className="col-12 d-flex justify-content-center justify-content-lg-start align-items-center  container-fluid bg-common"
                style={{ fontSize: 18, height: 40 }}
              >
                <i className={classNames(menu.icon, "noselect ")} />
                <span className="d-none d-lg-block ms-2 noselect  flex-wrap">
                  {menu.title}
                </span>
              </div>
            </Menu.Item>
          );
        })}
      </Menu>
    </div>
  );
};

export default ProfileMenu;
