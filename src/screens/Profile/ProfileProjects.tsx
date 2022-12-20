import classNames from "classnames";
import { Button, Progress, Tag, Timeline } from "antd";
import Generic from "../../components/generic/Generic";
import {
  UserResume,
  UserResumeEducation,
  UserResumeEmployment,
  UserResumeSkill,
  UserProject,
} from "../../config/types";
import { useState, useRef, MutableRefObject, useEffect } from "react";
import useIntersection from "../../components/generic/useIntersection";
import { AnimationControls, motion, useAnimation } from "framer-motion";
import { useSelector } from "react-redux";

type ProfileAboutType = {
  projects: UserProject[];
  className?: string;
};

const ProjectTabs = {
  all: "ALL",
  mobile_apps: "MOBILE APPS",
  websites: "WEBSITES",
};

const ProfileProjects = ({ projects, className = "" }: ProfileAboutType) => {
  const [currentTab, setCurrentTab] = useState<string>("all");
  const [isInViewport, setViewStatus] = useState(false);
  const ref = useRef<null | HTMLDivElement>(null);
  const inViewport = useIntersection(
    ref as MutableRefObject<HTMLDivElement>,
    "-100px"
  ); // Trigger as soon as the element becomes visible
  const controls = useAnimation();

  if (inViewport && !isInViewport) {
    setViewStatus(true);
    controls.start({ opacity: 1, transform: "translateY(0px)" });
  }

  return (
    <div className={classNames("col-10 px-3  profile-about", className)}>
      <div className="col-12 container py-5" ref={ref}>
        <Generic.AnimatedText
          text={"Projects"}
          viewPortVisible={isInViewport}
        />
        <motion.div
          initial={{ opacity: 0, transform: "translateY(300px)" }}
          animate={controls}
          transition={{ duration: 1 }}
        >
          {/* <Projects projects={projects} /> */}
        </motion.div>
      </div>
      <hr className="mb-0"></hr>
    </div>
  );
};

var ResumeEmployment = ({
  employmentList,
}: {
  employmentList: UserResumeEmployment[];
}) => {
  const state = useSelector((state: any) => {
    return { rootState: state.rootActionReducer };
  });
  const { isDark } = state.rootState;
  return (
    <div className="resume-e-container ">
      <p
        className={classNames("resume-title  py-2 pt-3")}
        style={
          isDark
            ? { color: "rgba(255,255,255, 0.8)" }
            : { color: "rgba(0,0,0,0.6)" }
        }
      >
        Employment
      </p>
      <Timeline className="col-12 col-md-10 col-lg-8">
        {employmentList &&
          employmentList.map((employment) => {
            return (
              <Timeline.Item className="col-12">
                <div className="col-12 ">
                  <p
                    className="text-primary fw-bold col-12 mb-0"
                    style={{ fontSize: 16 }}
                  >
                    {employment.position_title}
                  </p>
                  <p className="col-12 mb-0" style={{ fontSize: 14 }}>
                    @{employment.company_name}
                  </p>
                  <p className="col-12 mb-2" style={{ fontSize: 14 }}>
                    {`${employment.start_month} ${employment.start_year} - ${employment.end_month}`}
                  </p>

                  {employment.tech_stack && (
                    <div className="col-12 d-flex flex-wrap">
                      {employment.tech_stack.map((tech) => (
                        <Tag
                          className="tag-text mb-2  px-2"
                          style={{ fontSize: 14 }}
                        >
                          {tech}
                        </Tag>
                      ))}
                    </div>
                  )}
                </div>
              </Timeline.Item>
            );
          })}
      </Timeline>
    </div>
  );
};

export default ProfileProjects;
