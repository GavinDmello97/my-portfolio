import classNames from "classnames";
import { Button } from "antd";
import Generic from "../../components/generic/Generic";
import { UserResume } from "../../config/types";
import { useState, useRef, MutableRefObject } from "react";
import useIntersection from "../../components/generic/useIntersection";
import { motion, useAnimation } from "framer-motion";

type ProfileAboutType = {
  resume: UserResume;
  className?: string;
};

const ProfileAbout = ({ resume, className = "" }: ProfileAboutType) => {
  const [isInViewport, setViewStatus] = useState(false);
  const ref = useRef<null | HTMLDivElement>(null);
  const inViewport = useIntersection(
    ref as MutableRefObject<HTMLDivElement>,
    "0px"
  ); // Trigger as soon as the element becomes visible
  const controls = useAnimation();

  if (inViewport && !isInViewport) {
    setViewStatus(true);
    controls.start({ opacity: 1, transform: "translateX(0px)" });
  }

  const { bio } = resume;
  return (
    <div className={classNames("col-10 px-3  profile-about", className)}>
      <div className="col-12 container py-5" ref={ref}>
        <Generic.AnimatedText text={"Resume_"} viewPortVisible={isInViewport} />
        {bio && (
          <motion.div
            initial={{ opacity: 0, transform: "translateX(300px)" }}
            animate={controls}
            transition={{ duration: 2 }}
          >
            <p className="col-12 py-4">{bio}</p>
          </motion.div>
        )}
      </div>
      <hr></hr>
    </div>
  );
};

export default ProfileAbout;
