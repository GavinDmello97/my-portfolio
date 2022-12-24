import classNames from "classnames";
import { Button, Progress, Tag, Timeline } from "antd";
import Generic from "../../components/generic/Generic";
import {
  UserResume,
  UserResumeEducation,
  UserResumeEmployment,
  UserResumeSkill,
} from "../../config/types";
import { useState, useRef, MutableRefObject, useEffect } from "react";
import useIntersection from "../../components/generic/useIntersection";
import { AnimationControls, motion, useAnimation } from "framer-motion";
import { useSelector } from "react-redux";

type ProfileAboutType = {
  resume: UserResume;
  className?: string;
};

const ProfileResume = ({ resume, className = "" }: ProfileAboutType) => {
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

  const { bio, education, employment, skills } = resume;
  return (
    <div className={classNames("col-10 px-3  profile-about", className)}>
      <div className="col-12 container py-5" ref={ref}>
        <Generic.AnimatedText text={"Resume_"} viewPortVisible={isInViewport} />
        {(bio ||
          (education && education.length > 0) ||
          (employment && employment.length > 0) ||
          (skills && skills.length > 0)) && (
          <motion.div
            initial={{ opacity: 0, transform: "translateY(300px)" }}
            animate={controls}
            transition={{ duration: 1 }}
          >
            {bio && bio.length > 0 && <ResumeBio text={bio} />}
            {education && education.length > 0 && (
              <ResumeEducation educationList={education} />
            )}

            {employment && employment.length > 0 && (
              <ResumeEmployment employmentList={employment} />
            )}
            {skills && skills.length > 0 && <ResumeSkills skills={skills} />}
          </motion.div>
        )}
      </div>
      <hr className="mb-0"></hr>
    </div>
  );
};

var ResumeBio = ({ text }: { text: string }) => {
  return <p className="col-12 py-3">{text}</p>;
};

var ResumeEducation = ({
  educationList,
}: {
  educationList: UserResumeEducation[];
}) => {
  const state = useSelector((state: any) => {
    return { rootState: state.rootActionReducer };
  });
  const { isDark } = state.rootState;
  return (
    <div className="resume-e-container">
      <p
        className={classNames("resume-title  py-2 pt-3")}
        style={
          isDark
            ? { color: "rgba(255,255,255, 0.8)" }
            : { color: "rgba(0,0,0,0.6)" }
        }
      >
        Education
      </p>
      <Timeline className="col-12 col-md-10 col-lg-8">
        {educationList &&
          educationList.map((education, index) => {
            return (
              <Timeline.Item className="col-12" key={index}>
                <div className="col-12 ">
                  <p
                    className="text-primary fw-bold col-12 mb-0"
                    style={{ fontSize: 16 }}
                  >
                    {education.university_name}
                  </p>
                  <p className="col-12 mb-0" style={{ fontSize: 14 }}>
                    {`${education.degree} - ${education.specialization}`}
                  </p>
                  <p className="col-12 mb-2" style={{ fontSize: 14 }}>
                    {education.start_year} - {education.end_year}{" "}
                    {education.gpa && (
                      <Tag
                        className="bg-primary mx-3"
                        style={{
                          color: "white",
                          border: "0.5px solid rgba(255,255,255,0.5)",
                          fontSize: 12,
                        }}
                      >
                        GPA: {education.gpa} of 4.0
                      </Tag>
                    )}
                  </p>

                  {education.subjects && (
                    <div className="col-12 d-flex flex-wrap">
                      {education.subjects.map((subject) => (
                        <Tag
                          className="tag-text mb-2  px-2"
                          style={{ fontSize: 14 }}
                        >
                          {subject}
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

var ResumeSkills = ({ skills }: { skills: UserResumeSkill[] }) => {
  const [showMore, setShowMore] = useState(false);
  const [isInViewport, setViewStatus] = useState(false);

  const ref = useRef<null | HTMLDivElement>(null);
  const inViewport = useIntersection(
    ref as MutableRefObject<HTMLDivElement>,
    "-100px"
  ); // Trigger as soon as the element becomes visible

  if (inViewport && !isInViewport) {
    setViewStatus(true);
    // controls.start({ opacity: 1, transform: "translateY(0px)" });
  }
  const state = useSelector((state: any) => {
    return { rootState: state.rootActionReducer };
  });
  const { isDark } = state.rootState;
  return (
    <div className="resume-e-container" ref={ref}>
      <p
        className={classNames("resume-title py-2 pt-3")}
        style={
          isDark
            ? { color: "rgba(255,255,255, 0.8)" }
            : { color: "rgba(0,0,0,0.6)" }
        }
      >
        Skills
      </p>
      <div className="col-12 d-flex flex-wrap">
        {skills &&
          (showMore ? skills : skills.slice(0, 6)).map((skill) => (
            <div className="col-12 col-md-6 px-2 px-md-3">
              <Generic.CustomProgressBar
                percent={skill.percentage}
                play={isInViewport}
                label={skill.skill_name}
                isDark={isDark}
              />
            </div>
          ))}
        {skills.length > 6 && (
          <div className="col-12 d-flex flex-column justify-content-center align-items-center">
            <Button
              shape="round"
              className={classNames("button-style  ")}
              onClick={() => {
                setShowMore(!showMore);
              }}
            >
              <span>{showMore ? "Show less" : "Show more"}</span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
export default ProfileResume;
