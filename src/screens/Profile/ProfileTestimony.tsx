import { Button, Carousel, Divider, Menu, MenuProps, Space, Spin } from "antd";
import Generic from "../../components/generic/Generic";
import { UserTestimony } from "../../config/types";

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  backgroundColor: "red",
};

const ProfileTestimony = ({
  bgImageUrl = "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80",
  testimonies,
}: {
  bgImageUrl?: string;
  testimonies: UserTestimony[];
}) => {
  return (
    <div className="d-flex col-12 position-relative ">
      {/* <Generic.GradientBackground bgImageUrl={bgImageUrl} /> */}
      <div className="d-flex flex-column" style={{ zIndex: 400 }}>
        <span>"Hello"</span>
        <Carousel autoplay className="bg-danger">
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ProfileTestimony;
