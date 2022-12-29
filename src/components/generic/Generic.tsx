import { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { cssHover } from "./hoverProps";
import { icons } from "../../config/configuration";
import classNames from "classnames";
import { Progress, Tag } from "antd";
import { CSSModule } from "reactstrap/types/lib/utils";
import "./Generic.scss";
const Generic = {
  AnimatedText: ({
    text = "",
    viewPortVisible,
    overrideStyle,
  }: {
    text: string;
    viewPortVisible?: boolean;
    overrideStyle?: string;
  }) => {
    return (
      <p
        className={classNames(
          viewPortVisible ? "animated-text col-12" : "d-none",
          overrideStyle
        )}
      >
        {text}
      </p>
    );
  },
  CustomProgressBar: ({
    percent,
    play,
    label,
    isDark,
  }: {
    percent: number;
    play: boolean;
    label: string;
    isDark: boolean;
  }) => {
    const [p, setP] = useState(0);
    useEffect(() => {
      if (play == true) {
        setTimeout(() => {
          if (p < percent) setP(p + 1);
        }, 5);
      }
    }, [p, play]);
    return (
      <div className="col-12 mb-3">
        <div className="col-12 d-flex justify-content-between">
          <span>{label}</span>
          {/* <span>{percent / 25}</span> */}
        </div>
        <Progress
          percent={p}
          showInfo={false}
          status="normal"
          strokeWidth={3}
          strokeColor={"0069fd"}
          trailColor={isDark ? "#bbb" : ""}
        />
        <div className=" col-12 d-flex justify-content-between custom-progress-bar-scale-label-container">
          <span className="font-10">Beginner</span>
          <span className="font-10">Intermediate</span>
          <span className="font-10">Proficient</span>
          <span className="font-10">Expert</span>
        </div>
      </div>
    );
  },
  GradientBackground: ({ bgImageUrl }: { bgImageUrl: string }) => {
    return (
      <div
        className="position-absolute w-100 h-100 gradient-background"
        style={{
          backgroundImage: `url(${bgImageUrl})`,
        }}
      >
        <div className=" w-100 h-100 header-cover"></div>
      </div>
    );
  },
  TagList: ({
    listTitle,
    listTitleStyle,
    listTitleClassName,
    taglist = [],
    tagStyle,
    tagClassName,
    tagContainerClassName,
  }: {
    listTitle?: string;
    listTitleStyle?: string;
    listTitleClassName?: string;
    taglist: string[];
    tagStyle?: string;
    tagClassName?: string;
    tagContainerClassName?: string;
  }) => {
    return (
      <div className="col-12">
        {listTitle && <p className={listTitleClassName}>{listTitle}</p>}

        <div
          className={classNames(
            "col-12 d-flex flex-wrap",
            tagContainerClassName
          )}
        >
          {taglist.map((tag: String) => (
            <Tag className={tagClassName}>{tag}</Tag>
          ))}
        </div>
      </div>
    );
  },
};

export default Generic;
