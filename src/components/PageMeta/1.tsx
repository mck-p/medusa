import React from "react";
import Helmet from "react-helmet";

const PageMeta = ({ title, description }) => (
  <Helmet>
    {title ? <title>{title}</title> : ""}
    {description ? <meta name="description" content={description}></meta> : ""}
  </Helmet>
);

export default PageMeta;
