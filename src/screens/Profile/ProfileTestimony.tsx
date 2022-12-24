import { Button, Carousel, Divider, Menu, MenuProps, Space, Spin } from "antd";
import Generic from "../../components/generic/Generic";
import { UserTestimony } from "../../config/types";

const contentStyle: React.CSSProperties = {
  background: "transparent",
};

const ProfileTestimony = ({
  bgImageUrl = "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80",
  testimonies,
}: {
  bgImageUrl?: string;
  testimonies: UserTestimony[];
}) => {
  return (
    <div className="d-flex col-12 position-relative">
      <Generic.GradientBackground bgImageUrl={bgImageUrl} />
      <div
        className="container personal-profile pt-5 pb-3"
        style={{ zIndex: 400 }}
      >
        <Carousel autoplay className=" pb-4">
          {testimonies.map((testimony) => {
            return (
              <div className="p-3">
                <p style={contentStyle}>{testimony.provider_message}</p>
                <p style={{ color: "rgba(255, 255, 255,0.7)" }}>
                  {`~ ${testimony.provider_first_name} ${testimony.provider_last_name}`}
                </p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default ProfileTestimony;
