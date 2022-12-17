import classNames from "classnames";
import { Button } from "antd";
import Generic from "../../components/generic/Generic";
import { DownloadOutlined } from "@ant-design/icons";

type ProfileAboutType = {
  aboutMe: string;
  className?: string;
};

const ProfileAbout = ({ aboutMe = "", className = "" }: ProfileAboutType) => {
  return (
    <div className={classNames("col-10 px-3 px-md-0 profile-about", className)}>
      <div className="col-12 container py-5">
        <Generic.AnimatedText text={"Hi_"} />
        <p className="col-12 py-4">{aboutMe}</p>
        <Button
          shape="round"
          size={"large"}
          className={classNames("button-style")}
        >
          <i className="fa fa-download fa-md me-2 "></i>
          Download CV
        </Button>
      </div>
      <hr></hr>
      {/* window.open('https://myapi.com/download/file-name') */}
    </div>
  );
};

export default ProfileAbout;
