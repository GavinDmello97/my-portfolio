import { useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { cssHover } from "./hoverProps";
import { icons } from "../../config/configuration";

const Generic = {
  AnimatedText: ({ text = "" }: { text: string }) => {
    return <p className="animated-text col-12">{text}</p>;
  },
};

export default Generic;
