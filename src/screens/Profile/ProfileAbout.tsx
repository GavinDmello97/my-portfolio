import classNames from "classnames";
import Generic from "../../components/generic/Generic";

type ProfileAboutType = {
  aboutMe: string;
  className?: string;
};

const ProfileAbout = ({ aboutMe = "", className = "" }: ProfileAboutType) => {
  return (
    <div className={classNames("col-10 px-3 px-md-0 profile-about", className)}>
      <div className="col-12 container py-5">
        <Generic.AnimatedText text={"Hi_"} />
        <p className="col-12">{aboutMe}</p>
      </div>
      <hr></hr>
    </div>
  );
};

export default ProfileAbout;
