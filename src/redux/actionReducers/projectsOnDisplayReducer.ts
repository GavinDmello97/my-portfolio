import { createSlice } from "@reduxjs/toolkit";
import { MenuProps } from "antd";
import { ProjectTabs, User, UserProject } from "../../config/types";

export interface initialProjectsState {
  activeTab: string;
  projects: UserProject[] | null;
  tabs: ProjectTabs;
}

const initialState: initialProjectsState = {
  activeTab: "all",
  projects: null,
  tabs: null,
};
export const projectsOnDisplay = createSlice({
  name: "projectsOnDisplay",
  initialState,
  reducers: {
    setProjectTabs: (state, action: { payload: ProjectTabs }) => {
      state.tabs = action.payload;
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload as string;
    },
    setProjects: (state, action: { payload: UserProject[] | null }) => {
      state.projects = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProjectTabs, setActiveTab, setProjects } =
  projectsOnDisplay.actions;
export default projectsOnDisplay.reducer;
