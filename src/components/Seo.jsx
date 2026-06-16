import React from 'react';
import { Helmet } from 'react-helmet-async';

const Seo = ({ title, description, keywords, path }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`https://geoconservices.com${path}`} />
      <link rel="canonical" href={`https://geoconservices.com${path}`} />
    </Helmet>
  );
};

export default Seo; 