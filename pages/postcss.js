import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import '../css/example.css';

const PostCss = () =>
  <div>
    <Helmet title={`${config.siteTitle} | Hi PostCSSy friends`} />
    <h1 className="the-postcss-class">
      Hi PostCSSy friends
    </h1>
    <div className="postcss-nav-example">
      <h2>Nav example</h2>
      <ul>
        <li>
          <a>Store</a>
        </li>
        <li>
          <a>Help</a>
        </li>
        <li>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  </div>;

export default PostCss;
