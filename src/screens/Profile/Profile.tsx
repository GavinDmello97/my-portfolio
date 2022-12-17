import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { To, useLocation, useNavigate } from "react-router-dom";
import "./Profile.scss";
import { randomColorGenerator } from "../../config/configuration";
import ProfileHead from "./ProfileHead";
import { profile as profileData } from "../../config/dataset";
import { User } from "../../config/types";
import { Spin } from "antd";
import { CSSModule } from "reactstrap/types/lib/utils";
import ProfileAbout from "./ProfileAbout";
import classNames from "classnames";
import { useSelector } from "react-redux";

const avatarColor = randomColorGenerator();

const Profile = (props: any) => {
  const { pathDetails } = props;
  let locationParams = useLocation();
  const navigate = useNavigate();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 820px)" });
  const [isLoading, setLoading] = useState(true);
  const [profile, setProfile] = useState<null | User>(null);
  useEffect(() => {
    document.title = "Gavin D'mello";
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setProfile(profileData);
    }, 2000);
  }, []);

  const state = useSelector((state: any) => {
    return { rootState: state.rootActionReducer };
  });
  const { isDark } = state.rootState;

  if (isLoading) {
    return <ScreenLoader message={"Loading Profile"} />;
  } else if (!isLoading && !profile) {
    return <ScreenError message="Profile couldn't be loaded" />;
  } else if (!isLoading && profile) {
    return (
      <div className="col-12">
        <ProfileHead profile={profile} />
        <div className={classNames(isDark ? "dark-theme" : "")}>
          {profile.about && profile.about.length > 0 && (
            <ProfileAbout aboutMe={profile.about} />
          )}
          {profile.about && profile.about.length > 0 && (
            <ProfileAbout aboutMe={profile.about} />
          )}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

const ScreenLoader = ({ message }: { message?: string }) => {
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center flex-1  ">
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
export default Profile;
