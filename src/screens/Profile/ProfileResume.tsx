import classNames from "classnames";
import { Button } from "antd";
import Generic from "../../components/generic/Generic";
import { UserResume } from "../../config/types";
import { useState, useRef, MutableRefObject } from "react";
import useIntersection from "../../components/generic/useIntersection";

type ProfileAboutType = {
  resume: UserResume | null;
  className?: string;
};

const ProfileAbout = ({ resume, className = "" }: ProfileAboutType) => {
  const [isInViewport, setViewStatus] = useState(false);
  const ref = useRef<null | HTMLDivElement>(null);
  const inViewport = useIntersection(
    ref as MutableRefObject<HTMLDivElement>,
    "0px"
  ); // Trigger as soon as the element becomes visible

  if (inViewport && !isInViewport) {
    console.log("Resume", inViewport, isInViewport);
    setViewStatus(true);
  }

  return (
    <div className={classNames("col-10 px-3  profile-about", className)}>
      <div className="col-12 container py-5" ref={ref}>
        <Generic.AnimatedText text={"Resume_"} viewPortVisible={isInViewport} />
      </div>
      <hr></hr>
    </div>
  );
};

export default ProfileAbout;
