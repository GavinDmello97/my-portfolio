import classNames from "classnames";
import { Button, Menu, MenuProps, Progress, Tag, Timeline } from "antd";
import Generic from "../../components/generic/Generic";
import {
  UserResume,
  UserResumeEducation,
  UserResumeEmployment,
  UserResumeSkill,
  UserBlog,
  ProjectTabs as ProjectTabsTypes,
} from "../../config/types";
import { useState, useRef, MutableRefObject, useEffect } from "react";
import useIntersection from "../../components/generic/useIntersection";
import { AnimationControls, motion, useAnimation } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardBody, CardImg, CardLink, CardTitle } from "reactstrap";
import ReactQuill from "react-quill";
import { cssHover } from "../../components/generic/hoverProps";
import {
  setActiveTab,
  setProjects,
} from "../../redux/actionReducers/projectsOnDisplayReducer";
import { ItemType } from "antd/es/menu/hooks/useItems";

type ProfileBlogsType = {
  blogs: UserBlog[];
  className?: string;
};

const ProfileBlogs = ({ blogs, className = "" }: ProfileBlogsType) => {
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
    <div className={classNames("col-10 px-3 profile-about", className)}>
      <div className="col-12 container  py-5" ref={ref}>
        <Generic.AnimatedText text={"Blogs_"} viewPortVisible={isInViewport} />
        <motion.div
          initial={{ opacity: 0, transform: "translateY(200px)" }}
          animate={controls}
          transition={{ duration: 1 }}
        >
          <div className="flex-1 d-flex flex-row flex-wrap align-items-stretch">
            {blogs &&
              blogs.map((blog) => (
                <div className=" pt-4 pt-sm-3 pb-0 px-sm-2 col-12 col-sm-6 col-lg-4 flex-1">
                  <BlogCard blogDetails={blog} />{" "}
                </div>
              ))}
          </div>
        </motion.div>
      </div>
      <hr className="mb-0"></hr>
    </div>
  );
};

const BlogCard = ({ blogDetails: blog }: { blogDetails: UserBlog }) => {
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

  // const {
  //   author,
  //   categories,
  //   content,
  //   description,
  //   link,
  //   guid,
  //   pubDate,
  //   thumbnail,
  //   title,
  // } = blog;

  return (
    <Card className={classNames("p-4 project-card h-100")} {...cardHoverStyle}>
      <CardTitle className="fw-bold h3">{blog.title}</CardTitle>
      <CardImg src={blog.thumbnail} className="w-100 ratio-1x1" />

      <CardBody className="p-0 pt-2">
        <div className="col-12 d-flex flex-column cardDescription ">
          <div className=" col-12 d-flex  p-0 m-0 py-2">
            <CardLink
              href={blog.link}
              className="text-decoration-none col-12 pe-2 m-0 border-0"
            >
              <Button
                shape="round"
                className={classNames("button-style w-100 text-wrap  h-100 ")}
              >
                <i className="fa fa-globe fa-lg d-none d-sm-block d-xl-none" />
                <span className="d-block d-sm-none d-xl-block">
                  {/* {blog.guid} */}
                  {"Blog Link"}
                </span>
              </Button>
            </CardLink>
          </div>

          {/* Tech stack container */}
          {blog.categories && blog.categories.length > 1 && (
            <div className="col-12 mt-2">
              <Generic.TagList
                taglist={blog.categories}
                tagClassName={"tag-text mb-2  px-2 font-14"}
                listTitle={"Keywords"}
                listTitleClassName={"col-12 span  mb-1 opacity-50 font-14"}
              />
            </div>
          )}
        </div>
      </CardBody>
    </Card>
  );
};

export default ProfileBlogs;
