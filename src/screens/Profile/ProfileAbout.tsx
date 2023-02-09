import classNames from "classnames";
import { Button, Spin, Tooltip } from "antd";
import Generic from "../../components/generic/Generic";
import { MutableRefObject, useRef, useState } from "react";
import useIntersection from "../../components/generic/useIntersection";
import { motion, useAnimation } from "framer-motion";
import { LoadingOutlined } from "@ant-design/icons";

type ProfileAboutType = {
  aboutMe: string | null;
  className?: string;
};

const ProfileAbout = ({ aboutMe = "", className = "" }: ProfileAboutType) => {
  const [isLoading, setButtonLoading] = useState(false);
  const [isInViewport, setViewStatus] = useState(false);
  const ref = useRef<null | HTMLDivElement>(null);
  const inViewport = useIntersection(
    ref as MutableRefObject<HTMLDivElement>,
    "-100px"
  ); // Trigger as soon as the element becomes visible
  const controls = useAnimation();

  if (inViewport && !isInViewport) {
    setViewStatus(true);
    controls.start({ opacity: 1, transform: "translateX(0px)" });
  }

  const fetchResume = () => {
    setButtonLoading(true);
    // Setting various property values
    let alink = document.createElement("a");
    alink.href =
      "https://drive.google.com/uc?export=download&id=1X33Pnn9-rbi2ozP2wEYIFkTjyOl1cwsf";
    alink.download = "Gavin_Dmello_Resume.pdf";
    alink.click();
    setTimeout(() => setButtonLoading(false), 2000);
  };

  return (
    <div className={classNames("col-10 px-3  profile-about", className)}>
      <div className="col-12 container py-5" ref={ref}>
        <Generic.AnimatedText text={"Hi_"} viewPortVisible={isInViewport} />

        <motion.div
          initial={{ opacity: 0, transform: "translateX(300px)" }}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <p className="col-12 py-3">{aboutMe}</p>
        </motion.div>
        <Button
          disabled={isLoading}
          shape="round"
          size={"large"}
          className={classNames("button-style ")}
          onClick={() => fetchResume()}
        >
          {!isLoading ? (
            <div>
              <i className="fa fa-download fa-md me-2 "></i>

              <span className="f-karla">Download CV</span>
            </div>
          ) : (
            <Spin
              indicator={
                <LoadingOutlined
                  spin
                  className="d-flex justify-content-center align-items-center button-loader"
                />
              }
            />
          )}
        </Button>
      </div>
      <hr className="mb-0"></hr>
    </div>
  );
};

export default ProfileAbout;
