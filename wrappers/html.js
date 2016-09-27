// @flow
import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';

type Props = {
  route: Object,
};

const HtmlWrapper = ({ route }: Props) => {
  const post = route.page.data;

  return (
    <div>
      <Helmet
        title={`${config.siteTitle} | ${post.title}`}
      />
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </div>
  );
};

export default HtmlWrapper;
