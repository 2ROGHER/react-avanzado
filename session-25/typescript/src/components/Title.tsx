import React from "react";
import PropTypes from "prop-types";

const Title = ({ title }: { title: string }): JSX.Element => {
  return <h1>{title}</h1>;
};

export default Title;
