import React from "react";
import Layout from "../../components/Layout";
import { Link } from "gatsby";

const mapper = () => {
  return (
    <Layout>
      <Link className="navbutton" to="/projects" data-aos="slide-right">
        Back
      </Link>
    </Layout>
  );
};

export default mapper;
