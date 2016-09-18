import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { rhythm } from '../utils/typography';
import '../css/markdown-styles';
import '../css/semantic-ui.css';
import { Menu } from 'stardust';

type Props = {
  children?: any
};

const Template = ({ children }: Props) =>
  <div>
    <Menu stackable inverted>
      <Menu.Item>
        <img src='http://semantic-ui.com/images/logo.png' />
      </Menu.Item>

      <Menu.Item
        name='features'
        active
        onClick=""
      >
        Features
      </Menu.Item>

      <Menu.Item
        name='testimonials'
        onClick=""
      >
        Testimonials
      </Menu.Item>
    </Menu>
    {children}
  </div>;

export default Template;
