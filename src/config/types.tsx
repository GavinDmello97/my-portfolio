import { MenuProps } from "antd";

export type User = {
  profile: UserProfile;
  about: string | null;
  resume: UserResume | null;
  projects: Project[] | null;
  blogs: Blog[] | null;
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

export type Project = {};

export type Blog = {};

export type MenuItem = Required<MenuProps>["items"][number];
