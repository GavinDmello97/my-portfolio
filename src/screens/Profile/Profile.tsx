import { useState, useEffect, useRef, Key } from "react";
import { useMediaQuery } from "react-responsive";
import { useLocation, useNavigate } from "react-router-dom";
import "./Profile.scss";
import { dataObjects, randomColorGenerator } from "../../config/configuration";
import ProfileHead from "./ProfileHead";
import { User, MenuItem, UserTestimony } from "../../config/types";
import { Button, Carousel, Divider, Menu, MenuProps, Space, Spin } from "antd";
import ProfileAbout from "./ProfileAbout";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import ProfileResume from "./ProfileResume";
import { USER } from "../../config/dataset";
import ProfileMenu from "./ProfileMenu";
import ProfileProjects from "./ProfileProjects";
import { setProjectTabs } from "../../redux/actionReducers/projectsOnDisplayReducer";
import Generic from "../../components/generic/Generic";
import ProfileTestimony from "./ProfileTestimony";
import ProfileBlogs from "./ProfileBlogs";

const Profile = (props: any) => {
  const dispatch = useDispatch();
  const references = {
    profile: useRef<null | HTMLDivElement>(null),
    about: useRef<null | HTMLDivElement>(null),
    resume: useRef<null | HTMLDivElement>(null),
    projects: useRef<null | HTMLDivElement>(null),
    testimonies: useRef<null | HTMLDivElement>(null),
    blogs: useRef<null | HTMLDivElement>(null),
  };

  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useState<null | User>(null);
  useEffect(() => {
    document.title = "Gavin D'mello";
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setUser(USER);
      if (USER.projects && USER.projects.length > 0)
        dispatch(
          setProjectTabs([
            {
              label: "All",
              key: "all",
            },
            {
              label: "Websites",
              key: "website",
            },
            {
              label: "Mobile Apps",
              key: "mobile",
            },
          ])
        );
    }, 200);
  }, []);

  const state = useSelector((state: any) => {
    return { rootState: state.rootActionReducer };
  });
  const { isDark } = state.rootState;

  if (isLoading) {
    return <ScreenLoader message={"Loading Profile"} />;
  } else if (!isLoading && !user) {
    return <ScreenError message="Profile couldn't be loaded" />;
  } else if (!isLoading && user) {
    var menuItems: any[] = [];

    // Load menu items based on data not null!!!!
    // eslint-disable-next-line array-callback-return
    Object.entries(dataObjects.userProfileNavigator).map(([key, value]) => {
      if (user[key as keyof User] != null) menuItems.push(value);
    });

    return (
      <div className="col-12 row p-0 m-0">
        {/* Menu(left) container */}
        <div
          className={classNames(
            "p-0  flex-1 d-flex flex-column profile-menu-wrapper ",
            menuItems.length > 0
              ? "col-0 d-none col-sm-1 col-lg-2 d-sm-block "
              : "col-0 d-none",
            isDark ? "dark-theme" : ""
          )}
          style={{
            borderRight: isDark
              ? "1px solid rgba(255, 255,255,0.4)"
              : "1px solid rgba(200, 200,200,0.4)",
          }}
        >
          <ProfileMenu references={references} navMenu={menuItems} />
        </div>

        {/* Body(right) container */}
        <div
          className={classNames(
            "p-0 ",
            menuItems.length > 0 ? "col-12 col-sm-11 col-lg-10" : "col-12"
          )}
        >
          {/* User's profile */}
          {user.profile && (
            <div className="col-12" ref={references.profile}>
              <ProfileHead details={user.profile} />
            </div>
          )}

          {/* Dark theme Container */}
          <div className={classNames(isDark ? "dark-theme" : "")}>
            {/* User's About */}
            {user.about && user.about.length > 0 && (
              <div className="col-12" ref={references.about}>
                <ProfileAbout aboutMe={user.about} />
              </div>
            )}

            {/* User's Resume */}
            {user.resume && (
              <div className="col-12" ref={references.resume}>
                <ProfileResume resume={user.resume} />
              </div>
            )}

            {/* User's Project */}
            {user.projects && (
              <div className="col-12" ref={references.projects}>
                <ProfileProjects projects={user.projects} />
              </div>
            )}

            {user.testimonies && (
              <div className="col-12" ref={references.testimonies}>
                <ProfileTestimony testimonies={user.testimonies} />
              </div>
            )}

            {user.blogs && (
              <div className="col-12" ref={references.blogs}>
                <ProfileBlogs blogs={user.blogs} />
              </div>
            )}
            {/* 
            <Button style={{ marginTop: 2000 }}>Xaas</Button>
            <p className="my-4">Dadttss</p> */}
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

const ScreenLoader = ({ message }: { message?: string }) => {
  const state = useSelector((state: any) => {
    return { rootState: state.rootActionReducer };
  });
  const { isDark } = state.rootState;
  return (
    <div
      className={classNames(
        "w-100 h-100 d-flex justify-content-center align-items-center flex-1  ",
        isDark ? "dark-theme" : ""
      )}
    >
      <Spin tip={message || "Loading"} />
    </div>
  );
};

const ScreenError = ({ message }: { message?: string }) => {
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center flex-1 ">
      <span> {message || "Oops! Something went wrong"}</span>
    </div>
  );
};

// const ProfileMenuItem = ({ image }: User) => {};
export default Profile;
