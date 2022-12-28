import { Button, Carousel, Divider, Menu, MenuProps, Space, Spin } from "antd";
import { MutableRefObject, useRef, useState } from "react";
import Generic from "../../components/generic/Generic";
import useIntersection from "../../components/generic/useIntersection";
import { UserTestimony } from "../../config/types";

const contentStyle: React.CSSProperties = {
  background: "transparent",
  textAlign: "justify",
};

const ProfileTestimony = ({
  bgImageUrl = "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8b2ZmaWNlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&w=1000&q=80",
  testimonies,
}: {
  bgImageUrl?: string;
  testimonies: UserTestimony[];
}) => {
  const [isInViewport, setViewStatus] = useState(false);
  const ref = useRef<null | HTMLDivElement>(null);

  const inViewport = useIntersection(
    ref as MutableRefObject<HTMLDivElement>,
    "-100px"
  ); // Trigger as soon as the element becomes visible

  if (inViewport && !isInViewport) {
    setViewStatus(true);
    // controls.start({ opacity: 1, transform: "translateY(0px)" });
  }

  return (
    <div className="d-flex col-12 position-relative">
      <Generic.GradientBackground bgImageUrl={bgImageUrl} />
      <div className="col-12 px-3 d-flex">
        <div
          className="container personal-profile pt-5"
          style={{ zIndex: 400 }}
          ref={ref}
        >
          <Generic.AnimatedText
            text={"Testimonies_"}
            viewPortVisible={isInViewport}
            overrideStyle="text-white"
          />
          <Carousel
            autoplay={true}
            autoplaySpeed={4000}
            className=" pb-5"
            nextArrow={<i className="fa fa-angle-right fa-lg" />}
          >
            {testimonies.map((testimony) => {
              return (
                <div className="">
                  <p style={contentStyle}>{testimony.provider_message}</p>
                  <div className="d-flex flex-row">
                    <span
                      className="me-2"
                      style={{ color: "rgba(255, 255, 255,0.7)" }}
                    >
                      {`—  `}{" "}
                    </span>
                    <div className="flex-1">
                      {" "}
                      <p
                        className={"m-0"}
                        style={{ color: "rgba(255, 255, 255,1)" }}
                      >
                        {` ${testimony.provider_first_name} ${testimony.provider_last_name}`}{" "}
                        <span style={{ color: "rgba(255, 255, 255,0.7)" }}>
                          {`(${testimony.provider_position} @ ${testimony.provider_company_name})`}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ProfileTestimony;
