// @flow
import React from 'react';
import yaml from 'js-yaml';
import Helmet from 'react-helmet';
import { config } from 'config';

type Props = {
  route: Object,
}

const YamlWrapper = ({ route }: Props) => {
  const post = route.page.data;

  return (
    <div>
      <Helmet
        title={`${config.siteTitle} | ${post.title}`}
      />
      <h1>{post.title}</h1>
      <p>Raw view of yaml file</p>
      <pre dangerouslySetInnerHTML={{ __html: yaml.safeDump(post) }} />
    </div>
  );
};

export default YamlWrapper;
