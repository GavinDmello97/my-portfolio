import { Descriptions, MenuProps } from "antd";

export type User = {
  profile: UserProfile;
  about: string | null;
  resume: UserResume | null;
  projects: UserProject[] | null;
  testimonies: UserTestimony[] | null;
  blogs: UserBlog[] | null;
};

export type UserTestimony = {
  provider_first_name: string;
  provider_last_name: string;
  provider_message: string;
  provider_position: string;
  provider_company_name: string;
};

export type UserProfile = {
  first_name: string;
  middle_name: string;
  last_name: string;
  job_title: string;
  age: number;
  email: string;
  phone_country_code: string;
  phone: string;
  address: string;
  social_links: SocialLinks;
  display_picture: string;
};

export type UserResume = {
  bio?: string;
  education: UserResumeEducation[];
  employment: UserResumeEmployment[];
  skills: UserResumeSkill[];
};

export type UserResumeEducation = {
  university_name: string;
  start_year: string;
  end_year: string;
  degree: string;
  specialization: string;
  subjects: string[];
  gpa?: string;
};

export type UserResumeEmployment = {
  position_title: string;
  company_name: string;
  start_month: string;
  start_year: string;
  end_month: string;
  end_year: string;
  job_description: string;
  tech_stack: string[];
};

export type UserResumeSkill = {
  skill_name: string;
  percentage: number;
};

export type SocialLinks = {
  github: string;
  linkedIn: string;
  facebook: string;
  twitter: string;
  stack_overflow: string;
};

export type UserProject = {
  project_name: string;
  project_description?: string;
  thumbnail: string;
  tech_stack: string[];
  code_link?: string;
  project_link?: string;
  type: string;
};

export type UserBlog = {
  author?: string;
  categories: string[];
  content: string;
  description: string;
  link: string;
  guid: string;
  pubDate: string;
  thumbnail: string;
  title: string;
};

export type MenuItem = Required<MenuProps>["items"][number];

export type ProjectTabs = MenuProps["items"] | null;
