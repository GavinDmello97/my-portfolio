import classNames from "classnames";
import { Button } from "antd";
import Generic from "../../components/generic/Generic";
import { DownloadOutlined } from "@ant-design/icons";

type ProfileResumeType = {
  aboutMe: string;
  className?: string;
};

const ProfileResume = ({ aboutMe = "", className = "" }: ProfileResumeType) => {
  return (
    <div className={classNames("col-10 px-3 px-md-0 profile-about", className)}>
      <div className="col-12 container py-5">
        <Generic.AnimatedText text={"Resume_"} />
        <p className="col-12 py-4">{aboutMe}</p>
      </div>
      <hr></hr>
      {/* window.open('https://myapi.com/download/file-name') */}
    </div>
  );
};

export default ProfileResume;
