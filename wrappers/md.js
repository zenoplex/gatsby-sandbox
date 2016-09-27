// @flow
import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import '../css/markdown-styles.css';

type Props = {
  route: Object,
}

const MdWrapper = ({ route }: Props) => {
  const post = route.page.data;

  return (
    <div className="markdown">
      <Helmet
        title={`${config.siteTitle} | ${post.title}`}
      />
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </div>
  );
};

export default MdWrapper;
