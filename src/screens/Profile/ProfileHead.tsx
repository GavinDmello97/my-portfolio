import classNames from "classnames";
import { Link, To } from "react-router-dom";
import { gifs, icons, images } from "../../config/configuration";
import { Image, Tooltip, message } from "antd";
import { User, UserProfile } from "../../config/types";
import { CSSModule } from "reactstrap/types/lib/utils";
import { formattingPhone, openInNewTab } from "../../config/utils";
import Generic from "../../components/generic/Generic";
import { Button } from "reactstrap";
type ProfileInfoType = {
  containerClassName: string;
  title: string;
  value: string | number;
  isValueLink?: boolean;
  href?: string;
  containerStyle?: CSSModule;
};

type SocialLinkType = {
  bootstrapIcon: string;
  bootstrapIconSize: string;
  to: string;
  linkClassName?: string | undefined;
  iconClassName?: string | undefined;
};

type FullNameType = {
  firstName: string;
  middleName?: string;
  lastName: string;
  className?: string;
};

const ProfileHead = ({ details }: { details: UserProfile }) => {
  const {
    first_name,
    last_name,
    middle_name,
    job_title,
    age,
    email,
    phone_country_code,
    phone,
    address,
    social_links,
    display_picture,
  } = details;
  const { github, linkedIn, stack_overflow, facebook, twitter } = social_links;

  const phoneNumber = formattingPhone(phone_country_code, phone);

  return (
    <div className="d-flex col-12 position-relative">
      {/* Background Image and Tint(Gradient) */}
      <Generic.GradientBackground
        bgImageUrl={
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80"
        }
      />
      {/* Foreground Content Container */}
      <div className="container mt-5 " style={{ zIndex: 400 }}>
        {/* Profile Content Container */}
        <div className=" personal-profile  col-12 d-flex flex-column flex-md-row py-5 align-items-center position-relative ">
          {/* Profile Left Section */}
          <div className="col-12 col-md-5 col-lg-4 col-xl-3   d-flex px-3">
            <Image
              className="container-fluid col-12 p-0 rounded-2 px-5  px-md-0 "
              style={{
                objectFit: "contain",
                width: "100%",
                height: "100%",
              }}
              src={display_picture}
              alt="avatar"
            />
          </div>
          {/* Profile Right Section */}
          <div className="col-12 col-md-7 col-lg-7 offset-xl-1 px-3  py-3 ">
            {/* Profile Full Name */}
            <FullName
              className="personal-profile__name text-center text-md-start"
              firstName={first_name}
              middleName={middle_name}
              lastName={last_name}
            />
            {/* Profile Title */}
            <p className="personal-profile__work">{job_title}</p>
            {/* Profile Info */}
            <div>
              <ProfileInfo
                containerClassName="mb-3 row"
                title="Age"
                value={age}
              />

              <ProfileInfo
                containerClassName="mb-3 row"
                title="Email"
                isValueLink={true}
                href={`mailto:${email}`}
                value={email}
              />

              <ProfileInfo
                containerClassName="mb-3 row"
                title="Phone"
                isValueLink={true}
                href={`tel:${phoneNumber}`}
                value={phoneNumber}
              />
              <ProfileInfo
                containerClassName="mb-3 row"
                title="Address"
                value={address}
              />
            </div>
            {/* Social Links */}
            <div className=" d-flex align-items-center mt-4">
              {github && (
                <SocialLink
                  to={github}
                  bootstrapIcon="fa fa-github"
                  bootstrapIconSize="fa-lg"
                  linkClassName="pe-4"
                />
              )}
              {linkedIn && (
                <SocialLink
                  to={linkedIn}
                  bootstrapIcon="fa fa-linkedin-square"
                  bootstrapIconSize="fa-lg"
                  linkClassName="pe-4"
                />
              )}

              {facebook && (
                <SocialLink
                  to={facebook}
                  bootstrapIcon="fa fa-facebook-square"
                  bootstrapIconSize="fa-lg"
                  linkClassName="pe-4"
                />
              )}

              {twitter && (
                <SocialLink
                  to={twitter}
                  bootstrapIcon="fa fa-twitter"
                  bootstrapIconSize="fa-lg"
                  linkClassName="pe-4"
                />
              )}

              {stack_overflow && (
                <SocialLink
                  to={stack_overflow}
                  bootstrapIcon="fa fa-stack-overflow"
                  bootstrapIconSize="fa-lg"
                  linkClassName="pe-4"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="position-absolute top-0 end-0 m-3">
        <Tooltip title="Share portfolio" placement="left">
          <Button
            className="bg-white text-black bg-opacity-10 border-0 p-1 px-2 "
            onClick={() => {
              navigator.clipboard.writeText(
                "https://gavindmello97.github.io/my-portfolio/"
              );
              message.success("Copied portfolio to clipboard");
            }}
          >
            <img
              src={gifs.notification_bell}
              alt={"share"}
              style={{ width: 50, height: 50 }}
            />
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};

var FullName = ({
  firstName = "",
  middleName = "",
  lastName = "",
  className = "",
}: FullNameType) => {
  var fullName =
    firstName +
    " " +
    (middleName ? middleName.substring(0, 1) + ". " : "") +
    lastName;

  return <p className={classNames(className)}>{fullName}</p>;
};

var SocialLink = ({
  bootstrapIcon = "fa fa-github",
  bootstrapIconSize = "fa-lg",
  to = "",
  linkClassName = "",
  iconClassName = "",
}: SocialLinkType) => {
  return (
    <div
      onClick={() => openInNewTab(to)}
      className={classNames("link", linkClassName)}
    >
      <i
        className={classNames(bootstrapIcon, bootstrapIconSize, iconClassName)}
      ></i>
    </div>
  );
};

var ProfileInfo = ({
  containerClassName = "",
  title = "",
  value = "",
  isValueLink = false,
  href = "",
  containerStyle = {},
}: ProfileInfoType) => {
  return (
    <div className={classNames(containerClassName)} style={containerStyle}>
      <b className="col-12 col-md-3 noselect">{title}:</b>
      {isValueLink ? (
        <a className=" col-12 col-md-9  text-decoration-none " href={href}>
          {value}
        </a>
      ) : (
        <span className="col-12 col-md-9  text-decoration-none  ">{value}</span>
      )}
    </div>
  );
};

export default ProfileHead;
