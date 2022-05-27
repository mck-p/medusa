import React from "react";
import Helmet from "react-helmet";

interface Props {
  title?: string;
  description?: string;
}

const PageMeta = ({ title, description }: Props) => (
  <Helmet>
    {title ? <title>{title}</title> : ""}
    {description ? <meta name="description" content={description}></meta> : ""}
  </Helmet>
);

export default PageMeta;
