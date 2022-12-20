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
import { Card, CardBody, CardImg, CardLink, CardTitle } from "reactstrap";
import ReactQuill from "react-quill";

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
          <Projects projectList={projects} />
        </motion.div>
      </div>
      <hr className="mb-0"></hr>
    </div>
  );
};

var Projects = ({ projectList }: { projectList: UserProject[] }) => {
  return (
    <div className="col-12 d-flex flex-column ">
      {/* Project container */}
      <div className="flex-1 d-flex flex-row flex-wrap">
        {projectList.map((project, index) => (
          <div className="p-3 col-12 col-sm-6 col-lg-4">
            <Card className="p-3  ">
              <CardTitle className="fw-bold h3">
                {project.project_name}
              </CardTitle>
              <CardImg
                src={project.banner_picture}
                className="w-100"
                style={{ height: 300 }}
              />
              <CardBody className="px-0">
                <div className="col-12 d-flex flex-column cardDescription ">
                  <ReactQuill
                    className=" noselect cursorPointer  col-12"
                    readOnly={true}
                    style={{}}
                    theme="bubble"
                    value={project.project_description}
                  />
                  {/* <p className="col-12">{project.project_description}</p> */}
                  <div className=" col-12 d-flex  p-0 m-0 py-3">
                    <CardLink
                      href={project.project_link}
                      className="text-decoration-none col-6 pe-2 m-0"
                    >
                      <button className=" btn btn-facebook ">
                        Project (Live)
                      </button>
                    </CardLink>
                    <CardLink
                      href={project.code_link}
                      className="text-decoration-none col-6 ps-2 m-0"
                    >
                      <Button className="w-100 ">Source Code</Button>
                    </CardLink>
                  </div>

                  <div className="col-12 d-flex align-items-start">
                    <p className="me-2 w-auto">Stack Used</p>
                    {project.tech_stack && (
                      <div className="flex-1 d-flex flex-wrap">
                        {project.tech_stack.map((tech) => (
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
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileProjects;
