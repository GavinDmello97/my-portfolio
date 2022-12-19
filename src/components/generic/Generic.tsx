import { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { cssHover } from "./hoverProps";
import { icons } from "../../config/configuration";
import classNames from "classnames";
import { Progress } from "antd";

const Generic = {
  AnimatedText: ({
    text = "",
    viewPortVisible,
  }: {
    text: string;
    viewPortVisible?: boolean;
  }) => {
    return (
      <p
        className={classNames(
          viewPortVisible ? "animated-text col-12" : "d-none"
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
          <span>{percent / 20}</span>
        </div>
        <Progress
          percent={p}
          showInfo={false}
          strokeWidth={3}
          trailColor={isDark ? "#bbb" : ""}
        />
      </div>
    );
  },
};

export default Generic;
