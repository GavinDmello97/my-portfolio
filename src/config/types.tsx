import { To } from "react-router-dom";
import { CSSModule } from "reactstrap/types/lib/utils";

export type User = {
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
  about: string;
};

export type SocialLinks = {
  github: string;
  linkedIn: string;
  facebook: string;
  twitter: string;
  stack_overflow: string;
};
