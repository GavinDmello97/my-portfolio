import classNames from "classnames";
import { Button, Tag, Timeline } from "antd";
import Generic from "../../components/generic/Generic";
import { UserResume, UserResumeEducation } from "../../config/types";
import { useState, useRef, MutableRefObject } from "react";
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
    "0px"
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
            transition={{ duration: 2 }}
          >
            {bio && bio.length > 0 && <ResumeBio text={bio} />}
            {education && education.length > 0 && (
              <ResumeEducation educationList={education} />
            )}
          </motion.div>
        )}
        {/* {education && education.length > 0 && } */}
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
    <div className="resume-education-container">
      <p
        className={classNames("resume-title fw-bold py-2")}
        style={
          isDark
            ? { color: "rgba(255,255,255, 0.6)" }
            : { color: "rgba(0,0,0,0.6" }
        }
      >
        Education
      </p>
      <Timeline className="col-12 col-md-10 col-lg-8">
        {educationList &&
          educationList.map((education) => {
            return (
              <Timeline.Item className="col-12">
                <div className="col-12 ">
                  <p
                    className="text-primary fw-bold col-12 mb-0"
                    style={{ fontSize: 18 }}
                  >
                    {education.university_name}
                  </p>
                  <p className="col-12 mb-0">
                    {`${education.degree} - ${education.specialization}`}
                  </p>
                  <p className="col-12">
                    {education.start_year} - {education.end_year}{" "}
                    {education.gpa && (
                      <Tag
                        className="bg-primary mx-3"
                        style={{
                          color: "white",
                          border: "0.5px solid rgba(255,255,255,0.5)",
                        }}
                      >
                        GPA: {education.gpa} of 4.0
                      </Tag>
                    )}
                  </p>

                  {education.subjects && (
                    <div className="col-12 d-flex flex-wrap">
                      {education.subjects.map((subject) => (
                        <Tag className="tag-text mb-2">{subject}</Tag>
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
export default ProfileResume;
