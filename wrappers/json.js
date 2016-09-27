// @flow
import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';

type Props = {
  route: Object,
}

const JsonWrapper = ({ route }: Props) => {
  const post = route.page.data;

  return (
    <div>
      <Helmet
        title={`${config.siteTitle} | ${post.title}`}
      />
      <h1>{post.title}</h1>
      <p>Raw view of json file</p>
      <pre dangerouslySetInnerHTML={{ __html: JSON.stringify(post, null, 4) }} />
    </div>
  );
};

export default JsonWrapper;
