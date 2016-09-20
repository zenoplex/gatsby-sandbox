import React from 'react';
import { Menu } from 'stardust';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { rhythm } from '../utils/typography';
import '../css/markdown-styles.css';
import '../css/semantic-ui.css';
import '../css/test.css';


type Props = {
  children?: any
};

const Template = ({ children }: Props) =>
  <div>
    <Menu stackable inverted>
      <Menu.Item>
        <img src="//semantic-ui.com/images/logo.png" alt="semantic logo" />
      </Menu.Item>

      <Menu.Item
        name="features"
        active
        onClick=""
      >
        Features
      </Menu.Item>

      <Menu.Item
        name="testimonials"
        onClick=""
      >
        Testimonials
      </Menu.Item>
    </Menu>
    {children}
  </div>;

export default Template;
