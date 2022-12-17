import React, { useState, useRef, useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Footer from "./components/functional/Footer";
import Header from "./components/functional/Header";
import { Profile } from "./screens/index";
import ScrollToTop from "./components/generic/scrollToTop";
import NotFound from "./components/generic/NotFound";
// import NoInternetWrapper from "./generic/NoInternetWrapper";
import NoInternet from "./components/generic/NoInternet";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { toggleTheme } from "./redux/actionReducers/rootReducer";

const MainRouter = () => {
  let location = useLocation();
  const navigate = useNavigate();

  const MainRoutes = () => {
    const ProfilePath = [{ path: "/profile", pathName: "Profile" }];
    const ProjectsPath = [{ path: "/projects", pathName: "Projects" }];
    const ProjectDetails = [{ path: "/projects", pathName: "ProjectDetails" }];
    const dispatch = useDispatch();
    const state = useSelector((state: any) => {
      return { rootState: state.rootActionReducer };
    });
    const { isDark } = state.rootState;

    return (
      <div className="col-12 flex-1  d-flex flex-column justify-content-start ">
        <Header />

        <Routes>
          {/* Home */}
          <Route path="/" element={<Profile pathDetails={ProfilePath} />} />

          {/* Projects */}
          {/* <Route
            path="projects/"
            element={<Projects pathDetails={ProjectsPath} />}
          />*/}

          {/* ProjectDetails */}
          {/* <Route
            path="/projects/id/:projectId"
            element={
              <ScrollToTop>
               <ProjectDetails pathDetails={ProjectDetails} /> 
              </ScrollToTop>
            }
          /> */}

          {/* default route */}
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
        {/* <Footer /> */}
        <div
          className={classNames(
            "position-absolute theme-toggler  ",
            isDark ? "dark-theme" : ""
          )}
          onClick={() => {
            dispatch(toggleTheme(!isDark));
          }}
        >
          <img
            src={
              isDark
                ? "https://img.icons8.com/ios-glyphs/90/ffffff/bright-moon--v1.png"
                : "https://img.icons8.com/fluency/96/null/summer.png"
            }
            style={{ width: 20, height: 20 }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className=" col-12 d-flex ">
      <Routes>
        <Route path="/" element={<Navigate to="/main/" replace />} />
        <Route path={"main/*"} element={<MainRoutes />} />
        <Route path={"not-found"} element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </div>
  );
};

export default MainRouter;
