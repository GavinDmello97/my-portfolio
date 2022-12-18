import { useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { cssHover } from "./hoverProps";
import { icons } from "../../config/configuration";
import classNames from "classnames";

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
};

export default Generic;
