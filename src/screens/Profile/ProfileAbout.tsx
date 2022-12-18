import classNames from "classnames";
import { Button } from "antd";
import Generic from "../../components/generic/Generic";
import { MutableRefObject, useRef, useState } from "react";
import useIntersection from "../../components/generic/useIntersection";
import { motion, useAnimation } from "framer-motion";

type ProfileAboutType = {
  aboutMe: string | null;
  className?: string;
};

const ProfileAbout = ({ aboutMe = "", className = "" }: ProfileAboutType) => {
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

  return (
    <div className={classNames("col-10 px-3  profile-about", className)}>
      <div className="col-12 container py-5" ref={ref}>
        <Generic.AnimatedText text={"Hi_"} viewPortVisible={isInViewport} />

        {/* <Animate
          play={isInViewport} // set play true to start the animation
          duration={1} // how long is the animation duration
          delay={0} // how many delay seconds will apply before the animation start
          start={{ marginRight: "200%", opacity: 0 }}
          end={{ marginRight: "0%", opacity: 1 }}
          easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
        > */}
        <motion.div
          initial={{ opacity: 0, transform: "translateX(300px)" }}
          animate={controls}
          transition={{ duration: 2 }}
        >
          <p className="col-12 py-3">{aboutMe}</p>
        </motion.div>
        {/* </Animate> */}
        <Button
          shape="round"
          size={"large"}
          className={classNames("button-style")}
        >
          <i className="fa fa-download fa-md me-2 "></i>
          Download CV
        </Button>
      </div>
      <hr className="mb-0"></hr>
      {/* window.open('https://myapi.com/download/file-name') */}
    </div>
  );
};

export default ProfileAbout;
