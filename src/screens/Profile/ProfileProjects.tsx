import classNames from "classnames";
import { Button, Menu, MenuProps } from "antd";
import Generic from "../../components/generic/Generic";
import {
  UserProject,
  ProjectTabs as ProjectTabsTypes,
} from "../../config/types";
import { useState, useRef, MutableRefObject, useEffect } from "react";
import useIntersection from "../../components/generic/useIntersection";
import { motion, useAnimation } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardBody, CardImg, CardTitle } from "reactstrap";
import { cssHover } from "../../components/generic/hoverProps";
import {
  setActiveTab,
  setProjects,
} from "../../redux/actionReducers/projectsOnDisplayReducer";
import { ItemType } from "antd/es/menu/hooks/useItems";
import { openInNewTab } from "../../config/utils";

type ProfileProjectType = {
  projects: UserProject[];
  className?: string;
};

const ProfileProjects = ({ projects, className = "" }: ProfileProjectType) => {
  const dispatch = useDispatch();
  const [isInViewport, setViewStatus] = useState(false);
  useEffect(() => {
    dispatch(setProjects(projects));
  }, [dispatch, projects]);

  const ref = useRef<null | HTMLDivElement>(null);
  const inViewport = useIntersection(
    ref as MutableRefObject<HTMLDivElement>,
    "-100px"
  ); // Trigger as soon as the element becomes visible
  const controls = useAnimation();
  const state = useSelector((state: any) => {
    return { projectsOnDisplay: state.projectsOnDisplayReducer };
  });
  const { projects: projectList, tabs } = state.projectsOnDisplay;

  if (inViewport && !isInViewport) {
    setViewStatus(true);
    controls.start({ opacity: 1, transform: "translateY(0px)" });
  }
  const getTabs = (tabs: ProjectTabsTypes, projects: UserProject[] | null) => {
    if (!projects || !tabs) return [];
    var projectTypes = new Map<string, undefined>();
    projects.map((project: UserProject) => {
      if (!projectTypes.has(project.type))
        projectTypes.set(project.type, undefined);
    });
    var result: MenuProps["items"] = [{ key: "all", label: "All" }];
    // eslint-disable-next-line array-callback-return
    tabs.map((tab: ItemType) => {
      if (projectTypes.has(tab!.key as string)) result?.push(tab);
    });

    return result;
  };

  return (
    <div className={classNames("col-10 px-3 profile-about", className)}>
      <div className="col-12 container  py-5" ref={ref}>
        <Generic.AnimatedText
          text={"Projects_"}
          viewPortVisible={isInViewport}
        />
        <motion.div
          initial={{ opacity: 0, transform: "translateY(200px)" }}
          animate={controls}
          transition={{ duration: 1 }}
        >
          {tabs && <ProjectTabs options={getTabs(tabs, projectList)} />}
          {projectList && <Projects projectList={projectList} />}
        </motion.div>
      </div>
      <hr className="mb-0"></hr>
    </div>
  );
};

const ProjectTabs = ({ options }: { options: MenuProps["items"] }) => {
  const dispatch = useDispatch();
  const [current, setCurrent] = useState("all");
  const state = useSelector((state: any) => {
    return {
      rootState: state.rootActionReducer,
      projectsOnDisplay: state.projectsOnDisplayReducer,
    };
  });

  return (
    <Menu
      onClick={(e) => {
        setCurrent(e.key);
        dispatch(setActiveTab(e.key));
      }}
      selectedKeys={[current]}
      mode="horizontal"
      items={options}
    />
  );
};

var Projects = ({ projectList }: { projectList: UserProject[] }) => {
  const state = useSelector((state: any) => {
    return { projectsOnDisplay: state.projectsOnDisplayReducer };
  });
  console.log(projectList);
  const { activeTab } = state.projectsOnDisplay;

  const filterProjects = (projects: UserProject[], type: string) => {
    return type === "all" ? projects : projects.filter((p) => p.type === type);
  };

  return (
    <div className="col-12 d-flex flex-column ">
      {/* Project container */}
      <div className="flex-1 d-flex flex-row flex-wrap align-items-stretch">
        {filterProjects(projectList, activeTab).map((project, index) => (
          <div className=" pt-4 pt-sm-3 pb-0 px-sm-2 col-12 col-sm-6 col-lg-4 flex-1">
            <ProjectCard key={index} project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }: { project: UserProject }) => {
  const state = useSelector((state: any) => {
    return { rootState: state.rootActionReducer };
  });
  const { isDark } = state.rootState;
  const cardHoverStyle = cssHover(
    {
      transform: "scale(1.03)",
      zIndex: 10,
      transition: "0.2s",
    },
    { transition: "0.2s" },
    isDark
      ? {
          // border: "0.5px solid #eee",
          background: "rgba(255,255,255,0.2)",
        }
      : {
          boxShadow: "0px 0px 10px 1px rgba(145, 145, 145, 0.3)",
          border: "0px solid",
        }
  );

  type LivePageButtonText = { website: string; mobile: string; plugin: string };
  const livePageButtonText: LivePageButtonText = {
    website: "Live Website",
    mobile: "Check on PlayStore",
    plugin: "View Plugin",
  };

  return (
    <Card className={classNames("p-4 project-card h-100")} {...cardHoverStyle}>
      <CardTitle className="fw-bold h3">{project.project_name}</CardTitle>
      <CardImg
        src={project.thumbnail}
        className="w-100"
        style={{ aspectRatio: "1/1" }}
      />
      <CardBody className="p-0 pt-2">
        <div className="col-12 d-flex flex-column cardDescription ">
          <div className=" col-12 d-flex justify-content-start align-items-start   p-0 m-0 py-2">
            {project.project_link &&
              project.project_link !== undefined &&
              project.project_link.length > 0 && (
                <div
                  className={classNames(
                    project.code_link ? "col-6" : "col-12",
                    "text-decoration-none  m-0 pe-1 "
                  )}
                >
                  <Button
                    onClick={() => openInNewTab(project.project_link!)}
                    shape="round"
                    className={classNames(
                      "button-style w-100 text-wrap  h-100  "
                    )}
                  >
                    <i className="fa fa-globe fa-lg d-none d-sm-block d-xl-none" />
                    <span className="d-block d-sm-none d-xl-block">
                      {
                        livePageButtonText[
                          project.type as keyof LivePageButtonText
                        ]
                      }
                    </span>
                  </Button>
                </div>
              )}
            {project.code_link &&
              project.code_link !== undefined &&
              project.code_link.length > 0 && (
                <div
                  className={classNames(
                    project.project_link ? "col-6" : "col-12",
                    "text-decoration-none  m-0 ps-1 "
                  )}
                >
                  <Button
                    onClick={() => openInNewTab(project.code_link!)}
                    shape="round"
                    className={classNames(
                      "button-style custom-button-style w-100 text-wrap  h-100 "
                    )}
                  >
                    <i className="fa fa-code fa-lg d-none d-sm-block d-xl-none" />
                    <span className="d-block d-sm-none d-xl-block">
                      {"Source Code"}
                    </span>
                  </Button>
                </div>
              )}
          </div>

          {/* Tech stack container */}
          {project.tech_stack && project.tech_stack.length > 0 && (
            <div className="col-12 mt-2">
              <Generic.TagList
                taglist={project.tech_stack}
                tagClassName={"tag-text mb-2  px-2 font-14"}
                listTitle={"Stack Used"}
                listTitleClassName={"col-12 span  mb-1 opacity-50 font-14"}
              />
            </div>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default ProfileProjects;
